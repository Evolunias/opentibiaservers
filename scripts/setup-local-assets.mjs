#!/usr/bin/env node

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const imagesDir = path.join(projectRoot, 'public', 'images');

// Ensure images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const images = [
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2F8596ff74e3754cf19c13894ff10ac644%2F2f3381d7283641858b017c68cea4c775?format=webp&width=800&height=1200',
    filename: 'evolisca-logo.webp',
    description: 'Evolisca logo'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2Fceca9ce9d76042fb82a187224a51f3c0%2F42529d3c6ebd45f78b0daa0e5326c43f?format=webp&width=800&height=1200',
    filename: 'georgedoors-discord.webp',
    description: 'GeorgeDoors Discord profile image'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2Fd6ec467e427e4d28b82f1c0f8a0c2147%2F44d664bf77594bcd958f4e38f4decbc8?format=webp&width=800&height=1200',
    filename: 'magic-stones.webp',
    description: 'Magic Stones interface screenshot'
  }
];

function downloadFile(imageObj) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, imageObj.filename);
    const file = fs.createWriteStream(filepath);

    https.get(imageObj.url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${imageObj.description}`);
        console.log(`  Saved to: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`✗ Failed to download: ${imageObj.description}`);
      console.error(`  Error: ${err.message}`);
      reject(err);
    });
  });
}

console.log('Downloading images from builder.io to local repository...\n');

Promise.all(images.map(downloadFile))
  .then(() => {
    console.log('\n✓ All images downloaded successfully!');
    console.log('\nBuilder.io images have been migrated to local storage:');
    images.forEach(img => {
      console.log(`  - /images/${img.filename}`);
    });
    console.log('\nNo traces of builder.io CDN will remain in your source HTML.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('\n✗ Download failed. Please ensure you have internet access.');
    process.exit(1);
  });
