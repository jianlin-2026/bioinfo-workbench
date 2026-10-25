# model/ —— 平台后训练产物的存放处

这个目录**不是**页面资源，也不会被 index.html 引用。它只是把「后训练模型」放到一个
`raw.githubusercontent.com` 能取到的地方（该域允许跨源 fetch，产品里的 ENHANCED_SOURCES 用它）。

## lora-adapter/

`tools/nlu/finetune/train_lora.py` 产出的 LoRA 权重（约 34 MB），基座是
`Qwen/Qwen2-0.5B-Instruct`，r=16 / alpha=32，只挂在注意力和 MLP 的投影层上。

把新适配器换进来（文件名保持 `adapter_model.safetensors` / `adapter_config.json` 不变）
并 push，`.github/workflows/convert-mlc.yml` 会自动触发：在 ubuntu runner 上合并权重、
转成 MLC `q4f16_1`，结果提交到 `model/mlc/`。

## mlc/（由 CI 生成，勿手工编辑）

WebLLM 只认 MLC 编译产物。转换**只换权重**：`mlc-chat-config.json` 与 tokenizer 沿用官方
`mlc-ai/Qwen2-0.5B-Instruct-q4f16_1-MLC` 目录（LoRA 不改架构，可直接复用官方预编译的
wasm model_lib）；但 `ndarray-cache.json` / `tensor-cache.json` 必须是**我们自己权重**的记录，
用官方那份会读错分片。

## 为什么要在 CI 里做转换

本机是 Windows：PyPI 上的 `mlc-llm-nightly-cpu` 是个 1.4 KB 的空壳包（import 就失败），
WSL 被安全策略禁用，也没有 Docker。所以只能借 Linux runner。

## 实测数字（盲测 500 条，holdout2 + holdout3）

| 版本 | 标签准确率 | 有害错误率 | 在「分类器沉默」桶救回 |
|---|---|---|---|
| 基座 Qwen2-0.5B | 9.2% | 87.4% | 5 |
| 后训练（自由选择） | 79.2% | 13.8% | **62** |
| 后训练 + 受限重排（无负样本） | 80.0% | 10.2% | 35 |

受限重排第一版在沉默桶上反而更差（精确率 57% → 33%）：训练集里真值 99.6% 都在候选内，
模型从没学过「候选全都不对」。补负样本族可解，见 `docs/nlu-finetune.md`。
