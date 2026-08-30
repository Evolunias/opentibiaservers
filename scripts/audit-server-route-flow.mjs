import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { deriveServerIdentity } from '../lib/server-identity.js';
import { getServerReviewPage, getServerReviewPages } from '../lib/server-review-pages.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const appRoot = path.join(repoRoot, 'app');
const dedicatedNestedRoutes = new Set([
  'baiak-icewar',
  'baiak-ilusion',
  'cyntara',
  'cyleria',
  'demolidores',
  'evolunia',
  'exordion',
  'gunzodus',
  'noxiousot',
  'realera',
  'underwar',
]);
const shouldWrite = process.argv.includes('--write');
const rawPages = getServerReviewPages({ canonical: false });
const serverSlugs = new Set(rawPages.map((page) => page.slug));

function pageHost(page = {}) {
  const listedHost = (page.facts || []).find((fact) => fact?.label === 'Listed host')?.value || '';
  return page.host || page.ip || (/^(pending|unknown|n\/?a|-)$/i.test(listedHost) ? '' : listedHost);
}

const canonicalBySlug = new Map(rawPages.map((page) => [
  page.slug,
  deriveServerIdentity({ ...page, host: pageHost(page) }).slug || page.slug,
]));

function nestedRouteFile(slug) {
  return `import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata(${JSON.stringify(slug)});
}

export default function Page() {
  return <CanonicalServerRoute slug=${JSON.stringify(slug)} />;
}
`;
}

function legacyRouteFile(slug) {
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

function physicalRoutes(root) {
  return fs.readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('['))
    .map((entry) => ({
      slug: entry.name,
      routePath: path.join(root, entry.name, 'page.jsx'),
      componentPath: path.join(root, entry.name, `${entry.name}.jsx`),
    }))
    .filter(({ routePath, componentPath }) => fs.existsSync(routePath) && fs.existsSync(componentPath));
}

const nested = physicalRoutes(path.join(appRoot, 'servers')).filter(({ slug }) => serverSlugs.has(slug));
const topLevel = physicalRoutes(appRoot).filter(({ slug }) => serverSlugs.has(slug));
const nestedAliases = nested
  .map(({ slug }) => ({ slug, canonical: canonicalBySlug.get(slug) || slug }))
  .filter(({ slug, canonical }) => slug !== canonical);
const representativeAliases = new Map([
  ['free-exercis-new-ppl', 'ezodus'],
  ['global-7-4-custom', 'exordion'],
  ['arcanum', 'realera'],
]);
const representativeFailures = [...representativeAliases].filter(
  ([legacy, canonical]) => getServerReviewPage(legacy)?.slug !== canonical,
);

const expected = [
  ...nested.map((route) => ({
    ...route,
    expected: dedicatedNestedRoutes.has(route.slug) ? null : nestedRouteFile(route.slug),
    kind: dedicatedNestedRoutes.has(route.slug) ? 'dedicated' : 'canonical',
  })),
  ...topLevel.map((route) => ({ ...route, expected: legacyRouteFile(route.slug), kind: 'legacy' })),
];
const stale = expected.filter(({ routePath, expected: contents }) => contents && fs.readFileSync(routePath, 'utf8') !== contents);

if (shouldWrite) {
  for (const { routePath, expected: contents } of stale) fs.writeFileSync(routePath, contents, 'utf8');
}

console.log(`canonical_physical_routes\t${nested.length}`);
console.log(`canonical_alias_redirects\t${nestedAliases.length}`);
console.log(`legacy_top_level_redirects\t${topLevel.length}`);
console.log(`stale_template_bypasses\t${stale.length}`);
console.log(`routes_${shouldWrite ? 'rewritten' : 'requiring_rewrite'}\t${stale.length}`);
console.log(`representative_alias_failures\t${representativeFailures.length}`);

for (const alias of nestedAliases.slice(0, 20)) {
  console.log(`alias\t/servers/${alias.slug}\t/servers/${alias.canonical}`);
}

if ((!shouldWrite && stale.length) || representativeFailures.length) process.exitCode = 1;
