import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2F57417481bfba44e1ae33151fb9c7e14b%2F221a80470bc442b48b46a9d274aeb0fe?format=webp&width=800&height=1200',
    filename: 'step-01-crew-and-entry-1.webp'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2F57417481bfba44e1ae33151fb9c7e14b%2F15906ea9396a41f4b715a3090813ed14?format=webp&width=800&height=1200',
    filename: 'step-01-crew-and-entry-2.webp'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2F57417481bfba44e1ae33151fb9c7e14b%2F8222b23ebb8c4af087db8c3e06393843?format=webp&width=800&height=1200',
    filename: 'step-02-cracked-tiles.webp'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2F57417481bfba44e1ae33151fb9c7e14b%2F17372227314d45778a45ac323f3854e7?format=webp&width=800&height=1200',
    filename: 'step-03-battle-strategy.webp'
  }
];

const targetDir = path.join(__dirname, '../public/images/quests/lord-heskel-pirate-island');

// Ensure directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadImage(imageUrl, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(targetDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(imageUrl, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve(filename);
      });

      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('🚀 Starting download of Lord Heskel quest images...\n');
  
  try {
    for (const image of images) {
      await downloadImage(image.url, image.filename);
    }
    
    console.log('\n✅ All images downloaded successfully!');
    console.log(`📁 Location: ${targetDir}`);
  } catch (error) {
    console.error('❌ Error downloading images:', error);
    process.exit(1);
  }
}

downloadAllImages();
