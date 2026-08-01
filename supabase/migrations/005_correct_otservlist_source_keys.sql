-- Correct stale seeded otservlist identities that were imported before detail URLs
-- were treated as the canonical source key.

update public.servers
set
  source = 'otservlist.org',
  source_id = '1594733',
  source_url = 'https://otservlist.org/ots/1594733',
  host = 'play.aurera-global.com',
  ip = 'play.aurera-global.com',
  port = 7173,
  website_url = 'https://aurera-global.com/',
  external_launch_url = 'https://aurera-global.com/',
  version = '15.0',
  client_type = '15.0',
  exp_rate = 200,
  max_players = 2000,
  points = 279,
  unique_players = 849,
  source_owner_name = 'aurera-global',
  server_engine = 'Au2R Engine 1.1',
  canonical_path = '/servers/12-anos-online',
  updated_at = now()
where slug = '12-anos-online'
   or (lower(name) = '12 anos online' and (host = 'holiday.servegame.com' or ip = 'holiday.servegame.com'));
