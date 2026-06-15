"""Генерирует аудио (Piper neural TTS) для всех озвучиваемых фраз и пишет манифест.
Запуск:
  node tools_collect_strings.js > /tmp/strings.json
  python3 tools_gen_audio.py
"""
import json
import os
import wave

MODEL = "en_US-lessac-high"
DATA_DIR = "/tmp/piper_voices"
STRINGS = "/tmp/strings.json"
OUT_DIR = os.path.join(os.path.dirname(__file__), "audio")
MANIFEST = os.path.join(os.path.dirname(__file__), "audio_manifest.js")

os.makedirs(OUT_DIR, exist_ok=True)


def norm(s):
    return " ".join(s.strip().lower().split())


def fnv1a(s):
    """FNV-1a 32-bit — идентичен JS-версии в app.js (ASCII-строки)."""
    h = 0x811C9DC5
    for ch in s:
        h ^= (ord(ch) & 0xFFFF)
        h = (h * 0x01000193) & 0xFFFFFFFF
    return format(h, "08x")


def main():
    from piper import PiperVoice
    voice = PiperVoice.load(
        os.path.join(DATA_DIR, MODEL + ".onnx"),
        os.path.join(DATA_DIR, MODEL + ".onnx.json"),
    )

    strings = json.load(open(STRINGS, encoding="utf-8"))
    has = {}
    made = 0
    for s in strings:
        key = fnv1a(norm(s))
        has[key] = 1
        path = os.path.join(OUT_DIR, key + ".wav")
        if os.path.exists(path) and os.path.getsize(path) > 0:
            continue
        with wave.open(path, "wb") as wf:
            voice.synthesize_wav(s, wf)
        made += 1
        if made % 20 == 0:
            print("...", made)

    with open(MANIFEST, "w", encoding="utf-8") as f:
        f.write("/* Автогенерация (tools_gen_audio.py). Список встроенной озвучки. */\n")
        f.write('window.AUDIO = { ext: "wav", has: ')
        f.write(json.dumps(has, separators=(",", ":")))
        f.write(" };\n")

    total = sum(os.path.getsize(os.path.join(OUT_DIR, f)) for f in os.listdir(OUT_DIR))
    print(f"Готово: фраз={len(strings)}, создано новых={made}, всего размер={total/1024/1024:.1f} MB")


if __name__ == "__main__":
    main()
