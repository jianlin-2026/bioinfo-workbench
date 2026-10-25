#!/usr/bin/env python
"""给转换后的 MLC 目录补齐「与官方 wasm model_lib 兼容」的配置与 tokenizer。

核心原则：**只换权重，其余全部沿用官方目录**。
LoRA 不改变架构，所以官方预编译的 q4f16_1 wasm 可以直接跑我们的权重；
但 `ndarray-cache.json` / `tensor-cache.json` 记录的是**各分片的形状与偏移**，
必须来自我们自己转换出来的权重目录 —— 用官方那份会读错权重（这是最容易静默出错的一步）。
"""
import json
import os
import shutil
import sys
from pathlib import Path

from huggingface_hub import snapshot_download

DIST = Path(sys.argv[1] if len(sys.argv) > 1 else "dist/tuned")
OFFICIAL = "mlc-ai/Qwen2-0.5B-Instruct-q4f16_1-MLC"

# 这两份是「我们自己的权重索引」，绝不能被官方覆盖
KEEP_OURS = {"ndarray-cache.json", "tensor-cache.json"}
COPY_FROM_OFFICIAL = [
    "mlc-chat-config.json",
    "tokenizer.json",
    "tokenizer_config.json",
    "vocab.json",
    "merges.txt",
]

p = snapshot_download(OFFICIAL, allow_patterns=["*.json", "*.txt"])
for f in COPY_FROM_OFFICIAL:
    if f in KEEP_OURS:
        continue
    src = os.path.join(p, f)
    if os.path.exists(src):
        shutil.copy(src, DIST / f)
        print("沿用官方:", f)
    else:
        print("⚠ 官方目录缺少", f)

for f in KEEP_OURS:
    if not (DIST / f).exists():
        print("⚠ **缺少自版权重索引**（", f, "）—— 转换步骤可能没产出，请检查 convert_weight")
    else:
        print("保留自产:", f)

cfg_path = DIST / "mlc-chat-config.json"
cfg = json.loads(cfg_path.read_text(encoding="utf-8"))
# 意图识别要确定性输出；官方默认带 0.7 温度和重复惩罚，会让同一句话结果抖动
cfg["temperature"] = 0.0
cfg["top_p"] = 1.0
cfg["repetition_penalty"] = 1.0
cfg_path.write_text(json.dumps(cfg, ensure_ascii=False, indent=2), encoding="utf-8")
print("model_type=%s quant=%s ctx=%s" % (cfg.get("model_type"), cfg.get("quantization"), cfg.get("context_window_size")))
