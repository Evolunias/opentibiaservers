import fs from 'node:fs';
import path from 'node:path';
import { buildDeepDiveSections, estimateCuratedPageWords } from '../lib/deep-dive-pages.js';
import { buildOtServerCuratedPage } from '../lib/otserver-curated-pages.js';
import { collapseCanonicalServers } from '../lib/server-identity.js';

const root = process.cwd();
const inventory = JSON.parse(fs.readFileSync(path.join(root, 'data', 'live-server-inventory.json'), 'utf8'));
const servers = collapseCanonicalServers(inventory.servers || []);
const failures = [];
let minimumWords = Number.POSITIVE_INFINITY;
let minimumSections = Number.POSITIVE_INFINITY;
let minimumInternalTopics = Number.POSITIVE_INFINITY;

for (const server of servers) {
  const page = buildOtServerCuratedPage(server);
  const label = server.slug || server.name;
  const sections = buildDeepDiveSections(page);
  const words = estimateCuratedPageWords(page);
  const internalTopics = new Set(page.relatedServerQueries || []).size;
  minimumWords = Math.min(minimumWords, words);
  minimumSections = Math.min(minimumSections, sections.length);
  minimumInternalTopics = Math.min(minimumInternalTopics, internalTopics);

  if (!page || page.type !== 'server') failures.push(`${label}: no server publication page`);
  if (!page.title?.includes(server.name)) failures.push(`${label}: metadata title omits the server name`);
  if (!page.h1?.includes(server.name)) failures.push(`${label}: H1 omits the server name`);
  if (!page.metaDescription?.includes(server.name)) failures.push(`${label}: metadata description omits the server name`);
  if ((page.keywords || []).length < 8) failures.push(`${label}: fewer than 8 server-specific search terms`);
  if ((page.facts || []).length < 7) failures.push(`${label}: fewer than 7 reference facts`);
  if (!page.wikiDepth || page.wikiDepth.requiredFields?.length < 12) failures.push(`${label}: incomplete wiki-depth contract`);
  if (sections.length < 10) failures.push(`${label}: fewer than 10 player-guide chapters`);
  if (words < 1600) failures.push(`${label}: only ${words} generated words`);
  if (internalTopics < 4) failures.push(`${label}: insufficient internal comparison topics`);
}

const renderer = fs.readFileSync(path.join(root, 'app', 'components', 'CuratedGuideArticle.jsx'), 'utf8');
const route = fs.readFileSync(path.join(root, 'app', 'components', 'CanonicalServerRoute.jsx'), 'utf8');
for (const marker of ['<strong><em><u>{page.primaryKeyword}</u></em></strong>', 'id="server-evidence"', 'id="server-systems"', 'id="server-player-guide"', 'id="server-faq"']) {
  if (!renderer.includes(marker)) failures.push(`shared renderer: missing publication marker ${marker}`);
}
if (!route.includes('buildSourceBackedServerProfile(buildOtServerCuratedPage(server))')) {
  failures.push('canonical route: live database fallback does not use the source-backed wiki builder');
}

if (failures.length) {
  console.error(`Listing publication quality audit failed (${failures.length} issues):`);
  for (const failure of failures.slice(0, 100)) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'passed',
  canonicalListings: servers.length,
  minimumGeneratedWords: minimumWords,
  minimumPlayerGuideChapters: minimumSections,
  minimumInternalComparisonTopics: minimumInternalTopics,
  sharedWikiRenderer: true,
  sourceGapPolicy: 'Unverified fields remain explicit and are never converted into claims.',
}, null, 2));
