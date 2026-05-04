const fs = require('fs');
const path = require('path');

// Mapping of old filenames to new meaningful filenames
const FILENAME_MAPPING = {
  'featured-item-117a0bf5.webp': 'cursed-crimsonevil-backpack-main.webp',
  'featured-item-d1faf2dd.webp': 'cursed-crimsonevil-backpack-01.webp',
  'featured-item-96c2aabd.webp': 'cursed-crimsonevil-backpack-02.webp',
  'featured-item-8ceea8ef.webp': 'draconic-backpack-main.webp',
  'featured-item-78731c4a.webp': 'draconic-backpack-01.webp',
  'featured-item-bae1026e.webp': 'draconic-backpack-02.webp',
  'featured-item-68a88c7c.webp': 'violet-eye-amulet-main.webp',
  'featured-item-fe0bdb4b.webp': 'violet-eye-amulet-01.webp',
  'featured-item-21ac7eb1.webp': 'violet-eye-amulet-02.webp',
  'featured-item-d3e23c5d.webp': 'eternal-ankh-charm-main.webp',
  'featured-item-f4754a54.webp': 'eternal-ankh-charm-01.webp',
  'featured-item-f054413a.webp': 'eternal-ankh-charm-02.webp',
  'featured-item-580ae5b3.webp': 'amulet-of-red-skull-main.webp',
  'featured-item-efc3ef11.webp': 'amulet-of-red-skull-01.webp',
  'featured-item-4f8b6c0b.webp': 'amulet-of-red-skull-02.webp',
  'featured-item-07aa51cd.webp': 'necromancy-signed-contract-charm-main.webp',
  'featured-item-d12e5676.webp': 'necromancy-signed-contract-charm-01.webp',
  'featured-item-4e7153b5.webp': 'necromancy-signed-contract-charm-02.webp',
  'featured-item-7b4ac068.webp': 'tentacle-lute-charm-main.webp',
  'featured-item-0083c0cb.webp': 'tentacle-lute-charm-01.webp',
  'featured-item-4156dc0a.webp': 'tentacle-lute-charm-02.webp',
  'featured-item-6282b6db.webp': 'arodis-magical-board-charm-main.webp',
  'featured-item-e75c9351.webp': 'arodis-magical-board-charm-01.webp',
  'featured-item-b99ae73a.webp': 'arodis-magical-board-charm-02.webp',
  'featured-item-682e0fd6.webp': 'khufu-hand-charm-main.webp',
  'featured-item-547a71b7.webp': 'arbaziloth-santa-figure-charm-main.webp',
  'featured-item-5489e9f8.webp': 'arbaziloth-santa-figure-charm-01.webp',
  'featured-item-9b53ba16.webp': 'arbaziloth-santa-figure-charm-02.webp',
  'featured-item-abf118bd.webp': 'demonic-contract-figure-charm-main.webp',
  'featured-item-e1fb53fe.webp': 'demonic-contract-figure-charm-01.webp',
  'featured-item-a326a4e4.webp': 'demonic-contract-figure-charm-02.webp',
};

const imagesDir = path.join(__dirname, '../public/images/featured-items');

function renameFiles() {
  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(imagesDir)) {
      console.log('Creating featured-items directory...');
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    console.log('Renaming featured item images...');
    let renamedCount = 0;

    Object.entries(FILENAME_MAPPING).forEach(([oldName, newName]) => {
      const oldPath = path.join(imagesDir, oldName);
      const newPath = path.join(imagesDir, newName);

      // Only rename if old file exists and new file doesn't
      if (fs.existsSync(oldPath) && !fs.existsSync(newPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`✓ Renamed: ${oldName} → ${newName}`);
        renamedCount++;
      } else if (!fs.existsSync(oldPath) && fs.existsSync(newPath)) {
        console.log(`✓ Already renamed: ${newName}`);
      } else if (!fs.existsSync(oldPath)) {
        console.warn(`⚠ File not found: ${oldName}`);
      }
    });

    console.log(`\nCompleted! Renamed ${renamedCount} files.`);
  } catch (error) {
    console.error('Error renaming files:', error);
    process.exit(1);
  }
}

// Run the renaming function
renameFiles();
