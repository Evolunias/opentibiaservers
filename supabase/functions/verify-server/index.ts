import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.105.1';

const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

interface VerificationResult {
  serverId: string;
  dnsVerified: boolean;
  ipVerified: boolean;
  overallStatus: 'verified' | 'failed' | 'pending';
  error?: string;
}

async function verifyDNS(domain: string, ip: string): Promise<boolean> {
  try {
    if (!domain) return false;

    const url = new URL(domain);
    const hostname = url.hostname;

    const response = await fetch(`https://dns.google/resolve?name=${hostname}&type=A`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) return false;

    const data = await response.json() as any;

    if (data.Answer) {
      const dnsIp = data.Answer.find((a: any) => a.type === 1)?.data;
      return dnsIp === ip;
    }

    return false;
  } catch (error) {
    console.error('DNS verification error:', error);
    return false;
  }
}

async function verifyIP(ip: string, port: number): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(`http://${ip}:${port}`, {
        method: 'HEAD',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      return response.ok || response.status === 301 || response.status === 302;
    } catch (err) {
      clearTimeout(timeoutId);

      const sokcet = await Deno.connect({ hostname: ip, port, transport: 'tcp' });
      sokcet.close();
      return true;
    }
  } catch (error) {
    console.error('IP verification error:', error);
    return false;
  }
}

async function verifyServer(serverId: string): Promise<VerificationResult> {
  try {
    const { data: server, error: fetchError } = await supabase
      .from('servers')
      .select('*')
      .eq('id', serverId)
      .single();

    if (fetchError || !server) {
      return {
        serverId,
        dnsVerified: false,
        ipVerified: false,
        overallStatus: 'failed',
        error: 'Server not found',
      };
    }

    let dnsVerified = false;
    let ipVerified = false;
    let error: string | undefined;

    if (server.website_url) {
      dnsVerified = await verifyDNS(server.website_url, server.ip);
    }

    ipVerified = await verifyIP(server.ip, server.port || 7171);

    const overallStatus = ipVerified ? 'verified' : 'failed';

    const { error: updateError } = await supabase
      .from('servers')
      .update({
        verification_status: overallStatus,
        verification_dns_checked: true,
        verification_ip_checked: true,
        verification_error: !ipVerified ? 'IP:port not reachable' : null,
        verified_at: ipVerified ? new Date().toISOString() : null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', serverId);

    if (updateError) {
      error = updateError.message;
    }

    return {
      serverId,
      dnsVerified,
      ipVerified,
      overallStatus,
      error,
    };
  } catch (error) {
    console.error('Verification error:', error);
    return {
      serverId,
      dnsVerified: false,
      ipVerified: false,
      overallStatus: 'failed',
      error: String(error),
    };
  }
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { serverId } = await req.json();

    if (!serverId) {
      return new Response(
        JSON.stringify({ error: 'serverId is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = await verifyServer(serverId);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: String(error) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});
