import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

/**
 * Parse server data from otservlist.org API response
 */
function parseServerData(serverData: any) {
  return {
    name: serverData.name || serverData.servername || "Unknown",
    ip: serverData.ip || serverData.ipaddress,
    port: parseInt(serverData.port) || 7171,
    website_url: serverData.website || serverData.website_url || null,
    owner_email: serverData.owner_email || serverData.ownerEmail || null,
    version: serverData.version || serverData.clientversion || "8.6",
    client_type: serverData.client_type || serverData.clienttype || null,
    world_type: serverData.world_type || serverData.pvp || "PVP",
    pvp_type: serverData.pvp_type || serverData.pvptype || null,
    map_name: serverData.map_name || serverData.mapname || null,
    server_type: serverData.server_type || serverData.servertype || null,
    location: serverData.location || serverData.country || null,
    exp_rate: parseFloat(serverData.exp_rate || serverData.experiencerate || 1),
    exp_stages: Boolean(serverData.exp_stages || serverData.experiencestages),
    skill_rate: parseFloat(serverData.skill_rate || serverData.skillrate || 1),
    magic_rate: parseFloat(serverData.magic_rate || serverData.magicrate || 1),
    loot_rate: parseFloat(serverData.loot_rate || serverData.lootrate || 1),
    spawn_rate: parseFloat(serverData.spawn_rate || serverData.spawnrate || 1),
    is_online: Boolean(serverData.is_online || serverData.online),
    players_online: parseInt(
      serverData.players_online || serverData.onlineplayers || 0
    ),
    players_peak: parseInt(serverData.players_peak || serverData.peakplayers || 0),
    uptime_percent: parseFloat(
      serverData.uptime_percent || serverData.uptime || 0
    ),
    has_custom_map: Boolean(serverData.has_custom_map || serverData.custommap),
    has_custom_sprites: Boolean(
      serverData.has_custom_sprites || serverData.customsprites
    ),
    has_store: Boolean(serverData.has_store || serverData.store),
    is_premium_required: Boolean(
      serverData.is_premium_required || serverData.premiumpvp
    ),
    has_battleye: Boolean(serverData.has_battleye || serverData.battleye),
    description: serverData.description || null,
    tags: serverData.tags || [],
    last_check: new Date().toISOString(),
  };
}

/**
 * Fetch all servers from available OTS list APIs
 * Tries multiple sources with fallbacks
 */
async function fetchFromOtservlist() {
  // List of OTS list APIs to try, in order of preference
  const apiEndpoints = [
    {
      url: "https://otchecker.net/api/servers",
      name: "OTChecker",
      parser: (data: any) => {
        if (Array.isArray(data)) return data;
        if (data.servers) return data.servers;
        if (data.data) return data.data;
        return [];
      },
    },
    {
      url: "https://otservlist.world/api/servers",
      name: "OTServList World",
      parser: (data: any) => {
        if (Array.isArray(data)) return data;
        if (data.servers) return data.servers;
        if (data.data) return data.data;
        return [];
      },
    },
    {
      url: "https://tibiadata.com/api/v3/worlds",
      name: "TibiaData API",
      parser: (data: any) => {
        // TibiaData returns official Tibia worlds, not OTS
        if (data.worlds) return data.worlds;
        return [];
      },
    },
  ];

  let servers = [];
  let lastError = null;

  // Try each endpoint
  for (const endpoint of apiEndpoints) {
    try {
      console.log(`Attempting to fetch from ${endpoint.name}...`);
      const response = await fetch(endpoint.url, {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        servers = endpoint.parser(data);

        if (servers.length > 0) {
          console.log(
            `Successfully fetched from ${endpoint.name}: ${servers.length} servers`
          );
          return servers;
        }
      }
    } catch (err) {
      lastError = err;
      console.warn(`Failed to fetch from ${endpoint.name}:`, err.message);
    }
  }

  // If all endpoints fail, throw error with helpful message
  if (servers.length === 0) {
    throw new Error(
      `Could not fetch servers from any source. Last error: ${lastError?.message}. ` +
        `Tried: OTChecker, OTServList World, TibiaData. ` +
        `Note: Consider setting up a cron job to monitor specific servers or use a different data source.`
    );
  }

  return servers;
}

/**
 * Upsert servers into Supabase
 */
async function upsertServers(servers: any[]) {
  if (!servers || servers.length === 0) {
    console.log("No servers to upsert");
    return { inserted: 0, updated: 0, errors: 0 };
  }

  const parsedServers = servers.map(parseServerData);
  const stats = { inserted: 0, updated: 0, errors: 0 };

  // Upsert in batches to avoid timeout
  const batchSize = 10;
  for (let i = 0; i < parsedServers.length; i += batchSize) {
    const batch = parsedServers.slice(i, i + batchSize);

    try {
      const { data, error } = await supabase
        .from("servers")
        .upsert(batch, { onConflict: "ip" });

      if (error) {
        console.error(`Batch ${i / batchSize + 1} error:`, error);
        stats.errors += batch.length;
      } else {
        stats.updated += batch.length;
      }
    } catch (err) {
      console.error(`Batch ${i / batchSize + 1} exception:`, err);
      stats.errors += batch.length;
    }
  }

  return stats;
}

/**
 * Mark servers as offline if they weren't in the latest fetch
 */
async function markStaleServersOffline() {
  try {
    const fiveMinutesAgo = new Date(
      Date.now() - 5 * 60 * 1000
    ).toISOString();

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
 * Main sync function
 */
async function syncServers() {
  try {
    console.log("Starting server sync at", new Date().toISOString());

    // Fetch servers from otservlist.org
    const servers = await fetchFromOtservlist();
    console.log(`Fetched ${servers.length} servers from otservlist.org`);

    // Upsert into database
    const stats = await upsertServers(servers);
    console.log("Upsert stats:", stats);

    // Mark servers that weren't in this fetch as offline
    await markStaleServersOffline();

    return {
      success: true,
      timestamp: new Date().toISOString(),
      stats,
    };
  } catch (error) {
    console.error("Sync failed:", error);
    return {
      success: false,
      timestamp: new Date().toISOString(),
      error: error.message,
    };
  }
}

Deno.serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, x-sync-token",
      },
    });
  }

  // Verify token if provided
  const token = req.headers.get("x-sync-token");
  const expectedToken = Deno.env.get("SYNC_TOKEN");

  if (expectedToken && token !== expectedToken) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const result = await syncServers();
    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Sync failed",
        message: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
});
