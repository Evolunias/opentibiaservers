import assert from 'node:assert/strict';
import {
  applyOfficialMetadataAssessment,
  assessOfficialMetadata,
  extractOfficialMetadata,
  officialDescriptionQuality,
} from '../lib/official-site-research.js';

const entry = {
  name: 'ExampleOT',
  root_domain: 'exampleot.com.br',
  aliases: ['exampleot', 'Example OT'],
};

const substantiveHtml = `<!doctype html><html><head>
  <title>ExampleOT - Latest News</title>
  <meta name="description" content="Tibia is a free massive multiplayer online role playing game (MMORPG).">
  <meta property="og:image" content="https://exampleot.com.br/logo.png">
  </head><body><main><p>ExampleOT is a custom Open Tibia server with staged experience, guild wars, quests, bosses, and Windows and Android clients.</p></main></body></html>`;
const extracted = extractOfficialMetadata(substantiveHtml, 'https://exampleot.com.br/', entry);
assert.equal(extracted.description_source, 'main_paragraph');
assert.match(extracted.description, /staged experience/i);
assert.equal(extracted.rejected_description_candidates[0].reasons.includes('generic_mmorpg_boilerplate'), true);
assert.equal(assessOfficialMetadata(extracted, entry).accepted, true);

const unrelated = applyOfficialMetadataAssessment({
  url: 'https://exampleot.com.br/',
  title: 'Latest News - OtherWorld',
  description: 'OtherWorld is a custom Open Tibia server with quests, bosses, guild wars, PvP events, and an Android client.',
}, entry);
assert.equal(unrelated.relevance_status, 'rejected_unrelated_or_unverifiable');
assert.equal(unrelated.relevance_reasons.includes('canonical_identity_not_present'), true);
assert.equal(unrelated.description, '');
assert.match(unrelated.rejected_metadata.description, /OtherWorld/);

const redirected = assessOfficialMetadata({
  url: 'https://unrelated.example/',
  title: 'ExampleOT',
  description: 'ExampleOT is a custom Open Tibia server with quests, bosses, guild wars, PvP events, and an Android client.',
}, entry);
assert.equal(redirected.accepted, false);
assert.equal(redirected.reasons.includes('resolved_domain_mismatch'), true);

const alternateTld = assessOfficialMetadata({
  url: 'https://exampleot.net/',
  title: 'ExampleOT',
  description: 'ExampleOT is a custom Open Tibia server with quests, bosses, guild wars, PvP events, and an Android client.',
}, entry);
assert.equal(alternateTld.accepted, true);

const suffixEntry = { name: 'BelleraOT', root_domain: 'belleraot.com.br', aliases: [] };
const suffixVariant = assessOfficialMetadata({
  url: 'https://belleraot.com.br/',
  title: 'Bellera - Open Tibia',
  description: 'Bellera is an Open Tibia server with custom quests, bosses, guild wars, PvP events, and an Android client.',
}, suffixEntry);
assert.equal(suffixVariant.accepted, true);

const generic = officialDescriptionQuality('Tibia is a free massive multiplayer online role playing game (MMORPG).');
assert.equal(generic.accepted, false);
assert.equal(generic.reasons.includes('generic_mmorpg_boilerplate'), true);

const exactBoundary = assessOfficialMetadata({
  url: 'https://exampleot.com.br/',
  title: 'ExampleOTPlus',
  description: 'ExampleOTPlus is a custom Open Tibia server with quests, bosses, guild wars, PvP events, and an Android client.',
}, entry);
assert.equal(exactBoundary.accepted, false);
assert.equal(exactBoundary.reasons.includes('canonical_identity_not_present'), true);

const blocked = extractOfficialMetadata('<title>Domain is for sale</title><p>Buy this domain now</p>', 'https://exampleot.com.br/', entry);
assert.equal(blocked.extraction_status, 'blocked_or_error_page');
assert.equal(blocked.description, '');

console.log(JSON.stringify({
  tests: 8,
  status: 'passed',
  selected_description_source: extracted.description_source,
  quality_gate: 'exact identity, aligned root domain, Open Tibia/game context, substantive non-boilerplate description',
}, null, 2));
