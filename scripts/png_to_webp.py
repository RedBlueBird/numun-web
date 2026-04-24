import argparse
from pathlib import Path
from PIL import Image


def convert(src: Path, dst: Path, quality: int):
    img = Image.open(src)
    dst.parent.mkdir(parents=True, exist_ok=True)
    img.save(dst, "WEBP", quality=quality, method=6)
    print(f"Converted {src} -> {dst} ({img.size[0]}x{img.size[1]})")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert PNG to WebP")
    parser.add_argument("src", type=Path, help="Source PNG file")
    parser.add_argument(
        "dst",
        type=Path,
        nargs="?",
        help="Destination WebP file (default: same path with .webp extension)",
    )
    parser.add_argument(
        "-q", "--quality", type=int, default=90, help="WebP quality 1-100 (default: 90)"
    )
    args = parser.parse_args()

    dst = args.dst or args.src.with_suffix(".webp")
    convert(args.src, dst, args.quality)
