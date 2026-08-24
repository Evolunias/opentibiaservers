-- Canonicalize the directory by the registered/root domain while preserving
-- source rows and their historical slugs for redirects and attribution.

ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS legacy_name text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS legacy_slug text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS root_domain text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS canonical_slug text;

CREATE TABLE IF NOT EXISTS public.server_slug_aliases (
  legacy_slug text PRIMARY KEY,
  canonical_slug text NOT NULL,
  server_id uuid REFERENCES public.servers(id) ON DELETE CASCADE,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS servers_canonical_slug_idx ON public.servers(canonical_slug);
CREATE INDEX IF NOT EXISTS servers_root_domain_idx ON public.servers(root_domain);
CREATE INDEX IF NOT EXISTS server_slug_aliases_canonical_idx ON public.server_slug_aliases(canonical_slug);

CREATE OR REPLACE FUNCTION public.server_clean_hostname(raw_value text)
RETURNS text
LANGUAGE sql
IMMUTABLE
AS $$
  SELECT NULLIF(
    regexp_replace(
      split_part(
        split_part(
          regexp_replace(lower(trim(coalesce(raw_value, ''))), '^https?://', ''),
          '/', 1
        ),
        ':', 1
      ),
      '^www\.', ''
    ),
    ''
  );
$$;

CREATE OR REPLACE FUNCTION public.server_root_domain(raw_value text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE
AS $$
DECLARE
  hostname text := public.server_clean_hostname(raw_value);
  labels text[];
  suffix text;
BEGIN
  IF hostname IS NULL THEN RETURN NULL; END IF;
  IF hostname ~ '^\d{1,3}(\.\d{1,3}){3}$' THEN RETURN hostname; END IF;
  labels := string_to_array(hostname, '.');
  IF array_length(labels, 1) < 2 THEN RETURN hostname; END IF;
  suffix := labels[array_length(labels, 1) - 1] || '.' || labels[array_length(labels, 1)];
  IF suffix = ANY (ARRAY[
    'com.br','net.br','org.br','com.mx','com.pl','net.pl','org.pl','co.uk','org.uk','me.uk',
    'com.au','net.au','org.au','com.tr','com.ar','com.co','com.pe','com.ve','com.ec','com.uy',
    'co.nz','co.za','co.kr','co.jp','com.cn','com.tw','com.sg','com.my','com.ph','co.id','co.in',
    'ddns.net','hopto.org','myddns.me','no-ip.org','servegame.com','sytes.net','wotserver.com',
    'servegame.org','zapto.org','duckdns.org','dynv6.net','myftp.org','no-ip.com','ddnsfree.com'
  ]) AND array_length(labels, 1) >= 3 THEN
    RETURN labels[array_length(labels, 1) - 2] || '.' || suffix;
  END IF;
  RETURN suffix;
END;
$$;

CREATE OR REPLACE FUNCTION public.server_canonical_slug(raw_value text)
RETURNS text
LANGUAGE sql
IMMUTABLE
AS $$
  SELECT CASE
    WHEN public.server_clean_hostname(raw_value) ~ '^\d{1,3}(\.\d{1,3}){3}$' THEN ''
    ELSE trim(both '-' from regexp_replace(
      split_part(coalesce(public.server_root_domain(raw_value), ''), '.', 1),
      '[^a-z0-9]+', '-', 'g'
    ))
  END;
$$;

CREATE OR REPLACE FUNCTION public.server_canonical_name(raw_value text, fallback_name text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE
AS $$
DECLARE
  slug text := public.server_canonical_slug(raw_value);
BEGIN
  IF slug IS NULL OR slug = '' OR public.server_clean_hostname(raw_value) ~ '^\d{1,3}(\.\d{1,3}){3}$' THEN
    RETURN fallback_name;
  END IF;
  RETURN CASE slug
    WHEN 'rubinot' THEN 'RubinOT'
    WHEN 'oxygenot' THEN 'OxygenOT'
    WHEN 'koliseuot' THEN 'KoliseuOT'
    WHEN 'otmadness' THEN 'OTMadness'
    WHEN 'noxiousot' THEN 'NoxiousOT'
    WHEN 'pbotwars' THEN 'PBotWars'
    ELSE initcap(replace(slug, '-', ' '))
  END;
END;
$$;

CREATE OR REPLACE FUNCTION public.apply_server_canonical_identity()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  identity_host text;
BEGIN
  identity_host := coalesce(
    CASE WHEN public.server_clean_hostname(NEW.host) !~ '^\d{1,3}(\.\d{1,3}){3}$' THEN NEW.host END,
    CASE WHEN public.server_clean_hostname(NEW.ip) !~ '^\d{1,3}(\.\d{1,3}){3}$' THEN NEW.ip END,
    NEW.website_url,
    NEW.external_launch_url,
    NEW.host,
    NEW.ip
  );
  NEW.legacy_name := coalesce(NEW.legacy_name, NEW.name);
  NEW.legacy_slug := coalesce(NEW.legacy_slug, NEW.slug);
  NEW.root_domain := public.server_root_domain(identity_host);
  NEW.canonical_slug := coalesce(nullif(public.server_canonical_slug(identity_host), ''), NEW.slug);
  NEW.name := public.server_canonical_name(identity_host, NEW.name);
  NEW.canonical_path := '/servers/' || NEW.canonical_slug;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS servers_apply_canonical_identity ON public.servers;
CREATE TRIGGER servers_apply_canonical_identity
BEFORE INSERT OR UPDATE OF name, slug, host, ip, website_url, external_launch_url
ON public.servers
FOR EACH ROW EXECUTE FUNCTION public.apply_server_canonical_identity();

INSERT INTO public.server_slug_aliases (legacy_slug, canonical_slug, server_id)
SELECT slug, coalesce(nullif(public.server_canonical_slug(
  coalesce(
    CASE WHEN public.server_clean_hostname(host) !~ '^\d{1,3}(\.\d{1,3}){3}$' THEN host END,
    CASE WHEN public.server_clean_hostname(ip) !~ '^\d{1,3}(\.\d{1,3}){3}$' THEN ip END,
    website_url, external_launch_url, host, ip
  )
), ''), slug), id
FROM public.servers
WHERE slug IS NOT NULL
ON CONFLICT (legacy_slug) DO UPDATE
SET canonical_slug = EXCLUDED.canonical_slug,
    server_id = EXCLUDED.server_id;

UPDATE public.servers SET name = name;
