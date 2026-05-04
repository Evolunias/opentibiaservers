-- Create sync_logs table to track scheduled sync history
create table if not exists public.sync_logs (
  id uuid not null default gen_random_uuid (),
  timestamp timestamp with time zone not null,
  success boolean not null,
  fetched integer null,
  inserted integer null,
  updated integer null,
  failed integer null,
  error text null,
  execution_time_ms integer null,
  created_at timestamp with time zone not null default now(),
  constraint sync_logs_pkey primary key (id)
) tablespace pg_default;

-- Index for quick lookups of recent syncs
create index if not exists sync_logs_timestamp_idx on public.sync_logs (timestamp desc);

-- Enable RLS
alter table public.sync_logs enable row level security;

-- Policy: Service role can write
create policy "Service role can manage sync logs" on public.sync_logs
  as permissive
  for all
  using (true)
  with check (true);
