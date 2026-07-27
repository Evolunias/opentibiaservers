import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getOtServerCuratedPages } from '../lib/otserver-curated-pages.js';
import { getTibiaWorldPages } from '../lib/tibia-world-pages.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const reserved = new Set([
  'api',
  'auth',
  'community',
  'dashboard',
  'guides',
  'server',
  'servers',
  'submit-server',
  'topics',
]);

function pascalCase(slug) {
  const value = slug
    .split('-')
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join('');
  return /^\d/.test(value) ? `Server${value}` : value;
}

function componentFile(slug) {
  return `import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('${slug}');
}

export default function ${pascalCase(slug)}Page() {
  return <StaticExactMatchPage slug="${slug}" />;
}
`;
}

function routeFile(slug) {
  return `import ${pascalCase(slug)}Page, { generateMetadata } from './${slug}';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <${pascalCase(slug)}Page />;
}
`;
}

function readCuratedSlugs() {
  const source = fs.readFileSync(path.join(repoRoot, 'lib', 'curated-pages.js'), 'utf8');
  return [...source.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
}

const pages = [
  ...readCuratedSlugs().map((slug) => ({ slug })),
  ...getOtServerCuratedPages(),
  ...getTibiaWorldPages(),
];

const uniquePages = Array.from(new Map(pages.map((page) => [page.slug, page])).values())
  .filter((page) => page?.slug && !reserved.has(page.slug));

for (const page of uniquePages) {
  const dir = path.join(repoRoot, 'app', page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${page.slug}.jsx`), componentFile(page.slug), 'utf8');
  fs.writeFileSync(path.join(dir, 'page.jsx'), routeFile(page.slug), 'utf8');
}

console.log(`generated_static_route_pages\t${uniquePages.length}`);
