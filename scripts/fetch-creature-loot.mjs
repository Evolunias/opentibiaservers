import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// List of all creatures to fetch
const creatures = [
  "Abyssador", "Abyssal Shadowfiend", "Acid Blob", "Acid Dragon", "Acid Hydra",
  "Acolyte of the Cult", "Actors Power", "Adept of the Cult", "Alpha Ape", "Alptramun",
  "Amazon", "Ancient Fungus", "Ancient Scarab", "Ancient Woods", "Andras",
  "Apocalypse", "Arachnid Queen", "Arachnogar", "Arcane Energizer", "Arcane Pulsator",
  "Arcanum", "Arkanaz", "Ashee", "Azure Dragon", "Ballguard",
  "Banshee", "Barbarian Bloodwalker", "Barbarian Brutetamer", "Barbarian Headsplitter", "Barbarian Skullhunter",
  "Battle Arena", "Bazir", "Beast Garden", "Behemoth", "Betrayed Wraith",
  "Big Foot", "Black Knight", "Black Stag", "Black Vixen", "Blackbeard the Ruthless",
  "Blazebringer", "Blightwalker", "Blizzard", "Blizzardbane", "Blood Beast",
  "Blood Priest", "Bloodback", "Bloodstone Pit", "Blue Efreet", "Bog Raider",
  "Bomberman", "Bone Fortress", "Bonebeast", "Boogy", "Bragrumol",
  "Braindeath", "Captain Bloodbeard", "Captain Jones", "Carrion Worm", "Cataclysm Overlord",
  "Cave Devourer", "Cerberus", "Chakoya Tribewarden", "Chillax", "Choking Fear",
  "Cinnamon Ibex", "Cocooned Crypt", "Corruptar", "Crawler", "Crimson Tormentor",
  "Crusader", "Crypt Shambler", "Crystal Spider", "Crystal Vault", "Crystal Wolf",
  "Crystarax", "Cult Enforcer", "Cunning Hyaena", "Cursed Ape", "Cyclops",
  "Cyclops Drone", "Dark Apprentice", "Dark Magician", "Dark Monk", "Dark Sorcerer",
  "Dark Tomb", "Dark Torturer", "Dawn Strayer", "Dead Lord", "Death Dragon",
  "Death Mage", "Deathstrike", "DeathWing", "Decaythar", "Deepling Warrior",
  "Defiler", "Demodras", "Demon", "Demon Outcast", "Demon Skeleton",
  "Demonfire Assaulter", "Demonfire Necrobilizer", "Demonfire Sorcerer", "Demodras", "Demonspine", "Desert Devourer",
  "Devourer", "Diamond Dragon", "Diremaw", "Diseased Fred", "Divine Dragon",
  "Drabbit", "Dragon Hatchling", "Draken Abomination", "Draken Elite", "Draken Warmaster",
  "Drakonir", "Dramer", "Draptor", "Dread Intruder", "Dread Maiden",
  "Dreadful Gladiator", "Dreadful Herald", "Dream Shaper", "Dreezak the Magnificent", "Drowned Apostle",
  "Drowned Ghoul", "Drowned Prophet", "Dryad", "Dual Wielder", "Dung Beetle",
  "Dunk", "Dusted Carnage", "Dwarf Guard", "Dwarf Henchman", "Dwarf Priest",
  "Dwarf Soldier", "Dwarf Geomancer", "Earth Elemental", "Earthbound Spirit", "Earthquake Colossus",
  "Earthsiege", "Efreet", "Egg Crate", "Elder Dragon", "Elemental Envoy",
  "Elemental Phenoix", "Elemental Spellweaver", "Elemental Wrath", "Elvish Arcanist", "Elvish Archer",
  "Elvish Battlemage", "Elvish Betrayer", "Elvish Brigand", "Elvish Champion", "Elvish Exorcist",
  "Elvish Initiate", "Elvish Instigator", "Elvish Templar", "Emerald Serpent", "Emeth",
  "Empyrial Knight", "Empyrial Overlord", "Enchanted Pillar", "Enlightened One", "Enraged Barbarian",
  "Enraged Cauldron", "Enraged Dwarf", "Enraged Green Djinn", "Enraged Red Djinn", "Enraged White Djinn",
  "Ensnared Knight", "Eremor", "Erranian Pest", "Erupting Ghoul", "Eruption Elemental",
  "Escarcel", "Essence Phantom", "Ethershroud Vampire", "Everfrozen Crone", "Everfrozen Giant",
  "Everfrozen Revenant", "Everfrozen Warlord", "Evilscourge", "Evolved Specter", "Ewaiator",
  "Exalted Rider", "Exalted Sentry", "Execowtioner", "Executioner", "Exile",
  "Exiled Seneschal", "Exotic Lizard", "Explosive Bag", "Explosive Bunny", "Exposed Core",
  "Exterminator", "Extreme Dragon", "Eye of Destruction", "Eye Stalk", "Eyelash Exile",
  "Faded Horror", "Faerie Drake", "Fallen Angel", "Fallen Bombshell", "Fallen Deacon",
  "Fallen Mooncaller", "Fallen Paladin", "Famished Ghoul", "Fanboi", "Fanatic",
  "Fanatic of Holy Light", "Fanatic of Holy Wrath", "Fangs of the Abyss", "Fangthorn", "Fangs",
  "Faun", "Fawnira", "Fear Elemental", "Fearbound Assaulter", "Fearless Assaulter",
  "Fearless Guardsman", "Fearless Knight", "Fearless Warrior", "Feasting Flies", "Feasting Ghoul",
  "Fell Revenant", "Felled Draken Elite", "Felonious Shade", "Felucca", "Female Goblin",
  "Femme Fatale", "Fenrir", "Fenryr", "Ferocious Shade", "Festering Minion",
  "Fever Dreamer", "Fickle Servant", "Field Ratter", "Fiend", "Fiendish Converter",
  "Fiendish Knight", "Fiendling", "Fiery Dust Devil", "Fiery Harbinger", "Fiery Invader",
  "Fiery Necromancer", "Fiery Warlord", "Fierce Barbarian", "Fiftieth Shade", "Fig Filcher",
  "Filth Creeper", "Filthy Grounds", "Filthy Mind", "Filthy Rat", "Filthy Troll",
  "Final Guardian", "Finder", "Fire Elemental", "Fire Giant", "Fire of Service",
  "Fire Overlord", "Fire Wisp", "Firebrand", "Firecaller", "Fired Furnace",
  "Firefly", "Firehawk", "Fireleech", "Firepaw", "Firerune Executioner",
  "Fiery Drake", "Fiery Hellgolem", "Firestyle Elemental", "Firestyle Warlord", "Firewing Harpy",
  "Firewing Matriarch", "First Lich", "First of The Chosen", "Fischer", "Fishmonger",
  "Fissurewing Harpy", "Fissurewing Matriarch", "Five-Finger Giuseppe", "Fixated Cleric", "Fixated Crusader",
  "Fixated Paladin", "Flabbergasted Grandma", "Flagrant Spectre", "Flail Mace", "Flamekeeper",
  "Flamecutter", "Flameguard Inquisitor", "Flametongue", "Flaming Arrow", "Flaming Conjurer",
  "Flaming Feather", "Flaming Phoenix", "Flaming Terror", "Flammadrake", "Flammask",
  "Flammifer", "Flanker", "Flank Guard", "Flashing Bolt", "Flatulent Gasparion",
  "Flesh Golem", "Flesh Specimen", "Fleshrenderer", "Fleshstealer", "Fleshwound", "Fleshwound Troll"
];

async function fetchLoot(creatureName) {
  try {
    const encodedName = encodeURIComponent(creatureName);
    const url = `https://evolisca.com/?subtopic=creatures&creature=${encodedName}`;

    const response = await fetch(url);
    const html = await response.text();

    // Parse loot drops from img tags
    // The HTML structure uses src="/images/items2/ID.gif" and title="itemname<br/>Chance: X%<br/>Max count: Y"
    const imgRegex = /src="\/images\/items2\/(\d+)\.gif"[^>]*title="([^"]*)/g;
    const loot = [];
    const seen = new Set();
    let match;

    while ((match = imgRegex.exec(html)) !== null) {
      const itemId = match[1];
      const titleText = match[2];

      // Parse the title to extract item name, chance, and max count
      const parts = titleText.split('<br/>');
      const itemName = parts[0].trim();

      let chance = null;
      let maxCount = null;

      for (const part of parts) {
        const cleanPart = part.trim();
        if (cleanPart.includes('Chance:')) {
          const chanceMatch = cleanPart.match(/Chance:\s*(\d+(?:\.\d+)?)/);
          if (chanceMatch) chance = parseFloat(chanceMatch[1]);
        }
        if (cleanPart.includes('Max count:')) {
          const countMatch = cleanPart.match(/Max count:\s*(\d+)/);
          if (countMatch) maxCount = parseInt(countMatch[1]);
        }
      }

      if (itemName && itemName.length > 0 && itemName.toLowerCase() !== 'logo' && !seen.has(itemName)) {
        const lootItem = {
          name: itemName,
          id: itemId
        };

        // Add optional fields if they exist
        if (chance !== null) lootItem.chance = chance;
        if (maxCount !== null) lootItem.maxCount = maxCount;

        loot.push(lootItem);
        seen.add(itemName);
      }
    }

    return { creature: creatureName, loot };
  } catch (error) {
    console.error(`Error fetching loot for ${creatureName}:`, error.message);
    return { creature: creatureName, loot: [], error: error.message };
  }
}

async function fetchAllLoot() {
  console.log(`Starting to fetch loot for ${creatures.length} creatures...`);
  
  const results = {};
  const batchSize = 5;
  const delayMs = 500; // Delay between batches to avoid hammering the server
  
  for (let i = 0; i < creatures.length; i += batchSize) {
    const batch = creatures.slice(i, i + batchSize);
    console.log(`Fetching batch ${Math.floor(i / batchSize) + 1} (${i + 1}-${Math.min(i + batchSize, creatures.length)} of ${creatures.length})...`);
    
    const promises = batch.map(creature => fetchLoot(creature));
    const batchResults = await Promise.all(promises);
    
    batchResults.forEach(result => {
      results[result.creature] = result.loot || [];
    });
    
    if (i + batchSize < creatures.length) {
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
  
  const outputPath = path.join(__dirname, '..', 'public', 'data', 'creature-loot.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  
  console.log(`✓ Loot data saved to ${outputPath}`);
  console.log(`Total creatures processed: ${Object.keys(results).length}`);
}

fetchAllLoot().catch(console.error);
