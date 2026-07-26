import { createClient } from '@supabase/supabase-js';
import { fetchOtservlistServers } from '../lib/otservlist.js';
import { buildEnrichedServerPayload, fetchOfficialWebsiteResearch } from '../lib/server-enrichment.js';

const firstNonEmpty = (values = []) =>
  values.find((value) => typeof value === 'string' && value.trim())?.trim() || '';

const intOption = (value, fallback, min, max) => {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(min, Math.min(max, parsed));
};

const boolOption = (value, fallback = false) => {
  if (value === undefined || value === null || value === '') return fallback;
  if (typeof value === 'boolean') return value;
  return ['1', 'true', 'yes', 'on'].includes(String(value).toLowerCase());
};

const cleanRow = (server) =>
  Object.fromEntries(
    Object.entries(server)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [key, value === '' ? null : value])
  );

const BASE_SERVER_COLUMNS = new Set([
  'name',
  'ip',
  'port',
  'website_url',
  'owner_email',
  'version',
  'client_type',
  'world_type',
  'pvp_type',
  'map_name',
  'server_type',
  'location',
  'exp_rate',
  'exp_stages',
  'skill_rate',
  'magic_rate',
  'loot_rate',
  'spawn_rate',
  'is_online',
  'players_online',
  'players_peak',
  'uptime_percent',
  'last_check',
  'has_custom_map',
  'has_custom_sprites',
  'has_store',
  'is_premium_required',
  'has_battleye',
  'description',
  'tags',
  'updated_at',
]);

const toBaseServerRow = (row) =>
  Object.fromEntries(Object.entries(row).filter(([key]) => BASE_SERVER_COLUMNS.has(key)));

function isMissingSourceColumn(error) {
  return error?.code === '42703' || /column .*servers\.source.* does not exist/i.test(error?.message || '');
}

async function upsertServer(supabase, row) {
  const { data: existing, error: selectError } = await supabase
    .from('servers')
    .select('id')
    .eq('source', row.source)
    .eq('source_id', row.source_id)
    .maybeSingle();

  if (selectError) {
    if (!isMissingSourceColumn(selectError)) throw selectError;

    const baseRow = toBaseServerRow(row);
    const { data: existingByIp, error: ipSelectError } = await supabase
      .from('servers')
      .select('id')
      .eq('ip', baseRow.ip)
      .maybeSingle();

    if (ipSelectError) throw ipSelectError;

    if (existingByIp?.id) {
      const { error } = await supabase
        .from('servers')
        .update(baseRow)
        .eq('id', existingByIp.id);

      if (error) throw error;
      return 'updated';
    }

    const { error } = await supabase.from('servers').insert([baseRow]);
    if (error) throw error;
    return 'inserted';
  }

  if (existing?.id) {
    const { error } = await supabase
      .from('servers')
      .update(row)
      .eq('id', existing.id);

    if (error) throw error;
    return 'updated';
  }

  const { error } = await supabase.from('servers').insert([row]);
  if (error) throw error;
  return 'inserted';
}

async function logSync(supabase, result) {
  try {
    await supabase.from('sync_logs').insert([{
      timestamp: result.timestamp,
      success: result.success,
      fetched: result.fetched,
      inserted: result.inserted,
      updated: result.updated,
      failed: result.failed,
      error: result.error || null,
      execution_time_ms: result.execution_time_ms,
    }]);
  } catch (error) {
    console.error('Failed to write sync log:', error.message);
  }
}

async function getServerCount(supabase) {
  const { count, error } = await supabase
    .from('servers')
    .select('id', { count: 'exact', head: true });

  if (error) throw error;
  return count || 0;
}

async function bulkUpsertBaseRows(supabase, rows) {
  const before = await getServerCount(supabase);
  const chunkSize = intOption(process.env.SUPABASE_UPSERT_CHUNK_SIZE, 100, 1, 500);
  const uniqueRows = [...new Map(rows.map((row) => [row.ip, row])).values()];

  for (let index = 0; index < uniqueRows.length; index += chunkSize) {
    const chunk = uniqueRows.slice(index, index + chunkSize).map(toBaseServerRow);
    const { error } = await supabase
      .from('servers')
      .upsert(chunk, { onConflict: 'ip' });

    if (error) throw error;
  }

  const after = await getServerCount(supabase);
  return {
    inserted: Math.max(0, after - before),
    updated: Math.max(0, uniqueRows.length - Math.max(0, after - before)),
  };
}

const startedAt = Date.now();
const supabaseUrl = firstNonEmpty([
  process.env.SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_SUPABASE_DB_URL,
  process.env.PROJECT_URL,
]);
const serviceRoleKey = firstNonEmpty([
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY,
  process.env.SECRET_KEY,
]);

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.');
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

const result = {
  success: false,
  source: 'otservlist.org',
  timestamp: new Date().toISOString(),
  fetched: 0,
  inserted: 0,
  updated: 0,
  failed: 0,
  pages: [],
  execution_time_ms: 0,
};

try {
  const payload = await fetchOtservlistServers({
    baseUrl: process.env.OTSERVLIST_BASE_URL || 'https://otservlist.org',
    fetchMode: process.env.OTSERVLIST_FETCH_MODE || 'scrapingbee',
    pageLimit: intOption(process.env.OTSERVLIST_PAGE_LIMIT, 20, 1, 50),
    includeDetails: boolOption(process.env.OTSERVLIST_INCLUDE_DETAILS, false),
    detailLimit: intOption(process.env.OTSERVLIST_DETAIL_LIMIT, 0, 0, 1000),
    scrapingBeeApiKey: process.env.SCRAPINGBEE_API_KEY,
    renderJs: boolOption(process.env.SCRAPINGBEE_RENDER_JS, false),
    premiumProxy: boolOption(process.env.SCRAPINGBEE_PREMIUM_PROXY, false),
    countryCode: process.env.SCRAPINGBEE_COUNTRY_CODE,
    timeoutMs: intOption(process.env.OTSERVLIST_TIMEOUT_MS, 120000, 1000, 180000),
    pageDelayMs: intOption(process.env.OTSERVLIST_PAGE_DELAY_MS, 250, 0, 10000),
    detailDelayMs: intOption(process.env.OTSERVLIST_DETAIL_DELAY_MS, 250, 0, 10000),
  });

  result.pages = payload.pages;
  result.fetched = payload.servers.length;

  if (process.env.SUPABASE_SCHEMA_MODE === 'base') {
    const rows = payload.servers.map((server) => cleanRow({
      ...server,
      ...buildEnrichedServerPayload(server, null),
    }));
    const bulk = await bulkUpsertBaseRows(supabase, rows);
    result.inserted = bulk.inserted;
    result.updated = bulk.updated;
    result.success = true;
    result.execution_time_ms = Date.now() - startedAt;
    await logSync(supabase, result);
    console.log(JSON.stringify(result, null, 2));
    process.exit(0);
  }

  for (const [index, server] of payload.servers.entries()) {
    try {
      const researchLimit = intOption(process.env.OTSERVLIST_OFFICIAL_RESEARCH_LIMIT, 0, 0, 250);
      const research = index < researchLimit
        ? await fetchOfficialWebsiteResearch(server, {
            timeoutMs: intOption(process.env.OTSERVLIST_OFFICIAL_TIMEOUT_MS, 15000, 1000, 30000),
          })
        : null;
      const row = cleanRow({
        ...server,
        ...buildEnrichedServerPayload(server, research),
      });
      const status = await upsertServer(supabase, row);
      if (status === 'inserted') result.inserted += 1;
      if (status === 'updated') result.updated += 1;
    } catch (error) {
      result.failed += 1;
      console.error(`Failed to sync ${server.source_id || server.ip}: ${error.message}`);
    }
  }

  result.success = result.failed === 0 || result.fetched > result.failed;
  result.execution_time_ms = Date.now() - startedAt;
  await logSync(supabase, result);
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.success ? 0 : 1);
} catch (error) {
  result.error = error instanceof Error ? error.message : JSON.stringify(error);
  result.execution_time_ms = Date.now() - startedAt;
  await logSync(supabase, result);
  console.error(JSON.stringify(result, null, 2));
  process.exit(1);
}
