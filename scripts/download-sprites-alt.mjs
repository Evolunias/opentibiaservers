/**
 * Alternative Sprite Download Script
 * Uses different strategies to download sprites from evolisca.com
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
const itemSpritesPath = path.join(projectRoot, 'public', 'data', 'item-sprites.json');

// Ensure directory exists
if (!fs.existsSync(spritesDir)) {
  fs.mkdirSync(spritesDir, { recursive: true });
}

const itemSprites = JSON.parse(fs.readFileSync(itemSpritesPath, 'utf8'));

// Try multiple download strategies
async function downloadWithStrategy(url, filePath, strategy = 'default') {
  return new Promise((resolve) => {
    const fileName = path.basename(filePath);
    
    // Different header combinations to try
    const strategies = {
      default: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://evolisca.com/',
        'Accept': '*/*'
      },
      chrome: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://evolisca.com/',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin'
      },
      minimal: {
        'User-Agent': 'curl/7.64.1'
      }
    };
    
    const headers = strategies[strategy] || strategies.default;
    const file = fs.createWriteStream(filePath);
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, { headers }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ [${strategy}] Downloaded: ${fileName}`);
          resolve(true);
        });
        return;
      }
      
      file.destroy();
      fs.unlink(filePath, () => {});
      
      if (response.statusCode === 403 && strategy === 'default') {
        console.log(`⚠ [${strategy}] Status 403, trying chrome strategy for ${fileName}`);
        downloadWithStrategy(url, filePath, 'chrome').then(resolve);
      } else if (response.statusCode === 403 && strategy === 'chrome') {
        console.log(`⚠ [${strategy}] Status 403, trying minimal strategy for ${fileName}`);
        downloadWithStrategy(url, filePath, 'minimal').then(resolve);
      } else {
        console.log(`✗ [${strategy}] Status ${response.statusCode} for ${fileName}`);
        resolve(false);
      }
    }).on('error', (err) => {
      file.destroy();
      fs.unlink(filePath, () => {});
      console.log(`✗ [${strategy}] Error: ${err.message} (${fileName})`);
      resolve(false);
    });
  });
}

// Main function
async function main() {
  console.log('📥 Attempting sprite downloads with multiple strategies\n');
  
  const uniqueIds = new Set();
  const itemMap = {};
  
  itemSprites.items.forEach(item => {
    uniqueIds.add(item.id);
    itemMap[item.id] = item;
  });
  
  console.log(`Found ${uniqueIds.size} unique sprites to download\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const id of uniqueIds) {
    const item = itemMap[id];
    if (item) {
      const filePath = path.join(spritesDir, `${id}.gif`);
      
      if (fs.existsSync(filePath)) {
        console.log(`✓ Already exists: ${id}.gif`);
      } else {
        const success = await downloadWithStrategy(item.sprite, filePath);
        if (success) {
          successCount++;
        } else {
          failCount++;
        }
        await new Promise(r => setTimeout(r, 100));
      }
    }
  }
  
  console.log(`\n✓ Download attempt complete`);
  console.log(`  - Downloaded: ${successCount}`);
  console.log(`  - Failed: ${failCount}`);
  console.log(`  - Total: ${uniqueIds.size}`);
}

main().catch(console.error);
