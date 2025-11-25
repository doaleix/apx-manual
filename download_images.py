import os
import re
import requests
from urllib.parse import urlparse

# Configuration
repo_path = "."  # Root of your repository
docs_path = os.path.join(repo_path, "docs")
img_dir = os.path.join(repo_path, "static", "img", "downloads")
os.makedirs(img_dir, exist_ok=True)

# Regex to find image links in markdown ![alt](url)
image_regex = re.compile(r'!\[.*?\]\((https?://.*?)\)')

def download_image(url, save_dir, md_name, seq):
    """Download an image and return the local path"""
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        # Get extension from URL
        path = urlparse(url).path
        ext = os.path.splitext(path)[1] or ".jpg"  # default to .jpg if no extension
        
        filename = f"{md_name}_{seq}{ext}"
        local_path = os.path.join(save_dir, filename)
        
        with open(local_path, 'wb') as f:
            for chunk in response.iter_content(1024):
                f.write(chunk)
        return os.path.relpath(local_path, repo_path).replace("\\", "/")
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return None

def process_markdown(file_path):
    md_name = os.path.splitext(os.path.basename(file_path))[0]
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    updated = False
    seq = 1
    for match in image_regex.findall(content):
        local_path = download_image(match, img_dir, md_name, seq)
        if local_path:
            content = content.replace(match, local_path)
            updated = True
            seq += 1
    
    if updated:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")

def main():
    for root, dirs, files in os.walk(docs_path):
        for file in files:
            if file.endswith(".md"):
                md_file = os.path.join(root, file)
                process_markdown(md_file)

if __name__ == "__main__":
    main()
