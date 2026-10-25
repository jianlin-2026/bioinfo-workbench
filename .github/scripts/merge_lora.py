#!/usr/bin/env python
"""把 LoRA 适配器合并进基座模型（CI 用，不依赖本机环境）。

为什么单独成文件而不是在 workflow 里写 heredoc：
YAML 的 `run: |` 会保留相对缩进，heredoc 正文一旦比块基线多缩进，Python 就会报
「unexpected indent」。搬进 .py 文件既没有这个问题，也方便单独排查。
"""
import json
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

# --- 把 config.json 还原成 MLC 认得的 v4 布局 -------------------------------
# transformers 5.x 把顶层的 rope_theta 挪进了 rope_parameters，
# 而 mlc_llm 的 QWen2Config 仍按 v4 读顶层字段，缺了就直接
#   TypeError: QWen2Config.__init__() missing 1 required positional argument: 'rope_theta'
# 所以这里补回顶层字段（并保留 rope_parameters 不动，两边都能读）。
cfg_path = Path(OUT) / "config.json"
cfg = json.loads(cfg_path.read_text(encoding="utf-8"))
rp = cfg.get("rope_parameters") or {}
if "rope_theta" not in cfg:
    cfg["rope_theta"] = rp.get("rope_theta", 1000000.0)
if "torch_dtype" not in cfg and "dtype" in cfg:
    cfg["torch_dtype"] = cfg["dtype"]
cfg_path.write_text(json.dumps(cfg, ensure_ascii=False, indent=2), encoding="utf-8")
print("config 已规范化：rope_theta=", cfg["rope_theta"], "torch_dtype=", cfg.get("torch_dtype"))
print("合并完成 →", OUT)
