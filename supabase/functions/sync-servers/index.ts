import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

/**
 * Fetch servers from otservlist.world API
 */
async function fetchFromOtservlist(): Promise<any[]> {
  try {
    console.log("Fetching servers from otservlist.world...");
    const response = await fetch("https://otservlist.world/api/servers");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    console.log(`Fetched ${data.length || 0} servers from otservlist.world`);
    return data || [];
  } catch (err) {
    console.error("Failed to fetch from otservlist.world:", err.message);
    return [];
  }
}

/**
 * Normalize server data from API response
 */
function normalizeServer(server: any) {
  return {
    name: server.name || server.server_name || "Unknown Server",
    ip: server.ip || server.address || "",
    port: server.port || 7171,
    version: server.version || server.client_version || "unknown",
    world_type: server.world_type || server.pvp_type || "PVP",
    location: server.location || server.country || "Unknown",
    website_url: server.website || server.website_url || null,
    description: server.description || "",
    players_online: parseInt(server.players_online || server.online || 0),
    players_peak: parseInt(server.players_peak || server.peak || 0),
    exp_rate: parseFloat(server.exp_rate || 1),
    skill_rate: parseFloat(server.skill_rate || 1),
    loot_rate: parseFloat(server.loot_rate || 1),
    is_online: server.is_online !== false,
    uptime_percent: parseInt(server.uptime_percent || 100),
    has_custom_map: server.has_custom_map === true,
    has_battleye: server.has_battleye === true,
    last_check: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}

/**
 * Main handler - syncs live data from API every 15 minutes
 */
serve(async (req) => {
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

  try {
    console.log("Starting server sync...");

    // Fetch fresh data from API
    let servers = await fetchFromOtservlist();

    if (servers.length === 0) {
      throw new Error("No servers found from API");
    }

    console.log(`Processing ${servers.length} servers...`);

    // Normalize all servers
    const serversToProcess = servers.map(normalizeServer).filter((s) => s.ip);

    const batchSize = 25;
    let inserted = 0;
    let updated = 0;
    let failed = 0;

    for (let i = 0; i < serversToProcess.length; i += batchSize) {
      const batch = serversToProcess.slice(i, i + batchSize);

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

            if (!error) {
              updated++;
            } else {
              failed++;
              console.error(`Failed to update ${server.name}:`, error.message);
            }
          } else {
            // Insert new server
            const { error } = await supabase
              .from("servers")
              .insert([
                {
                  ...server,
                  client_type: null,
                  pvp_type: null,
                  map_name: null,
                  server_type: null,
                  is_premium_required: false,
                  has_custom_sprites: false,
                  has_store: false,
                  owner_email: null,
                  tags: [],
                },
              ]);

            if (!error) {
              inserted++;
            } else {
              failed++;
              console.error(`Failed to insert ${server.name}:`, error.message);
            }
          }
        } catch (err) {
          console.error(`Error processing ${server.name}:`, err.message);
          failed++;
        }
      }

      console.log(
        `Progress: ${Math.min(i + batchSize, serversToProcess.length)}/${
          serversToProcess.length
        } processed`
      );
    }

    const message = `Synced ${serversToProcess.length} servers: ${inserted} inserted, ${updated} updated, ${failed} failed`;
    console.log(message);

    return new Response(
      JSON.stringify({
        success: true,
        timestamp: new Date().toISOString(),
        message,
        stats: {
          total: serversToProcess.length,
          inserted,
          updated,
          failed,
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
