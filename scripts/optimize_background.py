"""
Optimize background image while preserving PNG format
"""

from PIL import Image
import os

def optimize_background(input_path, output_path, max_width=1920, quality=85):
    """
    Optimize background PNG image

    Args:
        input_path: Path to original PNG
        output_path: Path to save optimized PNG
        max_width: Maximum width in pixels
        quality: Quality for optimization (if needed)
    """
    with Image.open(input_path) as img:
        # Check if image has transparency
        has_transparency = img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info)

        # Calculate new dimensions maintaining aspect ratio
        aspect_ratio = img.height / img.width
        new_width = min(max_width, img.width)
        new_height = int(new_width * aspect_ratio)

        # Resize with high-quality Lanczos algorithm
        img_resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

        # Save as optimized PNG
        if has_transparency:
            # Keep transparency
            if img_resized.mode != 'RGBA':
                img_resized = img_resized.convert('RGBA')
            img_resized.save(output_path, 'PNG', optimize=True)
        else:
            # Convert to RGB and save as PNG (smaller)
            if img_resized.mode != 'RGB':
                img_resized = img_resized.convert('RGB')
            img_resized.save(output_path, 'PNG', optimize=True)

        # Print results
        original_size = os.path.getsize(input_path) / 1024 / 1024
        new_size = os.path.getsize(output_path) / 1024 / 1024
        reduction = ((original_size - new_size) / original_size) * 100

        print(f"Original: {original_size:.2f} MB")
        print(f"Optimized: {new_size:.2f} MB ({reduction:.1f}% reduction)")
        print(f"Has transparency: {has_transparency}")

if __name__ == '__main__':
    input_file = 'C:/Users/jiefu/Documents/WebProjects/numun-web/public/images/backups/home_background.png'
    output_file = 'C:/Users/jiefu/Documents/WebProjects/numun-web/public/images/home_background.png'

    print("Optimizing background image...")
    optimize_background(input_file, output_file, max_width=1920)
    print(f"\nOptimized background saved to: {output_file}")
