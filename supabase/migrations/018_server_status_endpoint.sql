-- Owner-hosted status endpoint for metrics-only player counts (no email harvesting)
ALTER TABLE public.servers
  ADD COLUMN IF NOT EXISTS status_endpoint_url text,
  ADD COLUMN IF NOT EXISTS status_endpoint_checked_at timestamptz,
  ADD COLUMN IF NOT EXISTS status_endpoint_error text;

COMMENT ON COLUMN public.servers.status_endpoint_url IS
  'Owner-hosted HTTPS JSON endpoint returning metrics only (players_online, players_peak, is_online). No scraping third-party DBs or emails.';