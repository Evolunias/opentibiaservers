import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const lootData = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/data/creature-loot.json'), 'utf-8'));

// Extract all unique items from creature loot
const itemsSet = new Map();

Object.entries(lootData).forEach(([creatureName, items]) => {
  if (Array.isArray(items)) {
    items.forEach(item => {
      if (item.name && item.id) {
        const key = item.name.toLowerCase();
        if (!itemsSet.has(key)) {
          itemsSet.set(key, { name: item.name, id: item.id });
        }
      }
    });
  }
});

// Read the items page JSX
const itemsPagePath = path.join(__dirname, '../app/items/page.jsx');
let itemsPageContent = fs.readFileSync(itemsPagePath, 'utf-8');

// Parse the itemData from the page to get a map of existing items
const itemDataMatch = itemsPageContent.match(/const itemData = \{[\s\S]*?\n\};/);
if (!itemDataMatch) {
  console.error('Could not parse itemData from items page');
  process.exit(1);
}

// Build a mapping of items in the items page to their locations
const existingItemsMap = new Map();

// Equipment slots
const equipmentSlotsMatch = itemsPageContent.match(/equipment_slots:\s*\{[\s\S]*?items:\s*\[([\s\S]*?)\]\s*\}/g);
if (equipmentSlotsMatch) {
  equipmentSlotsMatch.forEach(slotStr => {
    const itemsInSlot = slotStr.match(/\{\s*name:\s*"([^"]+)"/g);
    if (itemsInSlot) {
      itemsInSlot.forEach(itemStr => {
        const nameMatch = itemStr.match(/name:\s*"([^"]+)"/);
        if (nameMatch) {
          const name = nameMatch[1];
          existingItemsMap.set(name.toLowerCase(), { name, type: 'equipment' });
        }
      });
    }
  });
}

// Weapons
const weaponsMatch = itemsPageContent.match(/weapons:\s*\{[\s\S]*?\s\}\s*\}\s*\n\};/);
if (weaponsMatch) {
  const weaponItems = weaponsMatch[0].match(/\{\s*name:\s*"([^"]+)"/g);
  if (weaponItems) {
    weaponItems.forEach(itemStr => {
      const nameMatch = itemStr.match(/name:\s*"([^"]+)"/);
      if (nameMatch) {
        const name = nameMatch[1];
        existingItemsMap.set(name.toLowerCase(), { name, type: 'weapon' });
      }
    });
  }
}

// Find matches and generate update report
const itemsToUpdate = [];
const unmatched = [];

itemsSet.forEach((lootItem, lootKey) => {
  const existing = existingItemsMap.get(lootKey);
  if (existing && !existing.hasId) {
    itemsToUpdate.push({
      displayName: existing.name,
      lootName: lootItem.name,
      id: lootItem.id
    });
  } else if (!existing) {
    unmatched.push(lootItem);
  }
});

console.log('=== ITEMS FROM CREATURES LOOT ===\n');
console.log(`Total unique items in creature loot: ${itemsSet.size}`);
console.log(`Matched with items.json: ${itemsToUpdate.length}`);
console.log(`Unmatched: ${unmatched.length}\n`);

if (itemsToUpdate.length > 0) {
  console.log('=== ITEMS TO ADD IDs TO ===\n');
  itemsToUpdate.slice(0, 30).forEach(item => {
    console.log(`${item.displayName}: id: "${item.id}"`);
  });
  if (itemsToUpdate.length > 30) {
    console.log(`... and ${itemsToUpdate.length - 30} more`);
  }
}

console.log('\n=== UNMATCHED ITEMS (May need manual categorization) ===\n');
const categorized = {};
unmatched.forEach(item => {
  const nameWords = item.name.toLowerCase().split(' ');
  let category = 'other';
  
  if (nameWords.some(w => ['helmet', 'crown', 'mask', 'turban', 'shroud'].includes(w))) category = 'helmet';
  else if (nameWords.some(w => ['armor', 'robe', 'cloak', 'mail', 'plate', 'frock', 'tabard'].includes(w))) category = 'armor';
  else if (nameWords.some(w => ['legs', 'leggings', 'skirt', 'greaves'].includes(w))) category = 'legs';
  else if (nameWords.some(w => ['boots', 'sandals', 'treads'].includes(w))) category = 'boots';
  else if (nameWords.some(w => ['amulet', 'pendant', 'chain', 'necklace'].includes(w))) category = 'amulet';
  else if (nameWords.some(w => ['ring', 'signet'].includes(w))) category = 'ring';
  else if (nameWords.some(w => ['shield', 'spellbook', 'wristguard', 'protector'].includes(w))) category = 'shield';
  else if (nameWords.some(w => ['sword', 'axe', 'mace', 'club', 'hammer', 'blade', 'staff', 'wand', 'rod', 'crossbow'].includes(w))) category = 'weapon';
  else if (nameWords.some(w => ['doll', 'charm', 'core', 'lyre', 'fiddle', 'dragon'].includes(w))) category = 'charm';
  else if (nameWords.some(w => ['coin', 'token', 'crystal', 'nugget'].includes(w))) category = 'currency';
  else if (nameWords.some(w => ['potion', 'stone', 'egg', 'matter', 'doll'].includes(w))) category = 'item';
  
  if (!categorized[category]) categorized[category] = [];
  categorized[category].push(item);
});

Object.entries(categorized).forEach(([cat, items]) => {
  console.log(`\n${cat.toUpperCase()} (${items.length}):`);
  items.slice(0, 15).forEach(item => {
    console.log(`  - ${item.name} (ID: ${item.id})`);
  });
  if (items.length > 15) {
    console.log(`  ... and ${items.length - 15} more`);
  }
});

// Export data for use in updates
const updateData = {
  totalLootItems: itemsSet.size,
  itemsToUpdate,
  unmatched,
  categorized
};

fs.writeFileSync(path.join(__dirname, '../scripts/item-ids-to-add.json'), JSON.stringify(itemsToUpdate, null, 2));
fs.writeFileSync(path.join(__dirname, '../scripts/unmatched-items.json'), JSON.stringify(categorized, null, 2));

console.log('\n✓ Saved item IDs to add to: scripts/item-ids-to-add.json');
console.log('✓ Saved unmatched items to: scripts/unmatched-items.json');
