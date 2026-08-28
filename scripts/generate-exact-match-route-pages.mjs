import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getExactMatchPageData } from '../lib/exact-match-page-data.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const appRoot = path.join(repoRoot, 'app');
const community_archivePath = path.join(repoRoot, 'data', 'community-archive-servers.json');

function pascalCase(slug) {
  const value = slug
    .split('-')
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join('');
  return /^\d/.test(value) ? `Exact${value}` : value || 'ExactMatch';
}

function componentFile(slug) {
  const page = getExactMatchPageData(slug);
  if (!page) {
    throw new Error(`No exact-match page data found for ${slug}`);
  }

  return `import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = ${JSON.stringify(page, null, 2)};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function ${pascalCase(slug)}Page() {
  return <CuratedGuideArticle page={page} />;
}
`;
}

function routeFile(slug) {
  const page = getExactMatchPageData(slug);
  if (page?.type === 'server') {
    return `import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata(${JSON.stringify(slug)});
}

export default function Page() {
  return <LegacyServerRoute slug=${JSON.stringify(slug)} />;
}
`;
  }

  return `import ${pascalCase(slug)}Page, { generateMetadata } from './${slug}';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <${pascalCase(slug)}Page />;
}
`;
}

function readcommunity_archiveSlugs() {
  if (!fs.existsSync(community_archivePath)) return [];
  const dataset = JSON.parse(fs.readFileSync(community_archivePath, 'utf8'));
  return (dataset.records || []).map((record) => record.slug).filter(Boolean);
}

const includecommunity_archive = process.argv.includes('--community_archive');
const slugsArg = process.argv.find((arg) => arg.startsWith('--slugs='));
const confirm = process.argv.includes('--confirm-physical-routes');

if (!confirm) {
  console.error('Refusing to generate exact-match route folders without --confirm-physical-routes.');
  process.exit(1);
}

const slugs = [
  ...(slugsArg ? slugsArg.split('=')[1].split(',').map((slug) => slug.trim()).filter(Boolean) : []),
  ...(includecommunity_archive ? readcommunity_archiveSlugs() : []),
];

const uniqueSlugs = [...new Set(slugs)];

for (const slug of uniqueSlugs) {
  const dir = path.join(appRoot, slug);
  if (fs.existsSync(dir)) continue;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${slug}.jsx`), componentFile(slug), 'utf8');
  fs.writeFileSync(path.join(dir, 'page.jsx'), routeFile(slug), 'utf8');
}

console.log(`exact_match_route_pages_written\t${uniqueSlugs.length}`);
