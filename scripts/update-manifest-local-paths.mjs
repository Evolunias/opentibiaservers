#!/usr/bin/env node

/**
 * Update Manifest with Local Paths
 * 
 * Maps all item sprites from item-sprites.json to local paths in the manifest
 * Enables seamless transition to local image loading
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const imageManifestPath = path.join(projectRoot, 'public/data/image-manifest.json');
const itemSpritesPath = path.join(projectRoot, 'public/data/item-sprites.json');

try {
  console.log('📋 Updating manifest with local paths...\n');

  // Read existing files
  const imageManifest = JSON.parse(fs.readFileSync(imageManifestPath, 'utf8'));
  const itemSprites = JSON.parse(fs.readFileSync(itemSpritesPath, 'utf8'));

  // Ensure itemSpritesMapping exists
  if (!imageManifest.itemSpritesMapping) {
    imageManifest.itemSpritesMapping = { items: {}, itemCount: 0 };
  }

  // Build unique set of items by ID
  const uniqueItems = {};
  itemSprites.items.forEach(item => {
    if (!uniqueItems[item.id]) {
      uniqueItems[item.id] = item;
    }
  });

  console.log(`Found ${Object.keys(uniqueItems).length} unique items\n`);

  // Update manifest with all items
  let updated = 0;
  for (const [id, item] of Object.entries(uniqueItems)) {
    const key = item.name.toLowerCase().trim().replace(/\s+/g, '-');
    
    imageManifest.itemSpritesMapping.items[key] = {
      name: item.name,
      id: id,
      internalPath: `/sprites/items/${id}.gif`,
      externalUrl: `https://evolisca.com/images/items2/${id}.gif`,
      status: 'mapped',
      category: item.category || 'item',
      fileSize: 0
    };
    
    updated++;
  }

  imageManifest.itemSpritesMapping.itemCount = Object.keys(imageManifest.itemSpritesMapping.items).length;
  imageManifest.lastUpdated = new Date().toISOString();

  // Save updated manifest
  fs.writeFileSync(imageManifestPath, JSON.stringify(imageManifest, null, 2));

  console.log(`✅ Successfully updated manifest`);
  console.log(`   Items processed: ${updated}`);
  console.log(`   Total items in manifest: ${imageManifest.itemSpritesMapping.itemCount}`);
  console.log(`\n📁 Configuration updated:`);
  console.log(`   - Local image paths: /sprites/items/{id}.gif`);
  console.log(`   - External fallback: https://evolisca.com/images/items2/{id}.gif`);
  console.log(`\n✨ Manifest is ready for local image loading!`);

} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
