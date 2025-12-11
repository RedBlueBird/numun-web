"""
Convert images to WebP format for optimal compression.

This script:
1. Recursively finds all PNG, JPG, JPEG images in public/images/
2. Converts them to WebP format (quality=85 by default)
3. Replaces original files with WebP versions
4. Updates TypeScript source file references
5. Provides detailed progress and statistics

Usage:
    # Dry run (preview changes)
    python scripts/convert_to_webp.py --dry-run

    # Convert with default quality (85)
    python scripts/convert_to_webp.py

    # Custom quality
    python scripts/convert_to_webp.py --quality 90

    # Skip source reference updates
    python scripts/convert_to_webp.py --no-update-refs
"""

import argparse
import re
import sys
import tempfile
from pathlib import Path
from typing import Dict, List, Set

try:
    from PIL import Image
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


def find_images_to_convert(images_root: Path, exclude_dirs: Set[str]) -> List[Path]:
    """
    Recursively find all convertible images, excluding specified directories.

    Args:
        images_root: Root directory to search
        exclude_dirs: Set of directory names to exclude (e.g., {'backup'})

    Returns:
        Sorted list of image paths to convert
    """
    images = []
    convertible_exts = {'.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'}

    for item in images_root.rglob('*'):
        # Skip if in excluded directory
        if any(excluded in item.parts for excluded in exclude_dirs):
            continue

        # Check if it's a convertible image
        if item.is_file() and item.suffix in convertible_exts:
            images.append(item)

    return sorted(images)


def convert_to_webp(input_path: Path, quality: int = 85, dry_run: bool = False) -> Dict:
    """
    Convert a single image to WebP format.

    Args:
        input_path: Path to the input image
        quality: WebP quality (1-100)
        dry_run: If True, don't actually replace files

    Returns:
        Dictionary with conversion statistics and status
    """
    try:
        # Open and validate image
        with Image.open(input_path) as img:
            # Apply EXIF orientation to fix rotation issues
            from PIL import ImageOps
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

            # Prepare output path
            output_path = input_path.with_suffix('.webp')

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
                # Save to temp first, then replace (atomic operation)
                temp_path = output_path.with_suffix('.webp.tmp')
                img.save(temp_path, 'WEBP', quality=quality, method=6)
                new_size = temp_path.stat().st_size

                # Replace original with WebP
                temp_path.replace(output_path)

                # Delete original only if it's different from output
                if input_path != output_path:
                    input_path.unlink()

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


def update_source_references(src_root: Path, dry_run: bool = False) -> Dict:
    """
    Update image references in TypeScript files from old extensions to .webp.

    Args:
        src_root: Root directory of source files
        dry_run: If True, don't actually modify files

    Returns:
        Dictionary with update statistics
    """
    # Pattern to match image paths with old extensions
    pattern = re.compile(
        r'(/images/[^"\']+)\.(jpg|JPG|jpeg|JPEG|png|PNG)(["\'])',
        re.MULTILINE
    )

    stats = {
        'files_scanned': 0,
        'files_modified': 0,
        'references_updated': 0
    }

    # Find all TS/TSX files
    ts_files = list(src_root.rglob('*.ts')) + list(src_root.rglob('*.tsx'))

    for ts_file in ts_files:
        stats['files_scanned'] += 1

        try:
            content = ts_file.read_text(encoding='utf-8')
            original_content = content

            # Replace extensions
            updated_content = pattern.sub(r'\1.webp\3', content)

            if updated_content != original_content:
                stats['files_modified'] += 1

                # Count replacements
                matches = pattern.findall(original_content)
                stats['references_updated'] += len(matches)

                if not dry_run:
                    ts_file.write_text(updated_content, encoding='utf-8')

                rel_path = ts_file.relative_to(src_root)
                print(f"  Updated {len(matches)} reference(s) in {rel_path}")

        except Exception as e:
            print(f"  WARNING: Could not update {ts_file}: {e}")

    return stats


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


def process_with_progress(images: List[Path], images_root: Path, quality: int, dry_run: bool) -> List[Dict]:
    """
    Process images with progress reporting.

    Args:
        images: List of image paths to convert
        images_root: Root images directory (for relative paths)
        quality: WebP quality level
        dry_run: If True, don't actually modify files

    Returns:
        List of conversion result dictionaries
    """
    total = len(images)
    results = []

    print(f"\n{'DRY RUN: ' if dry_run else ''}Converting {total} images to WebP (quality={quality})...\n")

    for idx, img_path in enumerate(images, 1):
        # Show progress
        try:
            rel_path = img_path.relative_to(images_root)
        except ValueError:
            rel_path = img_path

        print(f"[{idx}/{total}] {rel_path}...", end=' ', flush=True)

        # Convert
        result = convert_to_webp(img_path, quality, dry_run)
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
        description='Convert images to WebP format',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Dry run (show what would happen)
  python scripts/convert_to_webp.py --dry-run

  # Convert with default quality (85)
  python scripts/convert_to_webp.py

  # Convert with custom quality
  python scripts/convert_to_webp.py --quality 90

  # Convert without updating source references
  python scripts/convert_to_webp.py --no-update-refs

  # Specify custom paths
  python scripts/convert_to_webp.py --images-dir public/images --src-dir src
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
        '--images-dir',
        type=str,
        default='public/images',
        help='Path to images directory (default: public/images)'
    )

    parser.add_argument(
        '--src-dir',
        type=str,
        default='src',
        help='Path to source directory for reference updates (default: src)'
    )

    parser.add_argument(
        '--no-update-refs',
        action='store_true',
        help='Skip updating source file references'
    )

    parser.add_argument(
        '--exclude',
        type=str,
        nargs='+',
        default=['backup'],
        help='Directories to exclude (default: backup)'
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
    images_root = project_root / args.images_dir
    src_root = project_root / args.src_dir

    # Validate paths
    if not images_root.exists():
        print(f"ERROR: Images directory not found: {images_root}")
        sys.exit(1)

    # Find images to convert
    print(f"\nScanning {images_root} for images...")
    exclude_dirs = set(args.exclude)
    images = find_images_to_convert(images_root, exclude_dirs)

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
    results = process_with_progress(images, images_root, args.quality, args.dry_run)

    # Update source references
    if not args.no_update_refs and src_root.exists():
        print(f"\n{'DRY RUN: ' if args.dry_run else ''}Updating source file references in {src_root}...")
        ref_stats = update_source_references(src_root, args.dry_run)
        print(f"Scanned {ref_stats['files_scanned']} files")
        print(f"Updated {ref_stats['references_updated']} references in {ref_stats['files_modified']} files")

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
