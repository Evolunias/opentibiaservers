import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const appRoot = path.join(repoRoot, 'app');
const otlandPath = path.join(repoRoot, 'data', 'otland-server-gala-servers.json');

function pascalCase(slug) {
  const value = slug
    .split('-')
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join('');
  return /^\d/.test(value) ? `Exact${value}` : value || 'ExactMatch';
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

function readOtlandSlugs() {
  if (!fs.existsSync(otlandPath)) return [];
  const dataset = JSON.parse(fs.readFileSync(otlandPath, 'utf8'));
  return (dataset.records || []).map((record) => record.slug).filter(Boolean);
}

const includeOtland = process.argv.includes('--otland');
const slugsArg = process.argv.find((arg) => arg.startsWith('--slugs='));
const confirm = process.argv.includes('--confirm-physical-routes');

if (!confirm) {
  console.error('Refusing to generate exact-match route folders without --confirm-physical-routes.');
  process.exit(1);
}

const slugs = [
  ...(slugsArg ? slugsArg.split('=')[1].split(',').map((slug) => slug.trim()).filter(Boolean) : []),
  ...(includeOtland ? readOtlandSlugs() : []),
];

const uniqueSlugs = [...new Set(slugs)];

for (const slug of uniqueSlugs) {
  const dir = path.join(appRoot, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${slug}.jsx`), componentFile(slug), 'utf8');
  fs.writeFileSync(path.join(dir, 'page.jsx'), routeFile(slug), 'utf8');
}

console.log(`exact_match_route_pages_written\t${uniqueSlugs.length}`);
