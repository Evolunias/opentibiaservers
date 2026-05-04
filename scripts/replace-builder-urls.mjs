#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

// Load the URL mapping
const mappingPath = path.join(projectRoot, 'scripts', 'url-mapping.json');
const urlMapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));

// Files to process
const filesToProcess = [
  'app/layout.jsx',
  'app/page.jsx',
  'app/magic-stones/MagicStonesClient.jsx',
  'app/equipment-set-bonuses/page.jsx',
  'app/starter-guide/StarterGuideClient.jsx',
  'app/professional-tips/page.jsx',
  'app/artifact-crystals/page.jsx',
  'app/raids/page.jsx',
  'app/bosses/page.jsx',
  'app/hidden-talent-points/page.jsx',
];

let filesModified = 0;
let replacementsCount = 0;

filesToProcess.forEach(filePath => {
  const fullPath = path.join(projectRoot, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠ File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;

  // Replace each builder.io URL with its local equivalent
  Object.entries(urlMapping).forEach(([builderUrl, localPath]) => {
    if (content.includes(builderUrl)) {
      content = content.replaceAll(builderUrl, localPath);
      replacementsCount++;
    }
  });

  // Only write if content changed
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    filesModified++;
    console.log(`✓ Updated: ${filePath}`);
  }
});

console.log(`\n✓ Completed!`);
console.log(`  Files modified: ${filesModified}`);
console.log(`  Replacements made: ${replacementsCount}`);
console.log(`\nNext: Run 'grep -r "cdn.builder.io" app/' to verify no builder.io URLs remain`);

process.exit(filesModified > 0 ? 0 : 1);
