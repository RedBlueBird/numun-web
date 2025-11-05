"""
Script to process Google Drive image data from test.txt and add to gallery.json

Usage:
    python scripts/process_gallery_images.py --event NetworkingEvent --year 2025

This script:
1. Reads existing gallery.json
2. Reads test.txt containing Google Drive image data
3. Processes the data to extract clean filenames
4. Converts thumbnail URLs to uc URLs
5. Adds new images with specified event and year
6. Writes back to gallery.json
"""

import json
import re
import argparse
from pathlib import Path


def extract_filename(raw_name):
    """Extract clean filename from raw name like 'L1008928.jpg Image More info (Alt + →)'"""
    # Remove the " Image More info (Alt + →)" suffix
    clean_name = re.sub(r'\s+Image\s+More\s+info\s+\(Alt\s+\+\s+→\)', '', raw_name).strip()
    return clean_name


def convert_to_uc_url(thumbnail_url):
    """Convert thumbnail URL to uc URL"""
    # Extract ID from thumbnail URL
    match = re.search(r'id=([^&]+)', thumbnail_url)
    if match:
        file_id = match.group(1)
        return f"https://drive.google.com/uc?export=view&id={file_id}"
    return thumbnail_url


def process_test_data(test_data, event, year):
    """Process test.txt data into gallery format"""
    processed_images = []

    for item in test_data:
        # Extract clean filename
        clean_name = extract_filename(item['name'])

        # Convert to uc URL
        uc_url = convert_to_uc_url(item.get('thumbnailUrl', item.get('url', '')))

        processed_images.append({
            "id": item['id'],
            "name": clean_name,
            "url": uc_url,
            "year": year,
            "event": event
        })

    return processed_images


def main():
    parser = argparse.ArgumentParser(description='Process Google Drive images for gallery')
    parser.add_argument('--event', type=str, default='NetworkingEvent',
                        help='Event name (default: NetworkingEvent)')
    parser.add_argument('--year', type=str, default='2025',
                        help='Year (default: 2025)')
    parser.add_argument('--test-file', type=str, default='test.txt',
                        help='Path to test.txt file (default: test.txt)')
    parser.add_argument('--gallery-file', type=str, default='src/data/gallery.json',
                        help='Path to gallery.json (default: src/data/gallery.json)')
    parser.add_argument('--append', action='store_true',
                        help='Append to existing gallery.json instead of replacing')

    args = parser.parse_args()

    # Get project root
    script_dir = Path(__file__).parent
    project_root = script_dir.parent

    # Read test.txt
    test_file_path = project_root / args.test_file
    print(f"Reading from {test_file_path}")

    with open(test_file_path, 'r', encoding='utf-8') as f:
        test_data = json.load(f)

    # Process the data
    print(f"Processing {len(test_data)} images with event='{args.event}', year='{args.year}'")
    processed_images = process_test_data(test_data, args.event, args.year)

    # Read existing gallery.json if appending
    gallery_file_path = project_root / args.gallery_file
    existing_images = []

    if args.append and gallery_file_path.exists():
        print(f"Reading existing gallery from {gallery_file_path}")
        with open(gallery_file_path, 'r', encoding='utf-8') as f:
            existing_images = json.load(f)
        print(f"Found {len(existing_images)} existing images")

        # Filter out duplicates based on ID
        existing_ids = {img['id'] for img in existing_images}
        new_images = [img for img in processed_images if img['id'] not in existing_ids]

        print(f"Adding {len(new_images)} new images (skipping {len(processed_images) - len(new_images)} duplicates)")
        all_images = existing_images + new_images
    else:
        all_images = processed_images

    # Write to gallery.json
    print(f"Writing {len(all_images)} total images to {gallery_file_path}")
    with open(gallery_file_path, 'w', encoding='utf-8') as f:
        json.dump(all_images, f, indent=2, ensure_ascii=False)

    print("✅ Done!")
    print(f"Total images in gallery: {len(all_images)}")


if __name__ == '__main__':
    main()
