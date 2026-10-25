# 转换诊断（CI 自动生成，可删）

run id: 40169471189

```
### pip install mlc-llm-nightly-cpu mlc-ai-nightly-cpu
Looking in links: https://mlc.ai/wheels
Collecting mlc-llm-nightly-cpu
  Downloading mlc_llm_nightly_cpu-0.26.dev6-py3-none-manylinux_2_28_x86_64.whl (24.9 MB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 24.9/24.9 MB 193.4 MB/s  0:00:00
Collecting mlc-ai-nightly-cpu
  Downloading mlc_ai_nightly_cpu-0.26.dev246-py3-none-manylinux_2_28_x86_64.whl (72.9 MB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 72.9/72.9 MB 291.6 MB/s  0:00:00
Collecting psutil
  Downloading psutil-7.2.2-cp36-abi3-manylinux2010_x86_64.manylinux_2_12_x86_64.manylinux_2_28_x86_64.whl.metadata (22 kB)
Collecting apache-tvm-ffi (from mlc-llm-nightly-cpu)
  Downloading apache_tvm_ffi-0.1.15.post0-cp310-cp310-manylinux_2_24_x86_64.manylinux_2_28_x86_64.whl.metadata (6.2 kB)
Collecting datasets (from mlc-llm-nightly-cpu)
  Downloading datasets-5.1.0-py3-none-any.whl.metadata (24 kB)
Collecting fastapi (from mlc-llm-nightly-cpu)
  Downloading fastapi-0.162.0-py3-none-any.whl.metadata (26 kB)
Collecting flashinfer-python (from mlc-llm-nightly-cpu)
  Downloading flashinfer_python-0.7.2.post1-py3-none-any.whl.metadata (13 kB)
Collecting ml_dtypes>=0.5.1 (from mlc-llm-nightly-cpu)
  Downloading ml_dtypes-0.6.0-cp310-cp310-manylinux_2_27_x86_64.manylinux_2_28_x86_64.whl.metadata (8.8 kB)
Collecting openai (from mlc-llm-nightly-cpu)
  Downloading openai-3.37.0-py3-none-any.whl.metadata (44 kB)
Collecting pandas (from mlc-llm-nightly-cpu)
  Downloading pandas-2.3.3-cp310-cp310-manylinux_2_24_x86_64.manylinux_2_28_x86_64.whl.metadata (91 kB)
Collecting prompt_toolkit (from mlc-llm-nightly-cpu)
  Downloading prompt_toolkit-3.0.53-py3-none-any.whl.metadata (6.4 kB)
Collecting requests (from mlc-llm-nightly-cpu)
  Downloading requests-2.34.2-py3-none-any.whl.metadata (4.8 kB)
Collecting safetensors (from mlc-llm-nightly-cpu)
  Downloading safetensors-0.9.0rc1-cp310-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl.metadata (4.2 kB)
Collecting sentencepiece (from mlc-llm-nightly-cpu)
  Downloading sentencepiece-0.2.2-cp310-cp310-manylinux_2_27_x86_64.manylinux_2_28_x86_64.whl.metadata (33 kB)
Collecting shortuuid (from mlc-llm-nightly-cpu)
  Downloading shortuuid-1.0.13-py3-none-any.whl.metadata (5.8 kB)
Collecting tiktoken (from mlc-llm-nightly-cpu)
  Downloading tiktoken-0.14.0-cp310-cp310-manylinux_2_28_x86_64.whl.metadata (6.7 kB)
Collecting torch (from mlc-llm-nightly-cpu)
  Downloading torch-2.14.1-cp310-cp310-manylinux_2_28_x86_64.whl.metadata (37 kB)
Collecting tqdm (from mlc-llm-nightly-cpu)
  Downloading tqdm-4.70.1-py3-none-any.whl.metadata (57 kB)
Collecting transformers (from mlc-llm-nightly-cpu)
  Downloading transformers-5.20.2-py3-none-any.whl.metadata (31 kB)
Collecting uvicorn (from mlc-llm-nightly-cpu)
  Downloading uvicorn-0.54.0-py3-none-any.whl.metadata (6.6 kB)
Collecting numpy (from mlc-ai-nightly-cpu)
  Downloading numpy-2.2.6-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl.metadata (62 kB)
Collecting typing_extensions (from mlc-ai-nightly-cpu)
  Downloading typing_extensions-4.16.0-py3-none-any.whl.metadata (3.3 kB)
Collecting filelock (from datasets->mlc-llm-nightly-cpu)
  Downloading filelock-4.1.0-py3-none-any.whl.metadata (2.0 kB)
Collecting pyarrow>=24.0.0 (from datasets->mlc-llm-nightly-cpu)
  Downloading pyarrow-25.0.1-cp310-cp310-manylinux_2_28_x86_64.whl.metadata (3.0 kB)
Collecting dill<0.4.2,>=0.3.0 (from datasets->mlc-llm-nightly-cpu)
  Downloading dill-0.4.1-py3-none-any.whl.metadata (10 kB)
Collecting xxhash (from datasets->mlc-llm-nightly-cpu)
  Downloading xxhash-4.0.2-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (17 kB)
Collecting multiprocess<0.70.20 (from datasets->mlc-llm-nightly-cpu)
  Downloading multiprocess-0.70.19-py310-none-any.whl.metadata (7.5 kB)
Collecting fsspec<=2026.7.0,>=2023.1.0 (from fsspec[http]<=2026.7.0,>=2023.1.0->datasets->mlc-llm-nightly-cpu)
  Downloading fsspec-2026.7.0-py3-none-any.whl.metadata (10 kB)
Collecting huggingface-hub<3.0,>=1.31.0 (from datasets->mlc-llm-nightly-cpu)
  Downloading huggingface_hub-2.3.0-py3-none-any.whl.metadata (16 kB)
Requirement already satisfied: packaging in /opt/hostedtoolcache/Python/3.10.22/x64/lib/python3.10/site-packages (from datasets->mlc-llm-nightly-cpu) (26.3)
Collecting pyyaml>=5.1 (from datasets->mlc-llm-nightly-cpu)
  Downloading pyyaml-6.0.3-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (2.4 kB)
Collecting aiohttp!=4.0.0a0,!=4.0.0a1 (from fsspec[http]<=2026.7.0,>=2023.1.0->datasets->mlc-llm-nightly-cpu)
  Downloading aiohttp-3.14.5-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (8.3 kB)
Collecting click<9.0.0,>=8.4.2 (from huggingface-hub<3.0,>=1.31.0->datasets->mlc-llm-nightly-cpu)
  Downloading click-8.5.0-py3-none-any.whl.metadata (2.6 kB)
Collecting hf-xet<2.0.0,>=1.6.0 (from huggingface-hub<3.0,>=1.31.0->datasets->mlc-llm-nightly-cpu)
  Downloading hf_xet-1.8.0.dev0-cp38-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl.metadata (4.9 kB)
Collecting httpx2<3,>=2.0.0 (from huggingface-hub<3.0,>=1.31.0->datasets->mlc-llm-nightly-cpu)
  Downloading httpx2-2.14.0-py3-none-any.whl.metadata (10 kB)
Collecting tomli>=1.1.0 (from huggingface-hub<3.0,>=1.31.0->datasets->mlc-llm-nightly-cpu)
  Downloading tomli-2.5.0-py3-none-any.whl.metadata (10 kB)
Collecting anyio>=4.10 (from httpx2<3,>=2.0.0->huggingface-hub<3.0,>=1.31.0->datasets->mlc-llm-nightly-cpu)
  Downloading anyio-4.15.1-py3-none-any.whl.metadata (4.7 kB)
Collecting httpcore2==2.14.0 (from httpx2<3,>=2.0.0->huggingface-hub<3.0,>=1.31.0->datasets->mlc-llm-nightly-cpu)
  Downloading httpcore2-2.14.0-py3-none-any.whl.metadata (27 kB)
Collecting idna>=3.18 (from httpx2<3,>=2.0.0->huggingface-hub<3.0,>=1.31.0->datasets->mlc-llm-nightly-cpu)
  Downloading idna-3.20-py3-none-any.whl.metadata (7.2 kB)
Collecting truststore>=0.10 (from httpx2<3,>=2.0.0->huggingface-hub<3.0,>=1.31.0->datasets->mlc-llm-nightly-cpu)
  Downloading truststore-0.10.5-py3-none-any.whl.metadata (4.5 kB)
Collecting h11>=0.16 (from httpcore2==2.14.0->httpx2<3,>=2.0.0->huggingface-hub<3.0,>=1.31.0->datasets->mlc-llm-nightly-cpu)
  Downloading h11-0.16.0-py3-none-any.whl.metadata (8.3 kB)
Collecting aiohappyeyeballs>=2.5.0 (from aiohttp!=4.0.0a0,!=4.0.0a1->fsspec[http]<=2026.7.0,>=2023.1.0->datasets->mlc-llm-nightly-cpu)
  Downloading aiohappyeyeballs-2.7.1-py3-none-any.whl.metadata (5.9 kB)
Collecting aiosignal>=1.4.0 (from aiohttp!=4.0.0a0,!=4.0.0a1->fsspec[http]<=2026.7.0,>=2023.1.0->datasets->mlc-llm-nightly-cpu)
  Downloading aiosignal-1.4.0-py3-none-any.whl.metadata (3.7 kB)
Collecting async-timeout<6.0,>=4.0 (from aiohttp!=4.0.0a0,!=4.0.0a1->fsspec[http]<=2026.7.0,>=2023.1.0->datasets->mlc-llm-nightly-cpu)
  Downloading async_timeout-5.0.1-py3-none-any.whl.metadata (5.1 kB)
Collecting attrs>=17.3.0 (from aiohttp!=4.0.0a0,!=4.0.0a1->fsspec[http]<=2026.7.0,>=2023.1.0->datasets->mlc-llm-nightly-cpu)
  Downloading attrs-26.1.0-py3-none-any.whl.metadata (8.8 kB)
Collecting frozenlist>=1.1.1 (from aiohttp!=4.0.0a0,!=4.0.0a1->fsspec[http]<=2026.7.0,>=2023.1.0->datasets->mlc-llm-nightly-cpu)
  Downloading frozenlist-1.8.0-cp310-cp310-manylinux1_x86_64.manylinux_2_28_x86_64.manylinux_2_5_x86_64.whl.metadata (20 kB)
Collecting multidict<8.0,>=4.5 (from aiohttp!=4.0.0a0,!=4.0.0a1->fsspec[http]<=2026.7.0,>=2023.1.0->datasets->mlc-llm-nightly-cpu)
  Downloading multidict-7.1.0-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (6.2 kB)
Collecting propcache>=0.2.0 (from aiohttp!=4.0.0a0,!=4.0.0a1->fsspec[http]<=2026.7.0,>=2023.1.0->datasets->mlc-llm-nightly-cpu)
  Downloading propcache-0.5.4-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (25 kB)
Collecting yarl<2.0,>=1.25.1 (from aiohttp!=4.0.0a0,!=4.0.0a1->fsspec[http]<=2026.7.0,>=2023.1.0->datasets->mlc-llm-nightly-cpu)
  Downloading yarl-1.25.1-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (111 kB)
Collecting exceptiongroup>=1.0.2 (from anyio>=4.10->httpx2<3,>=2.0.0->huggingface-hub<3.0,>=1.31.0->datasets->mlc-llm-nightly-cpu)
  Downloading exceptiongroup-1.3.1-py3-none-any.whl.metadata (6.7 kB)
Collecting starlette>=0.46.0 (from fastapi->mlc-llm-nightly-cpu)
  Downloading starlette-1.7.0-py3-none-any.whl.metadata (6.6 kB)
Collecting pydantic>=2.9.0 (from fastapi->mlc-llm-nightly-cpu)
  Downloading pydantic-2.14.1-py3-none-any.whl.metadata (133 kB)
Collecting typing-inspection>=0.4.2 (from fastapi->mlc-llm-nightly-cpu)
  Downloading typing_inspection-0.4.4-py3-none-any.whl.metadata (2.6 kB)
Collecting annotated-doc>=0.0.2 (from fastapi->mlc-llm-nightly-cpu)
  Downloading annotated_doc-0.0.5-py3-none-any.whl.metadata (6.5 kB)
Collecting opentelemetry-api>=1.44.0 (from fastapi->mlc-llm-nightly-cpu)
  Downloading opentelemetry_api-1.45.1-py3-none-any.whl.metadata (1.4 kB)
Collecting annotated-types>=0.6.0 (from pydantic>=2.9.0->fastapi->mlc-llm-nightly-cpu)
  Downloading annotated_types-0.8.0-py3-none-any.whl.metadata (15 kB)
Collecting pydantic-core==2.50.1 (from pydantic>=2.9.0->fastapi->mlc-llm-nightly-cpu)
  Downloading pydantic_core-2.50.1-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl.metadata (6.5 kB)
Collecting cuda-python>=12.0 (from flashinfer-python->mlc-llm-nightly-cpu)
  Downloading cuda_python-13.4.4-py3-none-any.whl.metadata (6.8 kB)
Collecting cuda-tile>=1.4.0 (from flashinfer-python->mlc-llm-nightly-cpu)
  Downloading cuda_tile-1.7.0-cp310-cp310-manylinux2014_x86_64.whl.metadata (7.3 kB)
Collecting einops (from flashinfer-python->mlc-llm-nightly-cpu)
  Downloading einops-0.9.0.dev0-py3-none-any.whl.metadata (13 kB)
Collecting nccl-extensions>=0.1.0 (from flashinfer-python->mlc-llm-nightly-cpu)
  Downloading nccl_extensions-0.1.0-cp310-cp310-manylinux_2_24_x86_64.manylinux_2_28_x86_64.whl.metadata (4.8 kB)
Collecting nccl4py>=0.4.1 (from flashinfer-python->mlc-llm-nightly-cpu)
  Downloading nccl4py-0.6.0-cp310-cp310-manylinux_2_24_x86_64.manylinux_2_28_x86_64.whl.metadata (3.2 kB)
Collecting ninja (from flashinfer-python->mlc-llm-nightly-cpu)
  Downloading ninja-1.13.2-py3-none-manylinux2014_x86_64.manylinux_2_17_x86_64.whl.metadata (5.4 kB)
Collecting nvidia-cudnn-frontend>=1.31.0 (from flashinfer-python->mlc-llm-nightly-cpu)
  Downloading nvidia_cudnn_frontend-1.31.0-cp310-cp310-manylinux_2_27_x86_64.manylinux_2_28_x86_64.whl.metadata (17 kB)
Collecting nvidia-cutlass-dsl>=4.6.2a0 (from flashinfer-python->mlc-llm-nightly-cpu)
  Downloading nvidia_cutlass_dsl-4.8.1-py3-none-any.whl.metadata (3.1 kB)
Collecting nvidia-ml-py (from flashinfer-python->mlc-llm-nightly-cpu)
  Downloading nvidia_ml_py-13.615.71-py3-none-any.whl.metadata (9.7 kB)
Collecting tabulate (from flashinfer-python->mlc-llm-nightly-cpu)
  Downloading tabulate-0.10.0-py3-none-any.whl.metadata (40 kB)
Collecting cuda-bindings~=13.4.4 (from cuda-python>=12.0->flashinfer-python->mlc-llm-nightly-cpu)
  Downloading cuda_bindings-13.4.4-cp310-cp310-manylinux_2_24_x86_64.manylinux_2_28_x86_64.whl.metadata (2.4 kB)
Collecting cuda-core~=1.2.0 (from cuda-python>=12.0->flashinfer-python->mlc-llm-nightly-cpu)
  Downloading cuda_core-1.2.2-cp310-cp310-manylinux_2_24_x86_64.manylinux_2_28_x86_64.whl.metadata (3.4 kB)
Collecting cuda-pathfinder~=1.1 (from cuda-python>=12.0->flashinfer-python->mlc-llm-nightly-cpu)
  Downloading cuda_pathfinder-1.8.3-py3-none-any.whl.metadata (1.9 kB)
Collecting backports.strenum (from cuda-core~=1.2.0->cuda-python>=12.0->flashinfer-python->mlc-llm-nightly-cpu)
  Downloading backports_strenum-1.3.1-py3-none-any.whl.metadata (3.7 kB)
Collecting nvidia-cutlass-dsl-libs-base==4.8.1 (from nvidia-cutlass-dsl>=4.6.2a0->flashinfer-python->mlc-llm-nightly-cpu)
  Downloading nvidia_cutlass_dsl_libs_base-4.8.1-cp310-cp310-manylinux_2_28_x86_64.whl.metadata (2.9 kB)
Collecting nvidia-cutlass-dsl-libs-cu12==4.8.1 (from nvidia-cutlass-dsl>=4.6.2a0->flashinfer-python->mlc-llm-nightly-cpu)
  Downloading nvidia_cutlass_dsl_libs_cu12-4.8.1-cp310-cp310-manylinux_2_28_x86_64.whl.metadata (2.9 kB)
Collecting protobuf>=4.21.12 (from nvidia-cutlass-dsl-libs-base==4.8.1->nvidia-cutlass-dsl>=4.6.2a0->flashinfer-python->mlc-llm-nightly-cpu)
  Downloading protobuf-7.37.0rc1-cp310-abi3-manylinux2014_x86_64.whl.metadata (590 bytes)
Collecting nvidia-cutlass-dsl-libs-core==4.8.1 (from nvidia-cutlass-dsl-libs-base==4.8.1->nvidia-cutlass-dsl>=4.6.2a0->flashinfer-python->mlc-llm-nightly-cpu)
  Downloading nvidia_cutlass_dsl_libs_core-4.8.1-py3-none-any.whl.metadata (2.9 kB)
Collecting nvidia-cutlass-dsl-libs-cu13==4.8.1 (from nvidia-cutlass-dsl[cu13]>=4.6.2->nvidia-cudnn-frontend>=1.31.0->flashinfer-python->mlc-llm-nightly-cpu)
  Downloading nvidia_cutlass_dsl_libs_cu13-4.8.1-cp310-cp310-manylinux_2_28_x86_64.whl.metadata (2.9 kB)
Collecting jiter<1,>=0.16.0 (from openai->mlc-llm-nightly-cpu)
  Downloading jiter-0.18.0-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl.metadata (5.2 kB)
Collecting sniffio (from openai->mlc-llm-nightly-cpu)
  Downloading sniffio-1.3.1-py3-none-any.whl.metadata (3.9 kB)
Collecting python-dateutil>=2.8.2 (from pandas->mlc-llm-nightly-cpu)
  Downloading python_dateutil-3.0.0-py2.py3-none-any.whl.metadata (8.2 kB)
Collecting pytz>=2020.1 (from pandas->mlc-llm-nightly-cpu)
  Downloading pytz-2026.5-py2.py3-none-any.whl.metadata (22 kB)
Collecting tzdata>=2022.7 (from pandas->mlc-llm-nightly-cpu)
  Downloading tzdata-2026.5-py2.py3-none-any.whl.metadata (1.4 kB)
Collecting six>=1.6 (from python-dateutil>=2.8.2->pandas->mlc-llm-nightly-cpu)
  Downloading six-1.17.0-py2.py3-none-any.whl.metadata (1.7 kB)
Collecting wcwidth>=0.1.4 (from prompt_toolkit->mlc-llm-nightly-cpu)
  Downloading wcwidth-0.9.4-cp310-abi3-manylinux2014_x86_64.manylinux_2_17_x86_64.whl.metadata (23 kB)
Collecting charset_normalizer<4,>=2 (from requests->mlc-llm-nightly-cpu)
  Downloading charset_normalizer-3.5.2-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (46 kB)
Collecting urllib3<3,>=1.26 (from requests->mlc-llm-nightly-cpu)
  Downloading urllib3-2.8.0-py3-none-any.whl.metadata (7.4 kB)
Collecting certifi>=2023.5.7 (from requests->mlc-llm-nightly-cpu)
  Downloading certifi-2026.10.23-py3-none-any.whl.metadata (2.5 kB)
Collecting regex (from tiktoken->mlc-llm-nightly-cpu)
  Downloading regex-2026.9.29-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (40 kB)
Requirement already satisfied: setuptools>=77.0.3 in /opt/hostedtoolcache/Python/3.10.22/x64/lib/python3.10/site-packages (from torch->mlc-llm-nightly-cpu) (84.2.1)
Collecting sympy>=1.13.3 (from torch->mlc-llm-nightly-cpu)
  Downloading sympy-1.14.0-py3-none-any.whl.metadata (12 kB)
Collecting networkx>=2.5.1 (from torch->mlc-llm-nightly-cpu)
  Downloading networkx-3.4.2-py3-none-any.whl.metadata (6.3 kB)
Collecting jinja2 (from torch->mlc-llm-nightly-cpu)
  Downloading jinja2-3.1.6-py3-none-any.whl.metadata (2.9 kB)
Collecting cuda-toolkit==13.0.3 (from cuda-toolkit[cublas,cudart,cufft,cufile,cupti,curand,cusolver,cusparse,nvjitlink,nvrtc,nvtx]==13.0.3; platform_system == "Linux"->torch->mlc-llm-nightly-cpu)
  Downloading cuda_toolkit-13.0.3.0-py2.py3-none-any.whl.metadata (17 kB)
Collecting nvidia-cudnn-cu13==9.24.0.43 (from torch->mlc-llm-nightly-cpu)
  Downloading nvidia_cudnn_cu13-9.24.0.43-py3-none-manylinux_2_27_x86_64.whl.metadata (1.9 kB)
Collecting nvidia-cusparselt-cu13==0.8.1 (from torch->mlc-llm-nightly-cpu)
  Downloading nvidia_cusparselt_cu13-0.8.1-py3-none-manylinux2014_x86_64.whl.metadata (12 kB)
Collecting nvidia-nccl-cu13==2.30.7 (from torch->mlc-llm-nightly-cpu)
  Downloading nvidia_nccl_cu13-2.30.7-py3-none-manylinux_2_18_x86_64.whl.metadata (2.1 kB)
Collecting nvidia-nvshmem-cu13==3.4.5 (from torch->mlc-llm-nightly-cpu)
  Downloading nvidia_nvshmem_cu13-3.4.5-py3-none-manylinux2014_x86_64.manylinux_2_17_x86_64.whl.metadata (2.1 kB)
Collecting triton~=3.8.0 (from torch->mlc-llm-nightly-cpu)
  Downloading triton-3.8.0-cp310-cp310-manylinux_2_27_x86_64.manylinux_2_28_x86_64.whl.metadata (978 bytes)
Collecting nvidia-cuda-cupti==13.0.85.* (from cuda-toolkit[cublas,cudart,cufft,cufile,cupti,curand,cusolver,cusparse,nvjitlink,nvrtc,nvtx]==13.0.3; platform_system == "Linux"->torch->mlc-llm-nightly-cpu)
  Downloading nvidia_cuda_cupti-13.0.85-py3-none-manylinux_2_25_x86_64.whl.metadata (1.7 kB)
Collecting nvidia-cusparse==12.6.3.3.* (from cuda-toolkit[cublas,cudart,cufft,cufile,cupti,curand,cusolver,cusparse,nvjitlink,nvrtc,nvtx]==13.0.3; platform_system == "Linux"->torch->mlc-llm-nightly-cpu)
  Downloading nvidia_cusparse-12.6.3.3-py3-none-manylinux2014_x86_64.manylinux_2_17_x86_64.whl.metadata (1.8 kB)
Collecting nvidia-nvjitlink<14,>=13.0.88 (from cuda-toolkit[cublas,cudart,cufft,cufile,cupti,curand,cusolver,cusparse,nvjitlink,nvrtc,nvtx]==13.0.3; platform_system == "Linux"->torch->mlc-llm-nightly-cpu)
  Downloading nvidia_nvjitlink-13.4.92-py3-none-manylinux2010_x86_64.manylinux_2_12_x86_64.whl.metadata (1.8 kB)
Collecting nvidia-cufile==1.15.1.6.* (from cuda-toolkit[cublas,cudart,cufft,cufile,cupti,curand,cusolver,cusparse,nvjitlink,nvrtc,nvtx]==13.0.3; platform_system == "Linux"->torch->mlc-llm-nightly-cpu)
  Downloading nvidia_cufile-1.15.1.6-py3-none-manylinux2014_x86_64.manylinux_2_17_x86_64.whl.metadata (1.7 kB)
Collecting nvidia-nvtx==13.0.85.* (from cuda-toolkit[cublas,cudart,cufft,cufile,cupti,curand,cusolver,cusparse,nvjitlink,nvrtc,nvtx]==13.0.3; platform_system == "Linux"->torch->mlc-llm-nightly-cpu)
  Downloading nvidia_nvtx-13.0.85-py3-none-manylinux1_x86_64.manylinux_2_5_x86_64.whl.metadata (1.8 kB)
Collecting nvidia-cuda-nvrtc==13.0.88.* (from cuda-toolkit[cublas,cudart,cufft,cufile,cupti,curand,cusolver,cusparse,nvjitlink,nvrtc,nvtx]==13.0.3; platform_system == "Linux"->torch->mlc-llm-nightly-cpu)
  Downloading nvidia_cuda_nvrtc-13.0.88-py3-none-manylinux2010_x86_64.manylinux_2_12_x86_64.whl.metadata (1.7 kB)
Collecting nvidia-cublas==13.1.1.3.* (from cuda-toolkit[cublas,cudart,cufft,cufile,cupti,curand,cusolver,cusparse,nvjitlink,nvrtc,nvtx]==13.0.3; platform_system == "Linux"->torch->mlc-llm-nightly-cpu)
  Downloading nvidia_cublas-13.1.1.3-py3-none-manylinux_2_27_x86_64.whl.metadata (1.8 kB)
Collecting nvidia-cusolver==12.0.4.66.* (from cuda-toolkit[cublas,cudart,cufft,cufile,cupti,curand,cusolver,cusparse,nvjitlink,nvrtc,nvtx]==13.0.3; platform_system == "Linux"->torch->mlc-llm-nightly-cpu)
  Downloading nvidia_cusolver-12.0.4.66-py3-none-manylinux_2_27_x86_64.whl.metadata (1.8 kB)
Collecting nvidia-cufft==12.0.0.61.* (from cuda-toolkit[cublas,cudart,cufft,cufile,cupti,curand,cusolver,cusparse,nvjitlink,nvrtc,nvtx]==13.0.3; platform_system == "Linux"->torch->mlc-llm-nightly-cpu)
  Downloading nvidia_cufft-12.0.0.61-py3-none-manylinux2014_x86_64.manylinux_2_17_x86_64.whl.metadata (1.8 kB)
Collecting nvidia-cuda-runtime==13.0.96.* (from cuda-toolkit[cublas,cudart,cufft,cufile,cupti,curand,cusolver,cusparse,nvjitlink,nvrtc,nvtx]==13.0.3; platform_system == "Linux"->torch->mlc-llm-nightly-cpu)
  Downloading nvidia_cuda_runtime-13.0.96-py3-none-manylinux2014_x86_64.manylinux_2_17_x86_64.whl.metadata (1.7 kB)
Collecting nvidia-curand==10.4.0.35.* (from cuda-toolkit[cublas,cudart,cufft,cufile,cupti,curand,cusolver,cusparse,nvjitlink,nvrtc,nvtx]==13.0.3; platform_system == "Linux"->torch->mlc-llm-nightly-cpu)
  Downloading nvidia_curand-10.4.0.35-py3-none-manylinux_2_27_x86_64.whl.metadata (1.7 kB)
Collecting mpmath<1.4,>=1.1.0 (from sympy>=1.13.3->torch->mlc-llm-nightly-cpu)
  Downloading mpmath-1.3.0-py3-none-any.whl.metadata (8.6 kB)
Collecting MarkupSafe>=2.0 (from jinja2->torch->mlc-llm-nightly-cpu)
  Downloading markupsafe-3.0.4-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl.metadata (2.7 kB)
Collecting tokenizers<0.24.0,>=0.23.1 (from transformers->mlc-llm-nightly-cpu)
  Downloading tokenizers-0.23.3-cp310-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl.metadata (9.8 kB)
Collecting typer (from transformers->mlc-llm-nightly-cpu)
  Downloading typer-0.27.3-py3-none-any.whl.metadata (16 kB)
Collecting shellingham>=1.3.0 (from typer->transformers->mlc-llm-nightly-cpu)
  Downloading shellingham-1.5.4-py2.py3-none-any.whl.metadata (3.5 kB)
Collecting rich>=13.8.0 (from typer->transformers->mlc-llm-nightly-cpu)
  Downloading rich-15.0.0-py3-none-any.whl.metadata (18 kB)
Collecting markdown-it-py>=2.2.0 (from rich>=13.8.0->typer->transformers->mlc-llm-nightly-cpu)
  Downloading markdown_it_py-4.2.0-py3-none-any.whl.metadata (7.4 kB)
Collecting pygments<3.0.0,>=2.13.0 (from rich>=13.8.0->typer->transformers->mlc-llm-nightly-cpu)
  Downloading pygments-2.21.0-py3-none-any.whl.metadata (2.5 kB)
Collecting mdurl~=0.1 (from markdown-it-py>=2.2.0->rich>=13.8.0->typer->transformers->mlc-llm-nightly-cpu)
  Downloading mdurl-0.1.2-py3-none-any.whl.metadata (1.6 kB)
Downloading psutil-7.2.2-cp36-abi3-manylinux2010_x86_64.manylinux_2_12_x86_64.manylinux_2_28_x86_64.whl (155 kB)
Downloading apache_tvm_ffi-0.1.15.post0-cp310-cp310-manylinux_2_24_x86_64.manylinux_2_28_x86_64.whl (3.3 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 3.3/3.3 MB 210.8 MB/s  0:00:00
Downloading ml_dtypes-0.6.0-cp310-cp310-manylinux_2_27_x86_64.manylinux_2_28_x86_64.whl (412 kB)
Downloading numpy-2.2.6-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (16.8 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 16.8/16.8 MB 286.7 MB/s  0:00:00
Downloading typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Downloading datasets-5.1.0-py3-none-any.whl (604 kB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 604.4/604.4 kB 108.6 MB/s  0:00:00
Downloading dill-0.4.1-py3-none-any.whl (120 kB)
Downloading fsspec-2026.7.0-py3-none-any.whl (206 kB)
Downloading huggingface_hub-2.3.0-py3-none-any.whl (855 kB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 855.2/855.2 kB 165.9 MB/s  0:00:00
Downloading click-8.5.0-py3-none-any.whl (125 kB)
Downloading hf_xet-1.8.0.dev0-cp38-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (68.3 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 68.3/68.3 MB 229.5 MB/s  0:00:00
Downloading httpx2-2.14.0-py3-none-any.whl (96 kB)
Downloading httpcore2-2.14.0-py3-none-any.whl (84 kB)
Downloading multiprocess-0.70.19-py310-none-any.whl (134 kB)
Downloading aiohttp-3.14.5-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (1.9 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.9/1.9 MB 283.7 MB/s  0:00:00
Downloading async_timeout-5.0.1-py3-none-any.whl (6.2 kB)
Downloading multidict-7.1.0-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (464 kB)
Downloading yarl-1.25.1-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (118 kB)
Downloading aiohappyeyeballs-2.7.1-py3-none-any.whl (15 kB)
Downloading aiosignal-1.4.0-py3-none-any.whl (7.5 kB)
Downloading anyio-4.15.1-py3-none-any.whl (132 kB)
Downloading attrs-26.1.0-py3-none-any.whl (67 kB)
Downloading exceptiongroup-1.3.1-py3-none-any.whl (16 kB)
Downloading filelock-4.1.0-py3-none-any.whl (133 kB)
Downloading frozenlist-1.8.0-cp310-cp310-manylinux1_x86_64.manylinux_2_28_x86_64.manylinux_2_5_x86_64.whl (219 kB)
Downloading h11-0.16.0-py3-none-any.whl (37 kB)
Downloading idna-3.20-py3-none-any.whl (69 kB)
Downloading propcache-0.5.4-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (224 kB)
Downloading pyarrow-25.0.1-cp310-cp310-manylinux_2_28_x86_64.whl (50.1 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 50.1/50.1 MB 213.7 MB/s  0:00:00
Downloading pyyaml-6.0.3-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (770 kB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 770.3/770.3 kB 143.9 MB/s  0:00:00
Downloading tomli-2.5.0-py3-none-any.whl (14 kB)
Downloading tqdm-4.70.1-py3-none-any.whl (80 kB)
Downloading truststore-0.10.5-py3-none-any.whl (19 kB)
Downloading fastapi-0.162.0-py3-none-any.whl (148 kB)
Downloading annotated_doc-0.0.5-py3-none-any.whl (5.3 kB)
Downloading opentelemetry_api-1.45.1-py3-none-any.whl (60 kB)
Downloading pydantic-2.14.1-py3-none-any.whl (488 kB)
Downloading pydantic_core-2.50.1-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.2 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.2/2.2 MB 228.1 MB/s  0:00:00
Downloading annotated_types-0.8.0-py3-none-any.whl (13 kB)
Downloading starlette-1.7.0-py3-none-any.whl (78 kB)
Downloading typing_inspection-0.4.4-py3-none-any.whl (14 kB)
Downloading flashinfer_python-0.7.2.post1-py3-none-any.whl (62.1 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 62.1/62.1 MB 277.4 MB/s  0:00:00
Downloading cuda_python-13.4.4-py3-none-any.whl (7.6 kB)
Downloading cuda_bindings-13.4.4-cp310-cp310-manylinux_2_24_x86_64.manylinux_2_28_x86_64.whl (7.2 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 7.2/7.2 MB 218.7 MB/s  0:00:00
Downloading cuda_core-1.2.2-cp310-cp310-manylinux_2_24_x86_64.manylinux_2_28_x86_64.whl (6.5 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 6.5/6.5 MB 216.7 MB/s  0:00:00
Downloading cuda_pathfinder-1.8.3-py3-none-any.whl (62 kB)
Downloading cuda_tile-1.7.0-cp310-cp310-manylinux2014_x86_64.whl (426 kB)
Downloading nccl_extensions-0.1.0-cp310-cp310-manylinux_2_24_x86_64.manylinux_2_28_x86_64.whl (22.4 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 22.4/22.4 MB 269.1 MB/s  0:00:00
Downloading nccl4py-0.6.0-cp310-cp310-manylinux_2_24_x86_64.manylinux_2_28_x86_64.whl (3.5 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 3.5/3.5 MB 278.4 MB/s  0:00:00
Downloading nvidia_cudnn_frontend-1.31.0-cp310-cp310-manylinux_2_27_x86_64.manylinux_2_28_x86_64.whl (10.1 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 10.1/10.1 MB 297.4 MB/s  0:00:00
Downloading nvidia_cutlass_dsl-4.8.1-py3-none-any.whl (10 kB)
Downloading nvidia_cutlass_dsl_libs_base-4.8.1-cp310-cp310-manylinux_2_28_x86_64.whl (3.1 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 3.1/3.1 MB 175.3 MB/s  0:00:00
Downloading nvidia_cutlass_dsl_libs_core-4.8.1-py3-none-any.whl (1.6 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.6/1.6 MB 256.8 MB/s  0:00:00
Downloading nvidia_cutlass_dsl_libs_cu12-4.8.1-cp310-cp310-manylinux_2_28_x86_64.whl (91.7 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 91.7/91.7 MB 143.1 MB/s  0:00:00
Downloading nvidia_cutlass_dsl_libs_cu13-4.8.1-cp310-cp310-manylinux_2_28_x86_64.whl (92.0 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 92.0/92.0 MB 152.2 MB/s  0:00:00
Downloading protobuf-7.37.0rc1-cp310-abi3-manylinux2014_x86_64.whl (360 kB)
Downloading backports_strenum-1.3.1-py3-none-any.whl (8.3 kB)
Downloading einops-0.9.0.dev0-py3-none-any.whl (67 kB)
Downloading ninja-1.13.2-py3-none-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (183 kB)
Downloading nvidia_ml_py-13.615.71-py3-none-any.whl (58 kB)
Downloading openai-3.37.0-py3-none-any.whl (2.3 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.3/2.3 MB 145.4 MB/s  0:00:00
Downloading jiter-0.18.0-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (337 kB)
Downloading pandas-2.3.3-cp310-cp310-manylinux_2_24_x86_64.manylinux_2_28_x86_64.whl (12.8 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 12.8/12.8 MB 208.2 MB/s  0:00:00
Downloading python_dateutil-3.0.0-py2.py3-none-any.whl (94 kB)
Downloading pytz-2026.5-py2.py3-none-any.whl (506 kB)
Downloading six-1.17.0-py2.py3-none-any.whl (11 kB)
Downloading tzdata-2026.5-py2.py3-none-any.whl (347 kB)
Downloading prompt_toolkit-3.0.53-py3-none-any.whl (392 kB)
Downloading wcwidth-0.9.4-cp310-abi3-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (785 kB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 785.9/785.9 kB 174.6 MB/s  0:00:00
Downloading requests-2.34.2-py3-none-any.whl (73 kB)
Downloading charset_normalizer-3.5.2-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (271 kB)
Downloading urllib3-2.8.0-py3-none-any.whl (135 kB)
Downloading certifi-2026.10.23-py3-none-any.whl (135 kB)
Downloading safetensors-0.9.0rc1-cp310-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (594 kB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 594.1/594.1 kB 116.2 MB/s  0:00:00
Downloading sentencepiece-0.2.2-cp310-cp310-manylinux_2_27_x86_64.manylinux_2_28_x86_64.whl (1.4 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.4/1.4 MB 233.5 MB/s  0:00:00
Downloading shortuuid-1.0.13-py3-none-any.whl (10 kB)
Downloading sniffio-1.3.1-py3-none-any.whl (10 kB)
Downloading tabulate-0.10.0-py3-none-any.whl (39 kB)
Downloading tiktoken-0.14.0-cp310-cp310-manylinux_2_28_x86_64.whl (1.2 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.2/1.2 MB 238.2 MB/s  0:00:00
Downloading regex-2026.9.29-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (797 kB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 797.6/797.6 kB 183.9 MB/s  0:00:00
Downloading torch-2.14.1-cp310-cp310-manylinux_2_28_x86_64.whl (554.6 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 554.6/554.6 MB 73.0 MB/s  0:00:04
Downloading cuda_toolkit-13.0.3.0-py2.py3-none-any.whl (2.5 kB)
Downloading nvidia_cudnn_cu13-9.24.0.43-py3-none-manylinux_2_27_x86_64.whl (553.1 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 553.1/553.1 MB 82.7 MB/s  0:00:04
Downloading nvidia_cusparselt_cu13-0.8.1-py3-none-manylinux2014_x86_64.whl (170.1 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 170.1/170.1 MB 223.5 MB/s  0:00:00
Downloading nvidia_nccl_cu13-2.30.7-py3-none-manylinux_2_18_x86_64.whl (216.0 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 216.0/216.0 MB 187.9 MB/s  0:00:01
Downloading nvidia_nvshmem_cu13-3.4.5-py3-none-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (60.4 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 60.4/60.4 MB 313.8 MB/s  0:00:00
Downloading nvidia_cublas-13.1.1.3-py3-none-manylinux_2_27_x86_64.whl (423.1 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 423.1/423.1 MB 85.2 MB/s  0:00:03
Downloading nvidia_cuda_cupti-13.0.85-py3-none-manylinux_2_25_x86_64.whl (10.7 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 10.7/10.7 MB 224.4 MB/s  0:00:00
Downloading nvidia_cuda_nvrtc-13.0.88-py3-none-manylinux2010_x86_64.manylinux_2_12_x86_64.whl (90.2 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 90.2/90.2 MB 228.3 MB/s  0:00:00
Downloading nvidia_cuda_runtime-13.0.96-py3-none-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (2.2 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.2/2.2 MB 306.7 MB/s  0:00:00
Downloading nvidia_cufft-12.0.0.61-py3-none-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (214.1 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 214.1/214.1 MB 128.7 MB/s  0:00:01
Downloading nvidia_cufile-1.15.1.6-py3-none-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (1.2 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.2/1.2 MB 216.2 MB/s  0:00:00
Downloading nvidia_curand-10.4.0.35-py3-none-manylinux_2_27_x86_64.whl (59.5 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 59.5/59.5 MB 290.8 MB/s  0:00:00
Downloading nvidia_cusolver-12.0.4.66-py3-none-manylinux_2_27_x86_64.whl (200.9 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 200.9/200.9 MB 232.0 MB/s  0:00:00
Downloading nvidia_cusparse-12.6.3.3-py3-none-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (145.9 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 145.9/145.9 MB 296.9 MB/s  0:00:00
Downloading nvidia_nvjitlink-13.4.92-py3-none-manylinux2010_x86_64.manylinux_2_12_x86_64.whl (42.5 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 42.5/42.5 MB 238.8 MB/s  0:00:00
Downloading nvidia_nvtx-13.0.85-py3-none-manylinux1_x86_64.manylinux_2_5_x86_64.whl (148 kB)
Downloading triton-3.8.0-cp310-cp310-manylinux_2_27_x86_64.manylinux_2_28_x86_64.whl (247.8 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 247.8/247.8 MB 107.0 MB/s  0:00:02
Downloading networkx-3.4.2-py3-none-any.whl (1.7 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.7/1.7 MB 63.4 MB/s  0:00:00
Downloading sympy-1.14.0-py3-none-any.whl (6.3 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 6.3/6.3 MB 358.0 MB/s  0:00:00
Downloading mpmath-1.3.0-py3-none-any.whl (536 kB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 536.2/536.2 kB 111.1 MB/s  0:00:00
Downloading jinja2-3.1.6-py3-none-any.whl (134 kB)
Downloading markupsafe-3.0.4-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (20 kB)
Downloading transformers-5.20.2-py3-none-any.whl (12.8 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 12.8/12.8 MB 278.9 MB/s  0:00:00
Downloading tokenizers-0.23.3-cp310-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (3.4 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 3.4/3.4 MB 341.2 MB/s  0:00:00
Downloading typer-0.27.3-py3-none-any.whl (123 kB)
Downloading rich-15.0.0-py3-none-any.whl (310 kB)
Downloading pygments-2.21.0-py3-none-any.whl (1.3 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.3/1.3 MB 227.6 MB/s  0:00:00
Downloading markdown_it_py-4.2.0-py3-none-any.whl (91 kB)
Downloading mdurl-0.1.2-py3-none-any.whl (10.0 kB)
Downloading shellingham-1.5.4-py2.py3-none-any.whl (9.8 kB)
Downloading uvicorn-0.54.0-py3-none-any.whl (87 kB)
Downloading xxhash-4.0.2-cp310-cp310-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (249 kB)
Installing collected packages: pytz, nvidia-ml-py, nvidia-cusparselt-cu13, mpmath, cuda-toolkit, xxhash, wcwidth, urllib3, tzdata, typing_extensions, truststore, triton, tqdm, tomli, tabulate, sympy, sniffio, six, shortuuid, shellingham, sentencepiece, safetensors, regex, pyyaml, pygments, pyarrow, psutil, protobuf, propcache, nvidia-nvtx, nvidia-nvshmem-cu13, nvidia-nvjitlink, nvidia-nccl-cu13, nvidia-curand, nvidia-cufile, nvidia-cuda-runtime, nvidia-cuda-nvrtc, nvidia-cuda-cupti, numpy, ninja, networkx, mdurl, MarkupSafe, jiter, idna, hf-xet, h11, fsspec, frozenlist, filelock, einops, dill, cuda-pathfinder, click, charset_normalizer, certifi, backports.strenum, attrs, async-timeout, annotated-types, annotated-doc, aiohappyeyeballs, uvicorn, typing-inspection, requests, python-dateutil, pydantic-core, prompt_toolkit, opentelemetry-api, nvidia-cusparse, nvidia-cufft, nvidia-cublas, multiprocess, multidict, ml_dtypes, markdown-it-py, jinja2, httpcore2, exceptiongroup, cuda-tile, cuda-core, cuda-bindings, apache-tvm-ffi, aiosignal, yarl, tiktoken, rich, pydantic, pandas, nvidia-cutlass-dsl-libs-core, nvidia-cusolver, nvidia-cudnn-cu13, nccl4py, mlc-ai-nightly-cpu, cuda-python, anyio, typer, starlette, nvidia-cutlass-dsl-libs-base, nccl-extensions, httpx2, aiohttp, torch, openai, nvidia-cutlass-dsl-libs-cu13, nvidia-cutlass-dsl-libs-cu12, huggingface-hub, fastapi, tokenizers, nvidia-cutlass-dsl, datasets, transformers, nvidia-cudnn-frontend, flashinfer-python, mlc-llm-nightly-cpu

Successfully installed MarkupSafe-3.0.4 aiohappyeyeballs-2.7.1 aiohttp-3.14.5 aiosignal-1.4.0 annotated-doc-0.0.5 annotated-types-0.8.0 anyio-4.15.1 apache-tvm-ffi-0.1.15.post0 async-timeout-5.0.1 attrs-26.1.0 backports.strenum-1.3.1 certifi-2026.10.23 charset_normalizer-3.5.2 click-8.5.0 cuda-bindings-13.4.4 cuda-core-1.2.2 cuda-pathfinder-1.8.3 cuda-python-13.4.4 cuda-tile-1.7.0 cuda-toolkit-13.0.3.0 datasets-5.1.0 dill-0.4.1 einops-0.9.0.dev0 exceptiongroup-1.3.1 fastapi-0.162.0 filelock-4.1.0 flashinfer-python-0.7.2.post1 frozenlist-1.8.0 fsspec-2026.7.0 h11-0.16.0 hf-xet-1.8.0.dev0 httpcore2-2.14.0 httpx2-2.14.0 huggingface-hub-2.3.0 idna-3.20 jinja2-3.1.6 jiter-0.18.0 markdown-it-py-4.2.0 mdurl-0.1.2 ml_dtypes-0.6.0 mlc-ai-nightly-cpu-0.26.dev246 mlc-llm-nightly-cpu-0.26.dev6 mpmath-1.3.0 multidict-7.1.0 multiprocess-0.70.19 nccl-extensions-0.1.0 nccl4py-0.6.0 networkx-3.4.2 ninja-1.13.2 numpy-2.2.6 nvidia-cublas-13.1.1.3 nvidia-cuda-cupti-13.0.85 nvidia-cuda-nvrtc-13.0.88 nvidia-cuda-runtime-13.0.96 nvidia-cudnn-cu13-9.24.0.43 nvidia-cudnn-frontend-1.31.0 nvidia-cufft-12.0.0.61 nvidia-cufile-1.15.1.6 nvidia-curand-10.4.0.35 nvidia-cusolver-12.0.4.66 nvidia-cusparse-12.6.3.3 nvidia-cusparselt-cu13-0.8.1 nvidia-cutlass-dsl-4.8.1 nvidia-cutlass-dsl-libs-base-4.8.1 nvidia-cutlass-dsl-libs-core-4.8.1 nvidia-cutlass-dsl-libs-cu12-4.8.1 nvidia-cutlass-dsl-libs-cu13-4.8.1 nvidia-ml-py-13.615.71 nvidia-nccl-cu13-2.30.7 nvidia-nvjitlink-13.4.92 nvidia-nvshmem-cu13-3.4.5 nvidia-nvtx-13.0.85 openai-3.37.0 opentelemetry-api-1.45.1 pandas-2.3.3 prompt_toolkit-3.0.53 propcache-0.5.4 protobuf-7.37.0rc1 psutil-7.2.2 pyarrow-25.0.1 pydantic-2.14.1 pydantic-core-2.50.1 pygments-2.21.0 python-dateutil-3.0.0 pytz-2026.5 pyyaml-6.0.3 regex-2026.9.29 requests-2.34.2 rich-15.0.0 safetensors-0.9.0rc1 sentencepiece-0.2.2 shellingham-1.5.4 shortuuid-1.0.13 six-1.17.0 sniffio-1.3.1 starlette-1.7.0 sympy-1.14.0 tabulate-0.10.0 tiktoken-0.14.0 tokenizers-0.23.3 tomli-2.5.0 torch-2.14.1 tqdm-4.70.1 transformers-5.20.2 triton-3.8.0 truststore-0.10.5 typer-0.27.3 typing-inspection-0.4.4 typing_extensions-4.16.0 tzdata-2026.5 urllib3-2.8.0 uvicorn-0.54.0 wcwidth-0.9.4 xxhash-4.0.2 yarl-1.25.1

### pip list (mlc / tvm)
apache-tvm-ffi               0.1.15.post0
mlc-ai-nightly-cpu           0.26.dev246
mlc-llm-nightly-cpu          0.26.dev6

### import mlc_llm
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "snapdragon835", "mattr": ("+neon",), "mtriple": "arm64-linux-android"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "kirin970", "mattr": ("+neon",), "mtriple": "arm64-linux-android"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "bcm2837", "mattr": ("+neon",), "mtriple": "armv7l-linux-gnueabihf"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "bcm2711", "mattr": ("+neon",), "mcpu": "cortex-a72", "mtriple": "armv8l-linux-gnueabihf"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "pynq", "mattr": ("+neon",), "mtriple": "armv7a-linux-eabi"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "beagleai", "mattr": ("+neon", "+vfp4", "+thumb2"), "mcpu": "cortex-a15", "mtriple": "armv7a-linux-gnueabihf"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "stm32mp1", "mattr": ("+neon", "+vfp4", "+thumb2"), "mcpu": "cortex-a7", "mtriple": "armv7a-linux-gnueabihf"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "snapdragon835", "mattr": ("+neon",), "mtriple": "arm64-linux-android"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "beagleai", "mattr": ("+neon", "+vfp4", "+thumb2"), "mcpu": "cortex-a15", "mtriple": "armv7a-linux-gnueabihf"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "kirin970", "mattr": ("+neon",), "mtriple": "arm64-linux-android"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "stm32mp1", "mattr": ("+neon", "+vfp4", "+thumb2"), "mcpu": "cortex-a7", "mtriple": "armv7a-linux-gnueabihf"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "bcm2711", "mattr": ("+neon",), "mcpu": "cortex-a72", "mtriple": "armv8l-linux-gnueabihf"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "pynq", "mattr": ("+neon",), "mtriple": "armv7a-linux-eabi"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:04] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "keys": ("arm_cpu", "cpu"), "device": "arm_cpu", "model": "bcm2837", "mattr": ("+neon",), "mtriple": "armv7l-linux-gnueabihf"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:05] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "mtriple": "arm64-apple-macos"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:05] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "mcpu": "apple-m1", "mtriple": "arm64-apple-macos"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:05] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "mtriple": "arm64-apple-macos"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:05] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "mcpu": "apple-m1", "mtriple": "arm64-apple-macos"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:05] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "mtriple": "arm64-apple-macos"}. LLVM was not compiled with support for Arm(R)-based targets.
[06:35:05] /workspace/tvm/src/target/canonicalizer/llvm/arm_aprofile.cc:104: Warning: Cannot parse target features for target: {"kind": "llvm", "mcpu": "apple-m2", "mtriple": "arm64-apple-macos"}. LLVM was not compiled with support for Arm(R)-based targets.
IMPORT_OK 0.1.dev0

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
```
