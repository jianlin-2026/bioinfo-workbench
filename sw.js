/**
 * 天工·生信 Service Worker（手写，无 Workbox 依赖）
 * - install：预缓存核心静态资源（单文件 index.html + manifest + 图标）
 * - activate：清理旧版本缓存 + clients.claim（立即接管）
 * - fetch：分三类策略
 *     ① 导航请求（index.html）→ Network-first【必须】
 *     ② 同源其它静态资源      → Cache-first
 *     ③ 跨源外部 API          → Network-first + 缓存回退
 *
 * 注意：本站构建产物为自包含单文件 dist/index.html（应用代码与 Chart.js / 3Dmol.js
 * 已全部内联），因此核心资源仅需缓存文档本身；sw.js 以相对路径注册，
 * 兼容 GitHub Pages 项目子路径（/repo/）部署。
 *
 * ============================ 缓存策略的历史教训 ============================
 * 【曾经的缺陷】本文件早期对**所有**同源 GET 请求（含 index.html）统一 Cache-first：
 *     caches.match(req).then(cached => { if (cached) return cached; ... })
 * 单文件应用里 index.html 就是全部应用代码，用户访问一次后它被写入运行时缓存，
 * 此后无论发布多少新版本，SW 都会直接返回旧缓存 —— 表现为「线上明明是新版本，
 * 浏览器却看不到，换一个没用过的浏览器就能看到」。这正是 SW 缓存的指纹。
 *
 * 【为什么不能只靠 VERSION 常量】VERSION 变化确实会触发 activate 清理旧缓存，
 * 但同一个 VERSION 内的反复发布不会。发版频率（每天多次）远高于改 VERSION 的频率，
 * 因此把「用户能否拿到新版」押在 VERSION 上是不可靠的设计。
 *
 * 【现行策略】文档（导航请求）改为 Network-first：在线用户永远第一时间拿到
 * 服务器上的最新版本，同时把新响应写回缓存；仅当回源失败（离线/断网/服务器不可用）
 * 时才回退到缓存，从而同时满足「新版本可见」与「离线可用」两个 PWA 核心诉求。
 * ==========================================================================
 */

/** 版本号常量：sw.js 每次改动都必须递增，否则老用户的旧 SW 不会被替换，修复等于没做。 */
const VERSION = "tiangong-bio-v15";
const PRECACHE = `${VERSION}-precache`;
const RUNTIME = `${VERSION}-runtime`;

// 清单里的每一项都必须真实存在于产物中。此前 manifest.json / icon-*.png
// 被 index.html 引用但文件缺失，导致 install 时 cache.add 静默失败（下方 .catch 吞掉），
// 表面无报错、实际离线缓存不完整 —— 因此新增资源时必须同步此处。
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./favicon.ico"
];

/** 离线回退时依次尝试的文档键：目录索引在前，与 CORE_ASSETS 的登记顺序一致。 */
const DOC_FALLBACK_KEYS = ["./", "./index.html"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(PRECACHE).then(cache =>
      // 逐个缓存，单个资源失败不阻断安装（例如部署目录暂缺图标）
      Promise.all(CORE_ASSETS.map(url =>
        cache.add(new Request(url, { cache: "reload" })).catch(() => { /* 忽略单项失败 */ })
      ))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  // 清理不属于当前 VERSION 的缓存。VERSION 递增后，上一版 precache/runtime
  // 里那份「陈旧 index.html」会在此被删除 —— 这是让老用户摆脱旧缓存的关键一步，
  // 与 fetch 的 Network-first 共同构成两道防线。
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== PRECACHE && k !== RUNTIME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/**
 * 判断请求是否为「文档导航请求」。
 * 只有 mode === "navigate" 才走 Network-first；这样 fetch/xhr/img/script 等
 * 子资源仍可保持 Cache-first，不会因为每次都校验网络而拖慢页面。
 * @param {Request} req
 * @returns {boolean}
 */
const isNavigation = (req) => req.mode === "navigate";

/**
 * 离线回退：按 DOC_FALLBACK_KEYS 顺序在运行时缓存与预缓存中查找文档。
 * 运行时缓存（Network-first 写入的最新版）优先于预缓存（安装时的快照）。
 * @returns {Promise<Response|undefined>}
 */
async function matchDocumentFromCache() {
  for (const cacheName of [RUNTIME, PRECACHE]) {
    const cache = await caches.open(cacheName);
    for (const key of DOC_FALLBACK_KEYS) {
      const hit = await cache.match(key, { ignoreSearch: true });
      if (hit) return hit;
    }
  }
  return undefined;
}

/**
 * 把响应写入缓存。只缓存 ok 且非 opaque 的同源响应，避免把 404/5xx 固化下来。
 * @param {string} cacheName
 * @param {RequestInfo} key
 * @param {Response} res 已经 clone 过、可安全消费的响应
 * @returns {Promise<void>}
 */
async function putInCache(cacheName, key, res) {
  if (!res || !res.ok || res.type === "opaque") return;
  const cache = await caches.open(cacheName);
  await cache.put(key, res);
}

/**
 * ① 导航请求：Network-first。
 * 先回源拿最新的 index.html（在线用户立刻看到新版本），拿到后写回缓存；
 * 只有回源失败（离线）才回退缓存，保证单文件应用仍可完整离线运行。
 * @param {Request} req
 * @param {FetchEvent} event 用于把缓存写入挂到 waitUntil，避免 SW 提前终止
 * @returns {Promise<Response>}
 */
async function handleNavigation(req, event) {
  try {
    const res = await fetch(req);
    if (res && res.ok) {
      // 用两个独立的 clone 分别喂给运行时缓存与预缓存：
      // 运行时缓存保证本次会话后续导航命中最新版，预缓存保证离线兜底不是安装时的旧快照。
      const forRuntime = res.clone();
      const forPrecache = res.clone();
      event.waitUntil(
        Promise.all([
          // 键用 req.url 字符串而非 Request 对象：Cache 的匹配本就以 URL 为准，
          // 用字符串可完全绕开「mode=navigate 的 Request 能否作为缓存键」的实现差异。
          putInCache(RUNTIME, req.url, forRuntime),
          putInCache(PRECACHE, "./index.html", forPrecache),
        ]).catch(() => { /* 缓存写入失败不影响本次响应交付 */ })
      );
    }
    return res;
  } catch (err) {
    // 离线（或服务器不可用）：回退到缓存中的文档
    const cached = await matchDocumentFromCache();
    if (cached) return cached;
    return new Response(
      "<!doctype html><meta charset=\"utf-8\"><title>离线</title>" +
      "<p style=\"font-family:system-ui;padding:2rem\">当前处于离线状态，且本地尚未缓存可用版本。" +
      "请联网后重新打开本页面。</p>",
      { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }
}

/**
 * ② 同源静态资源（图标、manifest.json 等）：Cache-first。
 * 这些资源体积小、内容稳定，无需每次校验网络；同时在回源成功后写入运行时缓存。
 * @param {Request} req
 * @param {FetchEvent} event
 * @returns {Promise<Response>}
 */
async function handleSameOriginStatic(req, event) {
  const cached = await caches.match(req, { ignoreSearch: true });
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res && res.ok) {
      const copy = res.clone();
      event.waitUntil(putInCache(RUNTIME, req, copy).catch(() => { /* 忽略写入失败 */ }));
    }
    return res;
  } catch (err) {
    return Response.error();
  }
}

/**
 * ③ 跨源外部 API（RCSB / UniProt / PubChem / QuickGO 等）：Network-first + 缓存回退。
 * 数据有实时性，且失败时用上一次成功的响应兜底总比直接报错好。
 * @param {Request} req
 * @param {FetchEvent} event
 * @returns {Promise<Response>}
 */
async function handleCrossOrigin(req, event) {
  try {
    const res = await fetch(req);
    if (res && res.ok) {
      const copy = res.clone();
      event.waitUntil(putInCache(RUNTIME, req, copy).catch(() => { /* 忽略写入失败 */ }));
    }
    return res;
  } catch (err) {
    const cached = await caches.match(req, { ignoreSearch: true });
    return cached || Response.error();
  }
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return; // 只处理 GET

  let url;
  try { url = new URL(req.url); } catch (e) { return; }

  // 跨源：外部 API
  if (url.origin !== self.location.origin) {
    event.respondWith(handleCrossOrigin(req, event));
    return;
  }

  // 同源 + 文档导航：Network-first —— 修复「看不到新版本」的关键分支。
  // 注意 mode 为 navigate 的请求必然同源（跨源 iframe 导航不会进入本 SW），
  // 但仍用 url.origin 做一次显式判断，保证分类依据单一明确。
  if (isNavigation(req) && url.origin === self.location.origin) {
    event.respondWith(handleNavigation(req, event));
    return;
  }

  // 同源 + 其它静态资源：Cache-first
  event.respondWith(handleSameOriginStatic(req, event));
});