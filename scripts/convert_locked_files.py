"""
Workaround script to convert locked JPG files to WebP.
Creates WebP files alongside the originals, then you can delete the JPGs manually.
"""

from pathlib import Path
from PIL import Image

# List of locked files
locked_files = [
    "public/images/team/dais_team.JPG",
    "public/images/team/deputy_general.JPG",
    "public/images/team/deputy_general2.JPG",
    "public/images/team/itdesign_team.JPG",
    "public/images/team/logistics_team.JPG",
    "public/images/team/marketing_team.JPG",
    "public/images/team/secretary_general.JPG",
]

script_dir = Path(__file__).parent
project_root = script_dir.parent

print("Converting locked files to WebP...\n")

for file_path in locked_files:
    input_path = project_root / file_path
    output_path = input_path.with_suffix('.webp')

    try:
        # Open image
        with Image.open(input_path) as img:
            # Convert to RGB if needed
            if img.mode != 'RGB':
                img = img.convert('RGB')

            # Save as WebP
            img.save(output_path, 'WEBP', quality=85, method=6)

        original_size = input_path.stat().st_size / 1024 / 1024
        new_size = output_path.stat().st_size / 1024 / 1024
        savings = original_size - new_size
        percent = (savings / original_size * 100) if original_size > 0 else 0

        print(f"[OK] {input_path.name}")
        print(f"  {original_size:.2f} MB -> {new_size:.2f} MB ({savings:.2f} MB saved, {percent:.1f}%)")

    except Exception as e:
        print(f"[FAIL] {input_path.name}: {e}")

print("\nDone! Now please:")
print("1. Close any programs using these files")
print("2. Manually delete the original .JPG files")
print("3. The .webp files are ready to use")
