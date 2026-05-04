/**
 * Download All Assets Script
 * Downloads all item sprites and images from evolisca.com to local directories
 * Updates manifest files and sprite mappings for offline support
 * 
 * Usage: node scripts/download-all-assets.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const spritesDir = path.join(projectRoot, 'public', 'sprites', 'items');
const imagesDir = path.join(projectRoot, 'public', 'images');
const uiImagesDir = path.join(projectRoot, 'public', 'images', 'ui');
const itemSpritesPath = path.join(projectRoot, 'public', 'data', 'item-sprites.json');
const imageManifestPath = path.join(projectRoot, 'public', 'data', 'image-manifest.json');

// Asset URLs to download
const ASSETS_TO_DOWNLOAD = {
  logo: {
    url: 'https://evolisca.com/templates/server/images/logo.png',
    dir: uiImagesDir,
    filename: 'logo.png',
    type: 'ui'
  }
};

// Create directories if they don't exist
function ensureDirectories() {
  [spritesDir, imagesDir, uiImagesDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📁 Created directory: ${dir}`);
    }
  });
}

// Download file with retry logic
async function downloadFile(url, filePath, retries = 3) {
  return new Promise((resolve, reject) => {
    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`✓ File already exists: ${path.basename(filePath)}`);
      resolve();
      return;
    }

    const attemptDownload = (attemptNum) => {
      const file = fs.createWriteStream(filePath);

      const options = {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Referer': 'https://evolisca.com/',
          'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        }
      };

      https.get(url, options, (response) => {
        if (response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`✓ Downloaded: ${path.basename(filePath)}`);
            resolve();
          });
        } else if (response.statusCode === 301 || response.statusCode === 302) {
          // Handle redirects
          file.destroy();
          const newUrl = response.headers.location;
          console.log(`→ Redirect to: ${newUrl}`);
          downloadFile(newUrl, filePath, retries - attemptNum).then(resolve).catch(reject);
        } else {
          file.destroy();
          fs.unlink(filePath, () => {});
          
          if (attemptNum < retries) {
            console.log(`⚠ Retry ${attemptNum + 1}/${retries} for ${path.basename(filePath)}`);
            setTimeout(() => attemptDownload(attemptNum + 1), 1000);
          } else {
            console.log(`✗ Failed to download ${path.basename(filePath)}: Status ${response.statusCode}`);
            resolve(); // Continue even if failed
          }
        }
      }).on('error', (err) => {
        file.destroy();
        fs.unlink(filePath, () => {});
        
        if (attemptNum < retries) {
          console.log(`⚠ Retry ${attemptNum + 1}/${retries} for ${path.basename(filePath)}`);
          setTimeout(() => attemptDownload(attemptNum + 1), 1000);
        } else {
          console.log(`✗ Failed to download ${path.basename(filePath)}: ${err.message}`);
          resolve(); // Continue even if failed
        }
      });
    };
    
    attemptDownload(0);
  });
}

// Download all item sprites
async function downloadAllSprites() {
  console.log('\n📦 Downloading item sprites...\n');
  
  let itemSprites;
  try {
    itemSprites = JSON.parse(fs.readFileSync(itemSpritesPath, 'utf8'));
  } catch (err) {
    console.error('✗ Could not read item-sprites.json:', err.message);
    return { downloaded: 0, skipped: 0, failed: 0 };
  }

  const uniqueIds = new Set();
  const itemMap = {};
  
  itemSprites.items.forEach(item => {
    uniqueIds.add(item.id);
    itemMap[item.id] = item;
  });
  
  console.log(`Found ${uniqueIds.size} unique item sprites\n`);
  
  let downloadedCount = 0;
  let skippedCount = 0;
  let failedCount = 0;
  
  for (const id of uniqueIds) {
    const item = itemMap[id];
    if (item) {
      const filePath = path.join(spritesDir, `${id}.gif`);
      const exists = fs.existsSync(filePath);
      
      if (exists) {
        skippedCount++;
      } else {
        downloadedCount++;
        await downloadFile(item.sprite, filePath);
        // Small delay between downloads to be respectful to the server
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    }
  }
  
  console.log(`\n✓ Sprite download complete!`);
  console.log(`  - Downloaded: ${downloadedCount}`);
  console.log(`  - Already existed: ${skippedCount}`);
  
  return { downloaded: downloadedCount, skipped: skippedCount, items: itemMap };
}

// Download UI assets (logo, etc.)
async function downloadUIAssets() {
  console.log('\n🎨 Downloading UI assets...\n');
  
  let downloadedCount = 0;
  let skippedCount = 0;
  
  for (const [key, asset] of Object.entries(ASSETS_TO_DOWNLOAD)) {
    const filePath = path.join(asset.dir, asset.filename);
    const exists = fs.existsSync(filePath);
    
    if (exists) {
      skippedCount++;
      console.log(`✓ Already exists: ${asset.filename}`);
    } else {
      downloadedCount++;
      await downloadFile(asset.url, filePath);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  console.log(`\n✓ UI assets download complete!`);
  console.log(`  - Downloaded: ${downloadedCount}`);
  console.log(`  - Already existed: ${skippedCount}`);
  
  return { downloaded: downloadedCount, skipped: skippedCount };
}

// Update image manifest with downloaded files
function updateImageManifest(itemMap) {
  console.log('\n📋 Updating image manifest...\n');
  
  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(imageManifestPath, 'utf8'));
  } catch (err) {
    console.log('Creating new image manifest...');
    manifest = {
      version: '1.0',
      lastUpdated: new Date().toISOString(),
      description: 'Comprehensive manifest of all images extracted from evolisca.com',
      imageSources: {
        items: 'Item sprites from evolisca.com/images/items2',
        ui: 'UI assets including logo'
      },
      images: {
        ui: {},
        items: {},
        creatures: {}
      },
      itemSpritesMapping: {
        description: 'Maps all item sprites by name',
        itemCount: 0,
        items: {}
      },
      creatureImagesMapping: {
        description: 'Maps creature images by creature name',
        creatureCount: 0,
        creatures: {}
      },
      downloadStatus: {
        total: 0,
        downloaded: 0,
        pending: 0,
        failed: 0,
        lastRunDate: new Date().toISOString(),
        nextRunDate: null
      },
      fileNamingConventions: {
        items: 'Stored by ID: /public/sprites/items/{id}.gif',
        ui: 'Stored by name: /public/images/ui/{name}.png'
      }
    };
  }
  
  // Update UI images
  manifest.images.ui.logo = {
    name: 'Evolisca Logo',
    externalUrl: 'https://evolisca.com/templates/server/images/logo.png',
    internalPath: '/images/ui/logo.png',
    fileName: 'logo.png',
    type: 'png',
    source: 'evolisca.com header',
    status: fs.existsSync(path.join(uiImagesDir, 'logo.png')) ? 'downloaded' : 'pending'
  };
  
  // Update item sprites mapping
  const itemSpritesMapping = {};
  let downloadedCount = 0;
  
  for (const [id, item] of Object.entries(itemMap || {})) {
    const key = item.name.toLowerCase().trim().replace(/\s+/g, '-');
    const filePath = path.join(spritesDir, `${id}.gif`);
    const downloaded = fs.existsSync(filePath);
    
    itemSpritesMapping[key] = {
      name: item.name,
      id: item.id,
      externalUrl: item.sprite,
      internalPath: `/sprites/items/${id}.gif`,
      status: downloaded ? 'downloaded' : 'pending'
    };
    
    if (downloaded) downloadedCount++;
  }
  
  manifest.itemSpritesMapping.items = itemSpritesMapping;
  manifest.itemSpritesMapping.itemCount = Object.keys(itemSpritesMapping).length;
  
  // Update download status
  const totalSprites = Object.keys(itemSpritesMapping).length;
  manifest.downloadStatus = {
    total: totalSprites + 1, // +1 for logo
    downloaded: downloadedCount + (fs.existsSync(path.join(uiImagesDir, 'logo.png')) ? 1 : 0),
    pending: totalSprites + 1 - downloadedCount - (fs.existsSync(path.join(uiImagesDir, 'logo.png')) ? 1 : 0),
    failed: 0,
    lastRunDate: new Date().toISOString(),
    nextRunDate: null
  };
  
  // Save manifest
  fs.writeFileSync(imageManifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✓ Updated image manifest`);
  console.log(`  - Total items mapped: ${manifest.itemSpritesMapping.itemCount}`);
  console.log(`  - Downloaded: ${manifest.downloadStatus.downloaded}/${manifest.downloadStatus.total}`);
  
  return manifest;
}

// Update sprite mapping
function updateSpriteMapping(itemMap) {
  console.log('\n🗺️ Updating sprite mapping...\n');
  
  const spriteMappingPath = path.join(projectRoot, 'public', 'data', 'sprite-mapping.json');
  
  let spriteMapping;
  try {
    spriteMapping = JSON.parse(fs.readFileSync(spriteMappingPath, 'utf8'));
  } catch (err) {
    spriteMapping = {
      version: '1.0',
      lastUpdated: new Date().toISOString(),
      description: 'Sprite mapping for all items',
      spriteSource: 'evolisca.com/images/items2',
      items: {},
      idToName: {}
    };
  }
  
  // Update items and create ID to name mapping
  const processedItems = new Set();
  
  for (const [id, item] of Object.entries(itemMap || {})) {
    const key = item.name.toLowerCase().trim();
    
    if (!processedItems.has(key)) {
      spriteMapping.items[key] = {
        id: item.id,
        name: item.name,
        category: item.category || 'item'
      };
      spriteMapping.idToName[item.id] = key;
      processedItems.add(key);
    }
  }
  
  spriteMapping.lastUpdated = new Date().toISOString();
  
  fs.writeFileSync(spriteMappingPath, JSON.stringify(spriteMapping, null, 2));
  console.log(`✓ Updated sprite mapping`);
  console.log(`  - Total items: ${Object.keys(spriteMapping.items).length}`);
}

// Main execution
async function main() {
  console.log('🚀 Starting Asset Download Pipeline\n');
  console.log('='.repeat(50));
  
  try {
    // Ensure all directories exist
    ensureDirectories();
    
    // Download all sprites and UI assets
    const spritesResult = await downloadAllSprites();
    const uiResult = await downloadUIAssets();
    
    // Update manifests
    updateImageManifest(spritesResult.items);
    updateSpriteMapping(spritesResult.items);
    
    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('\n✅ Asset download pipeline complete!\n');
    console.log('Summary:');
    console.log(`  📦 Item Sprites: ${spritesResult.downloaded} downloaded, ${spritesResult.skipped} already existed`);
    console.log(`  🎨 UI Assets: ${uiResult.downloaded} downloaded, ${uiResult.skipped} already existed`);
    console.log('\nNext steps:');
    console.log('  1. Update sprite-utils.js: Set useLocalSprites = true');
    console.log('  2. Restart dev server to apply changes');
    console.log('  3. Verify sprites load correctly in the UI');
    
  } catch (err) {
    console.error('\n❌ Error during asset download:', err);
    process.exit(1);
  }
}

// Run the main function
main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
