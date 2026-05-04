import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../app/quests/talent-reset-quest-level-860/page.jsx');

// Read the file
let content = fs.readFileSync(filePath, 'utf-8');

// Replace all instances of the broken image path with local paths
// The file has 20 steps, each with step-01.webp through step-20.webp
let stepCount = 0;
content = content.replace(/\/images\/downloaded\/builder-image-2\.webp/g, () => {
  stepCount++;
  return `/images/quests/talent-reset-quest-level-860/step-${String(Math.ceil(stepCount / 1)).padStart(2, '0')}.webp`;
});

// This approach counts occurrences, but we need a better way
// Let me use a different approach - read line by line and track step IDs

const lines = content.split('\n');
const updatedLines = [];
let currentStep = null;
let imageCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Track current step ID
  const stepMatch = line.match(/id: (\d+),/);
  if (stepMatch) {
    currentStep = parseInt(stepMatch[1]);
    imageCount = 0;
  }
  
  // Replace image paths
  if (line.includes('/images/downloaded/builder-image-2.webp')) {
    imageCount++;
    const stepStr = String(currentStep).padStart(2, '0');
    updatedLines.push(line.replace(
      '/images/downloaded/builder-image-2.webp',
      `/images/quests/talent-reset-quest-level-860/step-${stepStr}.webp`
    ));
  } else {
    updatedLines.push(line);
  }
}

const updatedContent = updatedLines.join('\n');

// Write the file back
fs.writeFileSync(filePath, updatedContent, 'utf-8');

console.log('✅ Updated Talent Reset Quest image paths');
console.log(`📝 Total replacements: ${(content.match(/builder-image-2/g) || []).length}`);
