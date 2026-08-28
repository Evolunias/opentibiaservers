import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { XMLParser } from 'fast-xml-parser';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.resolve(
  process.env.TFS_SOURCE_ROOT || path.join(tmpdir(), 'ots-tfs-v1.6-reference'),
);
const outputRoot = path.join(projectRoot, 'data', 'knowledge');
const reviewedAt = process.env.KNOWLEDGE_REVIEWED_AT || new Date().toISOString().slice(0, 10);
const parser = new XMLParser({
  allowBooleanAttributes: true,
  attributeNamePrefix: '',
  ignoreAttributes: false,
  parseAttributeValue: true,
  parseTagValue: false,
  trimValues: true,
});

const SOURCE_TAG = 'v1.6';
const TFS_GITHUB_ROOT = `https://opentibiaservers.com//forgottenserver/blob/${SOURCE_TAG}`;

function asArray(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function cleanText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function normalizeKey(value) {
  return cleanText(value).toLocaleLowerCase('en-US');
}

function compactKey(value) {
  return cleanText(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
}

function singularizeWords(value) {
  return cleanText(value).split(' ').map((word) => {
    const lower = word.toLowerCase();
    if (lower.endsWith('ies') && lower.length > 4) return `${word.slice(0, -3)}y`;
    if (/(sses|shes|ches|xes|zes)$/i.test(word)) return word.slice(0, -2);
    if (lower.endsWith('ves') && lower.length > 4) return `${word.slice(0, -3)}f`;
    if (lower.endsWith('s') && !lower.endsWith('ss') && lower.length > 3) return word.slice(0, -1);
    return word;
  }).join(' ');
}

function slugify(value) {
  return cleanText(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function titleCaseFirst(value) {
  const text = cleanText(value);
  return text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : text;
}

function assignStableSlugs(records, fallbackPrefix) {
  const used = new Map();

  for (const record of records) {
    const base = slugify(record.name) || `${fallbackPrefix}-${record.stableId}`;
    const seen = used.get(base) || 0;
    used.set(base, seen + 1);
    record.slug = seen === 0 ? base : `${base}-${record.stableId}`;
  }
}

function scalarObject(value, excluded = new Set()) {
  if (!value || typeof value !== 'object') return {};
  return Object.fromEntries(
    Object.entries(value)
      .filter(([key, entry]) => !excluded.has(key) && ['string', 'number', 'boolean'].includes(typeof entry))
      .sort(([left], [right]) => left.localeCompare(right)),
  );
}

function attributeObject(value) {
  return Object.fromEntries(
    asArray(value)
      .filter((attribute) => attribute?.key !== undefined)
      .map((attribute) => [String(attribute.key), attribute.value ?? 'true']),
  );
}

function flagObject(value) {
  return Object.assign({}, ...asArray(value).map((flag) => scalarObject(flag)));
}

function unique(values) {
  return [...new Set(values.filter((value) => value !== undefined && value !== null && value !== ''))];
}

function sourceUrl(relativePath) {
  return `${TFS_GITHUB_ROOT}/${relativePath.split(path.sep).join('/')}`;
}

function classifyItem(name, attributes) {
  const keys = new Set(Object.keys(attributes).map((key) => key.toLowerCase()));
  const weaponType = cleanText(attributes.weaponType).toLowerCase();
  const slotType = cleanText(attributes.slotType).toLowerCase();
  const normalizedName = name.toLowerCase();

  if (weaponType === 'shield') return 'shields';
  if (weaponType || keys.has('attack') || keys.has('extradef')) return 'weapons';
  if (keys.has('armor')) return 'armor';
  if (slotType || keys.has('slottype')) return 'equipment';
  if (keys.has('containersize')) return 'containers';
  if (keys.has('runespellname') || /\brune\b/.test(normalizedName)) return 'runes';
  if (keys.has('nutrition') || keys.has('healthgain') || keys.has('managain')) return 'consumables';
  if (keys.has('fluidsource') || keys.has('fluidcontainer')) return 'fluids';
  if (keys.has('writeable') || keys.has('readable') || /\b(book|scroll|document|letter)\b/.test(normalizedName)) return 'documents';
  if (keys.has('keynumber') || /\bkey\b/.test(normalizedName)) return 'keys';
  if (
    keys.has('floorchange')
    || /\b(floor|wall|ramp|stairs|ground|roof|door|gate|archway|window|pillar|mountain|water|lava|grass|sand|earth|tile|hole)\b/.test(normalizedName)
  ) return 'map-objects';
  if (keys.has('decayto') || keys.has('duration') || keys.has('charges')) return 'usable-items';
  return 'general-items';
}

async function parseItems() {
  const itemsPath = path.join(sourceRoot, 'data', 'items', 'items.xml');
  const xml = parser.parse(await readFile(itemsPath, 'latin1'));
  const groups = new Map();

  for (const node of asArray(xml?.items?.item)) {
    const name = cleanText(node.name);
    if (!name) continue;

    const key = normalizeKey(name);
    const fromId = Number(node.id ?? node.fromid);
    const toId = Number(node.id ?? node.toid ?? fromId);
    if (!Number.isFinite(fromId) || !Number.isFinite(toId)) {
      throw new Error(`Item ${name} has no usable identifier range.`);
    }

    const attributes = attributeObject(node.attribute);
    const variant = {
      fromId,
      toId,
      article: cleanText(node.article) || null,
      attributes,
    };
    const group = groups.get(key) || {
      stableId: fromId,
      name,
      displayName: titleCaseFirst(name),
      sourceProfile: 'tfs',
      variants: [],
      lootSources: [],
      officialLootSources: [],
    };
    group.stableId = Math.min(group.stableId, fromId);
    group.variants.push(variant);
    groups.set(key, group);
  }

  const records = [...groups.values()].sort((left, right) => (
    left.name.localeCompare(right.name) || left.stableId - right.stableId
  ));
  assignStableSlugs(records, 'item');

  for (const record of records) {
    const attributeValues = new Map();
    let identifierCount = 0;

    for (const variant of record.variants) {
      identifierCount += (variant.toId - variant.fromId) + 1;
      for (const [key, value] of Object.entries(variant.attributes)) {
        const values = attributeValues.get(key) || [];
        values.push(value);
        attributeValues.set(key, values);
      }
    }

    record.identifierCount = identifierCount;
    record.definitionCount = record.variants.length;
    record.attributes = Object.fromEntries(
      [...attributeValues.entries()]
        .map(([key, values]) => [key, unique(values)])
        .sort(([left], [right]) => left.localeCompare(right)),
    );
    record.category = classifyItem(record.name, Object.fromEntries(
      Object.entries(record.attributes).map(([key, values]) => [key, values[0]]),
    ));
    record.canonicalPath = record.slug === 'magic-plate-armor'
      ? '/knowledge/equipment/magic-plate-armor'
      : `/knowledge/items/${record.slug}`;
    record.sourcePath = 'data/items/items.xml';
    record.sourceUrl = sourceUrl(record.sourcePath);
  }

  return records;
}

function normalizeCombatEntry(entry) {
  if (!entry || typeof entry !== 'object') return null;
  return {
    ...scalarObject(entry, new Set(['attribute'])),
    attributes: attributeObject(entry.attribute),
  };
}

function flattenLoot(entries, container = null) {
  const output = [];
  for (const entry of asArray(entries)) {
    if (!entry || typeof entry !== 'object') continue;
    const record = {
      ...scalarObject(entry, new Set(['item'])),
      container,
    };
    output.push(record);
    if (entry.item) output.push(...flattenLoot(entry.item, Number(entry.id) || cleanText(entry.name) || container));
  }
  return output;
}

function canonicalMonsterPath(slug) {
  if (slug === 'dragon' || slug === 'demon') return `/knowledge/bestiary/${slug}`;
  return `/knowledge/monsters/${slug}`;
}

async function parseMonsters() {
  const registryPath = path.join(sourceRoot, 'data', 'monster', 'monsters.xml');
  const registry = parser.parse(await readFile(registryPath, 'utf8'));
  const declarations = asArray(registry?.monsters?.monster);
  const records = [];
  const failures = [];

  for (let index = 0; index < declarations.length; index += 1) {
    const declaration = declarations[index];
    const relativePath = path.join('data', 'monster', cleanText(declaration.file));
    const absolutePath = path.join(sourceRoot, relativePath);

    try {
      const parsed = parser.parse(await readFile(absolutePath, 'latin1'))?.monster;
      if (!parsed) throw new Error('missing <monster> root');
      const name = cleanText(parsed.name || declaration.name);
      const record = {
        stableId: Number(parsed.raceId) || index + 1,
        name,
        displayName: titleCaseFirst(name),
        nameDescription: cleanText(parsed.nameDescription) || null,
        race: cleanText(parsed.race) || null,
        raceId: Number(parsed.raceId) || null,
        experience: Number(parsed.experience) || 0,
        speed: Number(parsed.speed) || 0,
        health: {
          current: Number(parsed.health?.now) || 0,
          maximum: Number(parsed.health?.max) || 0,
        },
        look: scalarObject(parsed.look),
        targetChange: scalarObject(parsed.targetchange),
        flags: flagObject(parsed.flags?.flag),
        bestiary: scalarObject(parsed.bestiary),
        attacks: asArray(parsed.attacks?.attack).map(normalizeCombatEntry).filter(Boolean),
        defenses: {
          base: scalarObject(parsed.defenses, new Set(['defense'])),
          actions: asArray(parsed.defenses?.defense).map(normalizeCombatEntry).filter(Boolean),
        },
        elements: Object.assign({}, ...asArray(parsed.elements?.element).map((entry) => scalarObject(entry))),
        immunities: flagObject(parsed.immunities?.immunity),
        summons: asArray(parsed.summons?.summon).map((entry) => scalarObject(entry)),
        loot: flattenLoot(parsed.loot?.item),
        sourcePath: relativePath.split(path.sep).join('/'),
        sourceProfile: 'tfs',
      };
      records.push(record);
    } catch (error) {
      failures.push(`${relativePath}: ${error.message}`);
    }
  }

  if (failures.length > 0) {
    throw new Error(`Monster parsing failed for ${failures.length} files:\n${failures.join('\n')}`);
  }

  records.sort((left, right) => left.name.localeCompare(right.name) || left.stableId - right.stableId);
  assignStableSlugs(records, 'monster');
  for (const record of records) {
    record.canonicalPath = canonicalMonsterPath(record.slug);
    record.sourceUrl = sourceUrl(record.sourcePath);
  }
  const recordsByName = new Map();
  for (const record of records) {
    const key = normalizeKey(record.name);
    const group = recordsByName.get(key) || [];
    group.push(record);
    recordsByName.set(key, group);
  }
  for (const group of recordsByName.values()) {
    if (group.length < 2) continue;
    for (const record of group) {
      const filename = path.basename(record.sourcePath, '.xml').replace(/_/g, ' ');
      record.seoQualifier = titleCaseFirst(filename);
    }
  }

  return records;
}

async function extractSpellSignals(scriptPath) {
  if (!scriptPath) return { combatTypes: [], areas: [], conditions: [], formulas: [], sourceFound: false };
  const relativePath = path.join('data', 'spells', 'scripts', scriptPath).split(path.sep).join('/');

  try {
    const source = await readFile(path.join(sourceRoot, relativePath), 'utf8');
    return {
      combatTypes: unique([...source.matchAll(/COMBAT_([A-Z0-9_]+)DAMAGE/g)].map((match) => match[1].toLowerCase())),
      areas: unique([...source.matchAll(/\bAREA_[A-Z0-9_]+\b/g)].map((match) => match[0])),
      conditions: unique([...source.matchAll(/\bCONDITION_[A-Z0-9_]+\b/g)].map((match) => match[0])),
      formulas: unique([...source.matchAll(/setFormula\(([^)\r\n]+)\)/g)].map((match) => cleanText(match[1]))),
      sourceFound: true,
      sourcePath: relativePath,
      sourceUrl: sourceUrl(relativePath),
    };
  } catch {
    return { combatTypes: [], areas: [], conditions: [], formulas: [], sourceFound: false, sourcePath: relativePath, sourceUrl: sourceUrl(relativePath) };
  }
}

function classifySpell(variants) {
  const scripts = variants.map((variant) => cleanText(variant.script).toLowerCase());
  const groups = variants.map((variant) => cleanText(variant.group).toLowerCase());
  if (scripts.some((script) => script.startsWith('house/'))) return 'house';
  if (scripts.some((script) => script.startsWith('conjuring/'))) return 'conjuring';
  if (scripts.some((script) => script.startsWith('healing/')) || groups.includes('healing')) return 'healing';
  if (scripts.some((script) => script.startsWith('attack/')) || groups.includes('attack')) return 'attack';
  return 'support';
}

async function parseSpells() {
  const registryPath = path.join(sourceRoot, 'data', 'spells', 'spells.xml');
  const registry = parser.parse(await readFile(registryPath, 'utf8'))?.spells || {};
  const rawEntries = [
    ...asArray(registry.instant).map((entry) => ({ ...entry, registryType: 'instant' })),
    ...asArray(registry.rune).map((entry) => ({ ...entry, registryType: 'rune' })),
  ].filter((entry) => {
    const script = cleanText(entry.script).toLowerCase();
    return entry.name && !script.startsWith('monster/') && !cleanText(entry.words).startsWith('###');
  });
  const groups = new Map();

  for (let index = 0; index < rawEntries.length; index += 1) {
    const entry = rawEntries[index];
    const name = cleanText(entry.name);
    const key = normalizeKey(name);
    const vocations = unique(asArray(entry.vocation).map((vocation) => cleanText(vocation.name)));
    const variant = {
      registryType: entry.registryType,
      ...scalarObject(entry, new Set(['name', 'vocation', 'registryType'])),
      vocations,
      signals: await extractSpellSignals(cleanText(entry.script)),
    };
    const group = groups.get(key) || {
      stableId: Number(entry.spellid ?? entry.id) || index + 1,
      name,
      displayName: titleCaseFirst(name),
      sourceProfile: 'tfs',
      variants: [],
    };
    group.variants.push(variant);
    groups.set(key, group);
  }

  const records = [...groups.values()].sort((left, right) => left.name.localeCompare(right.name));
  assignStableSlugs(records, 'spell');
  for (const record of records) {
    record.category = classifySpell(record.variants);
    record.vocations = unique(record.variants.flatMap((variant) => variant.vocations));
    record.words = unique(record.variants.map((variant) => variant.words));
    record.combatTypes = unique(record.variants.flatMap((variant) => variant.signals.combatTypes));
    record.canonicalPath = `/knowledge/spells/${record.slug}`;
    record.sourcePath = 'data/spells/spells.xml';
    record.sourceUrl = sourceUrl(record.sourcePath);
  }

  return records;
}

function mergeOfficialSpells(records, snapshot) {
  const byName = new Map(records.map((record) => [compactKey(record.name), record]));
  const byFormula = new Map(records.flatMap((record) => record.words.map((words) => [compactKey(words), record])));
  const usedSlugs = new Set(records.map((record) => record.slug));

  for (const official of snapshot.records || []) {
    let record = byName.get(compactKey(official.name)) || byFormula.get(compactKey(official.formula));
    if (!record) {
      let slug = slugify(official.name) || official.spellId;
      if (usedSlugs.has(slug)) slug = `${slug}-official`;
      usedSlugs.add(slug);
      const variant = {
        registryType: official.type || 'instant',
        group: official.group || 'support',
        words: official.formula || '',
        level: official.level,
        mana: official.mana,
        soul: official.soulPoints,
        premium: official.premium ? 1 : 0,
        cooldown: Number.isFinite(Number(official.cooldownSeconds)) ? Number(official.cooldownSeconds) * 1000 : undefined,
        groupcooldown: Number.isFinite(Number(official.groupCooldownSeconds)) ? Number(official.groupCooldownSeconds) * 1000 : undefined,
        vocations: official.vocations || [],
        sourceProfile: 'official',
        signals: {
          combatTypes: official.damageType ? [official.damageType] : [],
          areas: [],
          conditions: [],
          formulas: [],
          sourceFound: false,
        },
      };
      record = {
        stableId: `official-${official.spellId}`,
        name: official.name,
        displayName: titleCaseFirst(official.name),
        sourceProfile: 'official',
        variants: [variant],
        slug,
        category: official.group || 'support',
        vocations: official.vocations || [],
        words: official.formula ? [official.formula] : [],
        combatTypes: official.damageType ? [official.damageType] : [],
        canonicalPath: `/knowledge/spells/${slug}`,
        sourcePath: null,
        sourceUrl: official.officialUrl,
        itemPaths: [],
      };
      records.push(record);
      byName.set(compactKey(record.name), record);
      if (official.formula) byFormula.set(compactKey(official.formula), record);
    }
    record.official = official;
  }

  records.sort((left, right) => left.name.localeCompare(right.name));
  return records;
}

function mergeOfficialCreatures(records, snapshot) {
  const byKey = new Map();
  for (const record of records) {
    for (const key of unique([
      compactKey(record.name),
      compactKey(singularizeWords(record.name)),
      compactKey(record.slug),
    ])) {
      if (!byKey.has(key)) byKey.set(key, record);
    }
  }
  const usedSlugs = new Set(records.map((record) => record.slug));

  for (const official of snapshot.records || []) {
    const officialKeys = unique([
      compactKey(official.race),
      compactKey(official.name),
      compactKey(singularizeWords(official.name)),
    ]);
    let record = officialKeys.map((key) => byKey.get(key)).find(Boolean);
    if (!record) {
      let slug = slugify(official.race || singularizeWords(official.name));
      if (usedSlugs.has(slug)) slug = `${slug}-official`;
      usedSlugs.add(slug);
      const name = titleCaseFirst(singularizeWords(official.name));
      record = {
        stableId: `official-${official.race}`,
        name,
        displayName: name,
        nameDescription: null,
        race: null,
        raceId: null,
        experience: Number(official.experience) || 0,
        speed: 0,
        health: {
          current: Number(official.hitpoints) || 0,
          maximum: Number(official.hitpoints) || 0,
        },
        look: {},
        targetChange: {},
        flags: {
          summonable: official.canBeSummoned ? 1 : 0,
          convinceable: official.canBeConvinced ? 1 : 0,
          canseeinvisible: official.seesInvisible ? 1 : 0,
        },
        bestiary: { class: 'Official Library' },
        attacks: [],
        defenses: { base: {}, actions: [] },
        elements: {},
        immunities: {},
        summons: [],
        loot: [],
        sourcePath: null,
        sourceProfile: 'official',
        slug,
        canonicalPath: `/knowledge/monsters/${slug}`,
        sourceUrl: official.officialUrl,
      };
      records.push(record);
      for (const key of officialKeys) if (!byKey.has(key)) byKey.set(key, record);
    }
    record.official = official;
  }

  records.sort((left, right) => left.name.localeCompare(right.name));
  return records;
}

function linkCatalogRelationships(items, monsters, spells) {
  const itemById = new Map();
  const itemByName = new Map(items.map((item) => [normalizeKey(item.name), item]));

  for (const item of items) {
    for (const variant of item.variants) {
      for (let id = variant.fromId; id <= variant.toId; id += 1) itemById.set(id, item);
    }
  }

  for (const monster of monsters) {
    for (const loot of monster.loot) {
      const item = itemById.get(Number(loot.id)) || itemByName.get(normalizeKey(loot.name));
      if (!item) continue;
      loot.itemSlug = item.slug;
      loot.itemPath = item.canonicalPath;
      item.lootSources.push({
        monsterName: monster.name,
        monsterSlug: monster.slug,
        monsterPath: monster.canonicalPath,
        chance: Number(loot.chance) || 0,
        countMax: Number(loot.countmax) || 1,
      });
    }
    for (const officialLootName of monster.official?.loot || []) {
      const item = itemByName.get(normalizeKey(officialLootName))
        || itemByName.get(normalizeKey(singularizeWords(officialLootName)));
      if (!item) continue;
      const officialLoot = { name: officialLootName, itemSlug: item.slug, itemPath: item.canonicalPath };
      monster.official.lootLinks = monster.official.lootLinks || [];
      monster.official.lootLinks.push(officialLoot);
      item.officialLootSources.push({
        monsterName: monster.name,
        monsterSlug: monster.slug,
        monsterPath: monster.canonicalPath,
      });
    }
  }

  for (const item of items) {
    item.lootSources.sort((left, right) => right.chance - left.chance || left.monsterName.localeCompare(right.monsterName));
  }

  for (const spell of spells) {
    spell.itemPaths = unique([
      ...spell.variants.map((variant) => itemById.get(Number(variant.id))?.canonicalPath),
      spell.official?.type === 'rune' ? itemByName.get(normalizeKey(spell.name))?.canonicalPath : null,
    ]);
  }
}

async function readOfficialSnapshot(name) {
  const snapshotPath = path.join(projectRoot, 'data', 'knowledge-source', name);
  try {
    return JSON.parse(await readFile(snapshotPath, 'utf8'));
  } catch {
    throw new Error(`Official knowledge snapshot is missing: ${snapshotPath}. Run npm run fetch:official-knowledge.`);
  }
}

async function writeJson(name, value) {
  await writeFile(path.join(outputRoot, name), `${JSON.stringify(value)}\n`, 'utf8');
}

async function main() {
  const requiredPath = path.join(sourceRoot, 'data', 'items', 'items.xml');
  try {
    await readFile(requiredPath);
  } catch {
    throw new Error(`TFS 1.6 source was not found at ${sourceRoot}. Set TFS_SOURCE_ROOT to a pinned v1.6 checkout.`);
  }

  const sourceCommit = cleanText(execFileSync('git', ['rev-parse', 'HEAD'], { cwd: sourceRoot, encoding: 'utf8' }));
  const [officialSpells, officialCreatures] = await Promise.all([
    readOfficialSnapshot('official-spells.json'),
    readOfficialSnapshot('official-creatures.json'),
  ]);
  const items = await parseItems();
  const tfsMonsters = await parseMonsters();
  const tfsSpells = await parseSpells();
  const monsters = mergeOfficialCreatures(tfsMonsters, officialCreatures);
  const spells = mergeOfficialSpells(tfsSpells, officialSpells);
  linkCatalogRelationships(items, monsters, spells);

  const meta = {
    generatedAt: reviewedAt,
    source: 'TFS 1.6 + official Tibia libraries',
    sourceTag: SOURCE_TAG,
    sourceCommit,
    counts: {
      items: items.length,
      itemIdentifiers: items.reduce((sum, item) => sum + item.identifierCount, 0),
      monsters: monsters.length,
      tfsMonsters: tfsMonsters.filter((record) => record.sourceProfile === 'tfs').length,
      officialCreatures: officialCreatures.count,
      spells: spells.length,
      tfsSpells: tfsSpells.filter((record) => record.sourceProfile === 'tfs').length,
      officialSpells: officialSpells.count,
      monsterLootRows: monsters.reduce((sum, monster) => sum + monster.loot.length, 0),
    },
  };

  await mkdir(outputRoot, { recursive: true });
  await Promise.all([
    writeJson('catalog-meta.json', meta),
    writeJson('items.json', items),
    writeJson('monsters.json', monsters),
    writeJson('spells.json', spells),
  ]);

  process.stdout.write(`Generated ${items.length} item, ${monsters.length} monster, and ${spells.length} spell knowledge records.\n`);
  process.stdout.write(`${meta.counts.monsterLootRows} monster-loot relationships were indexed from TFS ${SOURCE_TAG}.\n`);
}

await main();
