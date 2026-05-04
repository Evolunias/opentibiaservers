import fs from 'fs';

const unmatched = JSON.parse(fs.readFileSync('scripts/unmatched-items.json', 'utf-8'));

const itemsToAdd = {
  helmets: [
    { name: "Amazon Helmet", tier: "Uncommon", id: "2499" },
    { name: "Skull Helmet", tier: "Uncommon", id: "5741" },
    { name: "Crown Helmet", tier: "Uncommon", id: "2491" },
    { name: "Royal Helmet", tier: "Uncommon", id: "2498" },
    { name: "Brass Helmet", tier: "Uncommon", id: "2460" },
    { name: "Viking Helmet", tier: "Uncommon", id: "2473" },
    { name: "Crusader Helmet", tier: "Uncommon", id: "2497" },
    { name: "Zaoan Helmet", tier: "Uncommon", id: "11302" },
    { name: "Ragnir Helmet", tier: "Rare", id: "7462" },
    { name: "Forsaken Helmet", tier: "Rare", id: "46125" }
  ],
  armors: [
    { name: "Amazon Armor", tier: "Uncommon", id: "2500" },
    { name: "Master Archer's Armor", tier: "Uncommon", id: "8888" },
    { name: "Magic Plate Armor", tier: "Uncommon", id: "2472" },
    { name: "Dragon Scale Mail", tier: "Uncommon", id: "2492" },
    { name: "Golden Armor", tier: "Uncommon", id: "2466" },
    { name: "Scale Armor", tier: "Uncommon", id: "2483" },
    { name: "Zaoan Armor", tier: "Uncommon", id: "11301" },
    { name: "Paladin Armor", tier: "Rare", id: "8891" },
    { name: "Zaoan Robe", tier: "Rare", id: "11356" },
    { name: "Skullcracker Armor", tier: "Rare", id: "8889" },
    { name: "Frozen Plate", tier: "Rare", id: "8887" },
    { name: "Divine Plate", tier: "Rare", id: "8885" },
    { name: "Oceanborn Leviathan Armor", tier: "Rare", id: "8884" },
    { name: "Swamplair Armor", tier: "Rare", id: "8880" },
    { name: "Elite Draken Mail", tier: "Rare", id: "12607" }
  ],
  boots: [
    { name: "Pirate Boots", tier: "Uncommon", id: "5462" },
    { name: "Dragon Scale Boots", tier: "Uncommon", id: "11118" },
    { name: "Guardian Boots", tier: "Uncommon", id: "11240" },
    { name: "Steel Boots", tier: "Uncommon", id: "2645" },
    { name: "Crystal Boots", tier: "Uncommon", id: "11117" },
    { name: "Boots of Haste", tier: "Uncommon", id: "2195" },
    { name: "Fur Boots", tier: "Uncommon", id: "7457" },
    { name: "Kraken Boots", tier: "Rare", id: "40949" },
    { name: "Forsaken Boots", tier: "Rare", id: "46128" }
  ],
  legs: [
    { name: "Bast Skirt", tier: "Uncommon", id: "3983" },
    { name: "Demon Legs", tier: "Uncommon", id: "2495" },
    { name: "Dragon Scale Legs", tier: "Uncommon", id: "2469" },
    { name: "Golden Legs", tier: "Uncommon", id: "2470" },
    { name: "Knight Legs", tier: "Uncommon", id: "2477" },
    { name: "Magma Legs", tier: "Rare", id: "7894" },
    { name: "Zaoan Legs", tier: "Rare", id: "11304" },
    { name: "Lightning Legs", tier: "Rare", id: "7895" },
    { name: "Ancestor Legs", tier: "Rare", id: "40351" },
    { name: "Forsaken Legs", tier: "Rare", id: "46127" }
  ],
  shields: [
    { name: "Amazon Shield", tier: "Uncommon", id: "2537" },
    { name: "Mastermind Shield", tier: "Uncommon", id: "2514" },
    { name: "Great Shield", tier: "Uncommon", id: "2522" },
    { name: "Demon Shield", tier: "Uncommon", id: "2520" },
    { name: "Medusa Shield", tier: "Uncommon", id: "2536" },
    { name: "Dragon Shield", tier: "Uncommon", id: "2516" },
    { name: "Black Shield", tier: "Uncommon", id: "2529" },
    { name: "Vampire Shield", tier: "Uncommon", id: "2534" },
    { name: "Necromancer Shield", tier: "Rare", id: "6433" },
    { name: "Ectoplasmic Shield", tier: "Rare", id: "34068" }
  ],
  charms: [
    { name: "Lion Doll", id: "41022" },
    { name: "Pinata Dragon", id: "27730" },
    { name: "Noble Sword", id: "24684" }
  ]
};

console.log('ITEMS TO ADD TO items/page.jsx:\n');

console.log('=== HELMETS ===');
itemsToAdd.helmets.forEach(item => {
  const stats = item.tier === 'Rare' ? ', stats: { armor: 15, defense: 5 }' : ', stats: { armor: 10, defense: 3 }';
  console.log(`{ name: "${item.name}", id: "${item.id}", tier: "${item.tier}", level_requirement: ${item.tier === 'Rare' ? '600' : '200'}${stats} },`);
});

console.log('\n=== ARMORS ===');
itemsToAdd.armors.forEach(item => {
  const armor = item.tier === 'Rare' ? 200 : 150;
  const defense = item.tier === 'Rare' ? 20 : 15;
  console.log(`{ name: "${item.name}", id: "${item.id}", tier: "${item.tier}", level_requirement: ${item.tier === 'Rare' ? '600' : '200'}, stats: { armor: ${armor}, defense: ${defense} } },`);
});

console.log('\n=== BOOTS ===');
itemsToAdd.boots.forEach(item => {
  const armor = item.tier === 'Rare' ? 15 : 10;
  console.log(`{ name: "${item.name}", id: "${item.id}", tier: "${item.tier}", level_requirement: ${item.tier === 'Rare' ? '600' : '200'}, stats: { armor: ${armor}, speed: 20 } },`);
});

console.log('\n=== LEGS ===');
itemsToAdd.legs.forEach(item => {
  const armor = item.tier === 'Rare' ? 100 : 60;
  console.log(`{ name: "${item.name}", id: "${item.id}", tier: "${item.tier}", level_requirement: ${item.tier === 'Rare' ? '600' : '200'}, stats: { armor: ${armor} } },`);
});

console.log('\n=== SHIELDS ===');
itemsToAdd.shields.forEach(item => {
  const defense = item.tier === 'Rare' ? 300 : 200;
  console.log(`{ name: "${item.name}", id: "${item.id}", tier: "${item.tier}", level_requirement: ${item.tier === 'Rare' ? '600' : '200'}, stats: { defense: ${defense}, shielding: 2 } },`);
});

console.log('\n=== CHARMS ===');
itemsToAdd.charms.forEach(item => {
  console.log(`{ name: "${item.name}", id: "${item.id}", tier: "Uncommon", level_requirement: null, stats: { max_health: 2, max_mana: 2 } },`);
});

console.log('\nTotal items to add: ' + Object.values(itemsToAdd).flat().length);
