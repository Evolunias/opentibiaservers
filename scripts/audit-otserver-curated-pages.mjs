import { getOtServerCuratedPages } from '../lib/otserver-curated-pages.js';

const pages = getOtServerCuratedPages();
const slugs = new Set();
let duplicates = 0;

for (const page of pages) {
  if (slugs.has(page.slug)) {
    duplicates += 1;
    console.error(`duplicate\t${page.slug}`);
  }
  slugs.add(page.slug);
}

const withSpecificSources = pages.filter((page) => page.sourceLinks.length > 2).length;

console.log(`otserver_curated_pages\t${pages.length}`);
console.log(`with_specific_sources\t${withSpecificSources}`);
console.log(`sample\t${pages.slice(0, 20).map((page) => page.slug).join(',')}`);

if (duplicates > 0) process.exit(1);
