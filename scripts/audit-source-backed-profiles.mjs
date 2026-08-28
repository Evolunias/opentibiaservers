import { getServerReviewPage, getServerReviewPages } from '../lib/server-review-pages.js';

const requiredExamples = {
  ezodus: ['real-map foundation', 'Warzones 4–6', 'Dream Labyrinth'],
  exordion: ['staged experience', 'shared experience bonuses', 'anti-bot client'],
  realera: ['PvP-Enforced rules', 'custom client', 'advanced proxy system'],
};

const genericPattern = /(?:more than a quick connection test|enters the directory through|open fields remain|merely counted|needs owner-confirmed details)/i;
const failures = [];

for (const [slug, expectedSignals] of Object.entries(requiredExamples)) {
  const page = getServerReviewPage(slug);
  const content = [
    page?.official_summary,
    ...(page?.feature_bullets || []),
    ...(page?.sections || []).flatMap((section) => section.body || []),
  ].filter(Boolean).join(' ');

  if (!page) failures.push(`${slug}: profile not found`);
  if (page?.content_status !== 'source_backed') failures.push(`${slug}: not marked source_backed`);
  if (!page?.sourceLinks?.some((link) => /community_archive\.net/i.test(link.href || link.url || ''))) {
    failures.push(`${slug}: missing attributed community_archive source`);
  }
  if (genericPattern.test(content)) failures.push(`${slug}: old directory template copy remains`);
  for (const signal of expectedSignals) {
    if (!content.toLowerCase().includes(signal.toLowerCase())) {
      failures.push(`${slug}: expected sourced signal missing: ${signal}`);
    }
  }
}

const pages = getServerReviewPages();
const sourceBacked = pages.filter((page) => page.content_status === 'source_backed');
const genericSourceBacked = sourceBacked.filter((page) => genericPattern.test([
  page.official_summary,
  page.overview,
  ...(page.sections || []).flatMap((section) => section.body || []),
].filter(Boolean).join(' ')));

if (genericSourceBacked.length) {
  failures.push(`${genericSourceBacked.length} source-backed profiles still contain old directory-template prose`);
}

console.log(JSON.stringify({
  canonical_profiles: pages.length,
  source_backed_profiles: sourceBacked.length,
  examples_checked: Object.keys(requiredExamples),
  failures,
}, null, 2));

if (failures.length) process.exitCode = 1;
