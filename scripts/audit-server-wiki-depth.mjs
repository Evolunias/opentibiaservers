import { topOtservlistServers } from '../lib/top-otservlist-servers.js';
import { getOtServerCuratedPage } from '../lib/otserver-curated-pages.js';
import fs from 'node:fs';
import path from 'node:path';

const REQUIRED_FIELDS = [
  'gameplayGuide',
  'rates',
  'vocations',
  'items',
  'monsters',
  'quests',
  'bosses',
  'downloads',
  'rules',
  'screenshots',
  'history',
  'ownerContacts',
];

const failures = [];
const statusCounts = new Map();

for (const server of topOtservlistServers) {
  const page = getOtServerCuratedPage(server.slug);
  const wikiDepth = page?.wikiDepth;

  if (!page) {
    failures.push(`${server.slug}: missing exact-match otservlist page`);
    continue;
  }

  const routePath = path.join('app', server.slug, `${server.slug}.jsx`);
  if (!fs.existsSync(routePath)) {
    failures.push(`${server.slug}: missing physical exact-match route ${routePath}`);
  }

  if (!wikiDepth) {
    failures.push(`${server.slug}: missing wikiDepth record`);
    continue;
  }

  statusCounts.set(wikiDepth.status, (statusCounts.get(wikiDepth.status) || 0) + 1);

  if (!wikiDepth.status || !wikiDepth.statusLabel) {
    failures.push(`${server.slug}: missing wiki status`);
  }

  if (!Array.isArray(wikiDepth.sourceCandidates) || wikiDepth.sourceCandidates.length < 4) {
    failures.push(`${server.slug}: expected at least 4 source candidates`);
  }

  for (const field of REQUIRED_FIELDS) {
    if (!wikiDepth.requiredFields?.includes(field)) {
      failures.push(`${server.slug}: requiredFields does not include ${field}`);
    }

    if (field === 'gameplayGuide') {
      if (!Array.isArray(wikiDepth.gameplayGuide) || wikiDepth.gameplayGuide.length < 3) {
        failures.push(`${server.slug}: gameplayGuide must contain at least 3 entries`);
      }
      continue;
    }

    const values = wikiDepth.systems?.[field];
    if (!Array.isArray(values) || values.length === 0) {
      failures.push(`${server.slug}: wikiDepth.systems.${field} is empty`);
    }
  }

  if (!Array.isArray(wikiDepth.editorialQueue) || wikiDepth.editorialQueue.length < 4) {
    failures.push(`${server.slug}: editorialQueue must contain at least 4 tasks`);
  }
}

if (failures.length) {
  console.error(`Server wiki-depth audit failed (${failures.length} issues):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Server wiki-depth audit passed for ${topOtservlistServers.length} otservlist seeded pages.`);
console.log(`Status counts: ${JSON.stringify(Object.fromEntries(statusCounts), null, 2)}`);
