import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

/**
 * Scrape server data from otservlist.org HTML
 */
async function fetchFromOtsList() {
  const url = "https://otservlist.org/";

  console.log("Fetching from otservlist.org...");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      "Accept-Encoding": "gzip, deflate",
      "Connection": "keep-alive",
      "Upgrade-Insecure-Requests": "1",
    },
  });

  if (!response.ok) {
    throw new Error(`otservlist.org returned status ${response.status}`);
  }

  const html = await response.text();
  console.log(`Fetched ${html.length} bytes of HTML`);
  console.log(`HTML preview (first 500 chars): ${html.substring(0, 500)}`);

  // Parse HTML - extract server rows
  const servers = [];

  // Strategy 1: Look for <tr> table rows
  let tableRegex = /<tr[^>]*>[\s\S]*?<\/tr>/gi;
  let rows = html.match(tableRegex) || [];

  console.log(`Strategy 1 (table rows): Found ${rows.length} rows`);

  // Strategy 2: If no rows, look for table data cells with server info
  if (rows.length === 0) {
    console.log("No table rows found, trying alternative parsing...");

    // Look for server name in common patterns
    const serverPatterns = [
      /<td[^>]*>([^<]+)<\/td>[\s\S]*?(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/gi,
      /<div[^>]*class="[^"]*server[^"]*"[^>]*>[\s\S]*?<\/div>/gi,
      /<li[^>]*>[\s\S]*?(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})[\s\S]*?<\/li>/gi,
    ];

    for (const pattern of serverPatterns) {
      rows = html.match(pattern) || [];
      if (rows.length > 0) {
        console.log(`Found ${rows.length} rows with pattern`);
        break;
      }
    }
  }

  // Extract IPs - these are consistent regardless of structure
  const ipRegex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g;
  const allIps = html.match(ipRegex) || [];
  console.log(`Found ${allIps.length} IP addresses in HTML`);

  // For each unique IP, extract associated data
  const seenIps = new Set();
  for (const ip of allIps) {
    // Avoid duplicates
    if (seenIps.has(ip)) continue;
    seenIps.add(ip);

    // Find context around this IP (500 chars before and after)
    const ipIndex = html.indexOf(ip);
    const start = Math.max(0, ipIndex - 500);
    const end = Math.min(html.length, ipIndex + 500);
    const context = html.substring(start, end);

    // Extract server name - usually before the IP
    const nameMatch = context.match(/(?:<a[^>]*>)?([^<>\n]{2,50}?)\s*(?:<\/a>)?(?:\s*<|$)/);
    const name = nameMatch ? nameMatch[1].trim() : `Server ${servers.length + 1}`;

    // Extract port
    const portMatch = context.match(/(?::|\s)(\d{4,5})(?:\s|<|$)/);
    const port = portMatch ? parseInt(portMatch[1]) : 7171;

    // Extract version
    const versionMatch = context.match(/(\d{1,2}\.\d{1,2})/);
    const version = versionMatch ? versionMatch[1] : "8.6";

    // Extract world type
    const worldMatch = context.match(/(PVP|Non-PVP|PVP-Enforced|RPG|WAR)/i);
    const worldType = worldMatch ? worldMatch[1].toUpperCase() : "PVP";

    // Extract location
    const locationMatch = context.match(/(USA|Europe|Germany|Brazil|Canada|Poland|Russia|Mexico|Other|UK|France|Spain|Asia|Australia)/i);
    const location = locationMatch ? locationMatch[0] : null;

    // Extract players online - look for numbers in context
    const playersMatch = context.match(/(\d{1,5})\s*(?:player|online)/i);
    const playersOnline = playersMatch ? Math.min(parseInt(playersMatch[1]), 9999) : 0;

    // Status - if we just found it, assume it's online
    const isOnline = true;

    servers.push({
      name,
      ip,
      port,
      version,
      world_type: worldType,
      location,
      is_online: isOnline,
      players_online: playersOnline,
      last_check: new Date().toISOString(),
    });
  }

  if (servers.length === 0) {
    console.error("HTML content sample:", html.substring(0, 2000));
    throw new Error(`No servers found in otservlist.org HTML. Found ${allIps.length} IPs but couldn't parse them.`);
  }

  console.log(`Successfully extracted ${servers.length} servers from otservlist.org`);
  return servers;
}

/**
 * Map raw server data to our comprehensive schema
 */
function mapServerData(rawServer: any) {
  return {
    name: rawServer.name || "Unknown Server",
    ip: rawServer.ip,
    port: parseInt(rawServer.port || 7171) || 7171,
    website_url: rawServer.website || null,
    owner_email: rawServer.owner_email || null,

    // Client & Versioning
    version: rawServer.version || "8.6",
    client_type: rawServer.client_type || null,

    // Gameplay Mechanics
    world_type: (rawServer.world_type || "PVP").toUpperCase(),
    pvp_type: rawServer.pvp_type || null,
    map_name: rawServer.map_name || null,
    server_type: rawServer.server_type || null,
    location: rawServer.location || null,

    // Detailed Rates
    exp_rate: parseFloat(rawServer.exp_rate || 1),
    exp_stages: Boolean(rawServer.exp_stages || false),
    skill_rate: parseFloat(rawServer.skill_rate || 1),
    magic_rate: parseFloat(rawServer.magic_rate || 1),
    loot_rate: parseFloat(rawServer.loot_rate || 1),
    spawn_rate: parseFloat(rawServer.spawn_rate || 1),

    // Status & Performance Metrics
    is_online: Boolean(rawServer.is_online),
    players_online: parseInt(rawServer.players_online || 0),
    players_peak: parseInt(rawServer.players_peak || 0),
    uptime_percent: parseFloat(rawServer.uptime_percent || 0),
    last_check: rawServer.last_check || new Date().toISOString(),

    // Advanced Features
    has_custom_map: Boolean(rawServer.has_custom_map || false),
    has_custom_sprites: Boolean(rawServer.has_custom_sprites || false),
    has_store: Boolean(rawServer.has_store || false),
    is_premium_required: Boolean(rawServer.is_premium_required || false),
    has_battleye: Boolean(rawServer.has_battleye || false),

    // Description & Tags
    description: rawServer.description || null,
    tags: Array.isArray(rawServer.tags) ? rawServer.tags : [],

    // Timestamps
    updated_at: new Date().toISOString(),
  };
}

/**
 * Upsert servers with duplicate detection and status updates
 */
async function upsertServers(servers: any[]) {
  if (!servers || servers.length === 0) {
    console.log("No servers to upsert");
    return { success: true, processed: 0, error: null };
  }

  const mappedServers = servers.map(mapServerData);

  // Batch upsert in groups of 10 to avoid timeouts
  const batchSize = 10;
  let totalProcessed = 0;
  let lastError = null;

  for (let i = 0; i < mappedServers.length; i += batchSize) {
    const batch = mappedServers.slice(i, i + batchSize);

    try {
      const { data, error } = await supabase
        .from("servers")
        .upsert(batch, {
          onConflict: "ip",
          ignoreDuplicates: false,
        });

      if (error) {
        console.error(`Batch ${i / batchSize + 1} error:`, error);
        lastError = error;
      } else {
        totalProcessed += batch.length;
      }
    } catch (err) {
      console.error(`Batch ${i / batchSize + 1} exception:`, err);
      lastError = err;
    }
  }

  return {
    success: !lastError,
    processed: totalProcessed,
    error: lastError ? lastError.message : null,
  };
}

/**
 * Mark servers as offline if they weren't checked recently
 */
async function markStaleServersOffline() {
  try {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();

    const { error } = await supabase
      .from("servers")
      .update({ is_online: false })
      .lt("last_check", fiveMinutesAgo)
      .eq("is_online", true);

    if (error) {
      console.warn("Error marking stale servers offline:", error);
    } else {
      console.log("Marked stale servers as offline");
    }
  } catch (err) {
    console.error("Exception marking stale servers offline:", err);
  }
}

/**
 * Main handler
 */
serve(async (req) => {
  try {
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

    // Token verification (optional)
    const token = req.headers.get("x-sync-token");
    const expectedToken = Deno.env.get("SYNC_TOKEN");

    if (expectedToken && token !== expectedToken) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("Starting server sync...");

    // 1. Fetch from otservlist.org
    const rawServers = await fetchFromOtsList();
    console.log(`Fetched ${rawServers.length} raw servers`);

    // 2. Upsert to database
    const upsertResult = await upsertServers(rawServers);
    console.log(`Upserted ${upsertResult.processed} servers`);

    // 3. Mark stale servers as offline
    await markStaleServersOffline();

    return new Response(
      JSON.stringify({
        success: true,
        timestamp: new Date().toISOString(),
        stats: {
          fetched: rawServers.length,
          processed: upsertResult.processed,
          errors: upsertResult.error ? 1 : 0,
        },
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
    console.error("Sync failed:", err);
    return new Response(
      JSON.stringify({
        success: false,
        timestamp: new Date().toISOString(),
        error: err.message,
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
