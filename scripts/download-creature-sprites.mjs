#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const SPRITE_DIR = path.join(__dirname, '../public/sprites/creatures');
const CREATURES_FILE = path.join(__dirname, '../public/data/creatures.json');
const BASE_URL = 'https://outfit-images.ots.me/latest/outfit.php?id=';

// Ensure sprites directory exists
if (!fs.existsSync(SPRITE_DIR)) {
  fs.mkdirSync(SPRITE_DIR, { recursive: true });
  console.log(`📁 Created sprites directory: ${SPRITE_DIR}`);
}

// Read creatures data
const data = JSON.parse(fs.readFileSync(CREATURES_FILE, 'utf8'));
const creatures = data.creatures.filter(c => c.imageId);

console.log(`\n🚀 Starting to download ${creatures.length} creature sprites...`);
console.log(`📍 Destination: ${SPRITE_DIR}\n`);

let downloaded = 0;
let failed = 0;
let skipped = 0;

/**
 * Download a file from URL and save it locally
 */
async function downloadSprite(imageId, creatureName) {
  return new Promise((resolve) => {
    const filename = `${imageId}.gif`;
    const filepath = path.join(SPRITE_DIR, filename);

    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      skipped++;
      console.log(`⏭️  Skipped: ${creatureName} (ID: ${imageId}) - already exists`);
      resolve();
      return;
    }

    const url = `${BASE_URL}${imageId}`;

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);

        file.on('finish', () => {
          file.close();
          downloaded++;
          console.log(`✅ Downloaded: ${creatureName} (ID: ${imageId})`);
          resolve();
        });

        file.on('error', () => {
          fs.unlink(filepath, () => {});
          failed++;
          console.log(`❌ Failed to save: ${creatureName} (ID: ${imageId})`);
          resolve();
        });
      } else {
        failed++;
        console.log(`❌ Failed to download: ${creatureName} (ID: ${imageId}) - Status: ${response.statusCode}`);
        resolve();
      }
    }).on('error', (err) => {
      failed++;
      console.log(`❌ Error downloading ${creatureName} (ID: ${imageId}): ${err.message}`);
      resolve();
    });
  });
}

/**
 * Process downloads sequentially with rate limiting
 */
async function downloadAllSprites() {
  const uniqueIds = new Map();

  // Collect unique imageIds and their creature names
  creatures.forEach(creature => {
    if (!uniqueIds.has(creature.imageId)) {
      uniqueIds.set(creature.imageId, creature.name);
    }
  });

  console.log(`📊 Total unique image IDs to download: ${uniqueIds.size}\n`);

  let count = 0;
  for (const [imageId, creatureName] of uniqueIds) {
    count++;
    process.stdout.write(`[${count}/${uniqueIds.size}] `);
    await downloadSprite(imageId, creatureName);
    
    // Rate limiting: 100ms between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

// Run the download
await downloadAllSprites();

// Summary
console.log(`\n${'='.repeat(50)}`);
console.log(`📈 Download Complete!`);
console.log(`${'='.repeat(50)}`);
console.log(`✅ Downloaded: ${downloaded}`);
console.log(`⏭️  Skipped (already exist): ${skipped}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📊 Total processed: ${downloaded + skipped + failed}`);
console.log(`${'='.repeat(50)}`);

if (failed > 0) {
  console.log(`\n⚠️  ${failed} sprites failed to download. Check your internet connection and try again.`);
  process.exit(1);
} else {
  console.log(`\n✨ All creature sprites are now stored locally!`);
  console.log(`📁 Location: public/sprites/creatures/`);
  process.exit(0);
}
