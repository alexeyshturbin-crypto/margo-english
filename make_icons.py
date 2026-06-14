"""Генерация иконок приложения MyEnglish (градиент + книга/буква)."""
from PIL import Image, ImageDraw, ImageFont
import os

OUT = os.path.join(os.path.dirname(__file__), "icons")
os.makedirs(OUT, exist_ok=True)


def gradient(size, c1, c2):
    img = Image.new("RGB", (size, size), c1)
    top = Image.new("RGB", (size, size), c2)
    mask = Image.new("L", (size, size))
    md = mask.load()
    for y in range(size):
        for x in range(size):
            md[x, y] = int(255 * ((x + y) / (2 * size)))
    return Image.composite(top, img, mask)


def font(sz):
    for p in [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ]:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, sz)
            except Exception:
                pass
    return ImageFont.load_default()


def make(size, name, maskable=False):
    img = gradient(size, (91, 108, 255), (162, 89, 255))
    d = ImageDraw.Draw(img)
    pad = int(size * 0.16) if maskable else int(size * 0.06)
    # круглая «подложка» под букву
    r = size - 2 * pad
    cx, cy = size // 2, size // 2
    # буква E
    f = font(int(size * 0.5))
    txt = "E"
    bbox = d.textbbox((0, 0), txt, font=f)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    d.text((cx - w / 2 - bbox[0], cy - h / 2 - bbox[1]), txt, font=f, fill=(255, 255, 255))
    img.save(os.path.join(OUT, name))
    print("wrote", name, size)


make(192, "icon-192.png")
make(512, "icon-512.png")
make(180, "icon-180.png")
make(512, "icon-512-maskable.png", maskable=True)
