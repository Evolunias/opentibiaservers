import { createHash } from 'node:crypto';
import { appendFile, mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Client } from 'pg';

type SourceKind = 'primary' | 'independent' | 'community' | 'directory' | 'candidate';
type VerificationStatus = 'verified' | 'community_reported' | 'unverified';
type WikiResearchStatus = 'source_backed' | 'community_reported' | 'needs_research';

type JsonObject = Record<string, unknown>;

interface ServerRecord {
  id?: string;
  slug: string;
  name: string;
  host?: string | null;
  ip?: string | null;
  port?: number | null;
  website_url?: string | null;
  external_launch_url?: string | null;
  version?: string | null;
  engine_version?: string | null;
  architecture?: string | null;
  location?: string | null;
  world_type?: string | null;
  pvp_type?: string | null;
  exp_rate?: number | string | null;
  players_online?: number | null;
  players_peak?: number | null;
  max_players?: number | null;
  uptime_percent?: number | null;
  source_rank?: number | null;
  source_url?: string | null;
  source_payload?: JsonObject | null;
  description?: string | null;
  official_summary?: string | null;
  feature_bullets?: string[] | null;
  custom_sections?: Array<{ title?: string; body?: string }> | null;
  research_sources?: Array<{ type?: string; url?: string; label?: string }> | null;
  tags?: string[] | null;
  updated_at?: string | null;
  last_check?: string | null;
  is_wiki_formatted?: boolean | null;
}

export interface WikiSource {
  id: string;
  kind: SourceKind;
  verification: VerificationStatus;
  title: string;
  url: string;
  accessedAt: string;
  note?: string;
}

export interface WikiClaim {
  field: 'architecture' | 'version' | 'hostedRegion' | 'hardwareSpecs' | 'overview' | 'feature' | 'mechanic' | 'customContent' | 'systemGuide' | 'patchHistory';
  value: string;
  sourceUrl: string;
  verification: VerificationStatus;
}

export interface WikiListing {
  schemaVersion: 1;
  slug: string;
  generatedAt: string;
  researchStatus: WikiResearchStatus;
  metadata: {
    serverName: string;
    architecture: string;
    engineVersion: string;
    hostedRegion: string;
    connection: { host: string; port: number | null; version: string; platform: string };
    specs: { hardware: string; maxPlayers: number | null; expRate: string; worldType: string };
    uptime: { percent: number | null; sampledAt: string | null; playersOnline: number | null; playersPeak: number | null };
  };
  content: {
    overview: string;
    keyFeatures: string[];
    historicalContext: string;
    installationConnectionSpecs: string[];
    gameplayMechanics: string[];
    customContent: string[];
    systemGuides: string[];
    patchNotesHistory: string[];
  };
  references: WikiSource[];
  claims: WikiClaim[];
  researchNotes: string[];
}

export const WIKI_LISTING_JSON_SCHEMA = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  type: 'object',
  additionalProperties: false,
  required: ['schemaVersion', 'slug', 'generatedAt', 'researchStatus', 'metadata', 'content', 'references', 'claims', 'researchNotes'],
  properties: {
    schemaVersion: { const: 1 },
    slug: { type: 'string', pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$' },
    generatedAt: { type: 'string', format: 'date-time' },
    researchStatus: { enum: ['source_backed', 'community_reported', 'needs_research'] },
    metadata: { type: 'object', required: ['serverName', 'architecture', 'engineVersion', 'hostedRegion', 'connection', 'specs', 'uptime'] },
    content: { type: 'object', required: ['overview', 'keyFeatures', 'historicalContext', 'installationConnectionSpecs', 'gameplayMechanics', 'customContent', 'systemGuides', 'patchNotesHistory'] },
    references: { type: 'array', minItems: 1 },
    claims: { type: 'array' },
    researchNotes: { type: 'array', items: { type: 'string' } },
  },
} as const;

interface Checkpoint {
  version: 1;
  nextSlug: string | null;
  updatedAt: string;
  failures: Array<{ slug: string; message: string; attemptedAt: string }>;
}

interface MigrationOptions {
  dryRun: boolean;
  commit: boolean;
  batchSize: number;
  limit: number | null;
  rateLimitMs: number;
  timeoutMs: number;
  retries: number;
  from: string | null;
  continueFromCheckpoint: boolean;
  researchUrl: string | null;
  repoOnly: boolean;
  dbOnly: boolean;
  force: boolean;
}

interface ResearchResult {
  sources: WikiSource[];
  claims: WikiClaim[];
  notes: string[];
}

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const templatePath = path.join(repoRoot, 'templates', 'wiki-listing.md');
const previewDirectory = path.join(repoRoot, 'dist', 'preview');
const stateDirectory = path.join(repoRoot, 'dist', 'wiki-migration');
const checkpointPath = path.join(stateDirectory, 'checkpoint.json');
const logPath = path.join(stateDirectory, 'migration.jsonl');
const finalDirectory = path.join(repoRoot, 'data', 'wiki-listings');
const directorySourceUrl = 'https://otservlist.org/list-server_players_online-desc.html';
const requiredSections = [
  '## Key Features',
  '## Historical Context',
  '## Installation / Connection Specs',
  '## Mechanics & Systems',
  '## Citations',
  '## References & Sources',
];

function usage(): string {
  return `Wiki listing migration\n\nUsage:\n  npm run wiki:migrate -- --dry-run --from demolidores --batch-size 1\n  npm run wiki:migrate -- --commit --from demolidores --batch-size 5 --rate-limit-ms 1500\n  npm run wiki:migrate -- --commit --continue --batch-size 5\n\nModes:\n  --dry-run                 Write only dist/preview/<slug>.md; never writes DB, final Markdown, or checkpoints.\n  --commit                  Required before final Markdown and database writes.\n  --repo-only               Use checked-in source data instead of the database.\n  --db-only                 Fail unless the database returns pending records.\n\nControls:\n  --from <slug>             Start from a specific pending listing (default: demolidores).\n  --continue                Resume from dist/wiki-migration/checkpoint.json.\n  --batch-size <1-100>      Records per invocation (default: 5).\n  --limit <n>               Hard cap within the batch.\n  --rate-limit-ms <ms>      Wait between research requests (default: 1500).\n  --timeout-ms <ms>         Per external request timeout (default: 15000).\n  --retries <0-5>           Retry failed external requests (default: 2).\n  --research-url <https>    Optional API returning { sources, claims }; otherwise WIKI_RESEARCH_API_URL.\n  --force                   Include records already marked is_wiki_formatted.\n\nDatabase setup:\n  DIRECT_CONNECTION_STRING=... node scripts/apply-supabase-migrations.mjs supabase/migrations/009_server_wiki_listings.sql\n\nResearch API contract:\n  POST JSON { server: { name, version, host, platform }, query } and return\n  { sources: [{ url, title, kind }], claims: [{ field, value, sourceUrl, verification }] }.\n  Claims without a valid source URL are discarded. Values not verified by a primary or independent source remain Community Reported or are omitted.`;
}

function parseArgs(args: string[]): MigrationOptions {
  const values = new Map<string, string | boolean>();
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (!arg.startsWith('--')) throw new Error(`Unexpected argument: ${arg}`);
    const key = arg.slice(2);
    if (['dry-run', 'commit', 'continue', 'repo-only', 'db-only', 'force', 'help'].includes(key)) {
      values.set(key, true);
      continue;
    }
    const value = args[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`--${key} requires a value.`);
    values.set(key, value);
    index += 1;
  }
  if (values.has('help')) {
    console.log(usage());
    process.exit(0);
  }
  const integer = (key: string, fallback: number, min: number, max: number): number => {
    const parsed = Number.parseInt(String(values.get(key) ?? ''), 10);
    return Number.isFinite(parsed) ? Math.max(min, Math.min(max, parsed)) : fallback;
  };
  const dryRun = values.get('dry-run') === true;
  const commit = values.get('commit') === true;
  if (dryRun && commit) throw new Error('Choose either --dry-run or --commit, not both.');
  if (!dryRun && !commit) throw new Error('Choose --dry-run to preview or --commit to persist changes.');
  if (values.get('repo-only') === true && values.get('db-only') === true) throw new Error('--repo-only and --db-only cannot be combined.');
  return {
    dryRun,
    commit,
    batchSize: integer('batch-size', 5, 1, 100),
    limit: values.has('limit') ? integer('limit', 1, 1, 1000) : null,
    rateLimitMs: integer('rate-limit-ms', 1500, 0, 60_000),
    timeoutMs: integer('timeout-ms', 15_000, 1000, 60_000),
    retries: integer('retries', 2, 0, 5),
    from: typeof values.get('from') === 'string' ? String(values.get('from')) : null,
    continueFromCheckpoint: values.get('continue') === true,
    researchUrl: typeof values.get('research-url') === 'string' ? String(values.get('research-url')) : String(process.env.WIKI_RESEARCH_API_URL || '').trim() || null,
    repoOnly: values.get('repo-only') === true,
    dbOnly: values.get('db-only') === true,
    force: values.get('force') === true,
  };
}

function stringValue(value: unknown): string | null {
  const text = typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '';
  return text || null;
}

function slugify(value: unknown): string {
  return String(value || '')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function asRecord(value: unknown): ServerRecord | null {
  if (!value || typeof value !== 'object') return null;
  const candidate = value as ServerRecord;
  const name = stringValue(candidate.name);
  const slug = slugify(candidate.slug || name);
  if (!name || !slug) return null;
  return { ...candidate, name, slug };
}

function isPublicHttpUrl(value: unknown): value is string {
  try {
    const url = new URL(String(value));
    const host = url.hostname.toLowerCase();
    return ['http:', 'https:'].includes(url.protocol)
      && !host.endsWith('.local')
      && !['localhost', '127.0.0.1', '::1'].includes(host)
      && !/^10\.|^127\.|^169\.254\.|^192\.168\.|^172\.(1[6-9]|2\d|3[0-1])\./.test(host);
  } catch {
    return false;
  }
}

function cleanText(value: unknown, max = 900): string {
  return String(value || '')
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[\u0000-\u001f]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function escapeMarkdown(value: unknown): string {
  return cleanText(value, 1800).replace(/[|]/g, '\\|');
}

function hostFor(record: ServerRecord): string {
  return stringValue(record.host) || stringValue(record.ip) || 'Unverified';
}

function snapshotDate(record: ServerRecord): string | null {
  const sourcePayload = record.source_payload && typeof record.source_payload === 'object' ? record.source_payload : {};
  return stringValue((sourcePayload as JsonObject).snapshot_date) || stringValue(record.last_check) || stringValue(record.updated_at);
}

function sourceUrlFor(record: ServerRecord): string {
  return isPublicHttpUrl(record.source_url) ? record.source_url : directorySourceUrl;
}

async function readJson<T>(relativePath: string, fallback: T): Promise<T> {
  try {
    return JSON.parse(await readFile(path.join(repoRoot, relativePath), 'utf8')) as T;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return fallback;
    throw error;
  }
}

function mergeServerRecords(base: ServerRecord, override: ServerRecord): ServerRecord {
  return {
    ...base,
    ...override,
    source_payload: { ...(base.source_payload || {}), ...(override.source_payload || {}) },
    research_sources: override.research_sources?.length ? override.research_sources : base.research_sources,
    feature_bullets: override.feature_bullets?.length ? override.feature_bullets : base.feature_bullets,
    custom_sections: override.custom_sections?.length ? override.custom_sections : base.custom_sections,
    tags: override.tags?.length ? override.tags : base.tags,
  };
}

async function loadRepositoryRecords(): Promise<{ records: ServerRecord[]; research: Map<string, JsonObject> }> {
  const [liveInventory, researchData, communityData] = await Promise.all([
    readJson<{ servers?: unknown[] }>('data/live-server-inventory.json', {}),
    readJson<{ servers?: JsonObject[] }>('data/server-source-research.json', {}),
    readJson<{ records?: unknown[] }>('data/community-archive-servers.json', {}),
  ]);
  const bySlug = new Map<string, ServerRecord>();
  const add = (value: unknown): void => {
    const record = asRecord(value);
    if (!record) return;
    bySlug.set(record.slug, mergeServerRecords(bySlug.get(record.slug) || record, record));
  };
  for (const row of liveInventory.servers || []) add(row);
  for (const row of communityData.records || []) add({
    ...(row as JsonObject),
    name: (row as JsonObject).server_name,
    website_url: (row as JsonObject).official_website_url,
  });
  try {
    const modulePath = pathToFileURL(path.join(repoRoot, 'lib', 'top-otservlist-servers.js')).href;
    const staticListing = await import(modulePath) as { topOtservlistServers?: unknown[] };
    for (const row of staticListing.topOtservlistServers || []) add(row);
  } catch (error) {
    console.warn(JSON.stringify({ event: 'repository_static_listing_unavailable', message: error instanceof Error ? error.message : String(error) }));
  }
  const research = new Map<string, JsonObject>();
  for (const entry of researchData.servers || []) {
    const slug = slugify(entry.slug || entry.name);
    if (slug) research.set(slug, entry);
  }
  return { records: [...bySlug.values()].sort((left, right) => (left.source_rank || Number.MAX_SAFE_INTEGER) - (right.source_rank || Number.MAX_SAFE_INTEGER)), research };
}

async function fetchDatabaseRecords(force: boolean): Promise<ServerRecord[]> {
  const connectionString = String(process.env.DIRECT_CONNECTION_STRING || '').trim();
  if (!connectionString) throw new Error('DIRECT_CONNECTION_STRING is required for database mode. Use --repo-only for a local preview.');
  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });
  await client.connect();
  try {
    const where = force ? '' : 'WHERE is_wiki_formatted = false';
    const result = await client.query<ServerRecord>(`SELECT * FROM public.servers ${where} ORDER BY source_rank ASC NULLS LAST, updated_at DESC NULLS LAST, name ASC`);
    return result.rows.map(asRecord).filter((record): record is ServerRecord => Boolean(record));
  } finally {
    await client.end();
  }
}

function selectBatch(records: ServerRecord[], options: MigrationOptions, checkpoint: Checkpoint | null): ServerRecord[] {
  let selected = records.filter((record) => options.force || !record.is_wiki_formatted);
  const startSlug = options.from || (options.continueFromCheckpoint ? checkpoint?.nextSlug || null : 'demolidores');
  if (startSlug) {
    const startIndex = selected.findIndex((record) => record.slug === slugify(startSlug));
    if (startIndex < 0) throw new Error(`Cannot find pending listing "${startSlug}". Use --from with an available slug or omit it to use the default queue.`);
    selected = selected.slice(startIndex);
  }
  const cappedSize = options.limit ? Math.min(options.limit, options.batchSize) : options.batchSize;
  return selected.slice(0, cappedSize);
}

async function sleep(milliseconds: number): Promise<void> {
  if (milliseconds > 0) await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function retry<T>(operation: () => Promise<T>, retries: number): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (attempt < retries) await sleep(300 * 2 ** attempt);
    }
  }
  throw lastError;
}

async function fetchWithTimeout(url: string, init: RequestInit, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal, redirect: 'follow' });
  } finally {
    clearTimeout(timeout);
  }
}

function extractOfficialExcerpt(html: string): string | null {
  const patterns = [
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i,
    /<p\b[^>]*>([\s\S]*?)<\/p>/i,
  ];
  for (const pattern of patterns) {
    const candidate = cleanText(html.match(pattern)?.[1] || '', 700);
    if (candidate.length >= 60) return candidate;
  }
  return null;
}

function sourceFromUrl(url: string, title: string, kind: SourceKind, verification: VerificationStatus, note?: string): WikiSource {
  return { id: '', url, title: cleanText(title, 160) || url, kind, verification, accessedAt: new Date().toISOString(), note };
}

function isSourceKind(value: unknown): value is SourceKind {
  return ['primary', 'independent', 'community', 'directory', 'candidate'].includes(String(value));
}

function isVerificationStatus(value: unknown): value is VerificationStatus {
  return ['verified', 'community_reported', 'unverified'].includes(String(value));
}

function isClaimField(value: unknown): value is WikiClaim['field'] {
  return ['architecture', 'version', 'hostedRegion', 'hardwareSpecs', 'overview', 'feature', 'mechanic', 'customContent', 'systemGuide', 'patchHistory'].includes(String(value));
}

function normalizeResearchPayload(value: unknown): { sources: WikiSource[]; claims: WikiClaim[] } {
  if (!value || typeof value !== 'object') return { sources: [], claims: [] };
  const payload = value as { sources?: unknown[]; claims?: unknown[] };
  const sources = (payload.sources || []).flatMap((source): WikiSource[] => {
    if (!source || typeof source !== 'object') return [];
    const item = source as Record<string, unknown>;
    if (!isPublicHttpUrl(item.url)) return [];
    return [sourceFromUrl(
      item.url,
      String(item.title || item.url),
      isSourceKind(item.kind) ? item.kind : 'independent',
      isVerificationStatus(item.verification) ? item.verification : 'unverified',
      stringValue(item.note) || undefined,
    )];
  });
  const knownUrls = new Set(sources.map((source) => source.url));
  const claims = (payload.claims || []).flatMap((claim): WikiClaim[] => {
    if (!claim || typeof claim !== 'object') return [];
    const item = claim as Record<string, unknown>;
    const sourceUrl = stringValue(item.sourceUrl);
    const content = cleanText(item.value, 700);
    if (!isClaimField(item.field) || !sourceUrl || !knownUrls.has(sourceUrl) || !content || !isVerificationStatus(item.verification)) return [];
    return [{ field: item.field, value: content, sourceUrl, verification: item.verification }];
  });
  return { sources, claims };
}

async function researchRecord(record: ServerRecord, sourceResearch: JsonObject | undefined, options: MigrationOptions): Promise<ResearchResult> {
  const sources: WikiSource[] = [sourceFromUrl(sourceUrlFor(record), 'otservlist players-online ranking', 'directory', 'verified', 'Directory snapshot for public player, uptime, version, and rate signals.')];
  const claims: WikiClaim[] = [];
  const notes: string[] = [];
  const knownSourceUrls = new Set(sources.map((source) => source.url));
  const declaredSources = [
    ...(record.research_sources || []),
    ...((sourceResearch?.official_pages as Array<{ url?: string; title?: string; relevance_status?: string }> | undefined) || []),
  ];
  for (const source of declaredSources) {
    if (!isPublicHttpUrl(source.url) || knownSourceUrls.has(source.url)) continue;
    const accepted = (source as { relevance_status?: string }).relevance_status === 'accepted';
    sources.push(sourceFromUrl(source.url, source.label || source.title || source.url, accepted ? 'primary' : 'candidate', accepted ? 'verified' : 'unverified'));
    knownSourceUrls.add(source.url);
  }
  const officialUrl = [record.website_url, record.external_launch_url, ...sources.filter((source) => source.kind === 'primary').map((source) => source.url)]
    .find(isPublicHttpUrl);
  if (officialUrl) {
    try {
      const response = await retry(
        () => fetchWithTimeout(officialUrl, { headers: { 'user-agent': 'OpenTibiaServersWikiMigration/1.0 (+https://opentibiaservers.com)', accept: 'text/html,application/xhtml+xml' } }, options.timeoutMs),
        options.retries,
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const excerpt = extractOfficialExcerpt(await response.text());
      const officialSource = sources.find((source) => source.url === officialUrl);
      if (officialSource) {
        officialSource.kind = 'primary';
        officialSource.verification = 'verified';
        officialSource.note = 'Official site fetched during this migration run.';
      } else {
        sources.push(sourceFromUrl(officialUrl, `${record.name} official website`, 'primary', 'verified', 'Official site fetched during this migration run.'));
      }
      if (excerpt) claims.push({ field: 'overview', value: excerpt, sourceUrl: officialUrl, verification: 'verified' });
      else notes.push(`The official site responded but did not expose a substantive extract suitable for citation.`);
    } catch (error) {
      notes.push(`Official-site research could not be verified during this run (${error instanceof Error ? error.message : String(error)}).`);
    }
  } else {
    notes.push('No official website URL is available in the source record.');
  }
  if (options.researchUrl) {
    if (!isPublicHttpUrl(options.researchUrl)) throw new Error('WIKI_RESEARCH_API_URL / --research-url must be a public http(s) URL.');
    try {
      const response = await retry(() => fetchWithTimeout(options.researchUrl!, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json', ...(process.env.WIKI_RESEARCH_API_TOKEN ? { authorization: `Bearer ${process.env.WIKI_RESEARCH_API_TOKEN}` } : {}) },
        body: JSON.stringify({
          server: { name: record.name, version: record.version || null, host: hostFor(record), platform: record.world_type || record.pvp_type || null },
          query: `${record.name} ${record.version || ''} ${hostFor(record)} Open Tibia features history`,
        }),
      }, options.timeoutMs), options.retries);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const remote = normalizeResearchPayload(await response.json());
      sources.push(...remote.sources);
      claims.push(...remote.claims);
    } catch (error) {
      notes.push(`Configured research API failed without blocking the batch (${error instanceof Error ? error.message : String(error)}).`);
    }
  }
  const uniqueSources = [...new Map(sources.map((source) => [source.url, source])).values()];
  const validSourceUrls = new Set(uniqueSources.map((source) => source.url));
  return { sources: uniqueSources, claims: claims.filter((claim) => validSourceUrls.has(claim.sourceUrl)), notes };
}

function cite(sourceUrl: string, sources: WikiSource[]): string {
  const source = sources.find((candidate) => candidate.url === sourceUrl);
  return source ? `[${source.id}]` : '';
}

function firstClaim(claims: WikiClaim[], field: WikiClaim['field'], verification: VerificationStatus = 'verified'): WikiClaim | null {
  return claims.find((claim) => claim.field === field && claim.verification === verification) || null;
}

function claimLines(claims: WikiClaim[], field: WikiClaim['field'], sources: WikiSource[]): string[] {
  return claims.filter((claim) => claim.field === field).map((claim) => {
    const prefix = claim.verification === 'community_reported' ? 'Community Reported: ' : '';
    return `${prefix}${escapeMarkdown(claim.value)} ${cite(claim.sourceUrl, sources)}`.trim();
  });
}

function directorySnapshotLine(record: ServerRecord, sources: WikiSource[]): string {
  const parts = [
    record.version ? `client/version ${record.version}` : null,
    record.world_type || record.pvp_type ? `${record.world_type || record.pvp_type} world type` : null,
    record.exp_rate ? `x${record.exp_rate} EXP` : null,
    record.players_online !== null && record.players_online !== undefined ? `${record.players_online.toLocaleString()} players online` : null,
    record.max_players ? `${record.max_players.toLocaleString()} capacity` : null,
    record.uptime_percent !== null && record.uptime_percent !== undefined ? `${record.uptime_percent}% uptime` : null,
  ].filter(Boolean);
  return parts.length ? `The current directory snapshot lists ${parts.join(', ')}. ${cite(sourceUrlFor(record), sources)}` : `The directory record provides the currently available public listing details. ${cite(sourceUrlFor(record), sources)}`;
}

function buildWikiListing(record: ServerRecord, research: ResearchResult): WikiListing {
  const generatedAt = new Date().toISOString();
  const sources = research.sources.map((source, index) => ({ ...source, id: `S${index + 1}` }));
  const sourceBackedClaim = research.claims.some((claim) => claim.verification === 'verified');
  const communityClaim = research.claims.some((claim) => claim.verification === 'community_reported');
  const researchStatus: WikiResearchStatus = sourceBackedClaim ? 'source_backed' : communityClaim ? 'community_reported' : 'needs_research';
  const overviewClaim = firstClaim(research.claims, 'overview');
  const architectureClaim = firstClaim(research.claims, 'architecture');
  const versionClaim = firstClaim(research.claims, 'version');
  const regionClaim = firstClaim(research.claims, 'hostedRegion');
  const hardwareClaim = firstClaim(research.claims, 'hardwareSpecs');
  const primaryCitation = cite(sourceUrlFor(record), sources);
  const snapshot = snapshotDate(record);
  const playerSummary = record.players_online !== null && record.players_online !== undefined
    ? `${record.players_online.toLocaleString()} online${record.max_players ? ` / ${record.max_players.toLocaleString()} listed capacity` : ''}`
    : 'Unverified — no player snapshot in the source record';
  const overview = overviewClaim
    ? `${escapeMarkdown(overviewClaim.value)} ${cite(overviewClaim.sourceUrl, sources)}`.trim()
    : `${escapeMarkdown(record.name)} is documented here from its directory record rather than inferred gameplay claims. ${directorySnapshotLine(record, sources)} The page separates public listing data from claims that still require a primary source, so players can verify the current client, download path, rules, and live status before connecting.`;
  const keyFeatures = [
    `Connection listing: \\`${escapeMarkdown(hostFor(record))}${record.port ? `:${record.port}` : ''}\\`; this is a directory-listed endpoint, not a verified download channel. ${primaryCitation}`,
    directorySnapshotLine(record, sources),
    ...(record.feature_bullets || []).map((feature) => `${escapeMarkdown(feature)} ${primaryCitation}`),
    ...claimLines(research.claims, 'feature', sources),
    'Custom features, client platforms, and account requirements are not asserted until an official or independently attributable source verifies them.',
  ].filter((line, index, all) => line && all.indexOf(line) === index).slice(0, 8);
  const historicalContext = snapshot
    ? `This profile preserves a public directory snapshot dated ${escapeMarkdown(snapshot)}. ${primaryCitation} It is not evidence of a launch date, season start, reset policy, ownership history, or patch cadence; those details remain unverified unless cited below.`
    : `This profile preserves the available public directory record. ${primaryCitation} No independently verifiable launch date, reset policy, or patch chronology was available during this migration run.`;
  const connectionSpecs = [
    `Listed endpoint: \\`${escapeMarkdown(hostFor(record))}${record.port ? `:${record.port}` : ''}\\`. Confirm that address and the active port on an official status or account page before connecting. ${primaryCitation}`,
    `Listed client/protocol signal: ${escapeMarkdown(versionClaim?.value || record.version || 'Unverified')}${versionClaim ? ` ${cite(versionClaim.sourceUrl, sources)}` : ` ${primaryCitation}`}.`,
    `Platform / launcher: ${record.external_launch_url && isPublicHttpUrl(record.external_launch_url) ? `candidate official launch page: ${record.external_launch_url}` : 'Unverified — no source-backed launcher or platform detail is stored.'}`,
    'Safety check: use only links published by the verified official project or a trusted directory; do not install clients from unrelated mirrors.',
  ];
  const mechanics = [
    ...claimLines(research.claims, 'mechanic', sources),
    'No source-backed mechanics guide is available in the supplied record. Verify rates, vocations, PvP rules, anti-cheat policy, and any reset mechanics in the current official rules or knowledge base.',
  ];
  const customContent = [
    ...claimLines(research.claims, 'customContent', sources),
    'No source-backed custom-map, vocation, item, boss, quest, or sprite claim is recorded. This is intentionally left unclassified rather than inferred from server name, rate, or version.',
  ];
  const systemGuides = [
    ...claimLines(research.claims, 'systemGuide', sources),
    'Account creation, client download, recovery, rule enforcement, and support procedures require a current official source. The directory record alone does not validate them.',
  ];
  const patchHistory = [
    ...claimLines(research.claims, 'patchHistory', sources),
    snapshot
      ? `Observed directory state: ${directorySnapshotLine(record, sources)} This is a dated availability snapshot, not a patch note.`
      : 'No dated patch notes or historical announcements were independently available during this migration run.',
  ];
  const claimsWithFallback = research.claims;
  return {
    schemaVersion: 1,
    slug: record.slug,
    generatedAt,
    researchStatus,
    metadata: {
      serverName: record.name,
      architecture: architectureClaim ? `${architectureClaim.value} ${cite(architectureClaim.sourceUrl, sources)}` : 'Unverified — engine or distribution details are not present in the source record.',
      engineVersion: versionClaim ? `${versionClaim.value} ${cite(versionClaim.sourceUrl, sources)}` : String(record.version || 'Unverified — no engine build was independently verified.'),
      hostedRegion: regionClaim ? `${regionClaim.value} ${cite(regionClaim.sourceUrl, sources)}` : String(record.location || 'Unverified — no hosted region was recorded.'),
      connection: { host: hostFor(record), port: record.port || null, version: String(record.version || 'Unverified'), platform: 'Unverified — no source-backed platform detail is stored.' },
      specs: { hardware: hardwareClaim ? `${hardwareClaim.value} ${cite(hardwareClaim.sourceUrl, sources)}` : 'Community Reported / Unverified — no independently verifiable hardware specification is available.', maxPlayers: record.max_players || null, expRate: record.exp_rate ? `x${record.exp_rate}` : 'Unverified', worldType: String(record.world_type || record.pvp_type || 'Unverified') },
      uptime: { percent: record.uptime_percent ?? null, sampledAt: snapshot, playersOnline: record.players_online ?? null, playersPeak: record.players_peak ?? null },
    },
    content: {
      overview,
      keyFeatures,
      historicalContext,
      installationConnectionSpecs: connectionSpecs,
      gameplayMechanics: mechanics,
      customContent,
      systemGuides,
      patchNotesHistory: patchHistory,
    },
    references: sources,
    claims: claimsWithFallback,
    researchNotes: [
      ...research.notes,
      researchStatus === 'needs_research'
        ? 'Research gap: no primary, independent, or attributable community source supplied a verifiable mechanics or patch-history claim.'
        : 'Claims retain their source and verification status; unsupported values were not promoted into factual statements.',
    ],
  };
}

function bulletList(items: string[]): string {
  return items.map((item) => `- ${item}`).join('\n');
}

async function renderMarkdown(wiki: WikiListing): Promise<string> {
  const template = await readFile(templatePath, 'utf8');
  const metadata = wiki.metadata;
  const playerSnapshot = metadata.uptime.playersOnline !== null
    ? `${metadata.uptime.playersOnline.toLocaleString()} online${metadata.specs.maxPlayers ? ` / ${metadata.specs.maxPlayers.toLocaleString()} listed capacity` : ''}`
    : 'Unverified';
  const values: Record<string, string> = {
    SERVER_NAME: escapeMarkdown(metadata.serverName),
    WIKI_STATUS: wiki.researchStatus.replace(/_/g, ' '),
    RESEARCHED_AT: wiki.generatedAt,
    ARCHITECTURE: metadata.architecture,
    VERSION: metadata.engineVersion,
    REGION: metadata.hostedRegion,
    HOST: escapeMarkdown(metadata.connection.host),
    PORT: metadata.connection.port ? String(metadata.connection.port) : 'Unverified',
    WORLD_TYPE: escapeMarkdown(metadata.specs.worldType),
    EXP_RATE: escapeMarkdown(metadata.specs.expRate),
    PLAYER_SNAPSHOT: playerSnapshot,
    UPTIME: metadata.uptime.percent !== null ? `${metadata.uptime.percent}%${metadata.uptime.sampledAt ? ` (snapshot: ${metadata.uptime.sampledAt})` : ''}` : 'Unverified',
    HARDWARE_SPECS: metadata.specs.hardware,
    OVERVIEW: wiki.content.overview,
    KEY_FEATURES: bulletList(wiki.content.keyFeatures),
    HISTORICAL_CONTEXT: wiki.content.historicalContext,
    CONNECTION_SPECS: bulletList(wiki.content.installationConnectionSpecs),
    GAMEPLAY_MECHANICS: bulletList(wiki.content.gameplayMechanics),
    CUSTOM_CONTENT: bulletList(wiki.content.customContent),
    SYSTEM_GUIDES: bulletList(wiki.content.systemGuides),
    PATCH_HISTORY: bulletList(wiki.content.patchNotesHistory),
    CITATIONS: bulletList(wiki.references.map((source) => `${source.id} is cited inline for ${source.title}.`)),
    RESEARCH_NOTES: bulletList(wiki.researchNotes),
    REFERENCES: wiki.references.map((source) => `- [${source.id}] ${source.title} — ${source.url} (${source.kind.replace(/_/g, ' ')}, ${source.verification.replace(/_/g, ' ')}, accessed ${source.accessedAt})${source.note ? ` — ${source.note}` : ''}`).join('\n'),
  };
  const rendered = template.replace(/\{\{([A-Z_]+)\}\}/g, (placeholder, token: string) => {
    if (!(token in values)) throw new Error(`Template token ${placeholder} has no migration value.`);
    return values[token];
  });
  if (/\{\{[A-Z_]+\}\}/.test(rendered)) throw new Error('Wiki template contains unresolved tokens.');
  validateWikiDocument(rendered, wiki);
  return `${rendered.trim()}\n`;
}

function validateWikiDocument(markdown: string, wiki: WikiListing): void {
  for (const heading of requiredSections) {
    if (!markdown.includes(heading)) throw new Error(`Generated Wiki document is missing ${heading}.`);
  }
  if (!markdown.trimEnd().endsWith(wiki.references.map((source) => `- [${source.id}] ${source.title} — ${source.url} (${source.kind.replace(/_/g, ' ')}, ${source.verification.replace(/_/g, ' ')}, accessed ${source.accessedAt})${source.note ? ` — ${source.note}` : ''}`).join('\n'))) {
    throw new Error('References & Sources must be the final document section.');
  }
  if (!wiki.references.length) throw new Error('Every Wiki document needs at least one cited source.');
  for (const source of wiki.references) {
    if (!isPublicHttpUrl(source.url) || !markdown.includes(`[${source.id}]`) || !markdown.includes(source.url)) {
      throw new Error(`Invalid or uncited source ${source.id}.`);
    }
  }
}

async function atomicWrite(filePath: string, content: string): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  const tempPath = `${filePath}.${process.pid}.tmp`;
  await writeFile(tempPath, content, 'utf8');
  await rename(tempPath, filePath);
}

async function readCheckpoint(): Promise<Checkpoint | null> {
  try {
    const data = JSON.parse(await readFile(checkpointPath, 'utf8')) as Checkpoint;
    return data.version === 1 ? data : null;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
    throw error;
  }
}

async function writeCheckpoint(checkpoint: Checkpoint): Promise<void> {
  await atomicWrite(checkpointPath, `${JSON.stringify(checkpoint, null, 2)}\n`);
}

async function log(event: string, details: JsonObject): Promise<void> {
  const entry = { timestamp: new Date().toISOString(), event, ...details };
  console.log(JSON.stringify(entry));
  await mkdir(path.dirname(logPath), { recursive: true });
  await appendFile(logPath, `${JSON.stringify(entry)}\n`, 'utf8');
}

async function persistRecord(record: ServerRecord, wiki: WikiListing, markdown: string): Promise<void> {
  if (!record.id) throw new Error(`Cannot commit ${record.slug}: the database record has no id.`);
  const connectionString = String(process.env.DIRECT_CONNECTION_STRING || '').trim();
  if (!connectionString) throw new Error('DIRECT_CONNECTION_STRING is required to commit database changes.');
  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });
  const sourceHash = createHash('sha256').update(markdown).digest('hex');
  await client.connect();
  try {
    await client.query('BEGIN');
    const update = await client.query(
      `UPDATE public.servers
         SET wiki_schema_version = 1,
             wiki_markdown = $1,
             wiki_data = $2::jsonb,
             wiki_research_status = $3,
             wiki_formatted_at = NOW(),
             wiki_source_hash = $4,
             is_wiki_formatted = true
       WHERE id = $5
         AND is_wiki_formatted = false`,
      [markdown, JSON.stringify(wiki), wiki.researchStatus, sourceHash, record.id],
    );
    if (update.rowCount !== 1) throw new Error(`Concurrent update or already-formatted record detected for ${record.slug}; no data was overwritten.`);
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    await client.end();
  }
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const checkpoint = await readCheckpoint();
  await log('migration_started', { mode: options.dryRun ? 'dry_run' : 'commit', batchSize: options.batchSize, from: options.from, continue: options.continueFromCheckpoint });
  const repository = await loadRepositoryRecords();
  let databaseRecords: ServerRecord[] = [];
  if (!options.repoOnly) {
    try {
      databaseRecords = await fetchDatabaseRecords(options.force);
    } catch (error) {
      if (options.dbOnly || options.commit) throw error;
      await log('database_unavailable_using_repository', { message: error instanceof Error ? error.message : String(error) });
    }
  }
  if (options.dbOnly && !databaseRecords.length) throw new Error('No pending database listings were found.');
  const merged = new Map<string, ServerRecord>();
  for (const record of repository.records) merged.set(record.slug, record);
  for (const record of databaseRecords) merged.set(record.slug, mergeServerRecords(merged.get(record.slug) || record, record));
  const ordered = databaseRecords.length
    ? databaseRecords.map((record) => merged.get(record.slug) || record)
    : [...merged.values()];
  const batch = selectBatch(ordered, options, checkpoint);
  if (!batch.length) {
    await log('migration_empty', { message: 'No pending Wiki listings selected.' });
    return;
  }
  const failures: Checkpoint['failures'] = [];
  for (const [index, record] of batch.entries()) {
    try {
      await log('record_started', { slug: record.slug, name: record.name, position: index + 1, total: batch.length });
      const research = await researchRecord(record, repository.research.get(record.slug), options);
      const wiki = buildWikiListing(record, research);
      const markdown = await renderMarkdown(wiki);
      const outputDirectory = options.dryRun ? previewDirectory : finalDirectory;
      const outputPath = path.join(outputDirectory, `${record.slug}.md`);
      await atomicWrite(outputPath, markdown);
      if (options.commit) await persistRecord(record, wiki, markdown);
      await log('record_completed', { slug: record.slug, output: path.relative(repoRoot, outputPath), researchStatus: wiki.researchStatus, sourceCount: wiki.references.length });
      if (!options.dryRun) {
        const nextSlug = batch[index + 1]?.slug || null;
        await writeCheckpoint({ version: 1, nextSlug, updatedAt: new Date().toISOString(), failures });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push({ slug: record.slug, message, attemptedAt: new Date().toISOString() });
      await log('record_failed', { slug: record.slug, message });
      if (!options.dryRun) await writeCheckpoint({ version: 1, nextSlug: record.slug, updatedAt: new Date().toISOString(), failures });
    }
    if (index < batch.length - 1) await sleep(options.rateLimitMs);
  }
  if (failures.length) {
    await log('migration_completed_with_failures', { failures: failures.length, nextSlug: failures[0].slug });
    process.exitCode = 1;
    return;
  }
  await log('migration_completed', { processed: batch.length, mode: options.dryRun ? 'dry_run' : 'commit' });
}

main().catch(async (error) => {
  await log('migration_fatal', { message: error instanceof Error ? error.message : String(error) });
  process.exitCode = 1;
});