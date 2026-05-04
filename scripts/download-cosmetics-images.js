const https = require('https');
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = [
  'public/cosmetics/outfits',
  'public/cosmetics/wings',
  'public/cosmetics/auras',
  'public/cosmetics/birds'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Image URLs and their local paths
const images = [
  // Outfits
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/b/b5/1.gif', dest: 'public/cosmetics/outfits/citizen.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/1/19/Hunter3.gif', dest: 'public/cosmetics/outfits/hunter.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/2/27/2.gif', dest: 'public/cosmetics/outfits/mage.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/f/ff/Knight4.gif', dest: 'public/cosmetics/outfits/knight.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/0/03/Noble5.gif', dest: 'public/cosmetics/outfits/noble.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/a/a4/Summoner6.gif', dest: 'public/cosmetics/outfits/summoner.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/f/fd/Warrior7.gif', dest: 'public/cosmetics/outfits/warrior.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/1/1a/Barbarian8.gif', dest: 'public/cosmetics/outfits/barbarian.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/f/fe/Druid1.gif', dest: 'public/cosmetics/outfits/druid.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/e/e8/Wizard1.gif', dest: 'public/cosmetics/outfits/wizard.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/0/07/Oriental1.gif', dest: 'public/cosmetics/outfits/oriental.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/f/fe/Pirate1.gif', dest: 'public/cosmetics/outfits/pirate.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/c/c9/Assassin1.gif', dest: 'public/cosmetics/outfits/assassin.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/b/b6/Beggar1.gif', dest: 'public/cosmetics/outfits/beggar.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/f/fd/Shaman1.gif', dest: 'public/cosmetics/outfits/shaman.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/d/d6/Norse1.gif', dest: 'public/cosmetics/outfits/norse.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/2/28/Nightmare1.gif', dest: 'public/cosmetics/outfits/nightmare.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/5/59/Jester1.gif', dest: 'public/cosmetics/outfits/jester.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/4/4a/Brotherhood1.gif', dest: 'public/cosmetics/outfits/brotherhood.gif' },
  { url: 'https://static.wikia.nocookie.net/evolisca-tibia/images/8/81/Demonhunter1.gif', dest: 'public/cosmetics/outfits/demonhunter.gif' },
];

// Download function
function downloadImage(imageUrl, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    
    https.get(imageUrl, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${destPath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      console.error(`Error downloading ${imageUrl}: ${err.message}`);
      reject(err);
    });
  });
}

// Download all images
async function downloadAll() {
  console.log('Starting download of cosmetics images...\n');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.dest);
    } catch (error) {
      console.error(`Failed to download: ${image.url}`);
    }
  }
  
  console.log('\n✓ Download complete!');
}

downloadAll().catch(err => {
  console.error('Download failed:', err);
  process.exit(1);
});
