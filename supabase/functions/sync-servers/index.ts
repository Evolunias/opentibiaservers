import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

/**
 * Fetch servers from multiple OTS list sources
 */
async function fetchFromOtsList() {
  const sources = [
    {
      url: "https://otservlist.world/api/servers",
      name: "OTServList World",
    },
    {
      url: "https://otchecker.net/api/servers",
      name: "OTChecker",
    },
  ];

  for (const source of sources) {
    try {
      console.log(`Fetching from ${source.name}...`);

      const response = await fetch(source.url, {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Accept": "application/json",
          "Accept-Language": "en-US,en;q=0.9",
        },
      });

      if (!response.ok) {
        console.warn(`${source.name} returned status ${response.status}`);
        continue;
      }

      const contentType = response.headers.get("content-type");
      let text = await response.text();

      // Check if response is HTML instead of JSON
      if (text.trim().startsWith("<")) {
        console.warn(`${source.name} returned HTML instead of JSON`);
        continue;
      }

      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.warn(`Failed to parse JSON from ${source.name}: ${err.message}`);
        continue;
      }

      let servers = Array.isArray(data) ? data : data.servers || data.data || [];

      if (servers && servers.length > 0) {
        console.log(`Successfully fetched ${servers.length} servers from ${source.name}`);
        return servers;
      }
    } catch (err) {
      console.warn(`Error fetching from ${source.name}:`, err.message);
    }
  }

  throw new Error("Could not fetch servers from any available source (OTServList World, OTChecker)");
}

/**
 * Map raw server data to our comprehensive schema
 */
function mapServerData(rawServer: any) {
  return {
    name: rawServer.name || rawServer.servername || "Unknown Server",
    ip: rawServer.ip || rawServer.ipaddress,
    port: parseInt(rawServer.port || rawServer.game_port || 7171) || 7171,
    website_url: rawServer.website || rawServer.website_url || null,
    owner_email: rawServer.owner_email || rawServer.ownerEmail || null,

    // Client & Versioning
    version: rawServer.version || rawServer.clientversion || rawServer.client || "8.6",
    client_type: rawServer.client_type || rawServer.clienttype || rawServer.client || null,

    // Gameplay Mechanics
    world_type: (
      rawServer.world_type ||
      rawServer.pvp ||
      rawServer.pvp_type ||
      "PVP"
    ).toUpperCase(),
    pvp_type: rawServer.pvp_type || rawServer.pvptype || null,
    map_name: rawServer.map_name || rawServer.mapname || rawServer.map || null,
    server_type: rawServer.server_type || rawServer.servertype || null,
    location: rawServer.location || rawServer.country || rawServer.region || null,

    // Detailed Rates
    exp_rate: parseFloat(rawServer.exp_rate || rawServer.experiencerate || rawServer.rate || 1),
    exp_stages: Boolean(rawServer.exp_stages || rawServer.experiencestages || false),
    skill_rate: parseFloat(rawServer.skill_rate || rawServer.skillrate || 1),
    magic_rate: parseFloat(rawServer.magic_rate || rawServer.magicrate || 1),
    loot_rate: parseFloat(rawServer.loot_rate || rawServer.lootrate || 1),
    spawn_rate: parseFloat(rawServer.spawn_rate || rawServer.spawnrate || 1),

    // Status & Performance Metrics (The "Upending" logic - automatically updates)
    is_online: Boolean(rawServer.is_online || rawServer.online || rawServer.status === "online"),
    players_online: parseInt(rawServer.players_online || rawServer.onlineplayers || rawServer.players || 0),
    players_peak: parseInt(rawServer.players_peak || rawServer.peakplayers || rawServer.peak || 0),
    uptime_percent: parseFloat(rawServer.uptime_percent || rawServer.uptime || 0),
    last_check: new Date().toISOString(),

    // Advanced Features
    has_custom_map: Boolean(rawServer.has_custom_map || rawServer.custommap || rawServer.custom_map),
    has_custom_sprites: Boolean(rawServer.has_custom_sprites || rawServer.customsprites || rawServer.custom_sprites),
    has_store: Boolean(rawServer.has_store || rawServer.store || rawServer.shop),
    is_premium_required: Boolean(rawServer.is_premium_required || rawServer.premiumpvp || rawServer.premium),
    has_battleye: Boolean(rawServer.has_battleye || rawServer.battleye || rawServer.bans),

    // Description & Tags
    description: rawServer.description || null,
    tags: Array.isArray(rawServer.tags) ? rawServer.tags : [],

    // Timestamps (updated_at managed by upsert)
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
          ignoreDuplicates: false, // Allow status/player updates
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

    // 1. Fetch from OTS list sources
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
