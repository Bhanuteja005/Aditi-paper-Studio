# usage: py -I scripts/transcribe.py brief/audio-transcribe.mp4 brief translate
import sys, time, subprocess, numpy as np
from faster_whisper import WhisperModel

# args: <media> <out_dir> <transcribe|translate>
# PyAV 19 breaks faster_whisper.decode_audio, so decode with ffmpeg to a float32 array instead
src, out_dir, task = sys.argv[1], sys.argv[2], sys.argv[3]
raw = subprocess.run(["ffmpeg", "-nostdin", "-i", src, "-f", "s16le", "-ac", "1", "-ar", "16000", "-"],
                     capture_output=True, check=True).stdout
audio = np.frombuffer(raw, np.int16).astype(np.float32) / 32768.0
model = WhisperModel("medium", device="cpu", compute_type="int8", cpu_threads=10)
name = "transcript_original" if task == "transcribe" else "transcript_english"
t = time.time()
segs, info = model.transcribe(audio, task=task, vad_filter=True, beam_size=5,
                              condition_on_previous_text=False, language="hi")
print(task, "lang", info.language, flush=True)
with open(f"{out_dir}/{name}.txt", "w", encoding="utf-8") as f:
    for s in segs:
        f.write(f"[{int(s.start//60):02d}:{int(s.start%60):02d}] {s.text.strip()}\n"); f.flush()
print(task, "done", round(time.time() - t), "s", flush=True)
