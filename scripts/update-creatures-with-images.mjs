#!/usr/bin/env node

/**
 * Update creatures.json to include imageId for each creature
 * This links each creature to its outfit image
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the creature images mapping
const mappingPath = path.join(__dirname, '..', 'public', 'data', 'creature-images.json');
const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
const creatureImages = mapping.creatureImages;

// Read the creatures data
const creaturesPath = path.join(__dirname, '..', 'public', 'data', 'creatures.json');
const creaturesData = JSON.parse(fs.readFileSync(creaturesPath, 'utf-8'));

console.log(`📖 Read ${creaturesData.creatures.length} creatures`);

// Update each creature with imageId
let updatedCount = 0;
let missingCount = 0;

creaturesData.creatures = creaturesData.creatures.map(creature => {
  const imageId = creatureImages[creature.name];
  
  if (imageId) {
    updatedCount++;
    return {
      ...creature,
      imageId: imageId
    };
  } else {
    missingCount++;
    console.log(`⚠️  Missing image ID for: ${creature.name}`);
    return creature;
  }
});

// Write the updated creatures.json
fs.writeFileSync(creaturesPath, JSON.stringify(creaturesData, null, 2));

console.log('');
console.log('================================');
console.log('✅ Updated creatures.json');
console.log(`  ✨ Added imageId to: ${updatedCount} creatures`);
console.log(`  ⚠️  Missing images for: ${missingCount} creatures`);
console.log('================================');
console.log(`📁 Saved to: ${creaturesPath}`);
