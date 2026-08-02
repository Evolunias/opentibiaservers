import { knowledgeCollections, knowledgeEntities } from '../lib/knowledge-base.js';

const requiredFields = [
  'slug',
  'collection',
  'entityType',
  'name',
  'canonicalPath',
  'summary',
  'status',
  'profile',
  'reviewedAt',
  'readingMinutes',
];
const requiredFoundation = [
  'combat-damage-pipeline',
  'armor-defense-formulas',
  'elemental-resistance',
  'critical-hits',
  'protection-zones',
  'skulls-frags-pvp',
  'experience-levels',
  'skills-magic-level',
  'stamina-system',
  'dragon',
  'demon',
  'magic-plate-armor',
  'spell-rune-combat',
  'quest-access-and-safety',
  'ruleset-verification',
];
const validBlockTypes = new Set(['paragraph', 'list', 'steps', 'formula', 'table', 'callout']);
const collectionSlugs = new Set(knowledgeCollections.map((collection) => collection.slug));
const slugs = new Set();
const canonicalPaths = new Set();
const summaries = new Set();
let failures = 0;

function fail(message) {
  failures += 1;
  console.error(message);
}

function extractWords(entity) {
  const text = [
    entity.name,
    entity.summary,
    JSON.stringify(entity.facts || []),
    JSON.stringify(entity.sections || []),
  ].join(' ').replace(/[^a-zA-Z0-9%]+/g, ' ');
  return text.trim().split(/\s+/).filter(Boolean);
}

for (const entity of knowledgeEntities) {
  const missing = requiredFields.filter((field) => !entity[field]);
  if (missing.length) fail(`${entity.slug || entity.name || 'unknown'} missing required fields: ${missing.join(', ')}`);

  if (!collectionSlugs.has(entity.collection)) fail(`${entity.slug} uses unknown collection: ${entity.collection}`);
  if (entity.canonicalPath !== `/knowledge/${entity.collection}/${entity.slug}`) {
    fail(`${entity.slug} canonical path does not match its collection and slug`);
  }

  if (slugs.has(entity.slug)) fail(`Duplicate knowledge slug: ${entity.slug}`);
  slugs.add(entity.slug);
  if (canonicalPaths.has(entity.canonicalPath)) fail(`Duplicate canonical path: ${entity.canonicalPath}`);
  canonicalPaths.add(entity.canonicalPath);
  if (summaries.has(entity.summary)) fail(`Duplicate summary: ${entity.slug}`);
  summaries.add(entity.summary);

  if (!Array.isArray(entity.sources) || entity.sources.length < 2) {
    fail(`${entity.slug} requires at least two primary source references`);
  }
  for (const source of entity.sources || []) {
    if (!source.id || !source.label || !source.authority || !source.scope || !source.href) {
      fail(`${entity.slug} has an incomplete source record`);
    }
    if (!/^https:\/\//.test(source.href || '')) fail(`${entity.slug} source must use HTTPS: ${source.href}`);
  }

  if (!Array.isArray(entity.facts) || entity.facts.length < 4) {
    fail(`${entity.slug} requires at least four structured facts`);
  }
  if (!Array.isArray(entity.sections) || entity.sections.length < 4) {
    fail(`${entity.slug} requires at least four complete sections`);
  }

  const sectionIds = new Set();
  let hasStructuredBlock = false;
  for (const section of entity.sections || []) {
    if (!section.id || !section.title || !Array.isArray(section.blocks) || section.blocks.length === 0) {
      fail(`${entity.slug} has an incomplete section`);
      continue;
    }
    if (sectionIds.has(section.id)) fail(`${entity.slug} has duplicate section id: ${section.id}`);
    sectionIds.add(section.id);

    for (const block of section.blocks) {
      if (!validBlockTypes.has(block.type)) fail(`${entity.slug} has unsupported block type: ${block.type}`);
      if (['table', 'formula', 'steps'].includes(block.type)) hasStructuredBlock = true;
      if (block.type === 'table') {
        if (!block.caption || !Array.isArray(block.columns) || !Array.isArray(block.rows) || block.rows.length === 0) {
          fail(`${entity.slug} has an incomplete table in ${section.id}`);
        }
        for (const row of block.rows || []) {
          if (row.length !== block.columns.length) fail(`${entity.slug} table row width mismatch in ${section.id}`);
        }
      }
      if (block.type === 'formula' && (!block.label || !block.expression)) {
        fail(`${entity.slug} has an incomplete formula in ${section.id}`);
      }
    }
  }
  if (!hasStructuredBlock) fail(`${entity.slug} has no table, formula, or step sequence`);

  const wordCount = extractWords(entity).length;
  if (wordCount < 450) fail(`${entity.slug} is too shallow at ${wordCount} words; minimum is 450`);

  if (!Array.isArray(entity.relatedSlugs) || entity.relatedSlugs.length < 3) {
    fail(`${entity.slug} requires at least three related knowledge links`);
  }
  if (!Array.isArray(entity.relatedServerSearches) || entity.relatedServerSearches.length < 3) {
    fail(`${entity.slug} requires at least three directory connections`);
  }

  if (entity.indexable && entity.status === 'partial') fail(`${entity.slug} cannot be indexable while partial`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(entity.reviewedAt || '')) fail(`${entity.slug} has an invalid review date`);

  const sourceBrandPattern = new RegExp(`\\b(?:${['Tibia', 'Wiki'].join('')}|${['Fan', 'dom'].join('')})\\b`, 'i');
  const visibleCopy = `${entity.summary} ${JSON.stringify(entity.facts || [])} ${JSON.stringify(entity.sections || [])}`;
  if (sourceBrandPattern.test(visibleCopy)) fail(`${entity.slug} contains source-brand wording in editorial copy`);
}

for (const entity of knowledgeEntities) {
  for (const relatedSlug of entity.relatedSlugs || []) {
    if (!slugs.has(relatedSlug)) fail(`${entity.slug} links to missing related article: ${relatedSlug}`);
  }
}

for (const slug of requiredFoundation) {
  if (!slugs.has(slug)) fail(`Missing required foundation article: ${slug}`);
}

if (knowledgeEntities.length < 15) fail(`Knowledge foundation has only ${knowledgeEntities.length} articles; minimum is 15`);

if (failures > 0) {
  console.error(`Knowledge audit failed with ${failures} issue(s).`);
  process.exit(1);
}

const totalWords = knowledgeEntities.reduce((sum, entity) => sum + extractWords(entity).length, 0);
console.log(`Knowledge audit passed for ${knowledgeEntities.length} articles and ${totalWords.toLocaleString()} structured words.`);
