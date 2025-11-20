"""
Optimize logo with transparency preserved
Uses PNG instead of JPEG to maintain alpha channel
"""

from PIL import Image
import os

def optimize_logo_with_transparency(input_path, output_path, max_width=512):
    """
    Optimize PNG logo while preserving transparency

    Args:
        input_path: Path to original PNG with transparency
        output_path: Path to save optimized PNG
        max_width: Maximum width in pixels
    """
    with Image.open(input_path) as img:
        # Ensure we're working with RGBA mode for transparency
        if img.mode != 'RGBA':
            img = img.convert('RGBA')

        # Calculate new dimensions maintaining aspect ratio
        aspect_ratio = img.height / img.width
        new_width = min(max_width, img.width)
        new_height = int(new_width * aspect_ratio)

        # Resize with high-quality Lanczos algorithm
        img_resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

        # Save as PNG with optimization
        img_resized.save(output_path, 'PNG', optimize=True)

        # Print results
        original_size = os.path.getsize(input_path) / 1024 / 1024
        new_size = os.path.getsize(output_path) / 1024 / 1024
        reduction = ((original_size - new_size) / original_size) * 100

        print(f"Original: {original_size:.2f} MB")
        print(f"Optimized: {new_size:.2f} MB ({reduction:.1f}% reduction)")
        print(f"Transparency: Preserved")

if __name__ == '__main__':
    input_file = 'C:/Users/jiefu/Documents/WebProjects/numun-web/public/images/backups/numun_logo.png'
    output_file = 'C:/Users/jiefu/Documents/WebProjects/numun-web/public/images/logos/numun_logo.png'

    print("Optimizing logo with transparency...")
    optimize_logo_with_transparency(input_file, output_file, max_width=512)
    print(f"\nOptimized logo saved to: {output_file}")
