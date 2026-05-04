import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ============================================================================
// CONFIGURATION & CONSTANTS
// ============================================================================

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase credentials in environment variables");
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

// Data source URLs - multiple sources for redundancy
const DATA_SOURCES = [
  {
    name: "otservlist.world",
    url: "https://otservlist.world/api/servers",
    priority: 1,
    timeout: 15000,
  },
  {
    name: "tibia-servers-api",
    url: "https://api.tibia-servers.com/v1/servers",
    priority: 2,
    timeout: 15000,
  },
  {
    name: "openserver-directory",
    url: "https://openserver-directory.com/api/servers",
    priority: 3,
    timeout: 15000,
  },
];

// Security & validation constants
const VALID_WORLD_TYPES = ["PVP", "Non-PVP", "PVP-Enforced", "RPG", "War"];
const VALID_LOCATIONS = [
  "USA",
  "Europe",
  "Brazil",
  "Germany",
  "Asia",
  "UK",
  "Canada",
  "Mexico",
  "Poland",
  "France",
  "Russia",
  "South America",
  "Scandinavia",
  "Australia",
  "Argentina",
  "Netherlands",
  "Sweden",
  "Unknown",
  "Other",
];
const MIN_SERVER_NAME_LENGTH = 2;
const MAX_SERVER_NAME_LENGTH = 100;
const MIN_PORT = 1;
const MAX_PORT = 65535;
const VALID_IP_REGEX =
  /^(\d{1,3}\.){3}\d{1,3}$|^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/;
const MIN_VERSION_LENGTH = 2;
const MAX_VERSION_LENGTH = 20;
const BATCH_SIZE = 30;
const RATE_LIMIT_PER_SECOND = 50;

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface RawServerData {
  name?: string;
  server_name?: string;
  ip?: string;
  address?: string;
  port?: number;
  version?: string;
  client_version?: string;
  world_type?: string;
  pvp_type?: string;
  location?: string;
  country?: string;
  website?: string;
  website_url?: string;
  description?: string;
  players_online?: number | string;
  online?: number | string;
  players_peak?: number | string;
  peak?: number | string;
  exp_rate?: number | string;
  skill_rate?: number | string;
  loot_rate?: number | string;
  is_online?: boolean;
  uptime_percent?: number | string;
  has_custom_map?: boolean;
  has_battleye?: boolean;
  [key: string]: any;
}

interface NormalizedServer {
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
  source_hash: string;
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

interface SyncStats {
  total_fetched: number;
  total_processed: number;
  inserted: number;
  updated: number;
  duplicates_found: number;
  failed: number;
  validation_errors: number;
  sources_success: string[];
  sources_failed: string[];
  execution_time_ms: number;
}

interface DuplicateCheckResult {
  is_duplicate: boolean;
  existing_id?: string;
  conflict_type?: "ip" | "name_location" | "website";
  severity?: "high" | "medium" | "low";
}

// ============================================================================
// LOGGING & MONITORING
// ============================================================================

class Logger {
  private start_time = Date.now();
  private logs: string[] = [];

  log(level: string, message: string, data?: any) {
    const timestamp = new Date().toISOString();
    const log_entry = `[${timestamp}] [${level}] ${message}`;
    this.logs.push(log_entry);

    if (level === "ERROR") {
      console.error(log_entry, data || "");
    } else if (level === "WARN") {
      console.warn(log_entry, data || "");
    } else {
      console.log(log_entry, data || "");
    }
  }

  info(message: string, data?: any) {
    this.log("INFO", message, data);
  }
  warn(message: string, data?: any) {
    this.log("WARN", message, data);
  }
  error(message: string, data?: any) {
    this.log("ERROR", message, data);
  }
  debug(message: string, data?: any) {
    this.log("DEBUG", message, data);
  }

  get_execution_time(): number {
    return Date.now() - this.start_time;
  }

  get_logs(): string[] {
    return this.logs;
  }
}

// ============================================================================
// VALIDATION & SANITIZATION
// ============================================================================

/**
 * Validates IPv4 address format
 */
function is_valid_ipv4(ip: string): boolean {
  const octets = ip.split(".");
  if (octets.length !== 4) return false;

  return octets.every((octet) => {
    const num = parseInt(octet, 10);
    return !isNaN(num) && num >= 0 && num <= 255 && octet === num.toString();
  });
}

/**
 * Validates port number
 */
function is_valid_port(port: any): boolean {
  const num = parseInt(port, 10);
  return !isNaN(num) && num >= MIN_PORT && num <= MAX_PORT;
}

/**
 * Sanitizes string input to prevent XSS/injection
 */
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

/**
 * Validates server name
 */
function is_valid_server_name(name: string): boolean {
  if (typeof name !== "string") return false;
  const clean_name = name.trim();
  return (
    clean_name.length >= MIN_SERVER_NAME_LENGTH &&
    clean_name.length <= MAX_SERVER_NAME_LENGTH &&
    !/^[0-9.]+$/.test(clean_name)
  ); // Not just numbers/dots
}

/**
 * Validates version string
 */
function is_valid_version(version: string): boolean {
  if (typeof version !== "string") return false;
  const clean_version = version.trim();
  return (
    clean_version.length >= MIN_VERSION_LENGTH &&
    clean_version.length <= MAX_VERSION_LENGTH &&
    /^[\d.]+$|^[\d.]+-[\w]+$/.test(clean_version)
  );
}

/**
 * Validates URL format
 */
function is_valid_url(url: string): boolean {
  if (!url || typeof url !== "string") return false;
  try {
    new URL(url);
    return url.startsWith("http://") || url.startsWith("https://");
  } catch {
    return false;
  }
}

/**
 * Normalizes world type to valid enum
 */
function normalize_world_type(type: string): string {
  if (!type || typeof type !== "string") return "PVP";

  const normalized = type.toUpperCase().trim();
  return VALID_WORLD_TYPES.includes(normalized) ? normalized : "PVP";
}

/**
 * Normalizes location to valid option
 */
function normalize_location(location: string): string {
  if (!location || typeof location !== "string") return "Unknown";

  const normalized = location
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return VALID_LOCATIONS.includes(normalized) ? normalized : "Other";
}

/**
 * Parses numeric value safely
 */
function parse_safe_number(value: any, min: number = 0, max: number = Infinity): number {
  if (value === null || value === undefined) return min;
  const num = parseInt(value, 10) || 0;
  return Math.max(min, Math.min(max, num));
}

/**
 * Parses float value safely
 */
function parse_safe_float(value: any, min: number = 0.1, max: number = 1000): number {
  if (value === null || value === undefined) return 1;
  const num = parseFloat(value) || 1;
  return Math.max(min, Math.min(max, num));
}

/**
 * Generates deterministic hash for duplicate detection
 */
function generate_source_hash(server: NormalizedServer): string {
  const data = `${server.ip}:${server.port}:${server.name}:${server.location}`;
  let hash = 0;

  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  return Math.abs(hash).toString(16);
}

// ============================================================================
// DUPLICATE DETECTION ENGINE
// ============================================================================

class DuplicateDetector {
  private known_ips: Set<string> = new Set();
  private known_hashes: Set<string> = new Set();
  private known_names_by_location: Map<string, Set<string>> = new Map();
  private known_websites: Set<string> = new Set();

  async load_existing_servers(logger: Logger): Promise<void> {
    try {
      logger.info("Loading existing servers for duplicate detection...");

      // Load all IP addresses
      const { data: ips } = await supabase
        .from("servers")
        .select("ip")
        .not("ip", "is", null);

      if (ips) {
        ips.forEach((server: any) => {
          if (server.ip) this.known_ips.add(server.ip.toLowerCase());
        });
      }

      // Load names by location for fuzzy matching
      const { data: names } = await supabase
        .from("servers")
        .select("name, location");

      if (names) {
        names.forEach((server: any) => {
          const location = server.location || "Unknown";
          if (!this.known_names_by_location.has(location)) {
            this.known_names_by_location.set(location, new Set());
          }
          this.known_names_by_location.get(location)!.add(server.name.toLowerCase());
        });
      }

      // Load websites for duplicate detection
      const { data: websites } = await supabase
        .from("servers")
        .select("website_url")
        .not("website_url", "is", null);

      if (websites) {
        websites.forEach((server: any) => {
          if (server.website_url) {
            this.known_websites.add(server.website_url.toLowerCase());
          }
        });
      }

      logger.info(
        `Loaded ${this.known_ips.size} IPs, ${this.known_websites.size} websites for duplicate detection`
      );
    } catch (err) {
      logger.warn("Failed to load existing servers for duplicate detection", err);
    }
  }

  check_duplicate(server: NormalizedServer): DuplicateCheckResult {
    const ip_lower = server.ip.toLowerCase();
    const name_lower = server.name.toLowerCase();
    const location = server.location;
    const website_lower = server.website_url?.toLowerCase();

    // Exact IP match (high confidence)
    if (this.known_ips.has(ip_lower)) {
      return {
        is_duplicate: true,
        conflict_type: "ip",
        severity: "high",
      };
    }

    // Website URL match (medium-high confidence)
    if (website_lower && this.known_websites.has(website_lower)) {
      return {
        is_duplicate: true,
        conflict_type: "website",
        severity: "medium",
      };
    }

    // Name + Location match (medium confidence - could be update)
    const location_names = this.known_names_by_location.get(location) || new Set();
    if (location_names.has(name_lower)) {
      return {
        is_duplicate: true,
        conflict_type: "name_location",
        severity: "medium",
      };
    }

    return { is_duplicate: false };
  }

  add_server(server: NormalizedServer): void {
    this.known_ips.add(server.ip.toLowerCase());
    if (server.website_url) {
      this.known_websites.add(server.website_url.toLowerCase());
    }

    const location = server.location;
    if (!this.known_names_by_location.has(location)) {
      this.known_names_by_location.set(location, new Set());
    }
    this.known_names_by_location.get(location)!.add(server.name.toLowerCase());
  }
}

// ============================================================================
// DATA FETCHING ENGINE
// ============================================================================

class DataFetcher {
  async fetch_from_source(
    source: (typeof DATA_SOURCES)[0],
    logger: Logger
  ): Promise<RawServerData[]> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), source.timeout);

    try {
      logger.info(`Fetching from ${source.name}...`);

      const response = await fetch(source.url, {
        signal: controller.signal,
        headers: {
          "User-Agent": "OpenTibiaServers/1.0 (+https://opentibiaservers.com)",
          Accept: "application/json",
          "Accept-Encoding": "gzip, deflate",
        },
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const content_type = response.headers.get("content-type") || "";
      if (!content_type.includes("application/json")) {
        throw new Error(`Invalid content type: ${content_type}`);
      }

      const data = await response.json();

      // Validate response is array
      if (!Array.isArray(data)) {
        logger.warn(`${source.name} returned non-array response`);
        return [];
      }

      if (data.length === 0) {
        logger.warn(`${source.name} returned empty array`);
        return [];
      }

      logger.info(`Successfully fetched ${data.length} servers from ${source.name}`);
      return data;
    } catch (err) {
      clearTimeout(timeout);

      if (err instanceof DOMException && err.name === "AbortError") {
        logger.error(`${source.name} request timed out after ${source.timeout}ms`);
      } else {
        logger.error(`Failed to fetch from ${source.name}`, err);
      }

      return [];
    }
  }

  async fetch_all_sources(logger: Logger): Promise<RawServerData[]> {
    const all_data: RawServerData[] = [];
    const sources_success: string[] = [];
    const sources_failed: string[] = [];

    // Fetch from all sources in priority order
    for (const source of DATA_SOURCES) {
      const data = await this.fetch_from_source(source, logger);

      if (data.length > 0) {
        all_data.push(...data);
        sources_success.push(`${source.name} (${data.length})`);
      } else {
        sources_failed.push(source.name);
      }
    }

    logger.info(
      `Fetched total ${all_data.length} servers from ${sources_success.length} sources`
    );

    if (sources_failed.length > 0) {
      logger.warn(`Failed sources: ${sources_failed.join(", ")}`);
    }

    return {
      all_data,
      sources_success,
      sources_failed,
    };
  }
}

// ============================================================================
// DATA NORMALIZATION
// ============================================================================

class DataNormalizer {
  normalize_server(
    raw: RawServerData,
    logger: Logger,
    index: number
  ): NormalizedServer | null {
    try {
      // Extract fields
      const name = sanitize_string(
        raw.name || raw.server_name || "",
        MAX_SERVER_NAME_LENGTH
      );
      const ip = (raw.ip || raw.address || "").trim().toLowerCase();
      const port = parse_safe_number(raw.port || 7171, MIN_PORT, MAX_PORT);
      const version = sanitize_string(raw.version || raw.client_version || "unknown", 20);
      const world_type = normalize_world_type(raw.world_type || raw.pvp_type || "");
      const location = normalize_location(raw.location || raw.country || "");
      const website_url = is_valid_url(raw.website || raw.website_url)
        ? sanitize_string(raw.website || raw.website_url, 255)
        : null;
      const description = sanitize_string(raw.description || "", 500);

      // Validation checks
      if (!is_valid_server_name(name)) {
        logger.debug(`Server ${index}: Invalid name "${name}"`);
        return null;
      }

      if (!is_valid_ipv4(ip)) {
        logger.debug(`Server ${index}: Invalid IP "${ip}"`);
        return null;
      }

      if (!is_valid_version(version)) {
        logger.debug(`Server ${index}: Invalid version "${version}"`);
        return null;
      }

      // Parse numeric fields
      const players_online = parse_safe_number(raw.players_online || raw.online, 0, 10000);
      const players_peak = parse_safe_number(raw.players_peak || raw.peak, 0, 100000);
      const exp_rate = parse_safe_float(raw.exp_rate, 0.1, 1000);
      const skill_rate = parse_safe_float(raw.skill_rate, 0.1, 1000);
      const loot_rate = parse_safe_float(raw.loot_rate, 0.1, 1000);
      const uptime_percent = parse_safe_number(raw.uptime_percent, 0, 100);

      // Boolean fields
      const is_online = raw.is_online !== false && players_online > 0;
      const has_custom_map = raw.has_custom_map === true;
      const has_battleye = raw.has_battleye === true;

      const now = new Date().toISOString();
      const source_hash = generate_source_hash({
        name,
        ip,
        port,
        version,
        world_type,
        location,
        website_url,
        description,
        players_online,
        players_peak,
        exp_rate,
        skill_rate,
        loot_rate,
        is_online,
        uptime_percent,
        has_custom_map,
        has_battleye,
        last_check: now,
        updated_at: now,
        source_hash: "",
        client_type: null,
        pvp_type: null,
        map_name: null,
        server_type: null,
        is_premium_required: false,
        has_custom_sprites: false,
        has_store: false,
        owner_email: null,
        tags: [],
      } as NormalizedServer);

      return {
        name,
        ip,
        port,
        version,
        world_type,
        location,
        website_url,
        description,
        players_online,
        players_peak,
        exp_rate,
        skill_rate,
        loot_rate,
        is_online,
        uptime_percent,
        has_custom_map,
        has_battleye,
        last_check: now,
        updated_at: now,
        source_hash,
        client_type: null,
        pvp_type: null,
        map_name: null,
        server_type: null,
        is_premium_required: false,
        has_custom_sprites: false,
        has_store: false,
        owner_email: null,
        tags: [],
      };
    } catch (err) {
      logger.debug(`Server ${index}: Normalization error`, err);
      return null;
    }
  }
}

// ============================================================================
// DATABASE SYNC ENGINE
// ============================================================================

class DatabaseSync {
  async upsert_server(
    server: NormalizedServer,
    logger: Logger
  ): Promise<{ inserted: boolean; error?: string }> {
    try {
      // Check if server exists
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
          return { inserted: false, error: error.message };
        }

        return { inserted: false };
      } else {
        // Insert
        const { error } = await supabase.from("servers").insert([server]);

        if (error) {
          return { inserted: false, error: error.message };
        }

        return { inserted: true };
      }
    } catch (err) {
      return {
        inserted: false,
        error: err instanceof Error ? err.message : "Unknown error",
      };
    }
  }

  async batch_upsert(
    servers: NormalizedServer[],
    logger: Logger,
    duplicate_detector: DuplicateDetector
  ): Promise<{
    inserted: number;
    updated: number;
    duplicates: number;
    failed: number;
  }> {
    let inserted = 0;
    let updated = 0;
    let duplicates = 0;
    let failed = 0;

    // Process in batches with rate limiting
    for (let i = 0; i < servers.length; i += BATCH_SIZE) {
      const batch = servers.slice(i, i + BATCH_SIZE);

      for (const server of batch) {
        // Check for duplicates
        const dup_check = duplicate_detector.check_duplicate(server);

        if (dup_check.is_duplicate) {
          logger.debug(
            `Duplicate detected: ${server.name} (${server.ip}) - ${dup_check.conflict_type}`
          );
          duplicates++;
          continue;
        }

        // Upsert to database
        const result = await this.upsert_server(server, logger);

        if (result.error) {
          logger.warn(
            `Failed to upsert ${server.name} (${server.ip})`,
            result.error
          );
          failed++;
        } else if (result.inserted) {
          inserted++;
          duplicate_detector.add_server(server);
        } else {
          updated++;
          duplicate_detector.add_server(server);
        }
      }

      // Rate limiting: simple delay between batches
      await new Promise((resolve) =>
        setTimeout(resolve, (BATCH_SIZE / RATE_LIMIT_PER_SECOND) * 1000)
      );

      logger.info(`Processed ${Math.min(i + BATCH_SIZE, servers.length)}/${servers.length}`);
    }

    return { inserted, updated, duplicates, failed };
  }
}

// ============================================================================
// MAIN SYNC ORCHESTRATOR
// ============================================================================

class SyncOrchestrator {
  async execute(logger: Logger): Promise<SyncStats> {
    const start_time = Date.now();
    const stats: SyncStats = {
      total_fetched: 0,
      total_processed: 0,
      inserted: 0,
      updated: 0,
      duplicates_found: 0,
      failed: 0,
      validation_errors: 0,
      sources_success: [],
      sources_failed: [],
      execution_time_ms: 0,
    };

    try {
      logger.info("======== Starting Server Sync ========");

      // Initialize components
      const fetcher = new DataFetcher();
      const normalizer = new DataNormalizer();
      const db_sync = new DatabaseSync();
      const duplicate_detector = new DuplicateDetector();

      // Load existing servers for duplicate detection
      await duplicate_detector.load_existing_servers(logger);

      // Fetch from all sources
      const fetch_result = await fetcher.fetch_all_sources(logger);
      const raw_servers = fetch_result.all_data;
      stats.sources_success = fetch_result.sources_success;
      stats.sources_failed = fetch_result.sources_failed;
      stats.total_fetched = raw_servers.length;

      if (stats.total_fetched === 0) {
        throw new Error("No servers fetched from any source");
      }

      logger.info(`Normalizing ${stats.total_fetched} servers...`);

      // Normalize servers
      const normalized_servers: NormalizedServer[] = [];

      for (let i = 0; i < raw_servers.length; i++) {
        const normalized = normalizer.normalize_server(raw_servers[i], logger, i);

        if (normalized) {
          normalized_servers.push(normalized);
        } else {
          stats.validation_errors++;
        }
      }

      stats.total_processed = normalized_servers.length;
      logger.info(`Normalized ${stats.total_processed} servers (${stats.validation_errors} errors)`);

      // Batch upsert to database
      logger.info("Upserting servers to database...");
      const db_result = await db_sync.batch_upsert(
        normalized_servers,
        logger,
        duplicate_detector
      );

      stats.inserted = db_result.inserted;
      stats.updated = db_result.updated;
      stats.duplicates_found = db_result.duplicates;
      stats.failed = db_result.failed;

      stats.execution_time_ms = Date.now() - start_time;

      logger.info(`======== Sync Complete ========`);
      logger.info(`Execution time: ${stats.execution_time_ms}ms`);
      logger.info(
        `Results: ${stats.inserted} inserted, ${stats.updated} updated, ${stats.duplicates_found} duplicates, ${stats.failed} failed`
      );

      return stats;
    } catch (err) {
      stats.execution_time_ms = Date.now() - start_time;
      logger.error("Sync failed", err);
      throw err;
    }
  }
}

// ============================================================================
// HTTP SERVER HANDLER
// ============================================================================

serve(async (req) => {
  const logger = new Logger();

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

  // Security: Token verification
  const token = req.headers.get("x-sync-token");
  const expectedToken = Deno.env.get("SYNC_TOKEN");

  if (expectedToken && token !== expectedToken) {
    logger.error("Unauthorized sync request");
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Security: Method validation
  if (req.method !== "POST" && req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Execute sync
    const orchestrator = new SyncOrchestrator();
    const stats = await orchestrator.execute(logger);

    return new Response(
      JSON.stringify({
        success: true,
        timestamp: new Date().toISOString(),
        message: `Synced servers from ${stats.sources_success.length} sources`,
        stats,
        logs: logger.get_logs(),
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        status: 200,
      }
    );
  } catch (err) {
    logger.error("Sync failed", err);

    return new Response(
      JSON.stringify({
        success: false,
        timestamp: new Date().toISOString(),
        error: err instanceof Error ? err.message : "Unknown error",
        logs: logger.get_logs(),
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        status: 500,
      }
    );
  }
});
