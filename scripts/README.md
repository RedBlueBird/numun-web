# NUMUN Image Optimization Script

This script automatically resizes and compresses all images on the NUMUN website to improve loading performance.

## Quick Start

### 1. Install Dependencies

```bash
pip install -r scripts/requirements.txt
```

Or install Pillow directly:

```bash
pip install Pillow
```

### 2. Run the Script

```bash
python scripts/optimize_images.py
```

## What It Does

The script processes images in the following directories:

| Directory | Original Size | Target Size | Quality | Purpose |
|-----------|--------------|-------------|---------|---------|
| `public/images/logos/` | 9.6 MB | ~50-80 KB | 90% | Logo files |
| `public/images/team/` | 20.3 MB | ~500 KB | 85% | Team photos |
| `public/images/media/` | 8.4 MB | ~1 MB | 80% | About page images |
| `public/images/sponsors/` | 1.1 MB | ~300 KB | 85% | Sponsor logos |
| `public/images/` | 895 KB | ~150 KB | 75% | Background images |

### Output

Optimized images are saved in `*_optimized` directories:
- `public/images/logos_optimized/`
- `public/images/team_optimized/`
- `public/images/media_optimized/`
- `public/images/sponsors_optimized/`
- `public/images/backgrounds_optimized/`

## Configuration

Edit the `CONFIGS` dictionary in `optimize_images.py` to adjust settings:

```python
CONFIGS = {
    'logo': {
        'max_width': 512,      # Maximum width in pixels
        'quality': 90,         # JPEG quality (1-100)
        'description': 'Logo files'
    },
    # ... more configs
}
```

### Quality Guidelines

- **90-100**: Minimal compression, best quality (use for logos)
- **80-90**: Good balance (use for photos)
- **70-80**: More compression (use for backgrounds)
- **60-70**: High compression (only if quality is acceptable)

## How to Apply Optimized Images

### Option 1: Manual Replacement (Recommended)

1. **Backup originals** (important!)
   ```bash
   mkdir public/images/backups
   cp -r public/images/logos public/images/backups/
   cp -r public/images/team public/images/backups/
   # ... backup other directories
   ```

2. **Review optimized images** - Check quality is acceptable

3. **Replace originals**
   ```bash
   cp public/images/logos_optimized/* public/images/logos/
   cp public/images/team_optimized/* public/images/team/
   cp public/images/media_optimized/* public/images/media/
   cp public/images/sponsors_optimized/* public/images/sponsors/
   cp public/images/backgrounds_optimized/* public/images/
   ```

4. **Update file extensions** if changed (`.png` → `.jpg`)

### Option 2: PowerShell Script (Windows)

```powershell
# Backup
xcopy public\images\logos public\images\backups\logos\ /E /I
xcopy public\images\team public\images\backups\team\ /E /I

# Replace
xcopy public\images\logos_optimized\* public\images\logos\ /Y
xcopy public\images\team_optimized\* public\images\team\ /Y
xcopy public\images\media_optimized\* public\images\media\ /Y
xcopy public\images\sponsors_optimized\* public\images\sponsors\ /Y
xcopy public\images\backgrounds_optimized\* public\images\ /Y
```

## Expected Results

### Performance Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **LCP** | 100s | 2-4s | 96% faster |
| **Total Image Weight** | ~42 MB | ~2-3 MB | 93% reduction |
| **Initial Page Load** | ~20 MB | ~500 KB | 97% reduction |

### File-Specific Reductions

- **numun_logo.png**: 9.6 MB → ~50 KB (99.5%)
- **edeline_luisia.jpg**: 9.3 MB → ~150 KB (98%)
- **kayla_gusti_haruni.jpg**: 11 MB → ~150 KB (98%)
- **emily_okada.png**: 583 KB → ~100 KB (83%)

## Troubleshooting

### "Module not found: PIL"
Install Pillow: `pip install Pillow`

### "Permission denied"
Run with elevated permissions or check file permissions

### Images look blurry
Increase `quality` setting in CONFIGS (try 90-95)

### Wrong colors on PNG→JPG conversion
The script converts transparent backgrounds to white. If you need transparency, keep as PNG or use WebP format.

## Advanced Usage

### Dry Run (Preview Only)

To see what would be processed without actually optimizing:

```python
# In optimize_images.py, modify the main() function:
optimize_directory(str(input_dir), str(output_dir), config_name, dry_run=True)
```

### Process Single Directory

```python
from scripts.optimize_images import optimize_directory

optimize_directory(
    'public/images/logos',
    'public/images/logos_optimized',
    'logo'
)
```

## Notes

- **Always backup** original files before replacing
- Script converts PNG to JPEG for better compression
- Maintains aspect ratios automatically
- Uses high-quality Lanczos resampling
- Progressive JPEG for better web loading
- Won't upscale images (only downscale if needed)

## Support

For issues or questions, check:
- [Pillow Documentation](https://pillow.readthedocs.io/)
- NUMUN Development Team
