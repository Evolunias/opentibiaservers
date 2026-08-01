create table if not exists public.knowledge_sources (
  id uuid primary key default gen_random_uuid(),
  source_name text not null,
  source_url text not null unique,
  license text,
  retrieved_at timestamptz not null default now(),
  revision_id text,
  revision_timestamp timestamptz,
  source_hash text,
  attribution_text text,
  created_at timestamptz not null default now()
);

create table if not exists public.knowledge_entities (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  entity_type text not null,
  name text not null,
  canonical_path text not null unique,
  summary text,
  content_status text not null default 'partial',
  primary_source_id uuid references public.knowledge_sources(id) on delete set null,
  last_verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.knowledge_facts (
  id uuid primary key default gen_random_uuid(),
  entity_id uuid not null references public.knowledge_entities(id) on delete cascade,
  fact_key text not null,
  fact_value text not null,
  fact_unit text,
  source_id uuid references public.knowledge_sources(id) on delete set null,
  confidence numeric(4,3) not null default 0.75,
  verified_at timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  unique (entity_id, fact_key, fact_value)
);

create table if not exists public.knowledge_relationships (
  id uuid primary key default gen_random_uuid(),
  from_entity_id uuid not null references public.knowledge_entities(id) on delete cascade,
  to_entity_id uuid not null references public.knowledge_entities(id) on delete cascade,
  relationship_type text not null,
  source_id uuid references public.knowledge_sources(id) on delete set null,
  created_at timestamptz not null default now(),
  unique (from_entity_id, to_entity_id, relationship_type)
);

create table if not exists public.knowledge_page_audits (
  id uuid primary key default gen_random_uuid(),
  entity_id uuid not null references public.knowledge_entities(id) on delete cascade,
  audit_status text not null,
  missing_fields text[] not null default '{}',
  conflicts jsonb not null default '[]'::jsonb,
  checked_at timestamptz not null default now()
);

create index if not exists knowledge_entities_type_idx on public.knowledge_entities (entity_type);
create index if not exists knowledge_entities_status_idx on public.knowledge_entities (content_status);
create index if not exists knowledge_facts_entity_key_idx on public.knowledge_facts (entity_id, fact_key);
create index if not exists knowledge_relationships_from_idx on public.knowledge_relationships (from_entity_id);
create index if not exists knowledge_relationships_to_idx on public.knowledge_relationships (to_entity_id);

alter table public.knowledge_sources enable row level security;
alter table public.knowledge_entities enable row level security;
alter table public.knowledge_facts enable row level security;
alter table public.knowledge_relationships enable row level security;
alter table public.knowledge_page_audits enable row level security;

drop policy if exists "Public can read knowledge sources" on public.knowledge_sources;
create policy "Public can read knowledge sources" on public.knowledge_sources
  for select using (true);

drop policy if exists "Public can read knowledge entities" on public.knowledge_entities;
create policy "Public can read knowledge entities" on public.knowledge_entities
  for select using (true);

drop policy if exists "Public can read knowledge facts" on public.knowledge_facts;
create policy "Public can read knowledge facts" on public.knowledge_facts
  for select using (true);

drop policy if exists "Public can read knowledge relationships" on public.knowledge_relationships;
create policy "Public can read knowledge relationships" on public.knowledge_relationships
  for select using (true);

drop policy if exists "Public can read knowledge audits" on public.knowledge_page_audits;
create policy "Public can read knowledge audits" on public.knowledge_page_audits
  for select using (true);

drop policy if exists "Service role can manage knowledge sources" on public.knowledge_sources;
create policy "Service role can manage knowledge sources" on public.knowledge_sources
  for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');

drop policy if exists "Service role can manage knowledge entities" on public.knowledge_entities;
create policy "Service role can manage knowledge entities" on public.knowledge_entities
  for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');

drop policy if exists "Service role can manage knowledge facts" on public.knowledge_facts;
create policy "Service role can manage knowledge facts" on public.knowledge_facts
  for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');

drop policy if exists "Service role can manage knowledge relationships" on public.knowledge_relationships;
create policy "Service role can manage knowledge relationships" on public.knowledge_relationships
  for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');

drop policy if exists "Service role can manage knowledge audits" on public.knowledge_page_audits;
create policy "Service role can manage knowledge audits" on public.knowledge_page_audits
  for all using (auth.role() = 'service_role') with check (auth.role() = 'service_role');
