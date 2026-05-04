import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

/**
 * Validate server submission
 */
function validateServer(server: any) {
  const errors = [];

  if (!server.ip || !/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(server.ip)) {
    errors.push("Invalid IP address");
  }

  if (!server.name || server.name.length < 2) {
    errors.push("Server name required (min 2 characters)");
  }

  if (!server.port || server.port < 1 || server.port > 65535) {
    errors.push("Invalid port");
  }

  return errors;
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
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Only POST allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();

    // Validate required fields
    const errors = validateServer(body);
    if (errors.length > 0) {
      return new Response(JSON.stringify({ errors }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check if server already exists
    const { data: existing } = await supabase
      .from("servers")
      .select("id")
      .eq("ip", body.ip)
      .single();

    if (existing) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Server with this IP already exists",
          serverId: existing.id,
        }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Insert new server
    const { data, error } = await supabase
      .from("servers")
      .insert([
        {
          name: body.name.substring(0, 100),
          ip: body.ip,
          port: parseInt(body.port) || 7171,
          version: body.version || "8.6",
          world_type: (body.world_type || "PVP").toUpperCase(),
          location: body.location || null,
          website_url: body.website_url || null,
          owner_email: body.owner_email || null,
          description: body.description || null,
          is_online: true,
          players_online: 0,
          last_check: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error("Insert error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to add server", details: error.message }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Server added successfully",
        server: data[0],
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({
        error: "Invalid request",
        message: err.message,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
});
