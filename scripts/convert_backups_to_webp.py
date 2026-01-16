"""
Convert images from backups/ to WebP format in public/images/

This script:
1. Recursively finds all PNG, JPG, JPEG images in backups/
2. Converts them to WebP format (quality=85 by default)
3. Places them in public/images/ maintaining directory structure
4. Overwrites existing WebP files
5. Provides detailed progress and statistics

Usage:
    # Dry run (preview changes)
    python scripts/convert_backups_to_webp.py --dry-run

    # Convert with default quality (85)
    python scripts/convert_backups_to_webp.py

    # Custom quality
    python scripts/convert_backups_to_webp.py --quality 90

    # Custom source/destination paths
    python scripts/convert_backups_to_webp.py --source backups --dest public/images
"""

import argparse
import sys
import tempfile
from pathlib import Path
from typing import Dict, List

try:
    from PIL import Image, ImageOps
except ImportError:
    print("ERROR: Pillow is not installed.")
    print("Install it with: pip install Pillow")
    sys.exit(1)


def validate_pillow_webp_support():
    """Validate that Pillow has WebP support compiled in."""
    try:
        # Try to create a small test WebP image
        test_img = Image.new('RGB', (10, 10), color='red')
        with tempfile.NamedTemporaryFile(suffix='.webp', delete=False) as tmp:
            tmp_path = tmp.name
        test_img.save(tmp_path, 'WEBP')
        Path(tmp_path).unlink()  # Clean up
        print("[OK] Pillow WebP support verified")
    except Exception as e:
        print("ERROR: Pillow does not have WebP support.")
        print(f"Error: {e}")
        print("\nTo fix this, reinstall Pillow with WebP support:")
        print("  pip uninstall Pillow")
        print("  pip install Pillow")
        sys.exit(1)


def find_images_in_source(source_root: Path) -> List[Path]:
    """
    Recursively find all convertible images in source directory.

    Args:
        source_root: Root directory to search

    Returns:
        Sorted list of image paths to convert
    """
    images = []
    convertible_exts = {'.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'}

    for item in source_root.rglob('*'):
        # Check if it's a convertible image
        if item.is_file() and item.suffix in convertible_exts:
            images.append(item)

    return sorted(images)


def convert_and_place(
    input_path: Path,
    source_root: Path,
    dest_root: Path,
    quality: int = 85,
    dry_run: bool = False
) -> Dict:
    """
    Convert a single image to WebP format and place in destination directory.

    Args:
        input_path: Path to the input image
        source_root: Root of source directory (for computing relative path)
        dest_root: Root of destination directory
        quality: WebP quality (1-100)
        dry_run: If True, don't actually create files

    Returns:
        Dictionary with conversion statistics and status
    """
    try:
        # Compute relative path from source root
        relative_path = input_path.relative_to(source_root)

        # Compute destination path (change extension to .webp)
        output_path = dest_root / relative_path.with_suffix('.webp')

        # Open and validate image
        with Image.open(input_path) as img:
            # Apply EXIF orientation to fix rotation issues
            img = ImageOps.exif_transpose(img)

            # Preserve alpha channel for RGBA/LA images
            if img.mode in ('RGBA', 'LA'):
                # Keep alpha channel
                pass
            elif img.mode == 'P':
                # Convert palette mode to RGBA if it has transparency
                if 'transparency' in img.info:
                    img = img.convert('RGBA')
                else:
                    img = img.convert('RGB')
            elif img.mode != 'RGB':
                img = img.convert('RGB')

            # Get original size
            original_size = input_path.stat().st_size

            if dry_run:
                # For dry run, save to temp location to estimate size
                with tempfile.NamedTemporaryFile(suffix='.webp', delete=False) as tmp:
                    temp_path = Path(tmp.name)
                img.save(temp_path, 'WEBP', quality=quality, method=6)
                new_size = temp_path.stat().st_size
                temp_path.unlink()  # Clean up temp file
            else:
                # Create destination directory if it doesn't exist
                output_path.parent.mkdir(parents=True, exist_ok=True)

                # Save to temp first, then replace (atomic operation)
                temp_path = output_path.with_suffix('.webp.tmp')
                img.save(temp_path, 'WEBP', quality=quality, method=6)
                new_size = temp_path.stat().st_size

                # Replace existing file or create new one
                temp_path.replace(output_path)

            savings = original_size - new_size
            savings_percent = (savings / original_size * 100) if original_size > 0 else 0

            return {
                'original_path': str(input_path),
                'new_path': str(output_path),
                'original_size': original_size,
                'new_size': new_size,
                'savings': savings,
                'savings_percent': savings_percent,
                'success': True,
                'error': None
            }

    except Exception as e:
        return {
            'original_path': str(input_path),
            'new_path': None,
            'original_size': 0,
            'new_size': 0,
            'savings': 0,
            'savings_percent': 0,
            'success': False,
            'error': str(e)
        }


def print_conversion_summary(results: List[Dict]):
    """Print a formatted summary of conversion results."""
    total = len(results)
    successful = sum(1 for r in results if r['success'])
    failed = total - successful

    total_original_size = sum(r['original_size'] for r in results)
    total_new_size = sum(r['new_size'] for r in results if r['success'])
    total_savings = total_original_size - total_new_size
    savings_percent = (total_savings / total_original_size * 100) if total_original_size > 0 else 0

    # Convert to MB
    original_mb = total_original_size / 1024 / 1024
    new_mb = total_new_size / 1024 / 1024
    savings_mb = total_savings / 1024 / 1024

    print("\n" + "=" * 65)
    print(" " * 20 + "CONVERSION SUMMARY")
    print("=" * 65)
    print(f"Total files processed:        {total}")
    print(f"Successful conversions:       {successful}")
    print(f"Failed conversions:           {failed}")
    print()
    print(f"Original total size:          {original_mb:.2f} MB")
    print(f"New total size:              {new_mb:.2f} MB")
    print(f"Total savings:               {savings_mb:.2f} MB ({savings_percent:.1f}%)")

    # Show top 5 files with most savings
    if successful > 0:
        successful_results = [r for r in results if r['success']]
        top_5 = sorted(successful_results, key=lambda x: x['savings'], reverse=True)[:5]

        print("\n" + "=" * 65)
        print("Top files with most savings:")
        print("=" * 65)
        for idx, result in enumerate(top_5, 1):
            path = Path(result['original_path'])
            name = path.name
            orig_mb = result['original_size'] / 1024 / 1024
            new_mb = result['new_size'] / 1024 / 1024
            saved_mb = result['savings'] / 1024 / 1024
            percent = result['savings_percent']
            print(f"{idx}. {name}")
            print(f"   {orig_mb:.2f} MB → {new_mb:.2f} MB ({saved_mb:.2f} MB saved, {percent:.1f}%)")

    # Show errors if any
    if failed > 0:
        print("\n" + "=" * 65)
        print("ERRORS:")
        print("=" * 65)
        for result in results:
            if not result['success']:
                print(f"  - {result['original_path']}: {result['error']}")

    print("=" * 65 + "\n")


def process_with_progress(
    images: List[Path],
    source_root: Path,
    dest_root: Path,
    quality: int,
    dry_run: bool
) -> List[Dict]:
    """
    Process images with progress reporting.

    Args:
        images: List of image paths to convert
        source_root: Root source directory (for relative paths)
        dest_root: Root destination directory
        quality: WebP quality level
        dry_run: If True, don't actually modify files

    Returns:
        List of conversion result dictionaries
    """
    total = len(images)
    results = []

    print(f"\n{'DRY RUN: ' if dry_run else ''}Converting {total} images to WebP (quality={quality})...\n")
    print(f"Source: {source_root}")
    print(f"Destination: {dest_root}\n")

    for idx, img_path in enumerate(images, 1):
        # Show progress
        try:
            rel_path = img_path.relative_to(source_root)
        except ValueError:
            rel_path = img_path

        print(f"[{idx}/{total}] {rel_path}...", end=' ', flush=True)

        # Convert
        result = convert_and_place(img_path, source_root, dest_root, quality, dry_run)
        results.append(result)

        if result['success']:
            savings_mb = result['savings'] / 1024 / 1024
            print(f"OK ({savings_mb:.2f} MB saved, {result['savings_percent']:.1f}%)")
        else:
            print(f"FAILED: {result['error']}")

    return results


def main():
    """Main execution function."""
    parser = argparse.ArgumentParser(
        description='Convert images from backups/ to WebP format in public/images/',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Dry run (show what would happen)
  python scripts/convert_backups_to_webp.py --dry-run

  # Convert with default quality (85)
  python scripts/convert_backups_to_webp.py

  # Convert with custom quality
  python scripts/convert_backups_to_webp.py --quality 90

  # Specify custom paths
  python scripts/convert_backups_to_webp.py --source backups --dest public/images
        """
    )

    parser.add_argument(
        '--quality',
        type=int,
        default=85,
        help='WebP quality level (1-100, default: 85)'
    )

    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be converted without making changes'
    )

    parser.add_argument(
        '--source',
        type=str,
        default='backups',
        help='Path to source directory (default: backups)'
    )

    parser.add_argument(
        '--dest',
        type=str,
        default='public/images',
        help='Path to destination directory (default: public/images)'
    )

    args = parser.parse_args()

    # Validate quality range
    if not 1 <= args.quality <= 100:
        print("ERROR: Quality must be between 1 and 100")
        sys.exit(1)

    # Validate environment
    validate_pillow_webp_support()

    # Setup paths
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    source_root = project_root / args.source
    dest_root = project_root / args.dest

    # Validate paths
    if not source_root.exists():
        print(f"ERROR: Source directory not found: {source_root}")
        sys.exit(1)

    if not dest_root.exists():
        print(f"WARNING: Destination directory does not exist: {dest_root}")
        print("It will be created during conversion.")

    # Find images to convert
    print(f"\nScanning {source_root} for images...")
    images = find_images_in_source(source_root)

    if not images:
        print("No images found to convert.")
        return

    print(f"Found {len(images)} images to convert")
    if args.dry_run:
        print("DRY RUN MODE: No files will be modified")

    # Confirm if not dry run
    if not args.dry_run:
        response = input("\nProceed with conversion? [y/N]: ")
        if response.lower() != 'y':
            print("Cancelled.")
            return

    # Convert images
    results = process_with_progress(images, source_root, dest_root, args.quality, args.dry_run)

    # Print summary
    print_conversion_summary(results)

    # Exit with appropriate code
    if any(not r['success'] for r in results):
        sys.exit(1)

    if args.dry_run:
        print("DRY RUN complete. Run without --dry-run to apply changes.\n")
    else:
        print("Conversion complete!\n")


if __name__ == '__main__':
    main()
