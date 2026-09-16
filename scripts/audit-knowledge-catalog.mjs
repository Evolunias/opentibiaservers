import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  getKnowledgeCatalogArticle,
  getKnowledgeCatalogIndex,
  getKnowledgeCatalogSitemapEntries,
  getKnowledgeCatalogStaticParams,
} from '../lib/knowledge-catalog.js';
import { buildKnowledgeMetadata } from '../lib/knowledge-base.js';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function readJson(name) {
  return JSON.parse(await readFile(path.join(projectRoot, 'data', 'knowledge', name), 'utf8'));
}

function addError(errors, condition, message) {
  if (!condition) errors.push(message);
}

function wordCount(value) {
  if (typeof value === 'string') return value.trim().split(/\s+/).filter(Boolean).length;
  if (Array.isArray(value)) return value.reduce((sum, entry) => sum + wordCount(entry), 0);
  if (value && typeof value === 'object') return Object.values(value).reduce((sum, entry) => sum + wordCount(entry), 0);
  return 0;
}

function validateBlocks(article, errors) {
  for (const section of article.sections) {
    addError(errors, section.id && section.title, `${article.canonicalPath}: section is missing id or title`);
    addError(errors, Array.isArray(section.blocks) && section.blocks.length > 0, `${article.canonicalPath}: ${section.id} has no blocks`);
    for (const block of section.blocks || []) {
      addError(errors, ['paragraph', 'list', 'steps', 'formula', 'table', 'callout'].includes(block.type), `${article.canonicalPath}: unsupported block type ${block.type}`);
      if (block.type === 'table') {
        addError(errors, block.columns.length > 1, `${article.canonicalPath}: ${block.caption} needs multiple columns`);
        for (const row of block.rows) {
          addError(errors, row.length === block.columns.length, `${article.canonicalPath}: ${block.caption} has a row-width mismatch`);
        }
      }
    }
  }
}

const [meta, items, monsters, spells, officialCreatures, officialSpells] = await Promise.all([
  readJson('catalog-meta.json'),
  readJson('items.json'),
  readJson('monsters.json'),
  readJson('spells.json'),
  readJson('../knowledge-source/official-creatures.json'),
  readJson('../knowledge-source/official-spells.json'),
]);
const errors = [];

addError(errors, meta.sourceTag === 'v1.6', 'Catalog source tag is not pinned to v1.6');
addError(errors, /^[a-f0-9]{40}$/.test(meta.sourceCommit), 'Catalog source commit is not a full Git commit hash');
addError(errors, meta.counts.items === items.length, 'Item count does not match catalog metadata');
addError(errors, meta.counts.monsters === monsters.length, 'Monster count does not match catalog metadata');
addError(errors, meta.counts.spells === spells.length, 'Spell count does not match catalog metadata');
addError(errors, meta.counts.officialCreatures === officialCreatures.count, 'Official creature count does not match catalog metadata');
addError(errors, meta.counts.officialSpells === officialSpells.count, 'Official spell count does not match catalog metadata');

const itemSlugs = new Set();
const itemIds = new Map();
let itemIdentifierCount = 0;
for (const item of items) {
  addError(errors, item.name && item.displayName && item.slug, `Invalid item identity near source ID ${item.stableId}`);
  addError(errors, !itemSlugs.has(item.slug), `Duplicate item slug: ${item.slug}`);
  itemSlugs.add(item.slug);
  addError(errors, item.canonicalPath === (item.slug === 'magic-plate-armor' ? '/knowledge/equipment/magic-plate-armor' : `/knowledge/items/${item.slug}`), `Incorrect item canonical path: ${item.slug}`);
  addError(errors, Array.isArray(item.variants) && item.variants.length > 0, `${item.slug}: item has no variants`);
  addError(errors, item.sourceUrl.startsWith('https://github.com/otland/forgottenserver/'), `${item.slug}: item source is not primary TFS data`);
  addError(errors, item.category, `${item.slug}: item category is missing`);
  addError(errors, Array.isArray(item.officialLootSources), `${item.slug}: official loot-source relationship array is missing`);
  let recordIdentifiers = 0;
  for (const variant of item.variants) {
    addError(errors, Number.isInteger(variant.fromId) && Number.isInteger(variant.toId) && variant.toId >= variant.fromId, `${item.slug}: invalid item ID range`);
    for (let id = variant.fromId; id <= variant.toId; id += 1) {
      const previous = itemIds.get(id);
      addError(errors, !previous || previous === item.slug, `Item ID ${id} is assigned to ${previous} and ${item.slug}`);
      itemIds.set(id, item.slug);
      recordIdentifiers += 1;
    }
  }
  itemIdentifierCount += recordIdentifiers;
  addError(errors, recordIdentifiers === item.identifierCount, `${item.slug}: identifier count mismatch`);
}
addError(errors, itemIdentifierCount === meta.counts.itemIdentifiers, 'Total item identifier count does not match metadata');

const monsterSlugs = new Set();
let lootRows = 0;
let mappedOfficialCreatures = 0;
for (const monster of monsters) {
  addError(errors, monster.name && monster.displayName && monster.slug, `Invalid monster identity near ${monster.sourcePath}`);
  addError(errors, !monsterSlugs.has(monster.slug), `Duplicate monster slug: ${monster.slug}`);
  monsterSlugs.add(monster.slug);
  const expectedPath = ['dragon', 'demon'].includes(monster.slug) ? `/knowledge/bestiary/${monster.slug}` : `/knowledge/monsters/${monster.slug}`;
  addError(errors, monster.canonicalPath === expectedPath, `${monster.slug}: incorrect monster canonical path`);
  if (monster.sourceProfile === 'tfs') {
    addError(errors, monster.sourcePath?.startsWith('data/monster/monsters/') && monster.sourceUrl.startsWith('https://github.com/otland/forgottenserver/'), `${monster.slug}: TFS monster source is invalid`);
  } else {
    addError(errors, monster.sourceProfile === 'official' && monster.sourceUrl.startsWith('https://www.tibia.com/library/'), `${monster.slug}: official monster source is invalid`);
  }
  if (monster.official) {
    mappedOfficialCreatures += 1;
    addError(errors, monster.official.officialUrl.startsWith('https://www.tibia.com/library/'), `${monster.slug}: official creature URL is invalid`);
    addError(errors, monster.official.detailAvailable === true, `${monster.slug}: official creature detail is unavailable`);
  }
  addError(errors, Number.isFinite(monster.health.maximum) && monster.health.maximum >= 0, `${monster.slug}: invalid maximum health`);
  addError(errors, Array.isArray(monster.attacks) && Array.isArray(monster.loot), `${monster.slug}: combat arrays are missing`);
  for (const loot of monster.loot) {
    lootRows += 1;
    addError(errors, loot.itemSlug && itemSlugs.has(loot.itemSlug), `${monster.slug}: loot item ${loot.id || loot.name} is not linked to an item page`);
    addError(errors, loot.itemPath?.startsWith('/knowledge/'), `${monster.slug}: loot item ${loot.id || loot.name} has no canonical path`);
    addError(errors, Number.isFinite(Number(loot.chance)) && Number(loot.chance) >= 0 && Number(loot.chance) <= 100000, `${monster.slug}: invalid loot chance for ${loot.name}`);
  }
}
addError(errors, lootRows === meta.counts.monsterLootRows, 'Monster loot row count does not match metadata');
addError(errors, mappedOfficialCreatures === officialCreatures.count, `Expected ${officialCreatures.count} mapped official creatures but found ${mappedOfficialCreatures}`);

const spellSlugs = new Set();
let mappedOfficialSpells = 0;
for (const spell of spells) {
  addError(errors, spell.name && spell.displayName && spell.slug, `Invalid spell identity near ${spell.stableId}`);
  addError(errors, !spellSlugs.has(spell.slug), `Duplicate spell slug: ${spell.slug}`);
  spellSlugs.add(spell.slug);
  addError(errors, spell.canonicalPath === `/knowledge/spells/${spell.slug}`, `${spell.slug}: incorrect spell canonical path`);
  addError(errors, Array.isArray(spell.variants) && spell.variants.length > 0, `${spell.slug}: spell has no variants`);
  addError(errors, ['attack', 'conjuring', 'healing', 'house', 'support'].includes(spell.category), `${spell.slug}: invalid spell category`);
  if (spell.official) {
    mappedOfficialSpells += 1;
    addError(errors, spell.official.officialUrl.startsWith('https://www.tibia.com/library/'), `${spell.slug}: official spell URL is invalid`);
  }
  for (const variant of spell.variants) {
    addError(errors, !String(variant.script || '').startsWith('monster/'), `${spell.slug}: monster-only ability leaked into player spell pages`);
    if (variant.sourceProfile !== 'official') {
      addError(errors, variant.signals?.sourceFound === true, `${spell.slug}: bound spell script was not found: ${variant.script}`);
      addError(errors, variant.signals?.sourceUrl?.startsWith('https://github.com/otland/forgottenserver/'), `${spell.slug}: spell script source URL is invalid`);
    }
  }
  for (const itemPath of spell.itemPaths) {
    addError(errors, itemPath.startsWith('/knowledge/'), `${spell.slug}: linked rune item path is invalid`);
  }
}
addError(errors, mappedOfficialSpells === officialSpells.count, `Expected ${officialSpells.count} mapped official spells but found ${mappedOfficialSpells}`);

const metadataTitles = new Set();
const metadataDescriptions = new Set();
for (const [type, records] of Object.entries({ items, monsters, spells })) {
  const index = getKnowledgeCatalogIndex(type, { pageSize: 48 });
  addError(errors, index.total === records.length, `${type}: index total does not match catalog records`);
  for (const record of records) {
    const article = getKnowledgeCatalogArticle(type, record.slug);
    addError(errors, article?.canonicalPath === record.canonicalPath, `${type}/${record.slug}: article resolver failed`);
    if (!article) continue;
    addError(errors, article.indexable === true, `${article.canonicalPath}: catalog article is not indexable`);
    addError(errors, article.summary.length >= 120 && article.summary.length <= 320, `${article.canonicalPath}: summary length is outside the audit range`);
    addError(errors, article.keywords.length >= 5, `${article.canonicalPath}: insufficient keyword coverage`);
    addError(errors, article.facts.length >= 6, `${article.canonicalPath}: insufficient quick facts`);
    addError(errors, article.sections.length >= 5, `${article.canonicalPath}: insufficient section coverage`);
    addError(errors, article.sources.length >= 2 && article.sources.every((source) => /^https:\/\//.test(source.href)), `${article.canonicalPath}: source ledger is incomplete`);
    addError(errors, article.relatedPaths.length >= 2, `${article.canonicalPath}: insufficient internal relationships`);
    addError(errors, wordCount({ summary: article.summary, facts: article.facts, sections: article.sections }) >= 350, `${article.canonicalPath}: rendered reference content is too brief`);
    const metadata = buildKnowledgeMetadata(article);
    addError(errors, !metadataTitles.has(metadata.title), `${article.canonicalPath}: duplicate metadata title: ${metadata.title}`);
    metadataTitles.add(metadata.title);
    addError(errors, !metadataDescriptions.has(metadata.description), `${article.canonicalPath}: duplicate metadata description`);
    metadataDescriptions.add(metadata.description);
    addError(errors, metadata.description.length >= 120 && metadata.description.length <= 160, `${article.canonicalPath}: metadata description length is outside 120-160 characters`);
    addError(errors, metadata.alternates.canonical.endsWith(article.canonicalPath), `${article.canonicalPath}: canonical metadata mismatch`);
    addError(errors, metadata.robots.index === true && metadata.robots.follow === true, `${article.canonicalPath}: robots metadata is not index,follow`);
    addError(errors, article.keywords.some((keyword) => keyword.toLowerCase() === record.name.toLowerCase()), `${article.canonicalPath}: exact entity name is absent from keywords`);
    validateBlocks(article, errors);
  }
}

const staticParams = getKnowledgeCatalogStaticParams();
const staticKeys = new Set();
for (const params of staticParams) {
  const key = `${params.type}/${params.slug}`;
  addError(errors, !staticKeys.has(key), `Duplicate catalog static parameter: ${key}`);
  staticKeys.add(key);
  addError(errors, Boolean(getKnowledgeCatalogArticle(params.type, params.slug)), `Static parameter does not resolve: ${key}`);
}
addError(errors, staticParams.length <= 400, `Static catalog seed is too large for the constrained build worker: ${staticParams.length}`);

const sitemapEntries = getKnowledgeCatalogSitemapEntries();
const expectedSitemapEntries = items.length + monsters.length + spells.length - 3;
addError(errors, sitemapEntries.length === expectedSitemapEntries, `Catalog sitemap expected ${expectedSitemapEntries} entries but found ${sitemapEntries.length}`);
addError(errors, new Set(sitemapEntries.map((entry) => entry.path)).size === sitemapEntries.length, 'Catalog sitemap contains duplicate paths');
addError(errors, sitemapEntries.length < 50000, 'Catalog sitemap exceeds the single-sitemap URL limit');

if (errors.length > 0) {
  process.stderr.write(`Knowledge catalog audit failed with ${errors.length} issue${errors.length === 1 ? '' : 's'}:\n`);
  for (const error of errors.slice(0, 200)) process.stderr.write(`- ${error}\n`);
  if (errors.length > 200) process.stderr.write(`- ...and ${errors.length - 200} additional issues\n`);
  process.exit(1);
}

process.stdout.write(
  `Knowledge catalog audit passed: ${items.length.toLocaleString('en-US')} items, ${monsters.length.toLocaleString('en-US')} monsters, ${spells.length.toLocaleString('en-US')} spells, and ${lootRows.toLocaleString('en-US')} loot relationships.\n`,
);
