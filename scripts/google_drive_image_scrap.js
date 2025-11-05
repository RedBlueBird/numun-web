const imageData = [];

// Method 1: From thumbnail elements
document.querySelectorAll('[data-id]').forEach(element => {
  const fileId = element.getAttribute('data-id');
  const fileName = element.getAttribute('aria-label') ||
element.querySelector('[data-tooltip]')?.getAttribute('data-tooltip');

  if (fileId && fileName) {
    imageData.push({
      id: fileId,
      name: fileName,
      directUrl: `https://drive.google.com/uc?export=view&id=${fileId}`,
      thumbnailUrl: `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
    });
  }
});

imageData;