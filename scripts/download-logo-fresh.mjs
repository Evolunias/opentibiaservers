#!/usr/bin/env node
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.dirname(__dirname);

const url = 'https://evolisca.com/templates/server/images/logo.png';
const dir = path.join(projectRoot, 'public/images/ui');
const file = path.join(dir, 'logo.png');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

https.get(url, (res) => {
  if (res.statusCode === 200) {
    const fileStream = fs.createWriteStream(file);
    res.pipe(fileStream);
    fileStream.on('finish', () => {
      const size = fs.statSync(file).size;
      console.log(`✓ Downloaded logo (${size} bytes) to ${file}`);
    });
  } else {
    console.log(`Failed: Status ${res.statusCode}`);
    process.exit(1);
  }
}).on('error', (err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
