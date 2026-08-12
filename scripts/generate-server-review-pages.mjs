import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getServerReviewPages } from '../lib/server-review-pages.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const appRoot = path.join(repoRoot, 'app', 'servers');
const reserved = new Set(['client', 'country', '[slug]']);

function pascalCase(slug) {
  const value = slug
    .split('-')
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join('');
  return /^\d/.test(value) ? `Server${value}` : value || 'ServerPage';
}

function serializePage(page) {
  return JSON.stringify(page, null, 2);
}

function componentFile(page) {
  const pageJson = serializePage(page);
  return `import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = ${pageJson};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function ${pascalCase(page.slug)}ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
`;
}

function routeFile(page) {
  return `import ${pascalCase(page.slug)}ServerReviewPage, { generateMetadata } from './${page.slug}';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <${pascalCase(page.slug)}ServerReviewPage />;
}
`;
}

const pages = getServerReviewPages().filter((page) => page?.slug && !reserved.has(page.slug));

for (const page of pages) {
  const dir = path.join(appRoot, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${page.slug}.jsx`), componentFile(page), 'utf8');
  fs.writeFileSync(path.join(dir, 'page.jsx'), routeFile(page), 'utf8');
}

console.log(`generated_server_review_pages\t${pages.length}`);
