import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const spritesDir = path.join(projectRoot, 'public', 'sprites');
const itemSpritesPath = path.join(projectRoot, 'public', 'data', 'item-sprites.json');
const creatureLootPath = path.join(projectRoot, 'public', 'data', 'creature-loot.json');

// Create sprites directory if it doesn't exist
if (!fs.existsSync(spritesDir)) {
  fs.mkdirSync(spritesDir, { recursive: true });
}

// Load existing sprite data
const itemSprites = JSON.parse(fs.readFileSync(itemSpritesPath, 'utf8'));
const creatureLoot = JSON.parse(fs.readFileSync(creatureLootPath, 'utf8'));

// Create a mapping of item names to IDs and sprites
const itemSpriteMap = {};
const itemNameMap = {};

itemSprites.items.forEach(item => {
  const normalizedName = item.name.toLowerCase().trim();
  itemSpriteMap[normalizedName] = {
    name: item.name,
    id: item.id,
    sprite: item.sprite,
    localPath: `/sprites/${item.id}.gif`
  };
  itemNameMap[item.id] = item.name;
});

// Collect all unique items from creature loot
const allLootItems = new Set();
Object.values(creatureLoot).forEach(lootArray => {
  lootArray.forEach(item => {
    allLootItems.add(JSON.stringify({
      name: item.name,
      id: item.id
    }));
  });
});

// Download sprite with retry logic
async function downloadSprite(id, url, retries = 3) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(spritesDir, `${id}.gif`);
    
    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`✓ Sprite ${id} already exists`);
      resolve();
      return;
    }

    const attemptDownload = (attemptNum) => {
      const file = fs.createWriteStream(filePath);
      
      https.get(url, (response) => {
        if (response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`✓ Downloaded sprite ${id}`);
            resolve();
          });
        } else {
          file.destroy();
          fs.unlink(filePath, () => {});
          
          if (attemptNum < retries) {
            console.log(`⚠ Retry ${attemptNum + 1}/${retries} for sprite ${id}`);
            setTimeout(() => attemptDownload(attemptNum + 1), 1000);
          } else {
            console.log(`✗ Failed to download sprite ${id} after ${retries} retries`);
            resolve(); // Continue even if failed
          }
        }
      }).on('error', (err) => {
        file.destroy();
        fs.unlink(filePath, () => {});
        
        if (attemptNum < retries) {
          console.log(`⚠ Retry ${attemptNum + 1}/${retries} for sprite ${id} (error: ${err.message})`);
          setTimeout(() => attemptDownload(attemptNum + 1), 1000);
        } else {
          console.log(`✗ Failed to download sprite ${id}: ${err.message}`);
          resolve(); // Continue even if failed
        }
      });
    };
    
    attemptDownload(0);
  });
}

// Main function
async function downloadAllSprites() {
  console.log('Starting sprite download...\n');
  
  const uniqueIds = new Set();
  itemSprites.items.forEach(item => {
    uniqueIds.add(item.id);
  });
  
  console.log(`Found ${uniqueIds.size} unique sprites to download`);
  console.log('');
  
  let downloadedCount = 0;
  let skippedCount = 0;
  
  for (const id of uniqueIds) {
    const item = itemSprites.items.find(i => i.id === id);
    if (item) {
      const exists = fs.existsSync(path.join(spritesDir, `${id}.gif`));
      if (exists) {
        skippedCount++;
      } else {
        downloadedCount++;
        await downloadSprite(id, item.sprite);
        // Add small delay between downloads
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
  }
  
  console.log(`\n✓ Sprite download complete!`);
  console.log(`  - Downloaded: ${downloadedCount}`);
  console.log(`  - Already existed: ${skippedCount}`);
  
  // Create comprehensive sprite mapping
  const spriteMapping = {
    version: '1.0',
    lastUpdated: new Date().toISOString(),
    baseUrl: '/sprites',
    items: {}
  };
  
  const processedItems = new Set();
  
  itemSprites.items.forEach(item => {
    const key = item.name.toLowerCase().trim();
    if (!processedItems.has(key)) {
      spriteMapping.items[key] = {
        name: item.name,
        id: item.id,
        localPath: `/sprites/${item.id}.gif`,
        externalUrl: item.sprite
      };
      processedItems.add(key);
    }
  });
  
  // Save mapping
  const mappingPath = path.join(projectRoot, 'public', 'data', 'sprite-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(spriteMapping, null, 2));
  console.log(`\n✓ Sprite mapping saved to public/data/sprite-mapping.json`);
  console.log(`  Total mapped items: ${Object.keys(spriteMapping.items).length}`);
}

// Run the download
downloadAllSprites().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
