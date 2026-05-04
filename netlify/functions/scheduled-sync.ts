import { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

// ============================================================================
// CONFIGURATION
// ============================================================================

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing Supabase credentials in environment variables");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Configuration
const OTSERVLIST_URL = "https://otservlist.org";
const BATCH_SIZE = 50;
const SYNC_LOG_TABLE = "sync_logs";

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
}

// ============================================================================
// UTILITIES
// ============================================================================

function sanitize_string(str: string, max_length: number = 255): string {
  if (typeof str !== "string") return "";
  return str
    .trim()
    .substring(0, max_length)
    .replace(/[<>\"']/g, (char) => {
      const escape_map: { [key: string]: string } = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
      };
      return escape_map[char] || char;
    });
}

function is_valid_ipv4(ip: string): boolean {
  const octets = ip.split(".");
  if (octets.length !== 4) return false;
  return octets.every((octet) => {
    const num = parseInt(octet, 10);
    return !isNaN(num) && num >= 0 && num <= 255 && octet === num.toString();
  });
}

function parse_safe_number(value: any, min: number = 0, max: number = Infinity): number {
  if (value === null || value === undefined) return min;
  const num = parseInt(value, 10) || 0;
  return Math.max(min, Math.min(max, num));
}

function parse_safe_float(value: any, min: number = 0.1, max: number = 1000): number {
  if (value === null || value === undefined) return 1;
  const num = parseFloat(value) || 1;
  return Math.max(min, Math.min(max, num));
}

// ============================================================================
// SCRAPING ENGINE
// ============================================================================

async function scrape_otservlist(): Promise<any[]> {
  try {
    console.log("Scraping otservlist.org...");

    const response = await fetch(`${OTSERVLIST_URL}/`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
      },
      timeout: 30000,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();

    // Extract server data from HTML table rows
    const servers = extract_servers_from_html(html);

    console.log(`Scraped ${servers.length} servers from otservlist.org`);
    return servers;
  } catch (error) {
    console.error("Scraping failed:", error);
    throw error;
  }
}

function extract_servers_from_html(html: string): any[] {
  const servers: any[] = [];

  // Match table rows: <tr data-ip="X.X.X.X">...</tr>
  const row_pattern = /<tr[^>]*data-ip="([^"]+)"[^>]*>(.+?)<\/tr>/gs;
  let match;

  while ((match = row_pattern.exec(html)) !== null) {
    const ip = match[1]?.trim();
    const row_content = match[2];

    if (!ip || !is_valid_ipv4(ip)) continue;

    // Extract cells
    const cell_pattern = /<td[^>]*>(.+?)<\/td>/g;
    const cells: string[] = [];
    let cell_match;

    while ((cell_match = cell_pattern.exec(row_content)) !== null) {
      cells.push(cell_match[1]?.trim() || "");
    }

    if (cells.length < 5) continue;

    // Parse server data from cells
    const server = parse_server_row(ip, cells);
    if (server) servers.push(server);
  }

  return servers;
}

function parse_server_row(ip: string, cells: string[]): any {
  try {
    // Extract name from first cell (might be in link)
    const name_match = cells[0]?.match(/>([^<]+)<\//);
    const name = name_match ? sanitize_string(name_match[1], 100) : "";

    // Extract port from IP cell or second cell
    let port = 7171;
    const port_match = cells[0]?.match(/:(\d+)/);
    if (port_match) port = parseInt(port_match[1], 10);

    // Parse remaining cells based on position
    const world_type = sanitize_string(cells[1] || "PVP", 20).toUpperCase();
    const online_match = cells[2]?.match(/(\d+)/);
    const players_online = online_match ? parseInt(online_match[1], 10) : 0;

    const peak_match = cells[3]?.match(/(\d+)/);
    const players_peak = peak_match ? parseInt(peak_match[1], 10) : 0;

    const version = sanitize_string(cells[4] || "8.6", 20);
    const location = sanitize_string(cells[6] || "Unknown", 50);

    // Parse rates from cells[5] if present
    const rates_match = cells[5]?.match(/(\d+\.?\d*)\s*\/\s*(\d+\.?\d*)\s*\/\s*(\d+\.?\d*)/);
    const exp_rate = rates_match ? parseFloat(rates_match[1]) : 1;
    const skill_rate = rates_match ? parseFloat(rates_match[2]) : 1;
    const loot_rate = rates_match ? parseFloat(rates_match[3]) : 1;

    if (!name || !is_valid_ipv4(ip)) return null;

    return {
      name,
      ip,
      port,
      version,
      world_type,
      location,
      website_url: null,
      description: "",
      players_online,
      players_peak,
      exp_rate,
      skill_rate,
      loot_rate,
      is_online: players_online > 0,
      uptime_percent: 100,
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
      last_check: new Date().toISOString(),
      updated_at: new Date().toISOString(),
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
        // Check if exists by IP
        const { data: existing } = await supabase
          .from("servers")
          .select("id")
          .eq("ip", server.ip)
          .single();

        if (existing) {
          // Update
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
          // Insert
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
  }

  return { inserted, updated, failed };
}

async function log_sync_result(result: SyncResult): Promise<void> {
  try {
    await supabase.from(SYNC_LOG_TABLE).insert([
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
// MAIN HANDLER
// ============================================================================

const handler: Handler = async (event) => {
  const start_time = Date.now();
  const result: SyncResult = {
    success: false,
    timestamp: new Date().toISOString(),
    fetched: 0,
    inserted: 0,
    updated: 0,
    failed: 0,
    execution_time_ms: 0,
  };

  try {
    // Verify this is a scheduled invocation
    if (event.headers["x-netlify-internal"]) {
      console.log("Scheduled function triggered");
    }

    // Scrape otservlist.org
    const raw_servers = await scrape_otservlist();
    result.fetched = raw_servers.length;

    if (result.fetched === 0) {
      throw new Error("No servers scraped from otservlist.org");
    }

    // Batch upsert to database
    console.log(`Upserting ${result.fetched} servers...`);
    const db_result = await batch_upsert_servers(raw_servers as ServerData[]);

    result.inserted = db_result.inserted;
    result.updated = db_result.updated;
    result.failed = db_result.failed;
    result.success = true;

    console.log(
      `Sync complete: ${result.inserted} inserted, ${result.updated} updated, ${result.failed} failed`
    );

    result.execution_time_ms = Date.now() - start_time;
    await log_sync_result(result);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    result.success = false;
    result.error = error instanceof Error ? error.message : "Unknown error";
    result.execution_time_ms = Date.now() - start_time;

    console.error("Sync failed:", result.error);
    await log_sync_result(result);

    return {
      statusCode: 500,
      body: JSON.stringify(result),
    };
  }
};

export { handler };
