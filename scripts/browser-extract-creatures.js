/**
 * Browser Script for Creature Image Extraction
 * 
 * This script runs in browser console on creature detail pages
 * to extract and coordinate image data for download.
 * 
 * Usage:
 * 1. Open https://evolisca.com/?subtopic=creatures&creature=CREATURE_NAME
 * 2. Open browser DevTools (F12)
 * 3. Go to Console tab
 * 4. Paste entire script and press Enter
 * 5. Follow instructions to save images
 */

(function() {
  console.log('%c🖼️ Evolisca Image Extractor', 'font-size: 20px; font-weight: bold; color: #fbbf24;');
  
  // Get page title to determine creature name
  const creatureNameElement = document.querySelector('h1, .creature-name, [data-creature-name]');
  const creatureName = creatureNameElement 
    ? creatureNameElement.textContent.trim()
    : document.title.split('|')[0].trim();

  console.log(`\n📍 Creature: ${creatureName}\n`);

  // Extract all images on page
  const images = Array.from(document.querySelectorAll('img'));
  
  if (images.length === 0) {
    console.warn('⚠️  No images found on this page');
    return;
  }

  console.log(`Found ${images.length} images:\n`);

  // Group images by type
  const imageGroups = {
    creatures: [],
    items: [],
    ui: [],
    other: []
  };

  images.forEach((img, idx) => {
    const src = img.src || img.getAttribute('data-src');
    const alt = img.alt || '';
    const title = img.title || '';
    
    if (!src) return;

    // Categorize image
    let category = 'other';
    if (src.includes('items2')) category = 'items';
    else if (src.includes('creatures') || src.includes('monster')) category = 'creatures';
    else if (src.includes('logo') || src.includes('navigation') || src.includes('header')) category = 'ui';

    imageGroups[category].push({
      src,
      alt,
      title,
      size: img.naturalWidth ? `${img.naturalWidth}x${img.naturalHeight}px` : 'unknown'
    });
  });

  // Display categorized results
  Object.entries(imageGroups).forEach(([category, imgs]) => {
    if (imgs.length > 0) {
      console.log(`%c${category.toUpperCase()} IMAGES (${imgs.length})`, 'font-weight: bold; color: #87ceeb;');
      imgs.forEach((img, idx) => {
        const filename = extractFilename(img.src);
        console.log(`  ${idx + 1}. ${filename}`);
        console.log(`     URL: ${img.src}`);
        if (img.alt) console.log(`     Alt: ${img.alt}`);
        console.log(`     Size: ${img.size}`);
      });
      console.log('');
    }
  });

  // Generate download instructions
  console.log('%c📥 HOW TO DOWNLOAD IMAGES', 'font-weight: bold; color: #90ee90; font-size: 14px;');
  console.log(`
For each image you want to save:
1. Right-click on image
2. Select "Save image as..."
3. Navigate to: public/images/[category]/
4. Use filename: [normalized-name].[extension]

Example filepaths:
- Items: public/images/items/ominous-helmet.gif
- Creatures: public/images/creatures/${normalizeFilename(creatureName)}.png
- UI: public/images/ui/logo.png
  `);

  // Provide JSON export option
  console.log('%c📋 JSON EXPORT', 'font-weight: bold; color: #ffd700; font-size: 14px;');
  
  const jsonData = {
    creature: creatureName,
    timestamp: new Date().toISOString(),
    imageCount: images.length,
    categories: {}
  };

  Object.entries(imageGroups).forEach(([category, imgs]) => {
    if (imgs.length > 0) {
      jsonData.categories[category] = imgs.map(img => ({
        filename: extractFilename(img.src),
        normalizedName: normalizeFilename(extractFilename(img.src).split('.')[0]),
        url: img.src,
        alt: img.alt,
        size: img.size,
        downloadPath: `/images/${category}/${normalizeFilename(extractFilename(img.src).split('.')[0])}.${getExtension(img.src)}`
      }));
    }
  });

  console.log('\nCopy this JSON data:');
  console.log(JSON.stringify(jsonData, null, 2));
  console.log('\n✅ Paste the above into public/data/image-manifest.json for reference\n');

  // Add helper functions to window for manual use
  window.evoliscaImageHelper = {
    download: (url, filename) => downloadImage(url, filename),
    getJSON: () => jsonData,
    images: imageGroups
  };

  console.log('%c💡 HELPER FUNCTIONS', 'font-weight: bold; color: #ff69b4;');
  console.log(`
  evoliscaImageHelper.images       // View all extracted images
  evoliscaImageHelper.getJSON()    // Get JSON export
  evoliscaImageHelper.download(url, filename)  // Download single image
  `);

  // Helper function to extract filename from URL
  function extractFilename(url) {
    try {
      return new URL(url).pathname.split('/').pop();
    } catch {
      return url.split('/').pop() || 'unknown';
    }
  }

  // Helper function to get file extension
  function getExtension(url) {
    const match = url.match(/\.([a-z0-9]+)(?:\?|$)/i);
    return match ? match[1] : 'gif';
  }

  // Helper function to normalize filename
  function normalizeFilename(name) {
    return name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '')
      .replace(/\-+/g, '-')
      .replace(/^\-|\-$/g, '');
  }

  // Helper function to download image
  function downloadImage(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || extractFilename(url);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(`✓ Downloaded: ${link.download}`);
  }

  console.log('%c✨ Ready for image extraction!', 'font-weight: bold; color: #00ff00; font-size: 12px;');
})();
