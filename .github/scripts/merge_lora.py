#!/usr/bin/env python
"""把 LoRA 适配器合并进基座模型（CI 用，不依赖本机环境）。

为什么单独成文件而不是在 workflow 里写 heredoc：
YAML 的 `run: |` 会保留相对缩进，heredoc 正文一旦比块基线多缩进，Python 就会报
「unexpected indent」。搬进 .py 文件既没有这个问题，也方便单独排查。
"""
import sys
from pathlib import Path

from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftModel

BASE = sys.argv[1] if len(sys.argv) > 1 else "Qwen/Qwen2-0.5B-Instruct"
ADAPTER = sys.argv[2] if len(sys.argv) > 2 else "model/lora-adapter"
OUT = sys.argv[3] if len(sys.argv) > 3 else "merged"

tok = AutoTokenizer.from_pretrained(BASE)
model = AutoModelForCausalLM.from_pretrained(BASE, dtype="float16")
model = PeftModel.from_pretrained(model, ADAPTER)
model = model.merge_and_unload()
Path(OUT).mkdir(parents=True, exist_ok=True)
model.save_pretrained(OUT, safe_serialization=True)
tok.save_pretrained(OUT)
print("合并完成 →", OUT)
