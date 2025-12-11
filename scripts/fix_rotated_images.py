"""
Fix rotated images by reconverting from backup with EXIF orientation applied.
"""

from pathlib import Path
from PIL import Image, ImageOps

# Images that need fixing
images_to_fix = [
    "deputy_general.JPG",
    "secretary_general.JPG",
]

script_dir = Path(__file__).parent
project_root = script_dir.parent

print("Fixing rotated images...\n")

for filename in images_to_fix:
    # Get paths
    backup_path = project_root / "public/images/backup/team" / filename
    output_path = project_root / "public/images/team" / filename.replace('.JPG', '.webp').replace('.jpg', '.webp')

    if not backup_path.exists():
        print(f"[SKIP] Backup not found: {backup_path}")
        continue

    try:
        # Open image from backup
        with Image.open(backup_path) as img:
            # Apply EXIF orientation to fix rotation
            img = ImageOps.exif_transpose(img)

            # Convert to RGB if needed
            if img.mode != 'RGB':
                img = img.convert('RGB')

            # Save as WebP
            img.save(output_path, 'WEBP', quality=85, method=6)

        print(f"[OK] Fixed {filename} -> {output_path.name}")

    except Exception as e:
        print(f"[FAIL] {filename}: {e}")

print("\nDone! The images should now be properly oriented.")
