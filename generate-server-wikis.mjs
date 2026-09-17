import fs from 'fs';
import path from 'path';
import { getStaticServerNameRoutes } from './lib/static-app-routes.js';
import { topOtservlistServers } from './lib/top-otservlist-servers.js';
import { getServerReviewPages } from './lib/server-review-pages.js';
import { getCuratedPages } from './lib/curated-pages.js';
import { getServerPath } from './lib/server-paths.js';

const SITE = 'https://opentibiaservers.com';
const OUT_MD = path.join('content', 'external-wikis', 'markdown');
const OUT_MW = path.join('content', 'external-wikis', 'mediawiki');
const OUT_ROOT = path.join('content', 'external-wikis');
const GENERATED = new Date().toISOString().slice(0, 10);

function titleCaseSlug(slug = '') {
  return String(slug).split('-').filter(Boolean).map((part) => {
    if (/^\d/.test(part)) return part;
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join(' ');
}

function collectServers() {
  const map = new Map();
  for (const route of getStaticServerNameRoutes()) {
    map.set(route.slug, { slug: route.slug, name: titleCaseSlug(route.slug), sources: ['static-route'] });
  }
  for (const server of topOtservlistServers) {
    const prev = map.get(server.slug) || { slug: server.slug, sources: [] };
    map.set(server.slug, {
      ...prev,
      slug: server.slug,
      name: server.name || prev.name || titleCaseSlug(server.slug),
      host: server.host || server.ip || prev.host,
      version: server.version || prev.version,
      location: server.location || prev.location,
      players_online: server.players_online ?? prev.players_online,
      exp_rate: server.exp_rate ?? prev.exp_rate,
      world_type: server.world_type || prev.world_type,
      website_url: server.website_url || server.external_launch_url || prev.website_url,
      description: server.description || server.official_summary || prev.description,
      sources: [...new Set([...(prev.sources || []), 'otservlist-seed'])],
    });
  }
  for (const page of getServerReviewPages()) {
    const prev = map.get(page.slug) || { slug: page.slug, sources: [] };
    map.set(page.slug, {
      ...prev,
      slug: page.slug,
      name: page.name || page.primaryKeyword || prev.name || titleCaseSlug(page.slug),
      host: page.host || prev.host,
      description: page.dek || page.metaDescription || page.overview || prev.description,
      sources: [...new Set([...(prev.sources || []), 'review-page'])],
    });
  }
  for (const page of getCuratedPages().filter((p) => p.type === 'server')) {
    const prev = map.get(page.slug) || { slug: page.slug, sources: [] };
    map.set(page.slug, {
      ...prev,
      slug: page.slug,
      name: page.primaryKeyword || page.name || prev.name || titleCaseSlug(page.slug),
      description: page.dek || page.metaDescription || prev.description,
      sources: [...new Set([...(prev.sources || []), 'curated'])],
    });
  }
  return [...map.values()].sort((a, b) => a.slug.localeCompare(b.slug));
}

function otsUrl(server) { return SITE + getServerPath(server); }
function wikiUrl(server) { return `${SITE}/wiki/${server.slug}`; }
function listingUrl() { return SITE + '/directory'; }
function escapeMd(value = '') { return String(value).replace(/\|/g, '\\|'); }

function buildMarkdown(server) {
  const name = server.name;
  const profile = otsUrl(server);
  const wiki = wikiUrl(server);
  const rows = [
    '| Field | Detail |',
    '| --- | --- |',
    `| Server name | ${escapeMd(name)} |`,
    `| Directory profile | [${profile}](${profile}) |`,
    `| On-site wiki | [${wiki}](${wiki}) |`,
  ];
  if (server.host) rows.push(`| Host | ${escapeMd(server.host)} |`);
  if (server.version) rows.push(`| Client / version | ${escapeMd(server.version)} |`);
  if (server.location) rows.push(`| Location | ${escapeMd(server.location)} |`);
  if (server.world_type) rows.push(`| World type | ${escapeMd(server.world_type)} |`);
  if (server.exp_rate != null) rows.push(`| EXP rate (snapshot) | ${escapeMd(String(server.exp_rate))}x |`);
  if (server.players_online != null) rows.push(`| Players online (snapshot) | ${escapeMd(String(server.players_online))} |`);
  if (server.website_url) rows.push(`| Official site | [${escapeMd(server.website_url)}](${server.website_url}) |`);
  rows.push(`| Status & rankings | [opentibiaservers.com](${SITE}) |`);
  const overview = server.description
    ? String(server.description).trim()
    : `${name} is listed in the Open Tibia Servers database so players can compare live status, player counts, rates, and related Open Tibia projects before creating an account.`;
  const sourceList = (server.sources || []).map((s) => `- ${s}`).join('\n') || '- directory-seed';
  return [
    '---',
    `title: "${String(name).replace(/"/g, '\\"')} Open Tibia Server"`,
    `slug: ${server.slug}`,
    `canonical: ${profile}`,
    `wiki: ${wiki}`,
    `directory: ${SITE}`,
    `generated: ${GENERATED}`,
    'format: markdown',
    '---',
    '',
    `# ${name}`,
    '',
    `**${name}** is an Open Tibia (OTServ) private server tracked by the [Open Tibia Servers](${SITE}) directory.`,
    '',
    `> **Live listing:** [${name} on OpenTibiaServers.com](${profile})  `,
    `> **Server wiki:** [${name} wiki page](${wiki})  `,
    `> **Browse all servers:** [Open Tibia server list](${listingUrl()})`,
    '',
    '## Quick facts',
    '',
    ...rows,
    '',
    '## Overview',
    '',
    overview,
    '',
    '## Getting started',
    '',
    `Players searching for **${name}** usually want the official website, client download path, rules, rates, and whether the world is still active. Start here:`,
    '',
    `1. Open the exact-match listing: [${name} server profile](${profile})`,
    `2. Read this wiki summary: [${name} wiki](${wiki})`,
    `3. Compare filters in the [full directory](${listingUrl()})`,
    '4. Confirm client version / host details before downloading a third-party client',
    '',
    '## Rates, world type, and activity',
    '',
    server.exp_rate != null || server.world_type || server.players_online != null
      ? [
          'Directory snapshots (may change):',
          '',
          server.exp_rate != null ? `- EXP rate: **${escapeMd(String(server.exp_rate))}x**` : null,
          server.world_type ? `- World type: **${escapeMd(server.world_type)}**` : null,
          server.players_online != null ? `- Players online (snapshot): **${escapeMd(String(server.players_online))}**` : null,
          server.version ? `- Client / protocol: **${escapeMd(server.version)}**` : null,
          server.location ? `- Location: **${escapeMd(server.location)}**` : null,
          '',
          `Always re-check the [live profile](${profile}) for current online counts and status.`,
        ].filter((line) => line !== null).join('\n')
      : `Rate and PvP details for **${name}** are maintained on the [live listing](${profile}). Snapshots in this article are only as fresh as the last directory sync.`,
    '',
    '## Why use OpenTibiaServers.com',
    '',
    `[OpenTibiaServers.com](${SITE}) is a public Open Tibia server listing and comparison site. Use it to:`,
    '',
    `1. Open the exact-match page for **${name}**: [${profile}](${profile})`,
    '2. Compare nearby OT servers by players online, version, and location',
    '3. Verify listing context before downloading a client from third-party mirrors',
    `4. Share the wiki page: [${wiki}](${wiki})`,
    '',
    '## Related links',
    '',
    `- [${name} — Open Tibia Servers listing](${profile})`,
    `- [${name} — on-site wiki](${wiki})`,
    `- [Open Tibia server directory](${listingUrl()})`,
    `- [All wiki pages](${SITE}/wiki)`,
    `- [OpenTibiaServers.com](${SITE})`,
    server.website_url ? `- [Official ${name} website](${server.website_url})` : null,
    '',
    '## Sources',
    '',
    sourceList,
    '',
    '## Categories',
    '',
    `Open Tibia servers · OTServ · ${name} · Tibia private servers · MMORPG directories`,
    '',
    '## Disclaimer',
    '',
    `${name} is an independent Open Tibia project. OpenTibiaServers.com aggregates public listing data and is not affiliated with CipSoft GmbH. Verify rules, donations, and downloads on the server's own channels.`,
    '',
    '---',
    '',
    `*Generated ${GENERATED} for on-site and external wiki publishing. Canonical listing: [${profile}](${profile}).*`,
    '',
  ].filter((line) => line !== null).join('\n');
}

function buildMediaWiki(server) {
  const name = server.name;
  const profile = otsUrl(server);
  const wiki = wikiUrl(server);
  const parts = [];
  parts.push('{{Infobox OTServer');
  parts.push(`| name = ${name}`);
  parts.push(`| directory = [${SITE} OpenTibiaServers.com]`);
  parts.push(`| profile = ${profile}`);
  parts.push(`| wiki = ${wiki}`);
  if (server.host) parts.push(`| host = ${server.host}`);
  if (server.version) parts.push(`| version = ${server.version}`);
  if (server.location) parts.push(`| location = ${server.location}`);
  if (server.world_type) parts.push(`| pvp = ${server.world_type}`);
  if (server.exp_rate != null) parts.push(`| exp = ${server.exp_rate}x`);
  if (server.website_url) parts.push(`| website = ${server.website_url}`);
  parts.push('}}');
  parts.push('');
  parts.push(`'''${name}''' is an [[Open Tibia]] (OTServ) private server tracked by the [${SITE} Open Tibia Servers] directory.`);
  parts.push('');
  parts.push(`'''Live listing:''' [${profile} ${name} on OpenTibiaServers.com]<br/>`);
  parts.push(`'''Server wiki:''' [${wiki} ${name} wiki page]<br/>`);
  parts.push(`'''Browse all servers:''' [${listingUrl()} Open Tibia server list]`);
  parts.push('');
  parts.push('== Quick facts ==');
  parts.push('{| class="wikitable"');
  parts.push('! Field !! Detail');
  parts.push('|-');
  parts.push(`| Server name || ${name}`);
  parts.push('|-');
  parts.push(`| Directory profile || [${profile} ${profile}]`);
  parts.push('|-');
  parts.push(`| On-site wiki || [${wiki} ${wiki}]`);
  if (server.host) { parts.push('|-'); parts.push(`| Host || ${server.host}`); }
  if (server.version) { parts.push('|-'); parts.push(`| Client / version || ${server.version}`); }
  if (server.location) { parts.push('|-'); parts.push(`| Location || ${server.location}`); }
  if (server.world_type) { parts.push('|-'); parts.push(`| World type || ${server.world_type}`); }
  if (server.exp_rate != null) { parts.push('|-'); parts.push(`| EXP rate (snapshot) || ${server.exp_rate}x`); }
  if (server.players_online != null) { parts.push('|-'); parts.push(`| Players online (snapshot) || ${server.players_online}`); }
  parts.push('|-');
  parts.push(`| Status & rankings || [${SITE} opentibiaservers.com]`);
  parts.push('|}');
  parts.push('');
  parts.push('== Overview ==');
  parts.push('');
  parts.push(server.description ? String(server.description).trim() : `${name} is listed in the Open Tibia Servers database so players can compare live status, player counts, rates, and related Open Tibia projects before creating an account.`);
  parts.push('');
  parts.push('== Getting started ==');
  parts.push('');
  parts.push(`# [${profile} ${name} server profile]`);
  parts.push(`# [${wiki} ${name} wiki]`);
  parts.push(`# [${listingUrl()} Full directory / filters]`);
  parts.push('# Confirm client version / host before third-party downloads');
  parts.push('');
  parts.push('== Rates, world type, and activity ==');
  parts.push('');
  if (server.exp_rate != null) parts.push(`* EXP rate: '''${server.exp_rate}x'''`);
  if (server.world_type) parts.push(`* World type: '''${server.world_type}'''`);
  if (server.players_online != null) parts.push(`* Players online (snapshot): '''${server.players_online}'''`);
  if (server.version) parts.push(`* Client / protocol: '''${server.version}'''`);
  if (server.location) parts.push(`* Location: '''${server.location}'''`);
  if (!(server.exp_rate != null || server.world_type || server.players_online != null || server.version || server.location)) {
    parts.push(`See the [${profile} live listing] for current rates and activity.`);
  } else {
    parts.push(`Always re-check the [${profile} live profile] for current online counts and status.`);
  }
  parts.push('');
  parts.push('== Why use OpenTibiaServers.com ==');
  parts.push('');
  parts.push(`[${SITE} OpenTibiaServers.com] is a public Open Tibia server listing and comparison site.`);
  parts.push('');
  parts.push(`# Open the exact-match page for '''${name}''': [${profile} ${profile}]`);
  parts.push('# Compare nearby OT servers by players online, version, and location');
  parts.push('# Verify listing context before downloading a client from third-party mirrors');
  parts.push(`# Share the wiki page: [${wiki} ${wiki}]`);
  parts.push('');
  parts.push('== External links ==');
  parts.push('');
  parts.push(`* [${profile} ${name} — Open Tibia Servers listing]`);
  parts.push(`* [${wiki} ${name} — on-site wiki]`);
  parts.push(`* [${listingUrl()} Open Tibia server directory]`);
  parts.push(`* [${SITE}/wiki All wiki pages]`);
  parts.push(`* [${SITE} OpenTibiaServers.com]`);
  if (server.website_url) parts.push(`* [${server.website_url} Official ${name} website]`);
  parts.push('');
  parts.push('== Disclaimer ==');
  parts.push('');
  parts.push(`${name} is an independent Open Tibia project. OpenTibiaServers.com aggregates public listing data and is not affiliated with CipSoft GmbH.`);
  parts.push('');
  parts.push('[[Category:Open Tibia servers]]');
  parts.push('[[Category:OTServ]]');
  parts.push('[[Category:Tibia private servers]]');
  parts.push(`[[Category:${name}]]`);
  parts.push('');
  parts.push(`<!-- Generated ${GENERATED}. Canonical listing: ${profile} -->`);
  parts.push('');
  return parts.join('\n');
}

const PLATFORMS = [
  ['On-site /wiki/{slug}', 'Markdown (canonical)'],
  ['GitHub Wikis', 'Markdown — DEFERRED (auth)'],
  ['Miraheze.org', 'MediaWiki — DEFERRED (auth)'],
  ['Fandom.com', 'MediaWiki — DEFERRED (auth)'],
  ['wiki.gg', 'MediaWiki — DEFERRED (auth)'],
  ['GitLab Wikis', 'Markdown — DEFERRED (auth)'],
  ['Wiki.js', 'Markdown'],
  ['GitBook.com', 'Markdown'],
  ['Neocities.org', 'HTML/Markdown'],
  ['TibiaWiki / Tibia Fandom', 'MediaWiki — only where OT pages allowed; DEFERRED (auth)'],
];

fs.mkdirSync(OUT_MD, { recursive: true });
fs.mkdirSync(OUT_MW, { recursive: true });
const servers = collectServers();
for (const server of servers) {
  fs.writeFileSync(path.join(OUT_MD, `${server.slug}.md`), buildMarkdown(server));
  fs.writeFileSync(path.join(OUT_MW, `${server.slug}.wiki`), buildMediaWiki(server));
}
const readme = [
  '# External wiki publishing pack',
  '',
  `Generated **${servers.length}** server articles in:`,
  '',
  '- `markdown/` — on-site `/wiki/{slug}`, Wiki.js, GitBook, Notion paste',
  '- `mediawiki/` — Fandom/Miraheze/wiki.gg when auth publishing is unblocked',
  '',
  'Every article links back to:',
  '',
  '- Exact profile: `https://opentibiaservers.com/{slug}`',
  '- On-site wiki: `https://opentibiaservers.com/wiki/{slug}`',
  '- Directory: `https://opentibiaservers.com/directory`',
  '- Homepage: `https://opentibiaservers.com`',
  '',
  '## Auth-deferred hosts',
  '',
  'GitHub Wiki, Miraheze, Fandom, and other login-gated hosts are **DEFERRED** until credentials are available. Prefer on-site `/wiki` first.',
  '',
  '## Regenerate',
  '',
  '```bash',
  'node generate-server-wikis.mjs',
  '```',
  '',
].join('\n');
fs.writeFileSync(path.join(OUT_ROOT, 'README.md'), readme);
fs.writeFileSync(path.join(OUT_ROOT, 'INDEX.md'), ['# Server wiki article index (' + servers.length + ')', '', '| Server | Markdown | MediaWiki | Listing | Wiki |', '| --- | --- | --- | --- | --- |', ...servers.map((s) => `| ${s.name} | [md](./markdown/${s.slug}.md) | [wiki](./mediawiki/${s.slug}.wiki) | ${otsUrl(s)} | ${wikiUrl(s)} |`), ''].join('\n'));
fs.writeFileSync(path.join(OUT_ROOT, 'PLATFORMS.md'), '# Wiki platforms\n\n' + PLATFORMS.map(([n, s]) => `- **${n}** — ${s}`).join('\n') + '\n');
fs.writeFileSync(path.join(OUT_ROOT, 'servers.json'), JSON.stringify(servers.map((s) => ({ slug: s.slug, name: s.name, url: otsUrl(s), wiki: wikiUrl(s) })), null, 2));
console.log(JSON.stringify({ servers: servers.length, md: OUT_MD, mw: OUT_MW, generated: GENERATED }, null, 2));
