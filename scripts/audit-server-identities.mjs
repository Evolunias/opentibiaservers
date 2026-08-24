import { topOtservlistServers } from '../lib/top-otservlist-servers.js';
import { getServerReviewPages } from '../lib/server-review-pages.js';
import { collapseCanonicalServers, deriveServerIdentity } from '../lib/server-identity.js';

function pageHost(page = {}) {
  const listedHost = (page.facts || []).find((fact) => fact?.label === 'Listed host')?.value || '';
  return page.host || page.ip || (/^(pending|unknown|n\/?a|-)$/i.test(listedHost) ? '' : listedHost);
}

const sourceRecords = [
  ...topOtservlistServers,
  ...getServerReviewPages({ canonical: false }).map((page) => ({ ...page, host: pageHost(page) })),
];
const audited = sourceRecords.map((record) => ({ record, identity: deriveServerIdentity(record) }));
const unresolved = audited.filter(({ identity }) => !identity.slug || !identity.name || identity.name === 'Open Tibia Server');
const invalidPaths = audited.filter(({ identity }) => !/^[-a-z0-9]+$/.test(identity.slug));
const groups = new Map();

for (const entry of audited) {
  const rows = groups.get(entry.identity.slug) || [];
  rows.push(entry);
  groups.set(entry.identity.slug, rows);
}

const collisions = [...groups.entries()].filter(([, rows]) => rows.length > 1);
const canonical = collapseCanonicalServers(sourceRecords);

console.log(`source_records\t${sourceRecords.length}`);
console.log(`canonical_servers\t${canonical.length}`);
console.log(`consolidated_aliases\t${sourceRecords.length - canonical.length}`);
console.log(`canonical_collisions\t${collisions.length}`);
console.log(`unresolved_identities\t${unresolved.length}`);
console.log(`invalid_paths\t${invalidPaths.length}`);

for (const [slug, rows] of collisions.slice(0, 20)) {
  console.log(`group\t${slug}\t${rows.length}\t${[...new Set(rows.map(({ record }) => record.slug).filter(Boolean))].join(',')}`);
}

if (unresolved.length || invalidPaths.length) {
  for (const { record } of [...unresolved, ...invalidPaths].slice(0, 25)) {
    console.error(`invalid\t${record.slug || '-'}\t${record.name || '-'}\t${pageHost(record) || '-'}`);
  }
  process.exitCode = 1;
}
