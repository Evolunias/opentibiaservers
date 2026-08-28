import fs from 'node:fs';
import path from 'node:path';
import { collapseCanonicalServers } from '../lib/server-identity.js';
import { rankcommunity_archiveCandidates, selectcommunity_archiveCandidate } from '../lib/community_archive-source-candidate.js';

const repoRoot = process.cwd();
const sourcePath = path.join(repoRoot, 'data', 'discovered-community_archive-server-sources.json');
const inventoryPath = path.join(repoRoot, 'data', 'live-server-inventory.json');
const source = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
const serverBySlug = new Map(collapseCanonicalServers(inventory.servers || []).map((server) => [server.slug, server]));

const before = (source.records || []).filter((record) => record.selected_url).length;
const baselineArgument = process.argv.find((argument) => argument.startsWith('--baseline='));
const baseline = Number(baselineArgument?.split('=')[1] || source.qa?.initial_selected_records || before);
let rejectedCandidates = 0;
let rejectedRecords = 0;

const records = (source.records || []).map((record) => {
  const server = serverBySlug.get(record.canonical_slug) || {
    name: record.server_name,
    root_domain: record.root_domain,
  };
  const candidates = rankcommunity_archiveCandidates(record.candidates || [], server, 5);
  const selected = selectcommunity_archiveCandidate(candidates);
  rejectedCandidates += candidates.filter((candidate) => !candidate.accepted).length;
  if (!selected && candidates.length) rejectedRecords += 1;
  return {
    ...record,
    selection_policy: 'exact canonical brand plus owner-launch/profile evidence or explicit player-experience evidence; development, support, trade, and ambiguous matches are retained only as rejected provenance',
    candidates,
    selected_url: selected?.url || null,
    selected_title: selected?.title || null,
    selected_snippet: selected?.snippet || null,
    selected_role: selected?.role || null,
  };
});

const after = records.filter((record) => record.selected_url).length;
const output = {
  ...source,
  rescored_at: new Date().toISOString(),
  qa: {
    policy_version: 'conservative-v1',
    initial_selected_records: baseline,
    accepted_after_qa: after,
    removed_by_qa: Math.max(0, baseline - after),
    rejected_candidate_records: rejectedRecords,
    rejected_candidates: rejectedCandidates,
  },
  records,
  stats: {
    ...(source.stats || {}),
    with_candidate: after,
    rejected_candidate_records: rejectedRecords,
    rejected_candidates: rejectedCandidates,
  },
};

fs.writeFileSync(sourcePath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ before, after, rejected_records: rejectedRecords, rejected_candidates: rejectedCandidates }, null, 2));
