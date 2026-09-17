/**
 * Independent Research Wiki pack for every sitemap.xml URL.
 * Formats: Markdown + MediaWiki. Also writes unique account plans for ALLOWED hosts.
 *
 * Usage:
 *   node generate-research-wiki.mjs --repo <repo> --sitemap <sitemap.xml|urls.txt>
 */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
function arg(name, fallback) {
  const i = args.indexOf(`--${name}`);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
}

const repo = arg('repo', process.cwd());
const sitemapPath = arg('sitemap', path.join(repo, 'sitemap-urls.txt'));
const OUT = path.join(repo, 'content', 'research-wiki');
const OUT_MD = path.join(OUT, 'markdown');
const OUT_MW = path.join(OUT, 'mediawiki');
const GENERATED = new Date().toISOString().slice(0, 10);
const SITE = 'https://opentibiaservers.com';
const CONTACT = 'support@opentibiaservers.com';

function ensureDir(d) { fs.mkdirSync(d, { recursive: true }); }
function write(file, text) { ensureDir(path.dirname(file)); fs.writeFileSync(file, text, 'utf8'); }

function loadUrls(file) {
  const raw = fs.readFileSync(file, 'utf8');
  if (file.endsWith('.xml') || raw.includes('<loc>')) {
    return [...raw.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim()).filter(Boolean);
  }
  return raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
}

function pathKey(url) {
  try {
    const u = new URL(url);
    let p = u.pathname.replace(/\/+$/, '') || '/';
    return p;
  } catch {
    return '/';
  }
}

function slugifyPath(p) {
  if (p === '/') return 'home';
  return p.replace(/^\//, '').replace(/\//g, '__').replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'page';
}

function classify(pathname) {
  if (pathname === '/') return { type: 'home', collection: 'site', titleHint: 'Open Tibia Servers homepage' };
  if (pathname === '/directory') return { type: 'directory', collection: 'site', titleHint: 'Open Tibia server directory' };
  if (pathname === '/rankings') return { type: 'rankings', collection: 'site', titleHint: 'Open Tibia server rankings' };
  if (pathname === '/resources') return { type: 'resources', collection: 'site', titleHint: 'Open Tibia resources hub' };
  if (pathname === '/wiki') return { type: 'wiki-index', collection: 'wiki', titleHint: 'Open Tibia Servers wiki library' };
  if (pathname === '/evomanias') return { type: 'partner', collection: 'partner', titleHint: 'Evomanias featured partner profile' };
  if (pathname === '/contact') return { type: 'contact', collection: 'site', titleHint: 'Contact OpenTibiaServers.com' };
  if (pathname === '/knowledge') return { type: 'knowledge-index', collection: 'knowledge', titleHint: 'Open Tibia knowledge hub' };
  if (pathname.startsWith('/wiki/')) return { type: 'server-wiki', collection: 'wiki', titleHint: pathname.slice(6) };
  if (pathname.startsWith('/knowledge/items/')) return { type: 'item', collection: 'knowledge', titleHint: pathname.split('/').pop() };
  if (pathname.startsWith('/knowledge/monsters/')) return { type: 'monster', collection: 'knowledge', titleHint: pathname.split('/').pop() };
  if (pathname.startsWith('/knowledge/spells/')) return { type: 'spell', collection: 'knowledge', titleHint: pathname.split('/').pop() };
  if (pathname.startsWith('/knowledge/mechanics/')) return { type: 'mechanics', collection: 'knowledge', titleHint: pathname.split('/').pop() };
  if (pathname.startsWith('/knowledge/progression/')) return { type: 'progression', collection: 'knowledge', titleHint: pathname.split('/').pop() };
  if (pathname.startsWith('/knowledge/bestiary/')) return { type: 'bestiary', collection: 'knowledge', titleHint: pathname.split('/').pop() };
  if (pathname.startsWith('/knowledge/equipment/')) return { type: 'equipment', collection: 'knowledge', titleHint: pathname.split('/').pop() };
  if (pathname.startsWith('/knowledge/')) return { type: 'knowledge', collection: 'knowledge', titleHint: pathname.split('/').pop() };
  if (pathname.startsWith('/servers/country/')) return { type: 'country-facet', collection: 'facet', titleHint: pathname.split('/').pop() };
  if (pathname.startsWith('/servers/client/')) return { type: 'client-facet', collection: 'facet', titleHint: pathname.split('/').pop() };
  if (pathname.startsWith('/servers/')) return { type: 'legacy-server', collection: 'server', titleHint: pathname.split('/').pop() };
  if (pathname.startsWith('/topics/')) return { type: 'topic', collection: 'topic', titleHint: pathname.split('/').pop() };
  // exact-match server name pages
  if (/^\/[a-z0-9][a-z0-9._-]*$/i.test(pathname)) {
    return { type: 'server', collection: 'server', titleHint: pathname.slice(1) };
  }
  return { type: 'page', collection: 'other', titleHint: pathname };
}

function humanize(slug = '') {
  return String(slug)
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase()) || 'Page';
}

function researchBlurb(meta, url, pathname) {
  const name = humanize(meta.titleHint);
  switch (meta.type) {
    case 'home':
      return 'Independent research note for the OpenTibiaServers.com homepage: ranked Open Tibia listings, reviews, votes, and server data discovery.';
    case 'directory':
      return 'Research dossier for the live Open Tibia server directory used to compare rates, population, uptime, and world types.';
    case 'rankings':
      return 'Research note covering ranked Open Tibia servers and how OpenTibiaServers.com surfaces activity signals.';
    case 'partner':
      return 'Featured-partner research page for Evomanias on OpenTibiaServers.com, including public offer CTAs and directory profile links.';
    case 'server':
    case 'legacy-server':
    case 'server-wiki':
      return `Independent research summary for the Open Tibia private server “${name}”, cross-linked to its live listing and wiki materials on OpenTibiaServers.com.`;
    case 'item':
      return `Research stub for Open Tibia item “${name}” in the OpenTibiaServers knowledge catalog, with canonical backlink to the live knowledge URL.`;
    case 'monster':
    case 'bestiary':
      return `Research stub for Open Tibia creature “${name}” documented in the OpenTibiaServers knowledge / bestiary catalog.`;
    case 'spell':
      return `Research stub for Open Tibia spell “${name}” in the OpenTibiaServers spells knowledge catalog.`;
    case 'mechanics':
      return `Research note on Open Tibia game mechanic “${name}” for players comparing OT servers and combat systems.`;
    case 'progression':
      return `Research note on Open Tibia progression topic “${name}” (skills, levels, stamina, and related systems).`;
    case 'country-facet':
      return `Facet research page for Open Tibia servers hosted in / associated with “${name}”.`;
    case 'client-facet':
      return `Facet research page for Open Tibia servers using client version “${name}”.`;
    case 'topic':
      return `Topic research page for keyword cluster “${name}” used in Open Tibia server discovery.`;
    default:
      return `Independent research dossier for ${url} on OpenTibiaServers.com (${meta.collection}/${meta.type}).`;
  }
}

function relatedLinks(meta, pathname) {
  const links = [
    { label: 'OpenTibiaServers homepage', href: SITE + '/' },
    { label: 'Server directory', href: SITE + '/directory' },
    { label: 'Knowledge hub', href: SITE + '/knowledge' },
    { label: 'Wiki library', href: SITE + '/wiki' },
  ];
  if (meta.collection === 'server') {
    const slug = meta.titleHint;
    links.unshift({ label: 'Live listing', href: `${SITE}/${slug}` });
    links.unshift({ label: 'Server wiki', href: `${SITE}/wiki/${slug}` });
  }
  if (meta.collection === 'knowledge' && pathname !== '/knowledge') {
    links.unshift({ label: 'This knowledge page', href: SITE + pathname });
  }
  return links;
}

function buildMarkdown(url, pathname, meta) {
  const title = humanize(meta.titleHint);
  const key = slugifyPath(pathname);
  const blurb = researchBlurb(meta, url, pathname);
  const links = relatedLinks(meta, pathname);
  const lines = [
    '---',
    `title: "${title.replace(/"/g, '')} — Research Wiki"`,
    `source_url: ${url}`,
    `path: ${pathname}`,
    `type: ${meta.type}`,
    `collection: ${meta.collection}`,
    `research_key: ${key}`,
    `generated: ${GENERATED}`,
    `format: markdown`,
    `contact: ${CONTACT}`,
    '---',
    '',
    `# ${title} — Independent Research Wiki`,
    '',
    `> **Canonical source URL:** [${url}](${url})  `,
    `> **Research key:** \`${key}\`  `,
    `> **Collection:** ${meta.collection} / ${meta.type}`,
    '',
    '## Abstract',
    '',
    blurb,
    '',
    '## Quick facts',
    '',
    '| Field | Detail |',
    '| --- | --- |',
    `| Title | ${title} |`,
    `| Source URL | ${url} |`,
    `| Path | ${pathname} |`,
    `| Type | ${meta.type} |`,
    `| Collection | ${meta.collection} |`,
    `| Publisher | OpenTibiaServers.com |`,
    `| Research contact | ${CONTACT} |`,
    '',
    '## Research notes',
    '',
    '- This page is an **independent research wiki** article generated for sitemap coverage and publishing workflows.',
    '- Prefer the live canonical URL for player-facing status, rates, and reviews.',
    '- External wiki mirrors should keep attribution and a backlink to OpenTibiaServers.com.',
    '- Do not paste this into unrelated encyclopedias (Wikipedia, Bulbapedia, SCP, TV Tropes, etc.).',
    '',
    '## Syntax / publishing formats',
    '',
    '- **Markdown:** this file (Wiki.js, GitBook, GitHub Wiki, Notion paste).',
    '- **MediaWiki:** sibling `.wiki` file under `mediawiki/` (Miraheze, ShoutWiki, Fandom *only* where OT pages are allowed).',
    '',
    '## Internal links',
    '',
    ...links.map((l) => `- [${l.label}](${l.href})`),
    '',
    '## Citation',
    '',
    `OpenTibiaServers Research Wiki (${GENERATED}). Source: ${url}. Contact: ${CONTACT}.`,
    '',
  ];
  return lines.join('\n');
}

function buildMediaWiki(url, pathname, meta) {
  const title = humanize(meta.titleHint);
  const key = slugifyPath(pathname);
  const blurb = researchBlurb(meta, url, pathname);
  const links = relatedLinks(meta, pathname);
  const parts = [];
  parts.push(`{{Infobox research`);
  parts.push(`| name = ${title}`);
  parts.push(`| source = ${url}`);
  parts.push(`| path = ${pathname}`);
  parts.push(`| type = ${meta.type}`);
  parts.push(`| collection = ${meta.collection}`);
  parts.push(`| key = ${key}`);
  parts.push(`| contact = ${CONTACT}`);
  parts.push(`}}`);
  parts.push('');
  parts.push(`'''${title}''' is an independent research wiki article covering ${url} on [[OpenTibiaServers.com]].`);
  parts.push('');
  parts.push('== Abstract ==');
  parts.push(blurb);
  parts.push('');
  parts.push('== Quick facts ==');
  parts.push('{| class="wikitable"');
  parts.push('! Field !! Detail');
  parts.push(`| Title || ${title}`);
  parts.push(`|-`);
  parts.push(`| Source URL || ${url}`);
  parts.push(`|-`);
  parts.push(`| Path || ${pathname}`);
  parts.push(`|-`);
  parts.push(`| Type || ${meta.type}`);
  parts.push(`|-`);
  parts.push(`| Collection || ${meta.collection}`);
  parts.push('|}');
  parts.push('');
  parts.push('== Research notes ==');
  parts.push('* Independent research dossier for sitemap coverage and gradual external publishing.');
  parts.push('* Keep attribution and a backlink to the canonical OpenTibiaServers.com URL.');
  parts.push('* Do not spam unrelated wikis (Wikipedia family, Bulbapedia, SCP, TV Tropes, etc.).');
  parts.push('');
  parts.push('== Internal links ==');
  for (const l of links) parts.push(`* [${l.href} ${l.label}]`);
  parts.push('');
  parts.push('== Citation ==');
  parts.push(`OpenTibiaServers Research Wiki (${GENERATED}). Source: ${url}. Contact: ${CONTACT}.`);
  parts.push('');
  parts.push(`[[Category:OpenTibiaServers Research]]`);
  parts.push(`[[Category:${meta.collection}]]`);
  parts.push(`[[Category:${meta.type}]]`);
  return parts.join('\n');
}

function randomPass(len = 20) {
  return crypto.randomBytes(24).toString('base64url').slice(0, len);
}

function buildAccounts(platformsText) {
  const lines = platformsText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const allowedHosts = [
    'Miraheze.org', 'ShoutWiki.com', 'Telepedia.net', 'WikiOasis.com', 'EditThis.info',
    'Wiki.js', 'GitBook.com', 'BookStack', 'Notion.so', 'Docmost.com',
    'GitHub Wikis', 'GitLab Wikis', 'Bitbucket Wikis', 'SourceForge Wikis',
    'Neocities.org', 'Tiddlyhost.com', 'ProWiki.com', 'Wiki.gg',
    'OpenTibia Community Wiki', 'TibiaWiki',
  ];
  const forbidden = [
    'Wikipedia.org', 'Wiktionary.org', 'Wikivoyage.org', 'Wikibooks.org', 'Wikiversity.org',
    'Wikisource.org', 'Wikiquote.org', 'Wikidata.org', 'Wikimedia Commons', 'Wikispecies',
    'Wikinews.org', 'Bulbapedia', 'Wookieepedia', 'Memory Alpha', 'Memory Beta', 'Tardis',
    'SCP Foundation', 'TV Tropes', 'Encyclopedia Dramatica', 'Illogicopedia', 'Uncyclopedia',
    'The Backrooms', 'Creepypasta',
  ];

  const rows = [];
  let n = 0;
  for (const line of lines) {
    const name = line.split('(')[0].trim();
    const isForbidden = forbidden.some((f) => line.includes(f) || name.includes(f));
    const isAllowed = allowedHosts.some((a) => line.toLowerCase().includes(a.toLowerCase().split(' ')[0].toLowerCase()) || name.toLowerCase().includes(a.toLowerCase().split('.')[0].toLowerCase()));
    n += 1;
    const username = `OTSResearch${String(n).padStart(3, '0')}`;
    const status = isForbidden ? 'DO_NOT_CREATE (spam/off-topic)' : isAllowed ? 'PENDING_AUTH (unique credentials prepared)' : 'REVIEW (only if OT-relevant / our own wiki)';
    rows.push({
      platform: name || line.slice(0, 80),
      line,
      username: isForbidden ? '—' : username,
      password: isForbidden ? '—' : randomPass(22),
      email: CONTACT,
      status,
    });
  }
  return rows;
}

// --- main ---
ensureDir(OUT_MD);
ensureDir(OUT_MW);

const urls = loadUrls(sitemapPath);
console.log('URLS', urls.length, 'from', sitemapPath);

const indexRows = [];
const byType = {};
let i = 0;
for (const url of urls) {
  i += 1;
  const pathname = pathKey(url);
  const meta = classify(pathname);
  byType[meta.type] = (byType[meta.type] || 0) + 1;
  const key = slugifyPath(pathname);
  const md = buildMarkdown(url, pathname, meta);
  const mw = buildMediaWiki(url, pathname, meta);
  write(path.join(OUT_MD, `${key}.md`), md);
  write(path.join(OUT_MW, `${key}.wiki`), mw);
  indexRows.push(`| ${humanize(meta.titleHint).replace(/\|/g, '/')} | ${meta.type} | [${pathname}](${url}) | [md](./markdown/${key}.md) | [wiki](./mediawiki/${key}.wiki) |`);
  if (i % 1000 === 0) console.log('progress', i, '/', urls.length);
}

write(path.join(OUT, 'INDEX.md'), [
  `# Independent Research Wiki (${urls.length} sitemap URLs)`,
  '',
  `Generated ${GENERATED} from sitemap coverage for OpenTibiaServers.com.`,
  '',
  '## By type',
  '',
  ...Object.entries(byType).sort((a, b) => b[1] - a[1]).map(([t, n]) => `- **${t}**: ${n}`),
  '',
  '| Title | Type | Path | Markdown | MediaWiki |',
  '| --- | --- | --- | --- | --- |',
  ...indexRows,
  '',
].join('\n'));

write(path.join(OUT, 'README.md'), `# Independent Research Wiki

Auth-free research dossier pack covering **every** URL in \`sitemap.xml\`.

## Layout
- \`markdown/\` — Markdown research articles (Wiki.js, GitBook, GitHub Wiki, Notion)
- \`mediawiki/\` — MediaWiki syntax (Miraheze, ShoutWiki, Wiki.gg, etc.)
- \`ACCOUNTS.md\` — unique account plan per wiki platform (no auto-signup / no captcha)
- \`PLATFORMS.md\` — source platform list
- \`PUBLISH_RULES.md\` — what may be published where

## On-site
Prefer \`/research\` on OpenTibiaServers.com for player-facing research browsing.

## Contact
${CONTACT}
`);

write(path.join(OUT, 'PUBLISH_RULES.md'), `# Publish rules

## Allowed (after credentials / no captcha handoff unless Mary asks)
- Our own Miraheze / ShoutWiki / Wiki.js / GitBook / GitHub Wiki / Neocities / Docmost wiki
- OpenTibia community docs wikis when OT pages are explicitly allowed
- On-site \`/research\` and \`/wiki\` (always preferred)

## Deferred (auth / captcha)
Any host requiring login, email verify, or captcha until Mary enables auth handoffs.

## Forbidden
Do **not** create spam pages or throwaway accounts on Wikipedia family, Bulbapedia, Wookieepedia, SCP, TV Tropes, Encyclopedia Dramatica, or other unrelated encyclopedias.
`);

const platformsPath = path.join(__dirname, 'research-wiki-platforms.txt');
const platformsAlt = path.join(repo, 'content', 'research-wiki', 'PLATFORMS_SOURCE.txt');
let platformsText = '';
if (fs.existsSync(platformsPath)) platformsText = fs.readFileSync(platformsPath, 'utf8');
else if (fs.existsSync('/workspace/wiki-platforms.txt')) platformsText = fs.readFileSync('/workspace/wiki-platforms.txt', 'utf8');
else platformsText = 'Miraheze.org\nGitHub Wikis\nWiki.js\n';

write(path.join(OUT, 'PLATFORMS.md'), '# Wiki platforms (from Mary\'s list)\n\n' + platformsText.split(/\n/).filter(Boolean).map((l) => `- ${l}`).join('\n') + '\n');
write(path.join(OUT, 'PLATFORMS_SOURCE.txt'), platformsText);

const accounts = buildAccounts(platformsText);
write(path.join(OUT, 'ACCOUNTS.md'), [
  '# Unique wiki account plan (prepared credentials)',
  '',
  `Email for all allowed signups: \`${CONTACT}\``,
  '',
  'Status legend:',
  '- `PENDING_AUTH` — unique username/password prepared; **do not auto-signup** while captcha/login prompts are skipped',
  '- `REVIEW` — only create if we host our own OT research wiki there',
  '- `DO_NOT_CREATE` — off-topic / spam risk',
  '',
  '| Platform | Username | Password | Email | Status |',
  '| --- | --- | --- | --- | --- |',
  ...accounts.map((a) => `| ${a.platform.replace(/\|/g, '/')} | \`${a.username}\` | \`${a.password}\` | ${a.email} | ${a.status} |`),
  '',
  '## Notes',
  '- Passwords are provisional; rotate after first successful login.',
  '- One unique account per platform (not shared).',
  '- Actual registration waits until Mary re-enables auth handoffs.',
  '',
].join('\n'));

write(path.join(OUT, 'manifest.json'), JSON.stringify({
  generated: GENERATED,
  urlCount: urls.length,
  byType,
  contact: CONTACT,
  formats: ['markdown', 'mediawiki'],
}, null, 2));

console.log('DONE', { urls: urls.length, byType, out: OUT });
