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
function listingUrl() { return SITE + '/directory'; }
function escapeMd(value = '') { return String(value).replace(/\|/g, '\\|'); }

function buildMarkdown(server) {
  const name = server.name;
  const profile = otsUrl(server);
  const rows = [
    '| Field | Detail |',
    '| --- | --- |',
    `| Server name | ${escapeMd(name)} |`,
    `| Directory profile | [${profile}](${profile}) |`,
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
  return [
    '---',
    `title: "${String(name).replace(/"/g, '\\"')} Open Tibia Server"`,
    `slug: ${server.slug}`,
    `canonical: ${profile}`,
    `directory: ${SITE}`,
    'generated: 2026-09-17',
    'format: markdown',
    '---',
    '',
    `# ${name}`,
    '',
    `**${name}** is an Open Tibia (OTServ) private server tracked by the [Open Tibia Servers](${SITE}) directory.`,
    '',
    `> **Live listing:** [${name} on OpenTibiaServers.com](${profile})  `,
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
    `Players searching for **${name}** usually want the official website, client download path, rules, rates, and whether the world is still active. The directory profile keeps those signals in one place:`,
    '',
    `- [${name} server profile](${profile})`,
    `- [Open Tibia Servers homepage](${SITE})`,
    `- [Full directory / filters](${listingUrl()})`,
    '',
    '## Why use OpenTibiaServers.com',
    '',
    `[OpenTibiaServers.com](${SITE}) is a public Open Tibia server listing and comparison site. Use it to:`,
    '',
    `1. Open the exact-match page for **${name}**: [${profile}](${profile})`,
    '2. Compare nearby OT servers by players online, version, and location',
    '3. Verify listing context before downloading a client from third-party mirrors',
    '',
    '## External / see also',
    '',
    `- [${name} — Open Tibia Servers listing](${profile})`,
    `- [Open Tibia server directory](${listingUrl()})`,
    `- [OpenTibiaServers.com](${SITE})`,
    server.website_url ? `- [Official ${name} website](${server.website_url})` : null,
    '',
    '## Categories',
    '',
    `Open Tibia servers · OTServ · ${name} · Tibia private servers · MMORPG directories`,
    '',
    '---',
    '',
    `*This page was generated for external wiki publishing. Canonical player-facing listing: [${profile}](${profile}).*`,
    '',
  ].filter((line) => line !== null).join('\n');
}

function buildMediaWiki(server) {
  const name = server.name;
  const profile = otsUrl(server);
  const parts = [];
  parts.push('{{Infobox OTServer');
  parts.push(`| name = ${name}`);
  parts.push(`| directory = [${SITE} OpenTibiaServers.com]`);
  parts.push(`| profile = ${profile}`);
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
  parts.push(`'''Browse all servers:''' [${listingUrl()} Open Tibia server list]`);
  parts.push('');
  parts.push('== Quick facts ==');
  parts.push('{| class="wikitable"');
  parts.push('! Field !! Detail');
  parts.push('|-');
  parts.push(`| Server name || ${name}`);
  parts.push('|-');
  parts.push(`| Directory profile || [${profile} ${profile}]`);
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
  parts.push(`Players searching for '''${name}''' usually want the official website, client download path, rules, rates, and whether the world is still active. See:`);
  parts.push('');
  parts.push(`* [${profile} ${name} server profile]`);
  parts.push(`* [${SITE} OpenTibiaServers.com homepage]`);
  parts.push(`* [${listingUrl()} Full directory / filters]`);
  parts.push('');
  parts.push('== Why use OpenTibiaServers.com ==');
  parts.push('');
  parts.push(`[${SITE} OpenTibiaServers.com] is a public Open Tibia server listing and comparison site. Use it to:`);
  parts.push('');
  parts.push(`# Open the exact-match page for '''${name}''': [${profile} ${profile}]`);
  parts.push('# Compare nearby OT servers by players online, version, and location');
  parts.push('# Verify listing context before downloading a client from third-party mirrors');
  parts.push('');
  parts.push('== External links ==');
  parts.push('');
  parts.push(`* [${profile} ${name} — Open Tibia Servers listing]`);
  parts.push(`* [${listingUrl()} Open Tibia server directory]`);
  parts.push(`* [${SITE} OpenTibiaServers.com]`);
  if (server.website_url) parts.push(`* [${server.website_url} Official ${name} website]`);
  parts.push('');
  parts.push('[[Category:Open Tibia servers]]');
  parts.push('[[Category:OTServ]]');
  parts.push('[[Category:Tibia private servers]]');
  parts.push(`[[Category:${name}]]`);
  parts.push('');
  parts.push(`<!-- Generated for external wiki publishing. Canonical listing: ${profile} -->`);
  parts.push('');
  return parts.join('\n');
}

const PLATFORMS = [
  ['Fandom.com', 'MediaWiki'],
  ['Miraheze.org', 'MediaWiki'],
  ['Wikidot.com', 'Wikidot'],
  ['ShoutWiki.com', 'MediaWiki'],
  ['Telepedia.net', 'MediaWiki'],
  ['WikiOasis.com', 'MediaWiki'],
  ['EditThis.info', 'MediaWiki'],
  ['Wiki.js', 'Markdown'],
  ['GitBook.com', 'Markdown'],
  ['BookStack', 'Markdown/HTML'],
  ['Notion.so', 'Markdown paste'],
  ['GitHub Wikis', 'Markdown'],
  ['GitLab Wikis', 'Markdown'],
  ['Bitbucket Wikis', 'Markdown'],
  ['SourceForge Wikis', 'MediaWiki/Markdown'],
  ['Neocities.org', 'HTML/Markdown'],
  ['Tiddlyhost.com', 'TiddlyWiki'],
  ['Wikipedia.org', 'MediaWiki (notability required)'],
  ['Wikidata.org', 'Wikidata'],
  ['TibiaWiki', 'MediaWiki / Fandom'],
  ['OpenTibia Community Wiki', 'Community docs'],
  ['Wiki.gg', 'MediaWiki'],
  ['Liquipedia.net', 'MediaWiki'],
  ['StrategyWiki.org', 'MediaWiki'],
  ['PCGamingWiki.com', 'MediaWiki'],
  ['TV Tropes', 'Custom'],
  ['World Anvil', 'Worldbuilding'],
  ['LocalWiki.org', 'MediaWiki'],
  ['ArchWiki', 'MediaWiki'],
  ['MDN Web Docs', 'Community docs'],
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
  '- `markdown/` — GitHub/GitLab Wiki, Wiki.js, GitBook, Notion paste',
  '- `mediawiki/` — Fandom, Miraheze, ShoutWiki, wiki.gg, MediaWiki farms',
  '',
  'Every article links back to:',
  '',
  '- Exact profile: `https://opentibiaservers.com/{slug}`',
  '- Directory: `https://opentibiaservers.com/directory`',
  '- Homepage: `https://opentibiaservers.com`',
  '',
  '## Important',
  '',
  'Do **not** mass-spam Wikipedia, Fandom, or other communities. Follow each wiki notability / COI / spam policy.',
  '',
  '## Platforms',
  '',
  '| Platform | Syntax | Prefer |',
  '| --- | --- | --- |',
  ...PLATFORMS.map(([name, syntax]) => `| ${name} | ${syntax} | ${/Markdown/i.test(syntax) ? 'markdown/' : 'mediawiki/'} |`),
  '',
  '## Regenerate',
  '',
  '```bash',
  'node generate-server-wikis.mjs',
  '```',
  '',
].join('\n');
fs.writeFileSync(path.join(OUT_ROOT, 'README.md'), readme);
fs.writeFileSync(path.join(OUT_ROOT, 'INDEX.md'), ['# Server wiki article index (' + servers.length + ')', '', '| Server | Markdown | MediaWiki | Listing |', '| --- | --- | --- | --- |', ...servers.map((s) => `| ${s.name} | [md](./markdown/${s.slug}.md) | [wiki](./mediawiki/${s.slug}.wiki) | ${otsUrl(s)} |`), ''].join('\n'));
fs.writeFileSync(path.join(OUT_ROOT, 'PLATFORMS.md'), '# Wiki platforms\n\n' + PLATFORMS.map(([n, s]) => `- **${n}** — ${s}`).join('\n') + '\n');
fs.writeFileSync(path.join(OUT_ROOT, 'servers.json'), JSON.stringify(servers.map((s) => ({ slug: s.slug, name: s.name, url: otsUrl(s) })), null, 2));
console.log(JSON.stringify({ servers: servers.length, md: OUT_MD, mw: OUT_MW }, null, 2));