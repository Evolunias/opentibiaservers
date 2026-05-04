#!/usr/bin/env node

/**
 * Direct Image Download Script
 * 
 * Uses existing item-sprites.json data to download all sprites
 * Downloads the logo from known URL
 * 
 * Usage: node scripts/extract-and-download-all-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const spritesDir = path.join(projectRoot, 'public', 'sprites', 'items');
const imagesDir = path.join(projectRoot, 'public', 'images', 'ui');
const itemSpritesPath = path.join(projectRoot, 'public', 'data', 'item-sprites.json');

// Ensure directories exist
[spritesDir, imagesDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created: ${path.relative(projectRoot, dir)}`);
  }
});

/**
 * Advanced download with multiple strategies and retries
 */
function downloadFileAdvanced(url, outputPath, maxRetries = 5) {
  return new Promise((resolve) => {
    const fileName = path.basename(outputPath);
    
    // Skip if exists
    if (fs.existsSync(outputPath)) {
      resolve({ success: true, skipped: true });
      return;
    }
    
    const headerVariations = [
      // Variation 1: Standard browser
      {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://evolisca.com/',
        'Accept-Encoding': 'gzip, deflate, br'
      },
      // Variation 2: Firefox
      {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://evolisca.com/'
      },
      // Variation 3: Minimal
      {
        'User-Agent': 'Mozilla/5.0'
      }
    ];
    
    let attemptNum = 0;
    
    const attemptDownload = (strategyIdx = 0) => {
      attemptNum++;
      
      if (strategyIdx >= headerVariations.length && attemptNum > maxRetries) {
        resolve({ success: false, skipped: false });
        return;
      }
      
      const headers = headerVariations[strategyIdx % headerVariations.length];
      const file = fs.createWriteStream(outputPath);
      
      const protocol = url.startsWith('https') ? https : http;
      
      const timeout = setTimeout(() => {
        file.destroy();
        fs.unlink(outputPath, () => {});
        attemptDownload((strategyIdx + 1) % headerVariations.length);
      }, 10000);
      
      protocol.get(url, { headers }, (response) => {
        clearTimeout(timeout);
        
        if (response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve({ success: true, skipped: false });
          });
          return;
        }
        
        file.destroy();
        fs.unlink(outputPath, () => {});
        
        if (attemptNum < maxRetries || strategyIdx < headerVariations.length - 1) {
          setTimeout(() => {
            attemptDownload((strategyIdx + 1) % headerVariations.length);
          }, 1000);
        } else {
          resolve({ success: false, skipped: false });
        }
      }).on('error', (err) => {
        clearTimeout(timeout);
        file.destroy();
        fs.unlink(outputPath, () => {});
        
        if (attemptNum < maxRetries || strategyIdx < headerVariations.length - 1) {
          setTimeout(() => {
            attemptDownload((strategyIdx + 1) % headerVariations.length);
          }, 1000);
        } else {
          resolve({ success: false, skipped: false });
        }
      });
    };
    
    attemptDownload();
  });
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('\n' + '='.repeat(70));
    console.log('📥 DIRECT IMAGE EXTRACTION & DOWNLOAD');
    console.log('='.repeat(70) + '\n');
    
    // Load item sprites data
    console.log('📂 Loading item sprites data...\n');
    const itemSpritesData = JSON.parse(
      fs.readFileSync(itemSpritesPath, 'utf8')
    );
    
    // Get unique item IDs
    const uniqueIds = new Map();
    itemSpritesData.items.forEach(item => {
      if (!uniqueIds.has(item.id)) {
        uniqueIds.set(item.id, {
          name: item.name,
          url: item.sprite
        });
      }
    });
    
    console.log(`✓ Found ${uniqueIds.size} item sprites to download\n`);
    console.log('📥 Downloading item sprites...\n');
    
    let downloaded = 0;
    let skipped = 0;
    let failed = 0;
    const failedItems = [];
    
    // Download each sprite
    const totalItems = uniqueIds.size;
    let processedCount = 0;
    
    for (const [id, data] of uniqueIds) {
      processedCount++;
      const outputPath = path.join(spritesDir, `${id}.gif`);
      const progress = `[${processedCount}/${totalItems}]`;
      
      // Show progress
      process.stdout.write(`${progress} ${id.padEnd(6)} ... `);
      
      const result = await downloadFileAdvanced(data.url, outputPath);
      
      if (result.skipped) {
        console.log('⏭ (exists)');
        skipped++;
      } else if (result.success) {
        console.log('✓');
        downloaded++;
      } else {
        console.log('✗');
        failed++;
        failedItems.push({ id, name: data.name, url: data.url });
      }
      
      // Rate limiting - be respectful to the server
      await new Promise(r => setTimeout(r, 100));
    }
    
    // Download logo
    console.log('\n🎨 Downloading logo...\n');
    const logoUrl = 'https://evolisca.com/templates/server/images/logo.png';
    const logoPath = path.join(imagesDir, 'logo.png');
    
    process.stdout.write('logo.png ... ');
    const logoResult = await downloadFileAdvanced(logoUrl, logoPath);
    
    if (logoResult.skipped) {
      console.log('⏭ (exists)');
    } else if (logoResult.success) {
      console.log('✓');
    } else {
      console.log('✗');
    }
    
    // Summary
    console.log('\n' + '='.repeat(70));
    console.log('✅ DOWNLOAD COMPLETE!');
    console.log('='.repeat(70));
    
    console.log(`\nResults:`);
    console.log(`  Item sprites: ${uniqueIds.size} total`);
    console.log(`  ✓ Downloaded: ${downloaded}`);
    console.log(`  ⏭ Skipped: ${skipped}`);
    console.log(`  ✗ Failed: ${failed}`);
    console.log(`  Logo: ${logoResult.success ? '✓ Downloaded' : logoResult.skipped ? '⏭ Exists' : '✗ Failed'}`);
    
    if (failed > 0) {
      console.log(`\n⚠️  Failed items (can retry later):`);
      failedItems.slice(0, 5).forEach(item => {
        console.log(`  - ${item.id}: ${item.name}`);
      });
      if (failedItems.length > 5) {
        console.log(`  ... and ${failedItems.length - 5} more`);
      }
    }
    
    console.log(`\n📋 Next steps:`);
    console.log(`  1. Verify: node scripts/verify-and-update-manifests.mjs`);
    console.log(`  2. Enable local images:`);
    console.log(`     - app/lib/image-utils.js: useLocalImages = true`);
    console.log(`     - app/lib/sprite-utils.js: useLocalSprites = true`);
    console.log(`  3. Restart: npm run dev\n`);
    console.log('='.repeat(70) + '\n');
    
  } catch (err) {
    console.error('\n❌ Fatal error:', err.message);
    process.exit(1);
  }
}

// Run it!
main();
