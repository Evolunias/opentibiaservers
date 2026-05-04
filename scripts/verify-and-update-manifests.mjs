/**
 * Image Verification & Manifest Management Script
 * 
 * Verifies downloaded images, updates manifest status, and provides reports
 * on what's missing and needs to be extracted.
 * 
 * Usage: node scripts/verify-and-update-manifests.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const spritesDir = path.join(projectRoot, 'public', 'sprites', 'items');
const imagesDir = path.join(projectRoot, 'public', 'images');
const uiImagesDir = path.join(projectRoot, 'public', 'images', 'ui');
const itemSpritesPath = path.join(projectRoot, 'public', 'data', 'item-sprites.json');
const imageManifestPath = path.join(projectRoot, 'public', 'data', 'image-manifest.json');
const spriteMappingPath = path.join(projectRoot, 'public', 'data', 'sprite-mapping.json');

// Helper functions
function normalizeKey(str) {
  return String(str).toLowerCase().trim().replace(/\s+/g, '-');
}

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Load data files
function loadDataFiles() {
  console.log('📂 Loading data files...\n');
  
  const itemSprites = JSON.parse(fs.readFileSync(itemSpritesPath, 'utf8'));
  const spriteMapping = JSON.parse(fs.readFileSync(spriteMappingPath, 'utf8'));
  
  let imageManifest = {};
  try {
    imageManifest = JSON.parse(fs.readFileSync(imageManifestPath, 'utf8'));
  } catch {
    imageManifest = {
      version: '1.0',
      lastUpdated: new Date().toISOString(),
      description: 'Image manifest created by verification script',
      imageSources: {
        items: 'Item sprites',
        ui: 'UI assets'
      },
      images: { ui: {}, items: {}, creatures: {} },
      itemSpritesMapping: { items: {} },
      creatureImagesMapping: { creatures: {} },
      downloadStatus: { total: 0, downloaded: 0, pending: 0, failed: 0 }
    };
  }
  
  return { itemSprites, spriteMapping, imageManifest };
}

// Verify all downloaded item sprites
function verifyItemSprites(itemSprites) {
  console.log('🔍 Verifying item sprites...\n');
  
  const results = {
    downloaded: [],
    missing: [],
    total: 0,
    totalSize: 0
  };
  
  const uniqueIds = new Set();
  itemSprites.items.forEach(item => uniqueIds.add(item.id));
  
  for (const id of uniqueIds) {
    const item = itemSprites.items.find(i => i.id === id);
    if (item) {
      results.total++;
      const filePath = path.join(spritesDir, `${id}.gif`);
      
      if (fs.existsSync(filePath)) {
        const size = getFileSize(filePath);
        results.downloaded.push({
          name: item.name,
          id: item.id,
          path: `/sprites/items/${id}.gif`,
          size: size,
          sizeFormatted: formatBytes(size)
        });
        results.totalSize += size;
      } else {
        results.missing.push({
          name: item.name,
          id: item.id,
          url: item.sprite
        });
      }
    }
  }
  
  return results;
}

// Verify UI assets
function verifyUIAssets() {
  console.log('🎨 Verifying UI assets...\n');
  
  const results = {
    downloaded: [],
    missing: []
  };
  
  const assets = [
    { name: 'Logo', file: 'logo.png', url: 'https://evolisca.com/templates/server/images/logo.png' }
  ];
  
  assets.forEach(asset => {
    const filePath = path.join(uiImagesDir, asset.file);
    if (fs.existsSync(filePath)) {
      const size = getFileSize(filePath);
      results.downloaded.push({
        name: asset.name,
        file: asset.file,
        size: size,
        sizeFormatted: formatBytes(size),
        path: `/images/ui/${asset.file}`
      });
    } else {
      results.missing.push({
        name: asset.name,
        file: asset.file,
        url: asset.url
      });
    }
  });
  
  return results;
}

// Generate download instructions for missing images
function generateDownloadInstructions(itemResults, uiResults) {
  const instructions = {
    itemIds: [],
    itemUrls: [],
    uiAssets: uiResults.missing
  };
  
  itemResults.missing.forEach(item => {
    instructions.itemIds.push(item.id);
    instructions.itemUrls.push(item.url);
  });
  
  return instructions;
}

// Update manifest with verification results
function updateManifest(manifest, itemResults, uiResults, spriteMapping) {
  console.log('📋 Updating manifest...\n');
  
  // Update item sprites mapping
  const itemsMapping = {};
  const processedItems = new Set();
  
  itemResults.downloaded.forEach(item => {
    const key = normalizeKey(item.name);
    if (!processedItems.has(key)) {
      itemsMapping[key] = {
        name: item.name,
        id: item.id,
        internalPath: item.path,
        externalUrl: `https://evolisca.com/images/items2/${item.id}.gif`,
        status: 'downloaded',
        downloadedDate: new Date().toISOString().split('T')[0],
        fileSize: item.size
      };
      processedItems.add(key);
    }
  });
  
  itemResults.missing.forEach(item => {
    const key = normalizeKey(item.name);
    if (!processedItems.has(key)) {
      itemsMapping[key] = {
        name: item.name,
        id: item.id,
        internalPath: `/sprites/items/${item.id}.gif`,
        externalUrl: item.url,
        status: 'pending',
        downloadedDate: null,
        fileSize: 0
      };
      processedItems.add(key);
    }
  });
  
  // Update UI assets
  if (uiResults.downloaded.length > 0) {
    manifest.images.ui.logo = {
      name: 'Evolisca Logo',
      internalPath: '/images/ui/logo.png',
      externalUrl: 'https://evolisca.com/templates/server/images/logo.png',
      status: 'downloaded',
      downloadedDate: new Date().toISOString().split('T')[0],
      fileSize: uiResults.downloaded[0].size
    };
  } else if (uiResults.missing.length > 0) {
    manifest.images.ui.logo = {
      name: 'Evolisca Logo',
      internalPath: '/images/ui/logo.png',
      externalUrl: uiResults.missing[0].url,
      status: 'pending',
      downloadedDate: null,
      fileSize: 0
    };
  }
  
  // Update statistics
  const totalDownloaded = itemResults.downloaded.length + uiResults.downloaded.length;
  const totalMissing = itemResults.missing.length + uiResults.missing.length;
  const totalItems = itemResults.total + 1; // +1 for logo
  
  manifest.itemSpritesMapping.items = itemsMapping;
  manifest.itemSpritesMapping.itemCount = Object.keys(itemsMapping).length;
  manifest.downloadStatus = {
    total: totalItems,
    downloaded: totalDownloaded,
    pending: totalMissing,
    failed: 0,
    lastRunDate: new Date().toISOString(),
    completionPercentage: Math.round((totalDownloaded / totalItems) * 100)
  };
  manifest.lastUpdated = new Date().toISOString();
  
  return manifest;
}

// Generate detailed report
function generateReport(itemResults, uiResults, instructions) {
  console.log('\n' + '='.repeat(70));
  console.log('📊 IMAGE VERIFICATION REPORT');
  console.log('='.repeat(70) + '\n');
  
  // Item sprites summary
  console.log('📦 ITEM SPRITES:');
  console.log(`  ✓ Downloaded: ${itemResults.downloaded.length}/${itemResults.total}`);
  console.log(`  ✗ Missing: ${itemResults.missing.length}/${itemResults.total}`);
  console.log(`  Total Size: ${formatBytes(itemResults.totalSize)}`);
  console.log(`  Completion: ${Math.round((itemResults.downloaded.length / itemResults.total) * 100)}%\n`);
  
  // UI assets summary
  console.log('🎨 UI ASSETS:');
  console.log(`  ✓ Downloaded: ${uiResults.downloaded.length}`);
  console.log(`  ✗ Missing: ${uiResults.missing.length}\n`);
  
  // Missing items if any
  if (instructions.itemIds.length > 0) {
    console.log('⚠️  MISSING ITEMS (need to download):');
    console.log(`  Total missing: ${instructions.itemIds.length}`);
    console.log(`\n  Item IDs to fetch:`);
    console.log(`  ${instructions.itemIds.join(', ')}\n`);
    
    console.log('  Download URLs:');
    instructions.itemUrls.slice(0, 3).forEach(url => {
      console.log(`    ${url}`);
    });
    if (instructions.itemUrls.length > 3) {
      console.log(`    ... and ${instructions.itemUrls.length - 3} more\n`);
    }
  } else {
    console.log('✅ ALL ITEM SPRITES DOWNLOADED!\n');
  }
  
  // Missing UI assets
  if (instructions.uiAssets.length > 0) {
    console.log('⚠️  MISSING UI ASSETS:');
    instructions.uiAssets.forEach(asset => {
      console.log(`  - ${asset.name}: ${asset.url}`);
    });
    console.log();
  } else {
    console.log('✅ ALL UI ASSETS DOWNLOADED!\n');
  }
  
  // Next steps
  console.log('📋 NEXT STEPS:\n');
  if (instructions.itemIds.length > 0 || instructions.uiAssets.length > 0) {
    console.log('  1. Download missing images:');
    console.log('     - Use the browser extraction method');
    console.log('     - Or download manually and place in public/images/\n');
    console.log('  2. Use naming convention: lowercase-with-hyphens.gif\n');
    console.log('  3. Re-run this script to verify:\n');
    console.log('     node scripts/verify-and-update-manifests.mjs\n');
  } else {
    console.log('  1. Enable local images in app/lib/image-utils.js:');
    console.log('     useLocalImages: true\n');
    console.log('  2. Restart dev server\n');
    console.log('  3. Verify all images load correctly\n');
  }
  
  // Download instructions for specific methods
  if (instructions.itemIds.length > 0) {
    console.log('📥 DOWNLOAD INSTRUCTIONS:\n');
    console.log('  Option A: Using wget (if you have external access):');
    console.log(`  ${instructions.itemUrls.slice(0, 1).map(url => 
      `wget "${url}" -O "public/sprites/items/${url.split('/').pop()}"`
    ).join('\n  ')}\n`);
    
    console.log('  Option B: Python script:');
    console.log('  ```python');
    console.log('  import requests, os');
    console.log('  ids = [' + instructions.itemIds.slice(0, 5).join(', ') + ', ...]');
    console.log('  for id in ids:');
    console.log('    url = f"https://evolisca.com/images/items2/{id}.gif"');
    console.log('    r = requests.get(url)');
    console.log('    with open(f"public/sprites/items/{id}.gif", "wb") as f:');
    console.log('      f.write(r.content)');
    console.log('  ```\n');
  }
  
  console.log('='.repeat(70) + '\n');
}

// Write manifest to file
function writeManifest(manifest, filePath) {
  fs.writeFileSync(filePath, JSON.stringify(manifest, null, 2));
  console.log(`✓ Manifest updated: ${path.relative(projectRoot, filePath)}\n`);
}

// Create shell script for wget downloads
function createDownloadScript(instructions) {
  if (instructions.itemIds.length === 0) return;
  
  const scriptPath = path.join(projectRoot, 'scripts', 'download-missing-images.sh');
  const script = `#!/bin/bash
# Auto-generated script to download missing item sprites
# Run: bash scripts/download-missing-images.sh

ITEMS_DIR="public/sprites/items"
mkdir -p "\$ITEMS_DIR"

echo "Downloading missing item sprites..."

${instructions.itemUrls.map(url => {
  const id = url.split('/').pop().replace('.gif', '');
  return `curl -L "${url}" -o "\$ITEMS_DIR/${id}.gif" --progress-bar && echo "✓ Downloaded ${id}.gif"`;
}).join('\n')}\n
echo "Done! Run: node scripts/verify-and-update-manifests.mjs"
`;
  
  fs.writeFileSync(scriptPath, script);
  console.log(`💾 Created download script: scripts/download-missing-images.sh`);
  console.log(`   Run: bash scripts/download-missing-images.sh\n`);
}

// Main function
async function main() {
  try {
    console.log('\n🔍 IMAGE VERIFICATION & MANIFEST MANAGEMENT\n');
    console.log('='.repeat(70) + '\n');
    
    // Load all data
    const { itemSprites, spriteMapping, imageManifest } = loadDataFiles();
    
    // Verify downloads
    const itemResults = verifyItemSprites(itemSprites);
    const uiResults = verifyUIAssets();
    
    // Generate download instructions
    const instructions = generateDownloadInstructions(itemResults, uiResults);
    
    // Update manifest
    const updatedManifest = updateManifest(imageManifest, itemResults, uiResults, spriteMapping);
    writeManifest(updatedManifest, imageManifestPath);
    
    // Generate report
    generateReport(itemResults, uiResults, instructions);
    
    // Create download script if needed
    if (instructions.itemIds.length > 0) {
      createDownloadScript(instructions);
    }
    
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

main();
