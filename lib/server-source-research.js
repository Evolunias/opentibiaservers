import fs from 'node:fs';
import path from 'node:path';

const researchPath = path.join(process.cwd(), 'data', 'server-source-research.json');
let cache = null;

function readResearch() {
  if (cache) return cache;
  try {
    cache = JSON.parse(fs.readFileSync(researchPath, 'utf8'));
  } catch {
    cache = { servers: [] };
  }
  return cache;
}

export function getServerSourceResearch(slug) {
  return readResearch().servers?.find((entry) => entry.slug === slug) || null;
}

export function getServerSourceResearchRecords() {
  return readResearch().servers || [];
}
