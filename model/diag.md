# 转换诊断（CI 自动生成，可删）

run id: 40173802721

```
### 安装与导入
### pip install mlc-llm-nightly-cpu mlc-ai-nightly-cpu
Looking in links: https://mlc.ai/wheels
Collecting mlc-llm-nightly-cu124==0.20.dev162
  Downloading mlc_llm_nightly_cu124-0.20.dev162-py3-none-manylinux_2_28_x86_64.whl (25.3 MB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 25.3/25.3 MB 58.7 MB/s  0:00:00
ERROR: Could not find a version that satisfies the requirement mlc-ai-nightly-cu124==0.20.dev162 (from versions: 0.1, 0.20.dev1070)
ERROR: No matching distribution found for mlc-ai-nightly-cu124==0.20.dev162
PIP_EXIT=1
--- 备选：若上条失败，回退 cpu 版 ---
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'mlc_llm'

### pip list (mlc / tvm)
(none installed)

### import mlc_llm
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'mlc_llm'
IMPORT_FAILED

### 索引里到底有哪些 mlc_llm 轮子（取前 30 行）
mlc_llm_nightly_cpu-0.20.0.dev0-py3-none-macosx_15_0_arm64.whl
mlc_llm_nightly_cpu-0.20.dev162-py3-none-macosx_13_0_arm64.whl
mlc_llm_nightly_cpu-0.20.dev95-py3-none-macosx_13_0_x86_64.whl
mlc_llm_nightly_cpu-0.26.dev20-py3-none-win_amd64.whl
mlc_llm_nightly_cpu-0.26.dev6-py3-none-macosx_26_0_arm64.whl
mlc_llm_nightly_cpu-0.26.dev6-py3-none-manylinux_2_28_x86_64.whl
mlc_llm_nightly_cu124-0.20.dev162-py3-none-manylinux_2_28_x86_64.whl
mlc_llm_nightly_cu128-0.26.dev6-py3-none-manylinux_2_28_x86_64.whl
mlc_llm_nightly_cu130-0.26.dev6-py3-none-manylinux_2_28_x86_64.whl
mlc_llm_nightly_rocm61-0.26.dev6-py3-none-manylinux_2_28_x86_64.whl
mlc_llm_nightly_rocm62-0.26.dev6-py3-none-manylinux_2_28_x86_64.whl

### 权重转换
(无转换日志：没走到转换步骤)
```
