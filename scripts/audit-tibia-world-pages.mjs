import { getTibiaWorldPages } from '../lib/tibia-world-pages.js';

const pages = getTibiaWorldPages();
const slugs = new Map();
let duplicateCount = 0;

for (const page of pages) {
  if (slugs.has(page.slug)) {
    duplicateCount += 1;
    console.error(`duplicate\t${page.slug}\t${slugs.get(page.slug)}\t${page.primaryKeyword}`);
  }
  slugs.set(page.slug, page.primaryKeyword);
}

const active = pages.filter((page) => page.facts.some((fact) => fact.label === 'Archive status' && fact.value.includes('Active'))).length;
const deprecated = pages.length - active;

console.log(`world_pages\t${pages.length}`);
console.log(`active_or_merged\t${active}`);
console.log(`deprecated\t${deprecated}`);
console.log(`sample\t${pages.slice(0, 10).map((page) => page.slug).join(',')}`);

if (duplicateCount > 0) process.exit(1);
