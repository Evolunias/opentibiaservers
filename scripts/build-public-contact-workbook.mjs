import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SpreadsheetFile, Workbook } from '@oai/artifact-tool';
import { topOtservlistServers } from '../lib/top-otservlist-servers.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = path.join(repoRoot, 'outputs', 'public-server-contact-recovery');
const outputPath = path.join(outputDir, 'open-tibia-public-server-contact-recovery.xlsx');
const snapshotDate = new Date().toISOString();
const REQUEST_TIMEOUT_MS = 10000;
const MAX_SERVERS = Number.parseInt(process.argv.find((arg) => arg.startsWith('--limit='))?.split('=')[1] || '121', 10);

const headers = [
  'Rank',
  'Server Name',
  'Host',
  'Country',
  'Players Online',
  'Max Players',
  'Uptime %',
  'Version',
  'World Type',
  'Official Candidate URL',
  'Fetch Status',
  'Public Official Emails',
  'Contact Page URLs',
  'Discord URLs',
  'Forum/Community URLs',
  'Otservlist Source URL',
  'Contact Confidence',
  'Recovery Notes',
  'Last Checked',
];

function unique(values = []) {
  return [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];
}

function cleanHtml(value = '') {
  return String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/\s+/g, ' ');
}

function resolveUrl(href = '', baseUrl = '') {
  try {
    return new URL(href, baseUrl).toString();
  } catch {
    return '';
  }
}

function extractLinks(html = '', baseUrl = '') {
  const links = [];
  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    links.push({
      href: resolveUrl(match[1], baseUrl),
      text: cleanHtml(match[2]).replace(/<[^>]*>/g, ' ').trim(),
    });
  }
  return links;
}

function extractEmails(html = '') {
  const mailto = [...html.matchAll(/mailto:([^"'\s?<>]+)/gi)].map((match) => decodeURIComponent(match[1]));
  const visible = [...cleanHtml(html).matchAll(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi)]
    .map((match) => match[0])
    .filter((email) => !/\.(png|jpg|jpeg|gif|webp|svg)$/i.test(email));
  return unique([...mailto, ...visible]).slice(0, 8);
}

function classifyLinks(links = []) {
  const contact = [];
  const discord = [];
  const community = [];

  for (const link of links) {
    const haystack = `${link.href} ${link.text}`.toLowerCase();
    if (!link.href || link.href.startsWith('javascript:')) continue;
    if (haystack.includes('discord.gg') || haystack.includes('discord.com/invite')) {
      discord.push(link.href);
      continue;
    }
    if (/(contact|support|help|staff|admin|owner|report|ticket)/i.test(haystack)) {
      contact.push(link.href);
    }
    if (/(forum|community|otland|facebook|instagram|youtube|wiki|docs|rules)/i.test(haystack)) {
      community.push(link.href);
    }
  }

  return {
    contact: unique(contact).slice(0, 8),
    discord: unique(discord).slice(0, 8),
    community: unique(community).slice(0, 8),
  };
}

async function fetchOfficial(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'OpenTibiaServers.com recovery contact audit (+https://opentibiaservers.com)',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });
    const text = await response.text();
    return {
      ok: response.ok,
      status: response.status,
      html: text.slice(0, 750000),
    };
  } catch (error) {
    return {
      ok: false,
      status: error?.name === 'AbortError' ? 'timeout' : 'fetch_error',
      html: '',
      error: error?.message || String(error),
    };
  } finally {
    clearTimeout(timer);
  }
}

function confidence(emails, contactUrls, discordUrls) {
  if (emails.length) return 'Public email found';
  if (contactUrls.length && discordUrls.length) return 'Contact page + Discord';
  if (contactUrls.length) return 'Contact page only';
  if (discordUrls.length) return 'Discord only';
  return 'No public contact found';
}

async function collectRows() {
  const rows = [];
  const servers = topOtservlistServers.slice(0, MAX_SERVERS);

  for (const server of servers) {
    const officialUrl = server.website_url || server.external_launch_url || `https://${server.host}/`;
    const fetched = await fetchOfficial(officialUrl);
    const links = extractLinks(fetched.html, officialUrl);
    const emails = fetched.ok ? extractEmails(fetched.html) : [];
    const linkSets = fetched.ok ? classifyLinks(links) : { contact: [], discord: [], community: [] };

    rows.push([
      server.source_rank,
      server.name,
      server.host,
      server.location || '',
      Number(server.players_online || 0),
      Number(server.max_players || 0),
      Number(server.uptime_percent || 0) / 100,
      server.version || 'n/a',
      server.world_type || '',
      officialUrl,
      fetched.ok ? `HTTP ${fetched.status}` : `Failed: ${fetched.status}${fetched.error ? ` - ${fetched.error}` : ''}`,
      emails.join('\n'),
      linkSets.contact.join('\n'),
      linkSets.discord.join('\n'),
      linkSets.community.join('\n'),
      server.source_url || 'https://otservlist.org/list-server_players_online-desc.html',
      confidence(emails, linkSets.contact, linkSets.discord),
      emails.length
        ? 'Use only for server-owner recovery or claim verification; do not add to marketing lists without consent.'
        : 'Use contact page, Discord, forum, DNS, or owner-claim workflow for recovery.',
      snapshotDate,
    ]);
  }

  return rows.sort((a, b) => a[0] - b[0]);
}

function writeMatrix(sheet, address, matrix) {
  sheet.getRange(address).values = matrix;
}

async function buildWorkbook(rows) {
  const workbook = Workbook.create();
  const summary = workbook.worksheets.add('Summary');
  const contacts = workbook.worksheets.add('Public Server Contacts');
  const guidance = workbook.worksheets.add('Recovery Workflow');

  summary.showGridLines = false;
  contacts.showGridLines = false;
  guidance.showGridLines = false;

  writeMatrix(summary, 'A1:F1', [['OpenTibiaServers Public Server Contact Recovery']]);
  summary.getRange('A1:F1').merge();
  summary.getRange('A1:F1').format = {
    fill: '#111827',
    font: { bold: true, color: '#FFFFFF', size: 16 },
  };
  writeMatrix(summary, 'A3:B9', [
    ['Generated At', snapshotDate],
    ['Servers Reviewed', rows.length],
    ['Public Emails Found', rows.filter((row) => row[11]).length],
    ['Contact Pages Found', rows.filter((row) => row[12]).length],
    ['Discord Links Found', rows.filter((row) => row[13]).length],
    ['Forum/Community Links Found', rows.filter((row) => row[14]).length],
    ['Scope', 'Server-level official/public recovery contacts only'],
  ]);
  summary.getRange('A3:A9').format = { font: { bold: true }, fill: '#E5E7EB' };
  summary.getRange('B3:B9').format = { wrapText: true };
  summary.getRange('A:B').format.autofitColumns();

  writeMatrix(contacts, `A1:S${rows.length + 1}`, [headers, ...rows]);
  const table = contacts.tables.add(`A1:S${rows.length + 1}`, true, 'PublicServerContacts');
  table.style = 'TableStyleMedium2';
  contacts.freezePanes.freezeRows(1);
  contacts.getRange('A1:S1').format = {
    fill: '#0F766E',
    font: { bold: true, color: '#FFFFFF' },
  };
  contacts.getRange('E2:G' + (rows.length + 1)).format.numberFormat = '#,##0';
  contacts.getRange('G2:G' + (rows.length + 1)).format.numberFormat = '0.0%';
  contacts.getRange('S2:S' + (rows.length + 1)).format.numberFormat = 'yyyy-mm-dd hh:mm';
  contacts.getRange('K2:O' + (rows.length + 1)).format = { wrapText: true };
  contacts.getRange('R2:R' + (rows.length + 1)).format = { wrapText: true };
  contacts.getRange('A:S').format.autofitColumns();
  contacts.getRange('K:O').format.columnWidth = 32;
  contacts.getRange('R:R').format.columnWidth = 44;

  writeMatrix(guidance, 'A1:D1', [['Recovery Workflow']]);
  guidance.getRange('A1:D1').merge();
  guidance.getRange('A1:D1').format = {
    fill: '#111827',
    font: { bold: true, color: '#FFFFFF', size: 15 },
  };
  writeMatrix(guidance, 'A3:D9', [
    ['Step', 'Action', 'Preferred Evidence', 'Notes'],
    ['1', 'Contact through official site/contact form', 'Contact URL from workbook', 'Use first for projects without public email.'],
    ['2', 'Invite owner claim on opentibiaservers.com', 'Account + listing claim', 'Collect verified emails through opt-in registration.'],
    ['3', 'Verify by DNS/domain token', 'TXT record or hosted token file', 'Best proof for claimed server ownership.'],
    ['4', 'Verify by domain email', 'Owner replies from same domain', 'Use only when explicitly provided by owner/project.'],
    ['5', 'Use Discord/forum thread for outreach', 'Public server community link', 'Avoid scraping member emails or private profiles.'],
    ['6', 'Mark contact status', 'Verified / Pending / No public contact', 'Keep source URL and timestamp for audit.'],
  ]);
  guidance.getRange('A3:D3').format = {
    fill: '#0F766E',
    font: { bold: true, color: '#FFFFFF' },
  };
  guidance.getRange('A:D').format.autofitColumns();
  guidance.getRange('D:D').format.columnWidth = 48;

  const errors = await workbook.inspect({
    kind: 'match',
    searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A',
    options: { useRegex: true, maxResults: 100 },
    summary: 'formula error scan',
  });
  console.log(errors.ndjson);

  await fs.mkdir(outputDir, { recursive: true });
  const preview = await workbook.render({ sheetName: 'Public Server Contacts', range: 'A1:S20', scale: 1, format: 'png' });
  await fs.writeFile(path.join(outputDir, 'public-server-contacts-preview.png'), new Uint8Array(await preview.arrayBuffer()));
  const output = await SpreadsheetFile.exportXlsx(workbook);
  await output.save(outputPath);
}

const rows = await collectRows();
await buildWorkbook(rows);
await fs.writeFile(
  path.join(outputDir, 'public-server-contact-recovery.json'),
  JSON.stringify({ generated_at: snapshotDate, rows }, null, 2),
  'utf8',
);
console.log(JSON.stringify({ outputPath, rows: rows.length }, null, 2));
