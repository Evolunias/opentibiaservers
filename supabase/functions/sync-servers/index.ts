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

// ============================================================================
// TYPES
// ============================================================================

interface ServerData {
  name: string;
  ip: string;
  port: number;
  version: string;
  world_type: string;
  location: string;
  website_url: string | null;
  description: string;
  players_online: number;
  players_peak: number;
  exp_rate: number;
  skill_rate: number;
  loot_rate: number;
  is_online: boolean;
  uptime_percent: number;
  has_custom_map: boolean;
  has_battleye: boolean;
  last_check: string;
  updated_at: string;
  client_type: null;
  pvp_type: null;
  map_name: null;
  server_type: null;
  is_premium_required: boolean;
  has_custom_sprites: boolean;
  has_store: boolean;
  owner_email: null;
  tags: string[];
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
// UTILITIES
// ============================================================================

function is_valid_ipv4(ip: string): boolean {
  const octets = ip.split(".");
  if (octets.length !== 4) return false;
  return octets.every((octet) => {
    const num = parseInt(octet, 10);
    return !isNaN(num) && num >= 0 && num <= 255 && octet === num.toString();
  });
}

function parse_safe_number(
  value: any,
  min: number = 0,
  max: number = Infinity
): number {
  if (value === null || value === undefined) return min;
  const num = parseInt(value, 10) || 0;
  return Math.max(min, Math.min(max, num));
}

function parse_safe_float(
  value: any,
  min: number = 0.1,
  max: number = 1000
): number {
  if (value === null || value === undefined) return 1;
  const num = parseFloat(value) || 1;
  return Math.max(min, Math.min(max, num));
}

function get_country_from_flag_src(src: string): string {
  const match = src.match(/\/([a-z]{2})\.png/i);
  if (!match) return "Unknown";
  
  const code = match[1].toLowerCase();
  const countryMap: { [key: string]: string } = {
    us: "USA",
    br: "Brazil",
    pl: "Poland",
    se: "Sweden",
    de: "Germany",
    fr: "France",
    mx: "Mexico",
    uk: "UK",
    ca: "Canada",
    au: "Australia",
    ru: "Russia",
    ar: "Argentina",
    nl: "Netherlands",
  };
  
  return countryMap[code] || "Other";
}

// ============================================================================
// SCRAPING ENGINE
// ============================================================================

async function fetch_page(url: string, page: number = 1): Promise<string> {
  const page_url = page > 1 ? `${url}-${page}.html` : `${url}-1.html`;
  
  console.log(`Fetching page ${page}: ${page_url}`);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), SCRAPE_TIMEOUT);

  try {
    const response = await fetch(page_url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
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
      throw new Error(`Fetch timed out after ${SCRAPE_TIMEOUT}ms`);
    }
    throw error;
  }
}

async function scrape_all_pages(): Promise<ServerData[]> {
  console.log("Starting multi-page scrape of otservlist.org...");

  const all_servers: ServerData[] = [];
  let page = 1;
  let pages_scraped = 0;

  // Try to scrape up to 50 pages (safety limit)
  while (page <= 50) {
    try {
      const base_url = `${OTSERVLIST_BASE}/list-server_players_online-desc`;
      const html = await fetch_page(base_url, page);

      if (!html) break; // No more pages

      const servers = extract_servers_from_html(html);
      all_servers.push(...servers);
      pages_scraped++;

      console.log(`Page ${page}: ${servers.length} servers extracted`);

      // Rate limiting between pages
      await new Promise((resolve) => setTimeout(resolve, 1000));

      page++;
    } catch (error) {
      console.error(`Error scraping page ${page}:`, error);
      break;
    }
  }

  console.log(
    `Scraped ${pages_scraped} pages with total ${all_servers.length} servers`
  );

  return all_servers;
}

function extract_servers_from_html(html: string): ServerData[] {
  const servers: ServerData[] = [];

  // Find the main servlist table
  const table_match = html.match(/<table id="servlist">(.+?)<\/table>/s);
  if (!table_match) {
    console.log("No servlist table found in HTML");
    return [];
  }

  const table_html = table_match[1];

  // Extract all rows (skip header row)
  const row_pattern = /<tr[^>]*>(.+?)<\/tr>/gs;
  let row_match;
  let is_first = true;

  while ((row_match = row_pattern.exec(table_html)) !== null) {
    // Skip header row (first row with class="top")
    if (is_first || row_match[0].includes('class="top"')) {
      is_first = false;
      continue;
    }

    const row_html = row_match[1];
    const server = parse_server_row(row_html);

    if (server) {
      servers.push(server);
    }
  }

  return servers;
}

function parse_server_row(row_html: string): ServerData | null {
  try {
    // Extract cells: <th>...</th> or <td>...</td>
    const cell_pattern = /<(?:th|td)[^>]*>(.+?)<\/(?:th|td)>/gs;
    const cells: string[] = [];
    let cell_match;

    while ((cell_match = cell_pattern.exec(row_html)) !== null) {
      cells.push(cell_match[1]?.trim() || "");
    }

    if (cells.length < 10) {
      return null;
    }

    // Parse structure based on otservlist.org HTML:
    // 0: Country flag (img)
    // 1: IP/Website (link to /ots/{id})
    // 2: External link icon
    // 3: Server name/description
    // 4: Players online (X / Y)
    // 5: Uptime percentage
    // 6: Points
    // 7: EXP rate
    // 8: PVP type
    // 9: Version

    // Extract flag/country
    const flag_match = cells[0]?.match(/src="([^"]*\/([a-z]{2})\.png)"/i);
    const country = flag_match ? get_country_from_flag_src(flag_match[1]) : "Unknown";

    // Extract IP/website from link
    const ip_match = cells[1]?.match(/href="\/ots\/\d+">([^<]+)</);
    const ip_or_website = ip_match ? ip_match[1]?.trim() : "";

    // Try to parse as IP
    let ip = "";
    let website_url = null;

    if (ip_or_website && is_valid_ipv4(ip_or_website)) {
      ip = ip_or_website;
    } else if (ip_or_website) {
      website_url = ip_or_website;
      // Try to extract IP from domain or use domain as-is
      ip = ip_or_website; // Fall back to using domain as identifier
    }

    if (!ip) {
      return null;
    }

    // Server name/description
    const name = cells[3]?.replace(/<[^>]+>/g, "")?.trim() || "";

    if (!name || name.length < 2) {
      return null;
    }

    // Players online: "2246 (3129) / 2000" → extract first number
    const players_match = cells[4]?.match(/(\d+)\s*\(/);
    const players_online = players_match ? parseInt(players_match[1], 10) : 0;

    // Peak players: extract number in parentheses
    const peak_match = cells[4]?.match(/\((\d+)\)/);
    const players_peak = peak_match ? parseInt(peak_match[1], 10) : 0;

    // Uptime: "99.94%" → extract number
    const uptime_match = cells[5]?.match(/(\d+\.?\d*)/);
    const uptime_percent = uptime_match ? parseFloat(uptime_match[1]) : 100;

    // EXP rate: "x1", "x100", "x2000" → extract number
    const exp_match = cells[7]?.match(/x(\d+)/i);
    const exp_rate = exp_match ? parseFloat(exp_match[1]) : 1;

    // PVP type
    const world_type = cells[8]?.replace(/<[^>]+>/g, "")?.trim() || "PVP";

    // Version: "[ 7.4 ]", "[ 8.6 ]", etc
    const version_match = cells[9]?.match(/\[?\s*([0-9.]+)\s*\]?/);
    const version = version_match ? version_match[1]?.trim() : "8.6";

    // Determine if online by player count
    const is_online = players_online > 0;

    const now = new Date().toISOString();

    return {
      name,
      ip,
      port: 7171, // Default Tibia port
      version,
      world_type,
      location: country,
      website_url,
      description: "",
      players_online,
      players_peak,
      exp_rate,
      skill_rate: 1, // Not in otservlist.org data
      loot_rate: 1, // Not in otservlist.org data
      is_online,
      uptime_percent,
      has_custom_map: false,
      has_battleye: false,
      client_type: null,
      pvp_type: null,
      map_name: null,
      server_type: null,
      is_premium_required: false,
      has_custom_sprites: false,
      has_store: false,
      owner_email: null,
      tags: [],
      last_check: now,
      updated_at: now,
    };
  } catch (error) {
    console.error("Error parsing server row:", error);
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
        // Check if server exists by IP
        const { data: existing } = await supabase
          .from("servers")
          .select("id")
          .eq("ip", server.ip)
          .single();

        if (existing) {
          // Update existing server
          const { error } = await supabase
            .from("servers")
            .update({
              name: server.name,
              port: server.port,
              version: server.version,
              world_type: server.world_type,
              location: server.location,
              website_url: server.website_url,
              description: server.description,
              players_online: server.players_online,
              players_peak: server.players_peak,
              exp_rate: server.exp_rate,
              skill_rate: server.skill_rate,
              loot_rate: server.loot_rate,
              is_online: server.is_online,
              uptime_percent: server.uptime_percent,
              has_custom_map: server.has_custom_map,
              has_battleye: server.has_battleye,
              last_check: server.last_check,
              updated_at: server.updated_at,
            })
            .eq("ip", server.ip);

          if (error) {
            console.error(`Update failed for ${server.name}:`, error);
            failed++;
          } else {
            updated++;
          }
        } else {
          // Insert new server
          const { error } = await supabase.from("servers").insert([server]);

          if (error) {
            console.error(`Insert failed for ${server.name}:`, error);
            failed++;
          } else {
            inserted++;
          }
        }
      } catch (error) {
        console.error(`Error processing ${server.name}:`, error);
        failed++;
      }
    }

    // Rate limiting between batches
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log(
      `Database progress: ${Math.min(i + BATCH_SIZE, servers.length)}/${servers.length}`
    );
  }

  return { inserted, updated, failed };
}

async function log_sync_result(result: SyncResult): Promise<void> {
  try {
    await supabase.from("sync_logs").insert([
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
  } catch (error) {
    console.error("Failed to log sync result:", error);
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

  // Security: Token verification (optional)
  if (syncToken) {
    const token = req.headers.get("x-sync-token");
    if (token !== syncToken) {
      console.error("Unauthorized sync request");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  // Only allow POST/GET
  if (req.method !== "POST" && req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    console.log("Starting otservlist.org sync...");

    // Scrape all pages
    const raw_servers = await scrape_all_pages();
    result.fetched = raw_servers.length;
    result.pages_scraped = Math.ceil(raw_servers.length / 20); // Estimate based on ~20 servers per page

    if (result.fetched === 0) {
      throw new Error("No servers scraped from otservlist.org");
    }

    // Batch upsert to database
    console.log(`Upserting ${result.fetched} servers...`);
    const db_result = await batch_upsert_servers(raw_servers);

    result.inserted = db_result.inserted;
    result.updated = db_result.updated;
    result.failed = db_result.failed;
    result.success = true;

    console.log(
      `Sync complete: ${result.inserted} inserted, ${result.updated} updated, ${result.failed} failed`
    );

    result.execution_time_ms = Date.now() - start_time;
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
    result.error = error instanceof Error ? error.message : "Unknown error";
    result.execution_time_ms = Date.now() - start_time;

    console.error("Sync failed:", result.error);
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
