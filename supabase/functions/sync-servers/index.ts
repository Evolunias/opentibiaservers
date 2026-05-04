import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

/**
 * Check if a server is online by attempting a TCP/UDP connection
 * This is a basic check - we try to connect to the server's port
 */
async function checkServerOnline(ip: string, port: number): Promise<boolean> {
  try {
    // Timeout after 3 seconds
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    const response = await fetch(`http://${ip}:${port}`, {
      signal: controller.signal,
      method: "GET",
    });

    clearTimeout(timeout);
    return response.ok || response.status === 0;
  } catch (err) {
    // Server is offline or unreachable
    return false;
  }
}

/**
 * Update all servers' online status
 */
async function syncServersStatus() {
  console.log("Fetching all servers from database...");

  const { data: servers, error } = await supabase
    .from("servers")
    .select("id, ip, port")
    .limit(500); // Limit to avoid timeout

  if (error) {
    throw new Error(`Failed to fetch servers: ${error.message}`);
  }

  if (!servers || servers.length === 0) {
    console.log("No servers in database to check");
    return { checked: 0, online: 0, offline: 0 };
  }

  console.log(`Checking ${servers.length} servers...`);

  let onlineCount = 0;
  let offlineCount = 0;
  const updates = [];

  // Check servers in parallel batches (10 at a time)
  const batchSize = 10;
  for (let i = 0; i < servers.length; i += batchSize) {
    const batch = servers.slice(i, i + batchSize);

    const checks = await Promise.all(
      batch.map(async (server) => ({
        id: server.id,
        ip: server.ip,
        port: server.port,
        isOnline: await checkServerOnline(server.ip, server.port),
      }))
    );

    for (const check of checks) {
      if (check.isOnline) {
        onlineCount++;
      } else {
        offlineCount++;
      }

      updates.push({
        id: check.id,
        is_online: check.isOnline,
        last_check: new Date().toISOString(),
      });
    }

    console.log(`Checked ${Math.min(i + batchSize, servers.length)}/${servers.length} servers`);
  }

  // Batch update results
  console.log(`Updating ${updates.length} servers...`);
  const updateBatchSize = 20;
  for (let i = 0; i < updates.length; i += updateBatchSize) {
    const batch = updates.slice(i, i + updateBatchSize);

    for (const update of batch) {
      await supabase
        .from("servers")
        .update({
          is_online: update.is_online,
          last_check: update.last_check,
        })
        .eq("id", update.id);
    }
  }

  return {
    checked: servers.length,
    online: onlineCount,
    offline: offlineCount,
  };
}

/**
 * Main handler
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
    console.log("Starting server health check sync...");

    const stats = await syncServersStatus();

    return new Response(
      JSON.stringify({
        success: true,
        timestamp: new Date().toISOString(),
        message: "Server health check completed",
        stats,
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
