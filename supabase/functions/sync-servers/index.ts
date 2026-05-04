import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ============================================================================
// CONFIGURATION
// ============================================================================

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const syncToken = Deno.env.get("SYNC_TOKEN") || "";

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase credentials in environment variables");
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

const OTSERVLIST_BASE = "https://otservlist.org";
const BATCH_SIZE = 50;
const SCRAPE_TIMEOUT = 30000;
const MAX_PAGES = 50; // Safety limit

// ============================================================================
// TYPES
// ============================================================================

interface ServerData {
  name: string;
  ip: string;
  port: number | null;
  website_url: string | null;
  owner_email: string | null;
  version: string;
  client_type: string | null;
  world_type: string | null;
  pvp_type: string | null;
  map_name: string | null;
  server_type: string | null;
  location: string | null;
  exp_rate: number | null;
  exp_stages: boolean | null;
  skill_rate: number | null;
  magic_rate: number | null;
  loot_rate: number | null;
  spawn_rate: number | null;
  is_online: boolean;
  players_online: number;
  players_peak: number;
  uptime_percent: number | null;
  last_check: string;
  has_custom_map: boolean | null;
  has_custom_sprites: boolean | null;
  has_store: boolean | null;
  is_premium_required: boolean | null;
  has_battleye: boolean | null;
  description: string | null;
  tags: string[] | null;
  updated_at: string;
}

interface SyncResult {
  success: boolean;
  timestamp: string;
  fetched: number;
  inserted: number;
  updated: number;
  failed: number;
  error?: string;
  execution_time_ms: number;
  pages_scraped?: number;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function is_valid_ipv4(ip: string): boolean {
  const octets = ip.split(".");
  if (octets.length !== 4) return false;
  return octets.every((octet) => {
    const num = parseInt(octet, 10);
    return !isNaN(num) && num >= 0 && num <= 255 && octet === num.toString();
  });
}

function parse_safe_number(value: any, min: number = 0, max: number = Infinity): number {
  if (value === null || value === undefined || value === "") return min;
  const num = parseInt(String(value), 10);
  if (isNaN(num)) return min;
  return Math.max(min, Math.min(max, num));
}

function parse_safe_float(value: any, min: number = 0.1, max: number = 10000): number {
  if (value === null || value === undefined || value === "") return 1;
  const num = parseFloat(String(value));
  if (isNaN(num)) return 1;
  return Math.max(min, Math.min(max, num));
}

function get_country_from_flag_src(src: string): string {
  const match = src.match(/\/([a-z]{2})\.png/i);
  if (!match) return "Other";

  const code = match[1].toLowerCase();
  const countryMap: Record<string, string> = {
    us: "USA",
    br: "Brazil",
    pl: "Poland",
    se: "Sweden",
    de: "Germany",
    fr: "France",
    mx: "Mexico",
    gb: "UK",
    uk: "UK",
    ca: "Canada",
    au: "Australia",
    ru: "Russia",
    ar: "Argentina",
    nl: "Netherlands",
    es: "Spain",
    it: "Italy",
    jp: "Japan",
    kr: "Korea",
    cn: "China",
    in: "India",
    za: "South Africa",
    nz: "New Zealand",
  };

  return countryMap[code] || "Other";
}

function strip_html_tags(html: string): string {
  return html.replace(/<[^>]+>/g, "").trim();
}

// ============================================================================
// SCRAPING ENGINE
// ============================================================================

async function fetch_page(base_url: string, page: number): Promise<string> {
  const page_url = page === 1 ? `${base_url}-1.html` : `${base_url}-${page}.html`;

  console.log(`Fetching page ${page}: ${page_url}`);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), SCRAPE_TIMEOUT);

  try {
    const response = await fetch(page_url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      if (response.status === 404) {
        console.log(`Page ${page} not found (end of pagination)`);
        return "";
      }
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    clearTimeout(timeout);
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error(`Fetch timed out after ${SCRAPE_TIMEOUT}ms for page ${page}`);
    }
    throw error;
  }
}

async function scrape_all_pages(): Promise<ServerData[]> {
  console.log("Starting multi-page scrape of otservlist.org...");

  const all_servers: ServerData[] = [];
  let page = 1;
  let pages_scraped = 0;
  let consecutive_empty = 0;

  while (page <= MAX_PAGES && consecutive_empty < 2) {
    try {
      const base_url = `${OTSERVLIST_BASE}/list-server_players_online-desc`;
      const html = await fetch_page(base_url, page);

      if (!html || html.length === 0) {
        consecutive_empty++;
        console.log(`Page ${page} returned empty (streak: ${consecutive_empty})`);
        if (consecutive_empty >= 2) break;
        page++;
        continue;
      }

      consecutive_empty = 0;
      const servers = extract_servers_from_html(html);

      if (servers.length === 0) {
        consecutive_empty++;
        console.log(`No servers found on page ${page}`);
        page++;
        continue;
      }

      all_servers.push(...servers);
      pages_scraped++;

      console.log(`Page ${page}: ${servers.length} servers extracted (total: ${all_servers.length})`);

      // Rate limiting to be respectful to the source
      await new Promise((resolve) => setTimeout(resolve, 1000));

      page++;
    } catch (error) {
      console.error(`Error scraping page ${page}:`, error instanceof Error ? error.message : error);
      consecutive_empty++;
      if (consecutive_empty >= 2) break;
      page++;
    }
  }

  console.log(`Scraped ${pages_scraped} pages with total ${all_servers.length} servers`);

  return all_servers;
}

function extract_servers_from_html(html: string): ServerData[] {
  const servers: ServerData[] = [];

  // Find the main servlist table
  const table_match = html.match(/<table[^>]*id="servlist"[^>]*>(.+?)<\/table>/is);
  if (!table_match) {
    console.log("No servlist table found in HTML");
    return [];
  }

  const table_html = table_match[1];

  // Extract all rows (skip header row)
  const row_pattern = /<tr[^>]*>(.+?)<\/tr>/gis;
  let row_match;
  let is_header = true;

  while ((row_match = row_pattern.exec(table_html)) !== null) {
    const row_html = row_match[1];

    // Skip header rows (identified by class="top" or th tags)
    if (is_header || row_html.includes('class="top"') || row_html.match(/<th[^>]*>/i)) {
      is_header = false;
      continue;
    }

    const server = parse_server_row(row_html);
    if (server && server.ip) {
      servers.push(server);
    }
  }

  return servers;
}

function parse_server_row(row_html: string): ServerData | null {
  try {
    // Extract cells: <th>...</th> or <td>...</td>
    const cell_pattern = /<(?:th|td)[^>]*>(.+?)<\/(?:th|td)>/gis;
    const cells: string[] = [];
    let cell_match;

    while ((cell_match = cell_pattern.exec(row_html)) !== null) {
      cells.push(cell_match[1]?.trim() || "");
    }

    if (cells.length < 10) {
      return null;
    }

    // Parse structure based on otservlist.org HTML:
    // [0] Country flag (img src)
    // [1] IP/Domain (link to /ots/{id})
    // [2] External link icon
    // [3] Server name/description
    // [4] Players online (X (peak) / max)
    // [5] Uptime percentage (99.94%)
    // [6] Points
    // [7] EXP rate (x1, x100, x2000)
    // [8] PVP type (PVP, Non-PVP, PVP-Enforced)
    // [9] Version ([ 7.4 ])

    // Extract flag/country
    const flag_match = cells[0]?.match(/src="([^"]*\/([a-z]{2})\.png)"/i);
    const location = flag_match ? get_country_from_flag_src(flag_match[1]) : null;

    // Extract IP/website from link
    const ip_match = cells[1]?.match(/href="\/ots\/\d+"[^>]*>([^<]+)</i);
    const ip_or_website = ip_match ? ip_match[1]?.trim() : "";

    if (!ip_or_website) {
      return null;
    }

    // Determine if IP or domain
    let ip: string;
    let website_url: string | null = null;

    if (is_valid_ipv4(ip_or_website)) {
      ip = ip_or_website;
    } else {
      // It's a domain/website
      website_url = ip_or_website;
      ip = ip_or_website; // Use domain as IP identifier for uniqueness
    }

    // Server name/description from cell[3]
    const name = strip_html_tags(cells[3]).substring(0, 255) || "";

    if (!name || name.length < 2) {
      return null;
    }

    // Parse players: "2246 (3129) / 2000" format
    const players_cell = cells[4] || "";
    const players_online_match = players_cell.match(/(\d+)\s*\(/);
    const players_online = players_online_match ? parse_safe_number(players_online_match[1], 0, 10000) : 0;

    const players_peak_match = players_cell.match(/\((\d+)\)/);
    const players_peak = players_peak_match ? parse_safe_number(players_peak_match[1], 0, 100000) : players_online;

    // Parse uptime: "99.94%"
    const uptime_match = cells[5]?.match(/(\d+\.?\d*)/);
    const uptime_percent = uptime_match ? parse_safe_float(uptime_match[1], 0, 100) : null;

    // Parse EXP rate: "x1", "x100", "x2000"
    const exp_match = cells[7]?.match(/x(\d+)/i);
    const exp_rate = exp_match ? parse_safe_float(exp_match[1], 0.1, 10000) : 1;

    // PVP type / World type
    const pvp_cell = strip_html_tags(cells[8]);
    const world_type = pvp_cell.length > 0 ? pvp_cell : "PVP";

    // Version: "[ 7.4 ]" or "[ 8.6 ]"
    const version_match = cells[9]?.match(/\[?\s*([0-9.]+)\s*\]?/);
    const version = version_match ? version_match[1]?.trim() : "7.4";

    // Determine if online by player count
    const is_online = players_online > 0;

    const now = new Date().toISOString();

    return {
      name,
      ip,
      port: 7171,
      website_url,
      owner_email: null,
      version,
      client_type: null,
      world_type,
      pvp_type: null,
      map_name: null,
      server_type: null,
      location,
      exp_rate,
      exp_stages: null,
      skill_rate: 1,
      magic_rate: 1,
      loot_rate: 1,
      spawn_rate: 1,
      is_online,
      players_online,
      players_peak,
      uptime_percent: uptime_percent ? Number(uptime_percent.toFixed(2)) : null,
      last_check: now,
      has_custom_map: null,
      has_custom_sprites: null,
      has_store: null,
      is_premium_required: null,
      has_battleye: null,
      description: null,
      tags: null,
      updated_at: now,
    };
  } catch (error) {
    console.error("Error parsing server row:", error instanceof Error ? error.message : error);
    return null;
  }
}

// ============================================================================
// DATABASE SYNC
// ============================================================================

async function batch_upsert_servers(servers: ServerData[]): Promise<{
  inserted: number;
  updated: number;
  failed: number;
}> {
  let inserted = 0;
  let updated = 0;
  let failed = 0;

  for (let i = 0; i < servers.length; i += BATCH_SIZE) {
    const batch = servers.slice(i, i + BATCH_SIZE);

    for (const server of batch) {
      try {
        // Check if server exists by IP (unique constraint)
        const { data: existing, error: selectError } = await supabase
          .from("servers")
          .select("id")
          .eq("ip", server.ip)
          .maybeSingle();

        if (selectError && selectError.code !== "PGRST116") {
          throw selectError;
        }

        if (existing) {
          // Update existing server
          const { error: updateError } = await supabase
            .from("servers")
            .update({
              name: server.name,
              port: server.port,
              website_url: server.website_url,
              version: server.version,
              world_type: server.world_type,
              location: server.location,
              players_online: server.players_online,
              players_peak: server.players_peak,
              exp_rate: server.exp_rate,
              skill_rate: server.skill_rate,
              loot_rate: server.loot_rate,
              is_online: server.is_online,
              uptime_percent: server.uptime_percent,
              last_check: server.last_check,
              updated_at: server.updated_at,
            })
            .eq("ip", server.ip);

          if (updateError) {
            console.error(`Update failed for ${server.name} (${server.ip}):`, updateError.message);
            failed++;
          } else {
            updated++;
          }
        } else {
          // Insert new server
          const { error: insertError } = await supabase
            .from("servers")
            .insert([server]);

          if (insertError) {
            console.error(`Insert failed for ${server.name} (${server.ip}):`, insertError.message);
            failed++;
          } else {
            inserted++;
          }
        }
      } catch (error) {
        console.error(`Error processing ${server.name} (${server.ip}):`, error instanceof Error ? error.message : error);
        failed++;
      }
    }

    // Rate limiting between batches
    if (i + BATCH_SIZE < servers.length) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(
        `Database progress: ${Math.min(i + BATCH_SIZE, servers.length)}/${servers.length} (${inserted} inserted, ${updated} updated, ${failed} failed)`
      );
    }
  }

  return { inserted, updated, failed };
}

async function log_sync_result(result: SyncResult): Promise<void> {
  try {
    const { error } = await supabase
      .from("sync_logs")
      .insert([
        {
          timestamp: result.timestamp,
          success: result.success,
          fetched: result.fetched,
          inserted: result.inserted,
          updated: result.updated,
          failed: result.failed,
          error: result.error || null,
          execution_time_ms: result.execution_time_ms,
        },
      ]);

    if (error) {
      console.error("Failed to log sync result:", error.message);
    }
  } catch (error) {
    console.error("Failed to log sync result:", error instanceof Error ? error.message : error);
  }
}

// ============================================================================
// HTTP HANDLER
// ============================================================================

serve(async (req) => {
  const start_time = Date.now();
  const result: SyncResult = {
    success: false,
    timestamp: new Date().toISOString(),
    fetched: 0,
    inserted: 0,
    updated: 0,
    failed: 0,
    execution_time_ms: 0,
    pages_scraped: 0,
  };

  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, x-sync-token",
      },
    });
  }

  // Security: Token verification (optional but recommended)
  if (syncToken) {
    const token = req.headers.get("x-sync-token");
    if (token !== syncToken) {
      console.error("Unauthorized sync request");
      return new Response(
        JSON.stringify({ error: "Unauthorized", success: false }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  // Only allow POST/GET
  if (req.method !== "POST" && req.method !== "GET") {
    return new Response(
      JSON.stringify({ error: "Method not allowed", success: false }),
      {
        status: 405,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    console.log("=".repeat(80));
    console.log("Starting otservlist.org sync...");
    console.log("=".repeat(80));

    // Scrape all pages
    const raw_servers = await scrape_all_pages();
    result.fetched = raw_servers.length;
    result.pages_scraped = Math.ceil(raw_servers.length / 20);

    if (result.fetched === 0) {
      throw new Error("No servers scraped from otservlist.org");
    }

    console.log(`\nFetched ${result.fetched} servers from otservlist.org`);

    // Batch upsert to database
    console.log(`\nUpserting ${result.fetched} servers to database...`);
    const db_result = await batch_upsert_servers(raw_servers);

    result.inserted = db_result.inserted;
    result.updated = db_result.updated;
    result.failed = db_result.failed;
    result.success = true;

    result.execution_time_ms = Date.now() - start_time;

    console.log("\n" + "=".repeat(80));
    console.log("Sync completed successfully!");
    console.log(`  - Inserted: ${result.inserted}`);
    console.log(`  - Updated: ${result.updated}`);
    console.log(`  - Failed: ${result.failed}`);
    console.log(`  - Duration: ${result.execution_time_ms}ms`);
    console.log("=".repeat(80));

    await log_sync_result(result);

    return new Response(JSON.stringify(result), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      status: 200,
    });
  } catch (error) {
    result.success = false;
    result.error = error instanceof Error ? error.message : String(error);
    result.execution_time_ms = Date.now() - start_time;

    console.error("=".repeat(80));
    console.error("Sync failed!");
    console.error(`  - Error: ${result.error}`);
    console.error(`  - Duration: ${result.execution_time_ms}ms`);
    console.error("=".repeat(80));

    await log_sync_result(result);

    return new Response(JSON.stringify(result), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      status: 500,
    });
  }
});
