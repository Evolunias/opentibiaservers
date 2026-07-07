-- Base server directory table
CREATE TABLE IF NOT EXISTS public.servers (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  ip text NOT NULL,
  port integer DEFAULT 7171,
  website_url text,
  owner_email text,
  version text NOT NULL DEFAULT 'n/a',
  client_type text,
  world_type text DEFAULT 'PVP',
  pvp_type text,
  map_name text,
  server_type text,
  location text,
  exp_rate numeric,
  exp_stages boolean DEFAULT false,
  skill_rate numeric,
  magic_rate numeric,
  loot_rate numeric,
  spawn_rate numeric DEFAULT 1,
  is_online boolean DEFAULT false,
  players_online integer DEFAULT 0,
  players_peak integer DEFAULT 0,
  uptime_percent numeric(5, 2),
  last_check timestamp with time zone DEFAULT now(),
  has_custom_map boolean DEFAULT false,
  has_custom_sprites boolean DEFAULT false,
  has_store boolean DEFAULT false,
  is_premium_required boolean DEFAULT false,
  has_battleye boolean DEFAULT false,
  description text,
  tags text[],
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT servers_pkey PRIMARY KEY (id),
  CONSTRAINT servers_ip_key UNIQUE (ip)
);

-- Create user_profiles table for additional user metadata
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id uuid NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE,
  avatar_url text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Add user_id and verification fields to servers table
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS verification_status text DEFAULT 'unverified' CHECK (verification_status IN ('unverified', 'pending', 'verified', 'failed'));
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS verification_dns_checked boolean DEFAULT false;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS verification_ip_checked boolean DEFAULT false;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS verification_error text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS verified_at timestamp with time zone;

-- Enable RLS on user_profiles
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Policies for user_profiles
CREATE POLICY "Users can view any profile" ON public.user_profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.user_profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.user_profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Update RLS on servers table to allow users to insert their own servers
ALTER TABLE public.servers ENABLE ROW LEVEL SECURITY;

-- Create policies for servers table
DROP POLICY IF EXISTS "Enable read access for all users" ON public.servers;
DROP POLICY IF EXISTS "Users can insert servers" ON public.servers;
DROP POLICY IF EXISTS "Users can update own servers" ON public.servers;

CREATE POLICY "Enable read access for all users" ON public.servers FOR SELECT USING (true);
CREATE POLICY "Users can insert servers" ON public.servers FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Users can update own servers" ON public.servers FOR UPDATE USING (auth.uid() = user_id OR user_id IS NULL);

-- Create index for user_id for faster queries
CREATE INDEX IF NOT EXISTS servers_user_id_idx ON public.servers(user_id);
CREATE INDEX IF NOT EXISTS servers_verification_status_idx ON public.servers(verification_status);
