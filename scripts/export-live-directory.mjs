import fs from 'node:fs';
import path from 'node:path';
import { deriveServerIdentity } from '../lib/server-identity.js';

const siteUrl = (process.env.DIRECTORY_SITE_URL || 'https://opentibiaservers.com').replace(/\/+$/, '');
const outputPath = path.join(process.cwd(), 'data', 'live-server-inventory.json');
const publicColumns = [
  'name', 'ip', 'port', 'website_url', 'version', 'world_type', 'pvp_type', 'location',
  'description', 'updated_at', 'players_peak',
].join(',');

async function fetchText(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      'user-agent': 'Mozilla/5.0 (compatible; OpenTibiaServersInventory/1.0)',
      ...(options.headers || {}),
    },
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return { text: await response.text(), headers: response.headers };
}

const homepage = await fetchText(`${siteUrl}/`);
const scriptPaths = [...homepage.text.matchAll(/<script[^>]+src=["']([^"']+\.js[^"']*)["']/gi)]
  .map((match) => new URL(match[1], siteUrl).href);
const bundles = await Promise.all(scriptPaths.map(async (url) => {
  try {
    return (await fetchText(url)).text;
  } catch {
    return '';
  }
}));
const bundleText = bundles.join('\n');
const supabaseUrl = bundleText.match(/https:\/\/[a-z0-9-]+\.supabase\.co/i)?.[0];
const jwtCandidates = [...bundleText.matchAll(/eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+/g)]
  .map((match) => match[0]);
const anonKey = jwtCandidates.find((value) => value.length > 100);

if (!supabaseUrl || !anonKey) {
  throw new Error(`Could not discover the public Supabase configuration from ${scriptPaths.length} deployed bundles.`);
}

const rows = [];
const pageSize = 1000;
for (let offset = 0; ; offset += pageSize) {
  const endpoint = `${supabaseUrl}/rest/v1/servers?select=${publicColumns}&order=players_peak.desc.nullslast&offset=${offset}&limit=${pageSize}`;
  const response = await fetch(endpoint, {
    headers: {
      apikey: anonKey,
      authorization: `Bearer ${anonKey}`,
      prefer: 'count=exact',
    },
  });
  if (!response.ok) throw new Error(`Supabase export failed: ${response.status} ${await response.text()}`);
  const page = await response.json();
  rows.push(...page);
  if (page.length < pageSize) break;
}

const output = {
  exported_at: new Date().toISOString(),
  source: siteUrl,
  row_count: rows.length,
  servers: rows.map((row) => ({
    ...row,
    // Public source rows occasionally contain a rendered tooltip fragment or
    // an advertising headline in the name field. The directory contract is the
    // canonical root-domain identity; fall back to the IP when no domain exists.
    name: deriveServerIdentity(row).name || row.ip || row.name,
  })),
};
fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ source: siteUrl, rows: rows.length, output: path.relative(process.cwd(), outputPath) }, null, 2));
