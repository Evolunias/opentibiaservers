-- Resource submissions (GitHub-first; VirusTotal required for binaries)
CREATE TABLE IF NOT EXISTS public.resource_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'rejected', 'needs_info')),
  category text NOT NULL
    CHECK (category IN ('engine', 'client', 'map', 'datapack', 'monsters', 'tool', 'other')),
  title text NOT NULL,
  summary text NOT NULL,
  github_url text NOT NULL,
  release_url text,
  license text NOT NULL,
  engine_compat text,
  client_compat text,
  preview_urls text[] NOT NULL DEFAULT '{}',
  has_binary boolean NOT NULL DEFAULT false,
  file_name text,
  file_version text,
  sha256 text,
  virustotal_url text,
  submitter_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  submitter_email text,
  submitter_name text,
  notes text,
  review_notes text
);

CREATE INDEX IF NOT EXISTS resource_submissions_status_idx
  ON public.resource_submissions(status, created_at DESC);
CREATE INDEX IF NOT EXISTS resource_submissions_github_idx
  ON public.resource_submissions(github_url);

ALTER TABLE public.resource_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Resource submissions public read approved" ON public.resource_submissions;
CREATE POLICY "Resource submissions public read approved"
  ON public.resource_submissions FOR SELECT
  USING (status = 'approved');

DROP POLICY IF EXISTS "Authenticated users can insert resource submissions" ON public.resource_submissions;
CREATE POLICY "Authenticated users can insert resource submissions"
  ON public.resource_submissions FOR INSERT TO authenticated
  WITH CHECK (true);

COMMENT ON TABLE public.resource_submissions IS
  'Community OT resource tips. GitHub/release preferred. Binaries require VirusTotal + SHA-256. No OTLand scrapes.';