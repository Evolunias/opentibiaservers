/**
 * Image Extraction & Download Script
 * 
 * This script:
 * 1. Fetches all creature pages from evolisca.com
 * 2. Extracts images from each creature
 * 3. Downloads and organizes images locally
 * 4. Updates image-manifest.json with local paths
 * 5. Maintains coordination between filenames and image names
 * 
 * Usage: node scripts/extract-images.mjs
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const imagesDir = path.join(projectRoot, 'public', 'images');
const itemsDir = path.join(imagesDir, 'items');
const creaturesDir = path.join(imagesDir, 'creatures');
const uiDir = path.join(imagesDir, 'ui');
const manifestPath = path.join(projectRoot, 'public', 'data', 'image-manifest.json');
const spriteMappingPath = path.join(projectRoot, 'public', 'data', 'sprite-mapping.json');
const creaturesDataPath = path.join(projectRoot, 'public', 'data', 'creatures.json');

// Ensure directories exist
[itemsDir, creaturesDir, uiDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Load existing data
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const spriteMapping = JSON.parse(fs.readFileSync(spriteMappingPath, 'utf8'));
const creaturesData = JSON.parse(fs.readFileSync(creaturesDataPath, 'utf8'));

const BASE_URL = 'https://evolisca.com';
let downloadedCount = 0;
let failedCount = 0;
let skippedCount = 0;

/**
 * Normalize filename for consistency
 */
function normalizeFilename(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/\-+/g, '-')
    .replace(/^\-|\-$/g, '');
}

/**
 * Download file with retry logic
 */
async function downloadFile(url, filePath, retries = 3) {
  return new Promise((resolve, reject) => {
    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`  ✓ File already exists: ${path.basename(filePath)}`);
      resolve(true);
      return;
    }

    const attemptDownload = (attemptNum) => {
      const urlObj = new URL(url);
      const protocol = urlObj.protocol === 'https:' ? https : http;

      const request = protocol.get(url, (response) => {
        if (response.statusCode === 302 || response.statusCode === 301) {
          // Follow redirects
          const redirectUrl = response.headers.location;
          attemptDownload(attemptNum);
          return;
        }

        if (response.statusCode === 200) {
          const file = fs.createWriteStream(filePath);
          response.pipe(file);

          file.on('finish', () => {
            file.close();
            console.log(`  ✓ Downloaded: ${path.basename(filePath)}`);
            downloadedCount++;
            resolve(true);
          });

          file.on('error', (err) => {
            fs.unlink(filePath, () => {});
            reject(err);
          });
        } else {
          if (attemptNum < retries) {
            console.log(`  ⚠ Retry ${attemptNum + 1}/${retries} for ${path.basename(filePath)}`);
            setTimeout(() => attemptDownload(attemptNum + 1), 1000);
          } else {
            console.log(`  ✗ Failed to download: ${path.basename(filePath)}`);
            failedCount++;
            resolve(false);
          }
        }
      });

      request.on('error', (err) => {
        if (attemptNum < retries) {
          console.log(`  ⚠ Retry ${attemptNum + 1}/${retries} for ${path.basename(filePath)} (${err.message})`);
          setTimeout(() => attemptDownload(attemptNum + 1), 1000);
        } else {
          console.log(`  ✗ Error downloading ${path.basename(filePath)}: ${err.message}`);
          failedCount++;
          resolve(false);
        }
      });
    };

    attemptDownload(0);
  });
}

/**
 * Extract images from creature page
 */
async function extractCreatureImages(creatureName) {
  try {
    console.log(`\nExtracting images for: ${creatureName}`);
    
    const url = `${BASE_URL}/?subtopic=creatures&creature=${encodeURIComponent(creatureName)}`;
    
    // This would require fetching and parsing the page
    // Due to Cloudflare protection, this may not work automatically
    // Users will need to manually provide image data or use a headless browser
    
    console.log(`  To extract: ${url}`);
    return null;
  } catch (error) {
    console.error(`  Error extracting images for ${creatureName}:`, error.message);
    return null;
  }
}

/**
 * Process item sprites from sprite mapping
 */
async function processItemSprites() {
  console.log('\n🔄 Processing item sprites from sprite-mapping.json...\n');
  
  const items = spriteMapping.items;
  let processedCount = 0;

  for (const [itemKey, itemData] of Object.entries(items)) {
    const fileName = normalizeFilename(itemKey);
    const filePath = path.join(itemsDir, `${fileName}.gif`);
    const externalUrl = `https://evolisca.com/images/items2/${itemData.id}.gif`;

    // Update manifest
    if (!manifest.itemSpritesMapping.items[fileName]) {
      manifest.itemSpritesMapping.items[fileName] = {
        name: itemData.name,
        itemKey: itemKey,
        id: itemData.id,
        externalUrl: externalUrl,
        internalPath: `/images/items/${fileName}.gif`,
        status: 'pending',
        downloadedDate: null
      };
    }

    // Optionally download if online
    // await downloadFile(externalUrl, filePath);
    
    processedCount++;
  }

  manifest.itemSpritesMapping.itemCount = processedCount;
  console.log(`✓ Processed ${processedCount} item sprites`);
}

/**
 * Process creatures
 */
async function processCreatures() {
  console.log('\n🔄 Processing creatures...\n');
  
  const creatures = creaturesData.creatures || [];
  let processedCount = 0;

  for (const creature of creatures) {
    const creatureName = creature.name;
    const fileName = normalizeFilename(creatureName);
    
    if (!manifest.creatureImagesMapping.creatures[fileName]) {
      manifest.creatureImagesMapping.creatures[fileName] = {
        name: creatureName,
        rarity: creature.rarity,
        internalPath: `/images/creatures/${fileName}.png`,
        externalUrl: null,
        status: 'pending - needs manual extraction',
        downloadedDate: null
      };
    }

    processedCount++;
  }

  manifest.creatureImagesMapping.creatureCount = processedCount;
  console.log(`✓ Processed ${processedCount} creatures`);
}

/**
 * Download logo
 */
async function downloadLogo() {
  console.log('\n🔄 Processing logo...\n');
  
  const logoUrl = 'https://evolisca.com/templates/server/images/logo.png';
  const logoPath = path.join(uiDir, 'logo.png');

  manifest.images.ui.logo = {
    name: 'Evolisca Logo',
    externalUrl: logoUrl,
    internalPath: '/images/ui/logo.png',
    fileName: 'logo.png',
    type: 'png',
    source: 'evolisca.com header',
    status: 'pending'
  };

  console.log(`Logo manifest entry created at: ${manifest.images.ui.logo.internalPath}`);
}

/**
 * Main execution
 */
async function main() {
  console.log('═══════════════════════════════════════════════════════════');
  console.log('         Evolisca Image Extraction & Organization');
  console.log('═══════════════════════════════════════════════════════════\n');

  console.log('📋 Configuration:');
  console.log(`  Items directory:    ${itemsDir}`);
  console.log(`  Creatures directory: ${creaturesDir}`);
  console.log(`  UI directory:        ${uiDir}`);
  console.log(`  Manifest:            ${manifestPath}\n`);

  // Initialize manifest counters
  manifest.downloadStatus = {
    total: 0,
    downloaded: 0,
    pending: 0,
    failed: 0,
    lastRunDate: new Date().toISOString(),
    nextRunDate: null
  };

  // Process items
  await processItemSprites();

  // Process creatures
  await processCreatures();

  // Process logo
  await downloadLogo();

  // Update manifest
  manifest.downloadStatus.total = 
    manifest.itemSpritesMapping.itemCount + 
    manifest.creatureImagesMapping.creatureCount + 
    1; // +1 for logo

  manifest.downloadStatus.downloaded = downloadedCount;
  manifest.downloadStatus.failed = failedCount;
  manifest.downloadStatus.pending = manifest.downloadStatus.total - downloadedCount - failedCount;

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('                    Summary Report');
  console.log('═══════════════════════════════════════════════════════════\n');
  console.log(`Total images processed: ${manifest.downloadStatus.total}`);
  console.log(`  ✓ Downloaded:  ${downloadedCount}`);
  console.log(`  ✗ Failed:      ${failedCount}`);
  console.log(`  ⏳ Pending:    ${manifest.downloadStatus.pending}`);
  console.log(`\n📍 Manifest updated: ${manifestPath}\n`);

  console.log('📝 Next Steps:');
  console.log('  1. Manually extract creature detail page images');
  console.log('  2. Place images in public/images/{category}/ directories');
  console.log('  3. Update image-manifest.json with actual URLs');
  console.log('  4. Set useLocalImages=true in app/lib/image-utils.js\n');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
