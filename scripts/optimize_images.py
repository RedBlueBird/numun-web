"""
NUMUN Website Image Optimizer
Automatically resize and compress images to improve website performance.

Usage:
    python scripts/optimize_images.py

Requirements:
    pip install Pillow
"""

from PIL import Image
import os
from pathlib import Path

# Configuration for different image types based on NUMUN website requirements
CONFIGS = {
    'logo': {
        'max_width': 512,
        'quality': 90,
        'description': 'Logo files (hero sections, headers)'
    },
    'team': {
        'max_width': 800,
        'quality': 85,
        'description': 'Team member photos'
    },
    'about': {
        'max_width': 1200,
        'quality': 80,
        'description': 'About page images'
    },
    'background': {
        'max_width': 1920,
        'quality': 75,
        'description': 'Hero background images'
    },
    'sponsors': {
        'max_width': 400,
        'quality': 85,
        'description': 'Sponsor logos'
    },
}

def optimize_image(input_path, output_path, max_width, quality):
    """
    Resize and compress a single image.

    Args:
        input_path: Path to original image
        output_path: Path to save optimized image
        max_width: Maximum width in pixels (height scales proportionally)
        quality: JPEG quality (1-100, higher = better quality but larger file)

    Returns:
        tuple: (original_size_mb, new_size_mb, reduction_percent)
    """
    try:
        with Image.open(input_path) as img:
            # Get original size
            original_size = os.path.getsize(input_path)

            # Calculate new dimensions maintaining aspect ratio
            aspect_ratio = img.height / img.width
            new_width = min(max_width, img.width)  # Don't upscale
            new_height = int(new_width * aspect_ratio)

            # Resize using high-quality Lanczos algorithm
            img_resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

            # Convert RGBA/LA/P to RGB for JPEG compatibility
            if img_resized.mode in ('RGBA', 'LA', 'P'):
                # Create white background
                background = Image.new('RGB', img_resized.size, (255, 255, 255))

                # Convert palette mode to RGBA first
                if img_resized.mode == 'P':
                    img_resized = img_resized.convert('RGBA')

                # Paste with alpha channel as mask
                if img_resized.mode in ('RGBA', 'LA'):
                    background.paste(img_resized, mask=img_resized.split()[-1])
                else:
                    background.paste(img_resized)

                img_resized = background
            elif img_resized.mode != 'RGB':
                img_resized = img_resized.convert('RGB')

            # Save with optimization
            img_resized.save(output_path, 'JPEG', quality=quality, optimize=True, progressive=True)

            # Calculate stats
            new_size = os.path.getsize(output_path)
            original_mb = original_size / 1024 / 1024
            new_mb = new_size / 1024 / 1024
            reduction = ((original_size - new_size) / original_size) * 100

            return original_mb, new_mb, reduction

    except Exception as e:
        print(f"  ERROR processing {os.path.basename(input_path)}: {str(e)}")
        return None, None, None

def optimize_directory(input_dir, output_dir, config_name, dry_run=False):
    """
    Optimize all images in a directory.

    Args:
        input_dir: Directory containing original images
        output_dir: Directory to save optimized images
        config_name: Configuration key from CONFIGS dict
        dry_run: If True, only show what would be done without processing
    """
    if not os.path.exists(input_dir):
        print(f"WARNING: Skipping {input_dir} - directory not found")
        return

    config = CONFIGS[config_name]

    print(f"\n{'─' * 70}")
    print(f"Processing: {config['description']}")
    print(f"Directory: {input_dir}")
    print(f"Settings: max_width={config['max_width']}px, quality={config['quality']}")
    print(f"{'─' * 70}")

    # Create output directory
    if not dry_run:
        Path(output_dir).mkdir(parents=True, exist_ok=True)

    # Process all image files
    image_extensions = ('.png', '.jpg', '.jpeg', '.webp')
    files = [f for f in os.listdir(input_dir) if f.lower().endswith(image_extensions)]

    if not files:
        print("WARNING: No images found in this directory")
        return

    total_original = 0
    total_optimized = 0
    processed_count = 0

    for filename in sorted(files):
        input_path = os.path.join(input_dir, filename)

        # Convert to .jpg extension for output
        output_filename = os.path.splitext(filename)[0] + '.jpg'
        output_path = os.path.join(output_dir, output_filename)

        if dry_run:
            file_size_mb = os.path.getsize(input_path) / 1024 / 1024
            print(f"  * {filename} ({file_size_mb:.2f} MB) -> {output_filename}")
        else:
            print(f"Processing: {filename}...", end=' ')
            original_mb, new_mb, reduction = optimize_image(
                input_path, output_path,
                max_width=config['max_width'],
                quality=config['quality']
            )

            if original_mb is not None:
                print(f"OK {original_mb:.2f}MB -> {new_mb:.2f}MB ({reduction:.1f}% reduction)")
                total_original += original_mb
                total_optimized += new_mb
                processed_count += 1

    if not dry_run and processed_count > 0:
        total_reduction = ((total_original - total_optimized) / total_original) * 100
        print(f"\nSummary: {processed_count} images processed")
        print(f"Total size: {total_original:.2f}MB -> {total_optimized:.2f}MB ({total_reduction:.1f}% reduction)")

def main():
    """Main function to optimize all NUMUN website images."""
    print("=" * 70)
    print("NUMUN WEBSITE IMAGE OPTIMIZER")
    print("=" * 70)

    # Base path (adjust if running from different directory)
    base_path = Path(__file__).parent.parent / 'public' / 'images'

    # Define directories to optimize
    directories = [
        ('logos', 'logos_optimized', 'logo'),
        ('team', 'team_optimized', 'team'),
        ('media', 'media_optimized', 'about'),
        ('sponsors', 'sponsors_optimized', 'sponsors'),
        ('', 'backgrounds_optimized', 'background'),  # home_background.png in root
    ]

    # Process each directory
    for input_subdir, output_subdir, config_name in directories:
        input_dir = base_path / input_subdir
        output_dir = base_path / output_subdir

        optimize_directory(str(input_dir), str(output_dir), config_name)

    print("\n" + "=" * 70)
    print("OPTIMIZATION COMPLETE!")
    print("=" * 70)
    print("\nNext steps:")
    print("1. Review the optimized images in *_optimized directories")
    print("2. If satisfied, replace original files:")
    print("   - Backup originals first!")
    print("   - Copy optimized files back to original directories")
    print("3. Update image paths in code if extensions changed (.png -> .jpg)")
    print("\nExpected LCP improvement: 100s -> 2-4s")

if __name__ == '__main__':
    main()
