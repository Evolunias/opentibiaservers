-- =============================================================================
-- 014_email_subscribers.sql
-- OpenTibiaServers: email capture / newsletter subscribers (idempotent)
-- Safe to re-run in Supabase SQL Editor.
-- =============================================================================

CREATE TABLE IF NOT EXISTS public.email_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text,
  source text NOT NULL DEFAULT 'popup', -- popup | registration | submit_server | other
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  resend_contact_id text,
  resend_audience_id text,
  status text NOT NULL DEFAULT 'subscribed' CHECK (status IN ('subscribed','unsubscribed','bounced')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS email_subscribers_email_uidx
  ON public.email_subscribers (lower(email));

-- RLS: no public read; allow insert via service role only (API uses service role).
-- Optionally enable RLS with no anon policies.
ALTER TABLE public.email_subscribers ENABLE ROW LEVEL SECURITY;
-- service role bypasses RLS; do not create anon insert policies.
