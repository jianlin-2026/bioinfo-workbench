/**
 * 天工·生信 Service Worker（手写，无 Workbox 依赖）
 * - install：预缓存核心静态资源（单文件 index.html + manifest + 图标）
 * - activate：清理旧版本缓存
 * - fetch：同源静态资源 Cache-first；跨源外部 API（RCSB / UniProt / PubChem / QuickGO 等）Network-first
 *
 * 注意：本站构建产物为自包含单文件 dist/index.html（应用代码与 Chart.js / 3Dmol.js
 * 已全部内联），因此核心资源仅需缓存文档本身；sw.js 以相对路径注册，
 * 兼容 GitHub Pages 项目子路径（/repo/）部署。
 */
const VERSION = "tiangong-bio-v2";
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
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== PRECACHE && k !== RUNTIME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return; // 只处理 GET
  let url;
  try { url = new URL(req.url); } catch (e) { return; }

  if (url.origin === self.location.origin) {
    // 同源静态资源：Cache-first，未命中时回源并写入运行时缓存
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(res => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(RUNTIME).then(cache => cache.put(req, copy));
          }
          return res;
        }).catch(() => {
          // 离线且未缓存：导航请求回退到预缓存的 index.html（单文件应用可完整离线运行）
          if (req.mode === "navigate") return caches.match("./index.html");
          return Response.error();
        });
      })
    );
  } else {
    // 跨源外部 API：Network-first，失败时回退运行时缓存（不可用时让请求自然失败）
    event.respondWith(
      fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(RUNTIME).then(cache => cache.put(req, copy));
        }
        return res;
      }).catch(() => caches.match(req))
    );
  }
});
