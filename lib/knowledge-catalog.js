import { createRequire } from 'node:module';
import { naturalList, pickEditorial } from './editorial-voice.js';
import { knowledgeSourceRegistry } from './knowledge-sources.js';

const require = createRequire(import.meta.url);
const catalogMeta = require('../data/knowledge/catalog-meta.json');
const itemRecords = require('../data/knowledge/items.json');
const monsterRecords = require('../data/knowledge/monsters.json');
const spellRecords = require('../data/knowledge/spells.json');

const catalogRecords = {
  items: itemRecords,
  monsters: monsterRecords,
  spells: spellRecords,
};

const itemCategoryLabels = {
  armor: 'Armor',
  consumables: 'Consumables',
  containers: 'Containers',
  documents: 'Documents and readable objects',
  equipment: 'Equipment',
  fluids: 'Fluids and fluid containers',
  'general-items': 'General items',
  keys: 'Keys and access objects',
  'map-objects': 'Map and world objects',
  runes: 'Runes',
  shields: 'Shields',
  'usable-items': 'Usable and transforming items',
  weapons: 'Weapons',
};

const spellCategoryLabels = {
  attack: 'Attack spells',
  conjuring: 'Conjuring spells',
  healing: 'Healing spells',
  house: 'House commands',
  support: 'Support spells',
};

export const knowledgeCatalogDefinitions = {
  items: {
    slug: 'items',
    singular: 'item',
    name: 'Tibia Items Encyclopedia',
    shortName: 'Items',
    description: 'Browse every distinct named item definition in the pinned TFS 1.6 dataset, including identifiers, attributes, equipment statistics, variants, and recorded monster loot sources.',
    collection: 'equipment',
    categoryLabels: itemCategoryLabels,
  },
  monsters: {
    slug: 'monsters',
    singular: 'monster',
    name: 'Tibia Monster Bestiary',
    shortName: 'Monsters',
    description: 'Browse every registered TFS 1.6 monster plus current official creature-library profiles, with source-separated health, experience, behavior, attacks, defenses, elements, immunities, summons, and loot.',
    collection: 'bestiary',
    categoryLabels: {},
  },
  spells: {
    slug: 'spells',
    singular: 'spell',
    name: 'Tibia Spells and Runes',
    shortName: 'Spells',
    description: 'Browse every player-facing TFS 1.6 spell and every current official-library spell, with source-separated words, vocation access, level and magic-level requirements, costs, cooldowns, targeting, and implementation signals.',
    collection: 'combat',
    categoryLabels: spellCategoryLabels,
  },
};

const recordMaps = Object.fromEntries(
  Object.entries(catalogRecords).map(([type, records]) => [
    type,
    new Map(records.map((record) => [record.slug, record])),
  ]),
);

function unique(values) {
  return [...new Set(values.filter((value) => value !== undefined && value !== null && value !== ''))];
}

function titleCaseWords(value) {
  return String(value || '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function categorySlug(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function getRecordCategory(record, type) {
  if (type !== 'monsters') return record.category || 'other';
  return categorySlug(record.bestiary?.class || record.race || 'unclassified');
}

function getRecordCategoryLabel(record, type) {
  if (type !== 'monsters') {
    return knowledgeCatalogDefinitions[type]?.categoryLabels[record.category] || titleCaseWords(record.category);
  }
  return record.bestiary?.class || titleCaseWords(record.race || 'Unclassified');
}

function formatRawValue(value) {
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (value === 1) return 'Yes';
  if (value === 0) return 'No';
  return String(value ?? 'Not defined');
}

function formatAttributeValue(key, value) {
  if (key.toLowerCase() === 'weight' && Number.isFinite(Number(value))) {
    return `${(Number(value) / 100).toFixed(2)} oz (${value} source units)`;
  }
  return formatRawValue(value);
}

function formatIdentifierRange(variant) {
  return variant.fromId === variant.toId ? String(variant.fromId) : `${variant.fromId}-${variant.toId}`;
}

function formatChance(chance) {
  const numeric = Number(chance) || 0;
  return `${(numeric / 1000).toFixed(numeric < 1000 ? 3 : 2)}%`;
}

function formatMilliseconds(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 'Not defined';
  return numeric >= 1000 ? `${numeric / 1000} seconds` : `${numeric} milliseconds`;
}

function linkCell(text, href) {
  return href ? { text: String(text), href } : String(text);
}

function sourceForRecord(record, type) {
  if (type === 'items') {
    return {
      id: `tfs-item-${record.slug}`,
      label: `${record.displayName} item definition`,
      href: record.sourceUrl,
      authority: 'Primary item data',
      scope: `Item identifiers and XML attributes for ${record.displayName} in the pinned TFS 1.6 dataset.`,
    };
  }

  if (type === 'monsters') {
    if (record.sourceProfile === 'official') {
      return {
        id: `official-creature-${record.slug}`,
        label: `${record.displayName} official creature profile`,
        href: record.official?.officialUrl || record.sourceUrl,
        authority: 'Official game library',
        scope: `Current health, experience, resistance categories, status behavior, and named loot published for ${record.displayName}.`,
      };
    }
    return {
      id: `tfs-monster-${record.slug}`,
      label: `${record.displayName} monster definition`,
      href: record.sourceUrl,
      authority: 'Primary monster data',
      scope: `Health, experience, behavior, combat, resistance, summon, and loot configuration for ${record.displayName}.`,
    };
  }

  if (record.sourceProfile === 'official') {
    return {
      id: `official-spell-${record.slug}`,
      label: `${record.displayName} official spell profile`,
      href: record.official?.officialUrl || record.sourceUrl,
      authority: 'Official game library',
      scope: `Current official words, group, type, requirements, resource costs, cooldowns, vocation access, and magic type for ${record.displayName}.`,
    };
  }

  return {
    id: `tfs-spell-${record.slug}`,
    label: `${record.displayName} spell registry entry`,
    href: record.sourceUrl,
    authority: 'Primary spell data',
    scope: `Registry requirements, resource costs, cooldowns, targeting flags, and script bindings for ${record.displayName}.`,
  };
}

function officialSourceForRecord(record, type) {
  if (!record.official) return null;
  return {
    id: `official-${type}-${record.slug}`,
    label: `${record.displayName} on the official Tibia library`,
    href: record.official.officialUrl,
    authority: 'Official game library',
    scope: type === 'monsters'
      ? `Current official health, experience, strength and weakness categories, status behavior, and named loot observed ${record.official.observedAt || catalogMeta.generatedAt}.`
      : `Current official spell words, requirements, cost, cooldown, vocation, and magic-type facts observed ${record.official.observedAt || catalogMeta.generatedAt}.`,
  };
}

function getItemAttributeRows(record) {
  return Object.entries(record.attributes).map(([key, values]) => [
    titleCaseWords(key),
    values.map((value) => formatAttributeValue(key, value)).join(' | '),
    `Defined on ${record.variants.filter((variant) => Object.hasOwn(variant.attributes, key)).length} source ${record.variants.length === 1 ? 'entry' : 'entries'}`,
  ]);
}

function describeItemMechanics(record) {
  const keys = new Set(Object.keys(record.attributes).map((key) => key.toLowerCase()));
  const statements = [];
  if (keys.has('attack')) statements.push('Its attack value participates in weapon damage calculations when the deployed server preserves this item definition.');
  if (keys.has('defense')) statements.push('Its defense value contributes to the equipped weapon or shield defense calculation defined by the active engine.');
  if (keys.has('armor')) statements.push('Its armor value contributes to the random armor block produced by the equipped armor slots.');
  if (keys.has('slottype')) statements.push('The slot declaration controls where the item can be equipped and prevents it from occupying unrelated equipment slots.');
  if (keys.has('charges')) statements.push('The configured charge count makes remaining uses part of the item state and should be checked after transfers or transformations.');
  if (keys.has('decayto') || keys.has('duration')) statements.push('Decay attributes describe a timed state transition; private servers can change both the destination item and the duration.');
  if (record.category === 'map-objects') statements.push('This is primarily a world or map object, so placement, movement, use, and decay behavior depend on map flags and server scripts in addition to this XML entry.');
  if (statements.length === 0) statements.push('The XML entry establishes the identifiers and attributes shown here, while interaction behavior can also come from the binary item registry, movement events, actions, and server scripts.');
  return statements.join(' ');
}

function buildItemFieldSection(record, categoryLabel) {
  const name = record.displayName;
  const attributeNames = Object.keys(record.attributes).map(titleCaseWords);
  const attributePhrase = naturalList(attributeNames.slice(0, 5), 'no extra items.xml attributes');
  const identifierPhrase = record.identifierCount === 1
    ? `item ID ${formatIdentifierRange(record.variants[0])}`
    : `${record.identifierCount} identifiers beginning with ${formatIdentifierRange(record.variants[0])}`;
  const strongestLoot = [...record.lootSources]
    .sort((left, right) => Number(right.chance || 0) - Number(left.chance || 0))[0];
  const officialLoot = record.officialLootSources?.[0];
  const categoryPerspective = {
    armor: `${name} sits in a category where one armor value can dominate the conversation. A useful comparison also weighs slot competition, weight, elemental modifiers, vocation gates, and any upgrade layer the target server adds.`,
    consumables: `${name} belongs to the rhythm of preparation: acquire it, carry it, choose the moment, accept the cost. Charges, transformations, action scripts, and server-specific cooldowns decide whether that rhythm feels generous or exacting.`,
    containers: `${name} is more than empty space when a server gives containers weight, capacity, nesting rules, depot behavior, or scripted purpose. Those details shape every supply run even though they rarely appear in the item name.`,
    documents: `${name} may carry little combat power, yet readable objects often hold the world's quieter memory: instructions, clues, jokes, lore, or a quest state hidden behind an action script.`,
    equipment: `${name} earns an equipment slot only when its whole trade-off makes sense. A headline statistic matters, but so do weight, restrictions, secondary modifiers, loss risk, and the alternatives displaced by equipping it.`,
    fluids: `${name} belongs to a stateful item family. Contents, subtype, filling rules, empty-container behavior, and action scripts can matter more than the shared display name.`,
    keys: `${name} is a small object with an unusually large consequence: access. The number in the item registry identifies the object, while door action IDs, map placement, and quest storage determine what it actually opens.`,
    'map-objects': `${name} belongs to the scenery and machinery of the world. Placement, tile flags, movement permissions, decay, and scripted interaction give it meaning that a backpack tooltip cannot capture.`,
    runes: `${name} turns inventory space into stored magic. Charges, level and magic-level gates, target rules, exhaustion, and the bound spell script determine the real value of each use.`,
    shields: `${name} invites a simple defense comparison, but the useful question is situational: what is held in the other hand, which combat formula is active, and what offensive or utility option is surrendered for protection?`,
    'usable-items': `${name} is defined by what happens after the click. Charges, duration, decay targets, movement events, and action scripts can turn the same visible object into a tool, a timer, a reward, or a one-way transformation.`,
    weapons: `${name} carries the promise of a stronger hit, but attack is only the first line of the decision. Handedness, skill type, range, defense, level gates, ammunition, speed rules, and elemental behavior shape how the weapon actually feels.`,
  }[record.category] || `${name} belongs to a broad item family, so its purpose cannot be read safely from the name alone. The registry, scripts, map, and target server rules complete the picture.`;

  const acquisitionParagraph = strongestLoot
    ? `${strongestLoot.monsterName} is the clearest configured acquisition lead for ${name} in this profile, with a base roll of ${formatChance(strongestLoot.chance)} and a maximum stack of ${strongestLoot.countMax || 1}. That is a lead, not a promise: global loot rates, events, prey-style systems, custom callbacks, and a different deployed data pack can change the result.`
    : officialLoot
      ? `The current official creature library names ${name} among ${officialLoot.monsterName}'s possible loot, but it publishes no percentage. That quiet distinction matters. A named possibility can guide a hunt; it cannot support a fabricated drop rate.`
      : `No indexed monster definition names ${name} as direct corpse loot. The silence is useful because it narrows the next search to quests, NPC trades, map rewards, crafting, events, stores, and action scripts instead of encouraging an invented hunting route.`;

  const opening = pickEditorial(record.slug, 'item-opening', [
    `An item name is only the surface. Beneath ${name} sit ${identifierPhrase}, a ${categoryLabel.toLowerCase()} classification, and ${attributeNames.length} declared attribute ${attributeNames.length === 1 ? 'family' : 'families'}: ${attributePhrase}.`,
    `${name} may occupy a single square in a backpack, but its source identity is wider: ${identifierPhrase}, ${record.definitionCount} XML ${record.definitionCount === 1 ? 'definition' : 'definitions'}, and ${attributeNames.length} declared attribute ${attributeNames.length === 1 ? 'family' : 'families'}.`,
    `Every item carries two stories: what the player sees and what the server executes. For ${name}, the second story begins with ${identifierPhrase}, ${record.definitionCount} source ${record.definitionCount === 1 ? 'definition' : 'definitions'}, and ${attributePhrase}.`,
    `The useful question about ${name} is not merely "what is its ID?" The registry answers with ${identifierPhrase}, then adds ${attributePhrase} and a ${categoryLabel.toLowerCase()} role that still depends on the deployed ruleset.`,
  ]);
  const closing = pickEditorial(record.slug, 'item-closing', [
    `${name} rewards careful reading. Match the identifier, inspect the attributes, trace the acquisition path, and only then decide what the item means on a particular server.`,
    `Treat ${name} as a versioned object, not a timeless constant. The name creates recognition; the identifier, attributes, and scripts create behavior.`,
    `For ${name}, certainty arrives in layers. The item file establishes identity, the scripts establish interaction, and live testing establishes what players truly experience.`,
    `${name} is most useful when its evidence stays attached. A remembered tooltip can start the conversation, but the deployed data and a reproducible test should finish it.`,
  ]);

  return {
    id: 'field-notes',
    title: `${name} in the hands of a player`,
    blocks: [
      { type: 'paragraph', text: opening },
      { type: 'paragraph', text: categoryPerspective },
      { type: 'paragraph', text: acquisitionParagraph },
      {
        type: 'callout',
        tone: 'insight',
        title: 'Read beyond the tooltip',
        text: closing,
      },
    ],
  };
}

function buildItemArticle(record) {
  const definition = knowledgeCatalogDefinitions.items;
  const categoryLabel = definition.categoryLabels[record.category] || titleCaseWords(record.category);
  const identifierPreview = record.variants.slice(0, 8).map(formatIdentifierRange).join(', ');
  const tfsSourceCount = record.lootSources.length;
  const officialSourceCount = record.officialLootSources?.length || 0;
  const sourceCount = tfsSourceCount + officialSourceCount;
  const attributeRows = getItemAttributeRows(record);
  const variantRows = record.variants.map((variant) => [
    formatIdentifierRange(variant),
    variant.article || 'Not specified',
    Object.keys(variant.attributes).length > 0
      ? Object.entries(variant.attributes).map(([key, value]) => `${titleCaseWords(key)}: ${formatAttributeValue(key, value)}`).join('; ')
      : 'No XML attributes on this variant',
  ]);
  const lootRows = record.lootSources.map((source) => [
    linkCell(source.monsterName, source.monsterPath),
    formatChance(source.chance),
    String(source.countMax),
    `${source.chance}/100,000`,
  ]);
  const officialLootRows = (record.officialLootSources || []).map((source) => [
    linkCell(source.monsterName, source.monsterPath),
    'Named by the official creature library',
    'No probability published',
  ]);
  const officialLootSources = (record.officialLootSources || []).slice(0, 4).map((source) => {
    const monster = recordMaps.monsters.get(source.monsterSlug);
    if (!monster?.official?.officialUrl) return null;
    return {
      id: `official-item-source-${record.slug}-${source.monsterSlug}`,
      label: `${source.monsterName} official creature profile`,
      href: monster.official.officialUrl,
      authority: 'Official game library',
      scope: `Names ${record.displayName} in the current official loot summary for ${source.monsterName}; no exact chance is published.`,
    };
  }).filter(Boolean);

  return {
    catalogType: 'items',
    entityType: 'item',
    indexable: true,
    status: 'source-backed',
    collection: definition.collection,
    slug: record.slug,
    name: record.displayName,
    canonicalPath: record.canonicalPath,
    indexPath: '/knowledge/items',
    profile: 'TFS 1.6 item-data reference',
    reviewedAt: catalogMeta.generatedAt,
    readingMinutes: Math.min(18, 5 + Math.ceil((record.variants.length + record.lootSources.length) / 35)),
    summary: `${record.displayName} is documented as ${categoryLabel.toLowerCase()} across ${record.identifierCount} item ${record.identifierCount === 1 ? 'identifier' : 'identifiers'} in pinned TFS 1.6 data, with XML attributes, exact configured drops, and current official creature-library loot mentions traced separately.`,
    keywords: uniqueKeywords([
      record.name,
      `${record.name} Tibia`,
      `${record.name} item`,
      `${record.name} Open Tibia`,
      `${record.name} item ID`,
      categoryLabel,
      identifierPreview,
    ]),
    tags: [categoryLabel, 'TFS 1.6 items', 'item identifiers', 'Open Tibia data'],
    facts: [
      { key: 'Classification', value: categoryLabel },
      { key: 'Identifiers', value: `${record.identifierCount} across ${record.definitionCount} XML definitions` },
      { key: 'Item ID reference', value: identifierPreview || 'No identifier' },
      { key: 'Defined attributes', value: `${Object.keys(record.attributes).length}` },
      { key: 'TFS loot sources', value: `${tfsSourceCount}` },
      { key: 'Official loot mentions', value: `${officialSourceCount}` },
      { key: 'Source profile', value: 'TFS 1.6' },
    ],
    sections: [
      buildItemFieldSection(record, categoryLabel),
      {
        id: 'identity-and-identifiers',
        title: `${record.displayName} identity and identifiers`,
        blocks: [
          {
            type: 'paragraph',
            text: `${record.displayName} appears in the pinned item registry under ${record.identifierCount} concrete identifier ${record.identifierCount === 1 ? 'value' : 'values'}. This page groups definitions that share the exact source name so readers can compare alternate graphics, transformation states, map variants, or legacy identifiers without treating each numeric ID as a different search topic. The identifiers are engine references, not proof that every Open Tibia server exposes every variant to players.`,
          },
          {
            type: 'table',
            caption: `${record.displayName} source variants`,
            columns: ['Item ID or range', 'Article', 'Variant attributes'],
            rows: variantRows,
          },
        ],
      },
      {
        id: 'attributes-and-mechanics',
        title: 'Attributes and mechanical meaning',
        blocks: [
          {
            type: 'paragraph',
            text: `${record.displayName} is classified here as ${categoryLabel.toLowerCase()} from its name and declared XML attributes. ${describeItemMechanics(record)} Exact behavior can be supplemented or overridden by the server binary, the OTB item registry, Lua actions, movement events, decay handlers, imbuement systems, or custom upgrade code.`,
          },
          ...(attributeRows.length > 0 ? [{
            type: 'table',
            caption: `${record.displayName} normalized attributes`,
            columns: ['Attribute', 'Source value', 'Coverage'],
            rows: attributeRows,
          }] : [{
            type: 'callout',
            tone: 'info',
            title: 'No XML attribute override',
            text: `${record.displayName} has no additional attribute in items.xml. Its base appearance and low-level item flags can still come from the binary item registry, while scripts can supply interaction behavior.`,
          }]),
        ],
      },
      {
        id: 'acquisition-and-loot',
        title: 'Acquisition and recorded loot sources',
        blocks: [
          {
            type: 'paragraph',
            text: tfsSourceCount > 0
              ? `${record.displayName} is referenced by ${tfsSourceCount} configured TFS monster loot ${tfsSourceCount === 1 ? 'entry' : 'entries'} and ${officialSourceCount} current official creature-library ${officialSourceCount === 1 ? 'mention' : 'mentions'}. Exact percentages below come only from the TFS 100,000-point loot scale, before any server-wide loot-rate multiplier, stamina rule, prey bonus, event modifier, or owner customization. Official library mentions are kept separate because that source does not publish a probability.`
              : `No monster XML file in the pinned profile lists ${record.displayName} as direct loot. That does not establish that the item is unobtainable. It may be awarded by a quest, NPC trade, map placement, reward chest, crafting system, action script, event, store, or custom content module. A server-specific guide should name one of those primary acquisition sources before presenting a method as verified.`,
          },
          ...(lootRows.length > 0 ? [{
            type: 'table',
            caption: `${record.displayName} monster loot references`,
            columns: ['Monster', 'Base chance', 'Maximum count', 'Source units'],
            rows: lootRows,
          }] : []),
          ...(officialLootRows.length > 0 ? [{
            type: 'table',
            caption: `${record.displayName} current official loot mentions`,
            columns: ['Creature', 'Evidence', 'Drop chance'],
            rows: officialLootRows,
          }] : []),
        ],
      },
      {
        id: 'progression-and-use',
        title: 'Progression, use, and comparison',
        blocks: [
          {
            type: 'paragraph',
            text: `Evaluate ${record.displayName} against alternatives in the same ${categoryLabel.toLowerCase()} class by comparing only attributes that the active server actually implements. For combat equipment, attack, defense, armor, elemental protection, skill modifiers, vocation restrictions, level requirements, charges, and weight can all change the practical result. For world objects and general items, the decisive behavior is more often an action, movement event, unique ID, or map placement that cannot be inferred from the display name alone.`,
          },
          {
            type: 'list',
            items: [
              `Confirm the live item identifier before importing ${record.displayName} into an editor, script, reward, or shop.`,
              'Compare XML attributes with the deployed OTB registry and any upgrade, tier, imbuement, or rarity layer.',
              'Trace acquisition through monster files, NPC scripts, quest scripts, reward containers, and map placements.',
              'Test equip, use, decay, trade, loss, and persistence behavior on the target server profile.',
            ],
          },
        ],
      },
      {
        id: 'verification-boundary',
        title: 'Reference boundary and change control',
        blocks: [
          {
            type: 'callout',
            tone: 'warning',
            title: 'Versioned reference, not a universal promise',
            text: `${record.displayName} is documented from TFS 1.6 item and monster data. Current official Tibia and individual Open Tibia servers can use different identifiers, attributes, sprites, sources, prices, restrictions, and upgrade mechanics.`,
          },
          {
            type: 'paragraph',
            text: `A correction to this entry should cite the exact deployed item definition, commit, server documentation, or reproducible live test. Screenshots can show appearance or a tooltip, but they do not independently prove hidden chance values, script branches, or database state. Keeping those evidence layers separate prevents a historical item ID or one server's custom value from being mislabeled as universal ${record.displayName} behavior.`,
          },
        ],
      },
    ],
    sources: [sourceForRecord(record, 'items'), knowledgeSourceRegistry.tfsRelease, ...officialLootSources],
    relatedPaths: getRelatedItemPaths(record),
    relatedServerSearches: [record.name, 'TFS 1.6', categoryLabel],
  };
}

function describeMonsterTactics(record) {
  if (record.sourceProfile === 'official') {
    const official = record.official || {};
    const notes = [
      `The current official library publishes ${record.displayName} as a ${official.hitpoints?.toLocaleString('en-US') || 'not numerically specified'} hitpoint creature worth ${official.experience?.toLocaleString('en-US') || 'an unspecified amount of'} experience.`,
    ];
    if (official.weakness?.length > 0) notes.push(`Its published weakness categories are ${official.weakness.map(titleCaseWords).join(', ')}.`);
    if (official.strong?.length > 0) notes.push(`Its published strength categories are ${official.strong.map(titleCaseWords).join(', ')}.`);
    if (official.canBeParalysed === false) notes.push('It is listed as resistant to paralysis.');
    if (official.seesInvisible) notes.push('It is listed as able to perceive invisible creatures.');
    notes.push('The public library does not expose attack intervals, raw damage bounds, movement speed, target-change chance, spawn density, or respawn interval, so those values must come from a server-specific primary source.');
    return notes.join(' ');
  }
  const notes = [];
  const targetDistance = Number(record.flags.targetdistance);
  const runOnHealth = Number(record.flags.runonhealth);
  const vulnerabilities = Object.entries(record.elements).filter(([, value]) => Number(value) < 0);
  const resistances = Object.entries(record.elements).filter(([, value]) => Number(value) > 0);
  if (record.flags.hostile === 1) notes.push(`${record.displayName} is configured as hostile and can enter combat without player initiation.`);
  if (targetDistance > 1) notes.push(`Its target-distance setting is ${targetDistance}, so positioning and line-of-sight control matter more than they do against a purely adjacent attacker.`);
  else notes.push('Its target-distance setting favors adjacent engagement, although configured beams, waves, or ranged attacks can still reach farther.');
  if (runOnHealth > 0) notes.push(`It begins trying to flee below ${runOnHealth} health, which can lengthen the final portion of a kill if paths remain open.`);
  if (record.summons.length > 0) notes.push(`The definition includes ${record.summons.length} summon rule ${record.summons.length === 1 ? 'entry' : 'entries'}, so target count and tile control can change during the encounter.`);
  if (vulnerabilities.length > 0) notes.push(`Negative element modifiers identify increased incoming damage from ${vulnerabilities.map(([key]) => titleCaseWords(key.replace(/Percent$/i, ''))).join(', ')} in this profile.`);
  if (resistances.length > 0) notes.push(`Positive element modifiers reduce incoming ${resistances.map(([key]) => titleCaseWords(key.replace(/Percent$/i, ''))).join(', ')} damage before final health loss.`);
  return notes.join(' ');
}

function buildMonsterFieldSection(record, maximumHit, isTfsProfile) {
  const name = record.displayName;
  const qualifier = record.seoQualifier || null;
  const vulnerabilities = Object.entries(record.elements)
    .filter(([, value]) => Number(value) < 0)
    .map(([key]) => titleCaseWords(key.replace(/Percent$/i, '')));
  const resistances = Object.entries(record.elements)
    .filter(([, value]) => Number(value) > 0)
    .map(([key]) => titleCaseWords(key.replace(/Percent$/i, '')));
  const officialWeaknesses = record.official?.weakness?.map(titleCaseWords) || [];
  const weaknessPhrase = naturalList(vulnerabilities.length ? vulnerabilities : officialWeaknesses, 'no published elemental weakness');
  const resistanceVerb = resistances.length === 1 ? 'carries' : 'carry';
  const strongestLoot = [...record.loot]
    .sort((left, right) => Number(right.chance || 0) - Number(left.chance || 0))[0];
  const officialLoot = record.official?.loot?.[0];
  const pressure = record.attacks.length > 0
    ? `${record.attacks.length} configured attack ${record.attacks.length === 1 ? 'entry' : 'entries'} and a largest raw XML bound of ${maximumHit}`
    : isTfsProfile
      ? 'no attack entry in the primary monster file'
      : 'an attack cycle that the public library does not expose';
  const behavior = Number(record.flags.targetdistance) > 1
    ? `a preferred target distance of ${record.flags.targetdistance}`
    : record.summons.length > 0
      ? `${record.summons.length} summon rule ${record.summons.length === 1 ? 'entry' : 'entries'}`
      : Number(record.flags.runonhealth) > 0
        ? `a flee threshold of ${record.flags.runonhealth} health`
        : 'no single movement flag that tells the whole encounter story';

  const opening = `${pickEditorial(record.slug, 'monster-opening', [
    `A bestiary number becomes meaningful only when it changes a decision. ${name} brings ${record.health.maximum.toLocaleString('en-US')} health, ${record.experience.toLocaleString('en-US')} base experience, ${pressure}, and ${behavior}.`,
    `On paper, ${name} is ${record.health.maximum.toLocaleString('en-US')} health and ${record.experience.toLocaleString('en-US')} experience. In a corridor, those numbers gain teeth through ${pressure}, ${behavior}, and the terrain around the spawn.`,
    `${name} tells its story in pressure and reward: ${record.health.maximum.toLocaleString('en-US')} health to overcome, ${record.experience.toLocaleString('en-US')} base experience to earn, and ${pressure} to read before the first pull.`,
    `Before a player meets ${name} on the map, the source profile already sketches the encounter: ${record.health.maximum.toLocaleString('en-US')} health, ${record.experience.toLocaleString('en-US')} experience, ${pressure}, and ${behavior}.`,
  ])}${qualifier ? ` The source file identifies this variant as ${qualifier}.` : ''}`;
  const tacticalParagraph = `${resistances.length > 0
    ? `${name}'s elemental profile rewards deliberate spell and weapon choices. The clearest weakness lead is ${weaknessPhrase}, while ${naturalList(resistances)} ${resistanceVerb} positive resistance in this source. Pull size, line of sight, neighboring creatures, and simultaneous attack timing still decide whether that theoretical edge survives contact with the spawn.`
    : `${name}'s clearest weakness lead is ${weaknessPhrase}. With no additional positive elemental modifier recorded here, the practical hunt still turns on positioning, supply depth, neighboring creatures, and the target server's scripts rather than on one attractive damage label.`}${qualifier ? ` The ${qualifier} definition is the profile interpreted here.` : ''}`;
  const rewardParagraph = `${strongestLoot
    ? `${strongestLoot.name || `Item ${strongestLoot.id}`} has the strongest configured loot roll on ${name}'s TFS table at ${formatChance(strongestLoot.chance)}, with up to ${strongestLoot.countmax || 1} per successful entry. Profit, however, is a long conversation between kill speed, supply cost, route density, market demand, and the server's loot multiplier.`
    : officialLoot
      ? `${name}'s official profile names ${officialLoot} among its possible loot without publishing a probability. That is enough to identify a reward, but not enough to promise profit or calculate an expected return.`
      : `${name} offers no direct corpse-loot entry in the available profile. If an encounter still awards something, the answer must be sought in a chest, action script, event controller, participation system, or another server-specific mechanism.`}${qualifier ? ` These reward notes belong specifically to ${qualifier}.` : ''}`;
  const closing = `${pickEditorial(record.slug, 'monster-closing', [
    `Read the room, not only the health bar. ${name} becomes dangerous or manageable through timing, space, and company as much as through a single statistic.`,
    `${name} is a fight, not a spreadsheet row. Use the numbers to prepare, then let a controlled live test settle what the source cannot show.`,
    `The profile gives ${name} a silhouette; the spawn gives it a personality. Density, terrain, and neighboring creatures complete the encounter.`,
    `Good hunting notes preserve context. For ${name}, record the ruleset, spawn, vocation, supplies, and sample size beside every recommendation.`,
  ])}${qualifier ? ` Keep the ${qualifier} label attached when comparing another creature with the same name.` : ''} A player should verify ${name} in the actual spawn before turning these numbers into a route recommendation.`;

  return {
    id: 'field-notes',
    title: `Reading the ${name} encounter`,
    blocks: [
      { type: 'paragraph', text: opening },
      { type: 'paragraph', text: tacticalParagraph },
      { type: 'paragraph', text: rewardParagraph },
      { type: 'callout', tone: 'insight', title: 'A hunter\'s note', text: closing },
    ],
  };
}

function buildMonsterArticle(record) {
  const isTfsProfile = record.sourceProfile === 'tfs';
  const official = record.official || null;
  const qualifierText = record.seoQualifier ? ` Source definition: ${record.seoQualifier}.` : '';
  const maximumHit = Math.max(0, ...record.attacks.flatMap((attack) => [Math.abs(Number(attack.min) || 0), Math.abs(Number(attack.max) || 0)]));
  const defenseRows = [
    ...Object.entries(record.defenses.base).map(([key, value]) => [titleCaseWords(key), formatRawValue(value), 'Base defense profile']),
    ...Object.entries(record.elements).map(([key, value]) => [titleCaseWords(key.replace(/Percent$/i, '')), `${value}%`, Number(value) >= 0 ? 'Resistance' : 'Vulnerability']),
    ...Object.entries(record.immunities).filter(([, value]) => Number(value) !== 0).map(([key]) => [titleCaseWords(key), 'Immune', 'Condition or damage immunity']),
  ];
  if (official) {
    defenseRows.push(
      ...(official.strong || []).map((element) => [titleCaseWords(element), 'Strong', 'Current official library category; no percentage published']),
      ...(official.weakness || []).map((element) => [titleCaseWords(element), 'Weak', 'Current official library category; no percentage published']),
      ...(official.immune || []).map((element) => [titleCaseWords(element), 'Immune', 'Current official library category']),
      ...(official.healed || []).map((element) => [titleCaseWords(element), 'Healed', 'Current official library category']),
    );
  }
  const attackRows = record.attacks.map((attack) => [
    titleCaseWords(attack.name || attack.script || 'Configured attack'),
    attack.chance !== undefined ? `${attack.chance}% per ${formatMilliseconds(attack.interval)}` : `Every ${formatMilliseconds(attack.interval)}`,
    `${Math.abs(Number(attack.min) || 0)}-${Math.abs(Number(attack.max) || 0)}`,
    attack.range || attack.radius || attack.length || 'Adjacent or script-defined',
    Object.keys(attack.attributes).length > 0
      ? Object.entries(attack.attributes).map(([key, value]) => `${titleCaseWords(key)}: ${value}`).join('; ')
      : 'No extra XML effect attribute',
  ]);
  const lootRows = record.loot.map((loot) => [
    linkCell(loot.name || `Item ${loot.id}`, loot.itemPath),
    String(loot.id || 'Script-defined'),
    formatChance(loot.chance),
    String(loot.countmax || 1),
  ]);
  const officialLootLinkMap = new Map((official?.lootLinks || []).map((loot) => [loot.name.toLowerCase(), loot.itemPath]));
  const officialLootRows = (official?.loot || []).map((lootName) => [
    linkCell(lootName, officialLootLinkMap.get(lootName.toLowerCase())),
    'Named loot',
    'No exact chance published',
  ]);
  const flagRows = Object.entries(record.flags).map(([key, value]) => [titleCaseWords(key), formatRawValue(value)]);
  const summonRows = record.summons.map((summon) => [
    summon.name || 'Unnamed summon',
    summon.chance !== undefined ? `${summon.chance}%` : 'Not defined',
    summon.interval !== undefined ? formatMilliseconds(summon.interval) : 'Script-defined',
    summon.max !== undefined ? String(summon.max) : 'Definition-wide limit',
  ]);

  return {
    catalogType: 'monsters',
    entityType: 'monster',
    indexable: true,
    status: 'source-backed',
    collection: 'bestiary',
    slug: record.slug,
    seoQualifier: record.seoQualifier || null,
    name: record.displayName,
    canonicalPath: record.canonicalPath,
    indexPath: '/knowledge/monsters',
    profile: isTfsProfile
      ? official ? 'TFS 1.6 data with current official comparison' : 'TFS 1.6 monster-data reference'
      : 'Current official Tibia creature-library reference',
    reviewedAt: catalogMeta.generatedAt,
    readingMinutes: Math.min(24, 7 + Math.ceil((record.attacks.length + record.loot.length + defenseRows.length) / 20)),
    summary: isTfsProfile
      ? `${record.displayName} is a TFS 1.6 creature profile with ${record.health.maximum.toLocaleString('en-US')} health, ${record.experience.toLocaleString('en-US')} experience, ${record.attacks.length} configured attacks, and ${record.loot.length} loot entries.${qualifierText} This reference traces behavior, elements, immunities, summons, and configured drops${official ? ' alongside current official library facts' : ''}.`
      : `${record.displayName} is a current official Tibia creature-library profile with ${record.health.maximum.toLocaleString('en-US')} hitpoints and ${record.experience.toLocaleString('en-US')} experience. This page records published strengths, weaknesses, status behavior, and named loot without inventing unpublished attack or drop-rate values.`,
    keywords: uniqueKeywords([
      record.name,
      `${record.name} Tibia`,
      `${record.name} monster`,
      `${record.name} loot`,
      `${record.name} weakness`,
      `${record.name} Open Tibia`,
      record.bestiary.class,
      record.seoQualifier,
    ]),
    tags: ['Tibia monsters', isTfsProfile ? 'TFS 1.6 bestiary' : 'Official Tibia creature library', record.race, record.bestiary.class].filter(Boolean),
    facts: [
      { key: 'Health', value: record.health.maximum.toLocaleString('en-US') },
      { key: 'Experience', value: record.experience.toLocaleString('en-US') },
      { key: 'Speed', value: isTfsProfile ? String(record.speed || 'Not defined') : 'Not published' },
      { key: 'Race', value: record.race || official?.race || 'Not defined' },
      { key: 'Attacks', value: isTfsProfile ? String(record.attacks.length) : 'Exact cycle not published' },
      { key: 'Loot entries', value: String(isTfsProfile ? record.loot.length : official?.loot?.length || 0) },
      { key: 'Bestiary class', value: record.bestiary.class || 'Not classified' },
      { key: 'Reference profile', value: isTfsProfile ? 'TFS 1.6' : 'Current official library' },
      ...(record.seoQualifier ? [{ key: 'Source definition', value: record.seoQualifier }] : []),
      ...(official ? [{ key: 'Official profile observed', value: String(official.observedAt || catalogMeta.generatedAt).slice(0, 10) }] : []),
    ],
    sections: [
      buildMonsterFieldSection(record, maximumHit, isTfsProfile),
      {
        id: 'statistics-and-identity',
        title: `${record.displayName} statistics and identity`,
        blocks: [
          {
            type: 'paragraph',
            text: isTfsProfile
              ? `${record.displayName} is defined with ${record.health.maximum.toLocaleString('en-US')} maximum health, ${record.experience.toLocaleString('en-US')} base experience, and speed ${record.speed || 'not explicitly set'} in TFS 1.6. The displayed experience is the creature definition's base value before stages, stamina, party sharing, boosts, prey, server rates, or event multipliers. ${official ? `The current official library separately reports ${official.hitpoints?.toLocaleString('en-US') || 'no numeric health value'} hitpoints and ${official.experience?.toLocaleString('en-US') || 'no numeric experience value'}, so differences remain visible instead of being silently merged.` : 'Server owners can edit these values without changing the creature name.'}`
              : `${record.displayName} is listed by the current official creature library with ${record.health.maximum.toLocaleString('en-US')} hitpoints and ${record.experience.toLocaleString('en-US')} experience. The public library provides categorical strengths, weaknesses, status behavior, and named loot, but it does not publish movement speed, raw attack intervals, exact damage bounds, defense rolls, armor, spawn positions, or respawn intervals.`,
          },
          {
            type: 'table',
            caption: `${record.displayName} core statistics`,
            columns: ['Statistic', 'Value', 'Interpretation'],
            rows: [
              ['Maximum health', record.health.maximum.toLocaleString('en-US'), 'Configured health pool'],
              ['Base experience', record.experience.toLocaleString('en-US'), 'Award before external multipliers'],
              ['Speed', String(record.speed || 'Not defined'), 'Engine movement-speed input'],
              ['Race', record.race || 'Not defined', 'Corpse and effect classification'],
              ['Race ID', String(record.raceId || 'Not defined'), 'Bestiary or protocol reference when present'],
              ['Maximum configured attack bound', String(maximumHit), 'Largest absolute XML min/max value; not a guaranteed final hit'],
              ...(official ? [
                ['Official-library hitpoints', Number(official.hitpoints || 0).toLocaleString('en-US'), 'Current official profile'],
                ['Official-library experience', Number(official.experience || 0).toLocaleString('en-US'), 'Current official profile'],
              ] : []),
            ],
          },
        ],
      },
      {
        id: 'behavior-and-targeting',
        title: 'Behavior, targeting, and movement',
        blocks: [
          {
            type: 'paragraph',
            text: isTfsProfile
              ? `${describeMonsterTactics(record)} Target-change chance, static-attack preference, push permissions, pathfinding, field walking, summons, and scripted abilities collectively determine behavior. The flags below are direct configuration values; they should be read together instead of treating one flag as a complete artificial-intelligence description.`
              : describeMonsterTactics(record),
          },
          ...(flagRows.length > 0 ? [{
            type: 'table',
            caption: `${record.displayName} behavior flags`,
            columns: ['Flag', 'Configured value'],
            rows: flagRows,
          }] : []),
          ...(summonRows.length > 0 ? [{
            type: 'table',
            caption: `${record.displayName} summon rules`,
            columns: ['Summon', 'Chance', 'Interval', 'Limit'],
            rows: summonRows,
          }] : []),
        ],
      },
      {
        id: 'attacks-and-cycle',
        title: 'Attack cycle and combat pressure',
        blocks: [
          {
            type: 'paragraph',
            text: record.attacks.length > 0
              ? `${record.displayName} has ${record.attacks.length} attack ${record.attacks.length === 1 ? 'entry' : 'entries'} in its XML definition. Chance is evaluated within the listed interval by the engine; min and max values are source-level damage inputs and can be changed by scripts, armor rules, resistance, PvP modifiers, conditions, or custom combat callbacks. Range, radius, beam length, spread, target flags, and visual effects reveal the intended shape but do not replace a live positioning test.`
              : isTfsProfile
                ? `${record.displayName} has no attack entry in this XML definition. It may be non-combatant, invulnerable scenery, a scripted encounter object, or a creature whose behavior is delegated elsewhere. Do not invent a damage profile when the primary definition does not provide one.`
                : `The official ${record.displayName} library profile does not publish an exact attack cycle, raw minimum and maximum damage, range, area geometry, condition timing, or targeting logic. Those fields are intentionally marked as unpublished rather than estimated from anecdotes or another server's implementation.`,
          },
          ...(attackRows.length > 0 ? [{
            type: 'table',
            caption: `${record.displayName} configured attacks`,
            columns: ['Attack', 'Chance and interval', 'Raw damage range', 'Range or area', 'Effects'],
            rows: attackRows,
          }] : []),
        ],
      },
      {
        id: 'defense-and-elements',
        title: 'Defense, elements, and immunities',
        blocks: [
          {
            type: 'paragraph',
            text: isTfsProfile
              ? `The defense profile separates base defense and armor from elemental percentages and explicit immunities. In TFS 1.6, a positive monster element percentage reduces incoming damage of that element, while a negative percentage increases it. Current official strength and weakness labels are shown as categories without inventing a percentage. Custom servers can change those values, bypass them in scripts, or add encounter phases.`
              : `The current official library identifies strong, weak, immune, and healing damage categories for ${record.displayName} but does not publish exact percentages. Those qualitative labels are preserved exactly as categories. Converting "strong" or "weak" into a made-up numeric modifier would create false precision, so percentage math requires a separate verified game or server source.`,
          },
          ...(defenseRows.length > 0 ? [{
            type: 'table',
            caption: `${record.displayName} defensive profile`,
            columns: ['Defense layer', 'Value', 'Meaning'],
            rows: defenseRows,
          }] : [{
            type: 'callout',
            tone: 'info',
            title: 'No explicit modifier table',
            text: `${record.displayName}'s monster file does not declare base defense, armor, elemental percentages, or immunities. Engine defaults and scripted encounter logic still apply.`,
          }]),
        ],
      },
      {
        id: 'loot-table',
        title: 'Complete configured loot table',
        blocks: [
          {
            type: 'paragraph',
            text: record.loot.length > 0
              ? `${record.displayName} contains ${record.loot.length} flattened loot ${record.loot.length === 1 ? 'entry' : 'entries'}. Base chance is shown against the TFS 100,000-point scale, where 100,000 means 100% before external loot multipliers. Count maximum is the upper stack bound when a successful roll creates a stackable item. Nested container contents are preserved as individual rows in the source data.`
              : officialLootRows.length > 0
                ? `The current official library names ${officialLootRows.length} possible ${record.displayName} loot ${officialLootRows.length === 1 ? 'item' : 'items'} but does not publish exact drop probabilities or stack ranges. The names are useful acquisition evidence; they must not be converted into fabricated percentages. An Open Tibia implementation can use a different list or deliver rewards outside the corpse.`
                : `${record.displayName} has no loot entry in the available primary profile. A reward may still be delivered by a boss chest, storage action, event script, achievement, quest, participation system, or custom corpse callback, but this source does not support claiming a direct corpse drop.`,
          },
          ...(lootRows.length > 0 ? [{
            type: 'table',
            caption: `${record.displayName} loot`,
            columns: ['Item', 'Item ID', 'Base chance', 'Maximum count'],
            rows: lootRows,
          }] : []),
          ...(officialLootRows.length > 0 ? [{
            type: 'table',
            caption: `${record.displayName} current official named loot`,
            columns: ['Item', 'Official evidence', 'Probability'],
            rows: officialLootRows,
          }] : []),
        ],
      },
      {
        id: 'hunting-and-verification',
        title: 'Hunting plan and server verification',
        blocks: [
          {
            type: 'paragraph',
            text: `A safe hunting recommendation for ${record.displayName} must combine the available profile with spawn density, neighboring creatures, terrain, access, vocation, skills, equipment, supplies, latency, death penalty, and the target server's rates. No universal level bracket can be authenticated from a creature-library or monster XML record alone. ${isTfsProfile ? 'Use the largest configured attack bounds as stress-test inputs, account for simultaneous attacks and summons, then verify the actual spawn.' : 'Obtain attack-cycle and spawn data from the target server, then test the encounter under controlled conditions.'} Present a level recommendation only with that profile and evidence attached.`,
          },
          {
            type: 'list',
            items: [
              isTfsProfile ? 'Confirm health, experience, attack intervals, and elemental modifiers against the deployed monster file.' : 'Confirm current health, experience, strength, weakness, immunity, and loot labels against the official creature profile.',
              'Inspect the map spawn file for count, radius, placement, and respawn interval; those values are not stored in this monster definition.',
              'Test line of sight, diagonal movement, field walking, target switching, fleeing, summons, and push behavior.',
              'Record corpse loot over a statistically meaningful sample before evaluating a customized loot rate.',
              'Publish the server profile and review date with any route, level range, profit estimate, or supply recommendation.',
            ],
          },
        ],
      },
    ],
    sources: isTfsProfile
      ? [
        sourceForRecord(record, 'monsters'),
        knowledgeSourceRegistry.tfsRelease,
        knowledgeSourceRegistry.tfsLootScale,
        knowledgeSourceRegistry.tfsMonsterResistance,
        ...(official ? [officialSourceForRecord(record, 'monsters'), knowledgeSourceRegistry.officialCreatureLibrary, knowledgeSourceRegistry.tibiaDataTransport] : []),
      ]
      : [sourceForRecord(record, 'monsters'), knowledgeSourceRegistry.officialCreatureLibrary, knowledgeSourceRegistry.officialCombatManual, knowledgeSourceRegistry.tibiaDataTransport],
    relatedPaths: getRelatedMonsterPaths(record),
    relatedServerSearches: [record.name, record.bestiary.class || 'TFS 1.6 monsters', record.race || 'Tibia monsters'],
  };
}

function buildSpellFieldSection(record, categoryLabel, isTfsProfile) {
  const name = record.displayName;
  const variants = record.variants;
  const words = record.words.filter(Boolean);
  const levels = variants.map((variant) => Number(variant.level)).filter(Number.isFinite);
  const manaCosts = unique(variants.map((variant) => variant.mana).filter((value) => value !== undefined));
  const cooldowns = unique(variants.map((variant) => variant.cooldown).filter((value) => Number.isFinite(Number(value))));
  const levelPhrase = levels.length > 0 ? `level ${Math.min(...levels)}` : 'no published minimum level';
  const manaPhrase = manaCosts.length > 0 ? `${naturalList(manaCosts.map(String))} mana` : 'a cost not defined in this profile';
  const cooldownPhrase = cooldowns.length > 0 ? naturalList(cooldowns.map(formatMilliseconds)) : 'no published individual cooldown';
  const vocationPhrase = naturalList(record.vocations, 'no explicit vocation list');
  const combatPhrase = naturalList(record.combatTypes.map(titleCaseWords), 'utility or script-defined magic');
  const spokenPhrase = naturalList(words.map((entry) => `"${entry}"`), 'rune use or script invocation');
  const scriptSignals = variants.reduce((sum, variant) => sum + (
    variant.signals.combatTypes.length
    + variant.signals.areas.length
    + variant.signals.conditions.length
    + variant.signals.formulas.length
  ), 0);
  const categoryPerspective = {
    attack: `${name} competes for a moment when damage matters more than every other available action. Range, area, target rules, resistance, PvP reduction, and the shared attack-group cooldown decide whether that moment is brilliant or wasteful.`,
    conjuring: `${name} moves cost forward in time. Mana and soul are paid during preparation, inventory carries the result, and charges determine how many future decisions that preparation can support.`,
    healing: `${name} is measured against danger already in motion. Cast too early and resources drift away; cast too late and the strongest formula is irrelevant. Cooldown overlap, incoming burst, and the next available defensive action matter beside raw healing.`,
    house: `${name} belongs to the language of ownership rather than combat. Access rights, house state, command parsing, and the deployed server's housing rules give the words their authority.`,
    support: `${name} earns its place by changing the shape of a problem rather than merely adding damage. Duration, condition immunity, positioning, group cooldowns, and party coordination determine whether that utility becomes memorable.`,
  }[record.category] || `${name} must be read as part of a spell system, not as an isolated incantation. Requirements, target rules, scripts, and shared cooldowns complete its role.`;

  const opening = pickEditorial(record.slug, 'spell-opening', [
    `A spell is heard before it is understood. For ${name}, the public face is ${spokenPhrase}; behind it sit ${levelPhrase}, ${manaPhrase}, ${cooldownPhrase}, and access for ${vocationPhrase}.`,
    `${name} begins as a phrase, ${spokenPhrase}, but its real rhythm lives in requirements and recovery: ${levelPhrase}, ${manaPhrase}, ${cooldownPhrase}, and ${vocationPhrase}.`,
    `Every cast tells two stories: the effect that flashes on screen and the decision that follows. ${name} asks for ${manaPhrase} from ${vocationPhrase}, begins at ${levelPhrase}, and leaves ${cooldownPhrase} before the same action is ready again.`,
    `The words ${spokenPhrase} are only the doorway into ${name}. The registry adds ${levelPhrase}, ${manaPhrase}, ${cooldownPhrase}, ${combatPhrase}, and ${vocationPhrase}.`,
  ]);
  const implementationParagraph = isTfsProfile
    ? `${name}'s bound source exposes ${scriptSignals} direct implementation ${scriptSignals === 1 ? 'signal' : 'signals'} across combat types, areas, conditions, and formula declarations. That is enough to trace the intended machinery, but callbacks and shared helpers can still hold decisive math outside the immediate script.`
    : `${name}'s official profile identifies ${combatPhrase}, but it does not publish executable formulas, area constants, target flags, or callback code. The omission is a boundary, not an invitation to fill the gap with a remembered value from another server.`;
  const closing = `${pickEditorial(record.slug, 'spell-closing', [
    `${name} should feel deliberate. Read the cost, watch the cooldown, understand the target rule, and leave room for the action that must come next.`,
    `The brightest effect is not always the wisest cast. ${name} earns its value when timing, target, and recovery all support the encounter.`,
    `${name} lives inside a rotation, not outside it. Its true price includes the spell-group window and every option unavailable while that window closes.`,
    `A clean test of ${name} changes one variable at a time. Level, skill, resistance, target geometry, and PvP state should never blur into one anecdotal number.`,
  ])} A player should test ${name} on the intended ruleset before treating one observed result as a lasting formula.`;

  return {
    id: 'field-notes',
    title: `The rhythm of ${name}`,
    blocks: [
      { type: 'paragraph', text: opening },
      { type: 'paragraph', text: categoryPerspective },
      { type: 'paragraph', text: implementationParagraph },
      { type: 'callout', tone: 'insight', title: 'A caster\'s note', text: closing },
    ],
  };
}

function buildSpellArticle(record) {
  const isTfsProfile = record.sourceProfile === 'tfs';
  const official = record.official || null;
  const variantRows = record.variants.map((variant) => [
    titleCaseWords(variant.registryType),
    variant.words || 'Rune use or script invocation',
    String(variant.level ?? 'Not defined'),
    String(variant.magiclevel ?? 'Not defined'),
    String(variant.mana ?? 'Not defined'),
    String(variant.soul ?? '0'),
    formatMilliseconds(variant.cooldown),
    variant.vocations.join(', ') || 'No vocation restriction in registry entry',
  ]);
  const officialRequirementRows = official ? [[
    titleCaseWords(official.type || 'instant'),
    official.formula || 'No spoken formula published',
    String(official.level ?? 'Not defined'),
    String(official.rune?.magicLevel ?? 'Not defined'),
    String(official.mana ?? 'Not defined'),
    String(official.soulPoints ?? '0'),
    official.cooldownSeconds !== null ? `${official.cooldownSeconds} seconds` : 'Not published',
    (official.vocations || []).join(', ') || 'No vocation restriction published',
  ]] : [];
  const behaviorRows = record.variants.map((variant) => [
    titleCaseWords(variant.registryType),
    variant.group || 'Not defined',
    variant.range ?? (variant.selftarget ? 'Self' : 'Script-defined'),
    variant.needtarget ? 'Required' : variant.selftarget ? 'Self' : variant.direction ? 'Direction' : 'Script-defined',
    variant.aggressive === 0 ? 'No' : 'Yes or group default',
    variant.charges ?? 'Not applicable',
    variant.script || 'No script binding',
  ]);
  const signalRows = record.variants.flatMap((variant) => {
    const signals = variant.signals;
    return [[
      variant.script || titleCaseWords(variant.registryType),
      signals.combatTypes.join(', ') || 'No direct combat type token',
      signals.areas.join(', ') || 'Target or script-defined',
      signals.conditions.join(', ') || 'No condition token detected',
      signals.formulas.join(' | ') || 'No setFormula call detected',
    ]];
  });
  const categoryLabel = spellCategoryLabels[record.category] || titleCaseWords(record.category);
  const minimumLevel = Math.min(...record.variants.map((variant) => Number(variant.level)).filter(Number.isFinite));
  const manaValues = unique(record.variants.map((variant) => variant.mana));
  const sourceScriptRecords = record.variants
    .map((variant) => variant.signals)
    .filter((signals) => signals.sourceUrl)
    .map((signals, index) => ({
      id: `tfs-spell-script-${record.slug}-${index}`,
      label: `${record.displayName} implementation script${index > 0 ? ` ${index + 1}` : ''}`,
      href: signals.sourceUrl,
      authority: 'Primary spell script',
      scope: `Combat type, area, condition, and formula declarations used by this ${record.displayName} variant.`,
    }));

  return {
    catalogType: 'spells',
    entityType: 'spell',
    indexable: true,
    status: 'source-backed',
    collection: 'combat',
    slug: record.slug,
    name: record.displayName,
    canonicalPath: record.canonicalPath,
    indexPath: '/knowledge/spells',
    profile: isTfsProfile
      ? official ? 'TFS 1.6 spell data with current official comparison' : 'TFS 1.6 player-spell reference'
      : 'Current official Tibia spell-library reference',
    reviewedAt: catalogMeta.generatedAt,
    readingMinutes: 8 + Math.min(5, record.variants.length),
    summary: isTfsProfile
      ? `${record.displayName} is documented as ${categoryLabel.toLowerCase()} in TFS 1.6 with ${record.variants.length} registry ${record.variants.length === 1 ? 'entry' : 'entries'}, casting requirements, cooldowns, vocation access, and source-level behavior signals${official ? ' compared with the current official spell library' : ''}.`
      : `${record.displayName} is a current official Tibia ${categoryLabel.toLowerCase()} entry with published words, level, mana, cooldown, vocation access, premium status, and magic type. Unpublished Open Tibia implementation formulas are not invented.`,
    keywords: uniqueKeywords([
      record.name,
      `${record.name} Tibia`,
      `${record.name} spell`,
      `${record.name} mana`,
      `${record.name} cooldown`,
      record.words.join(' '),
      ...record.vocations,
    ]),
    tags: [categoryLabel, 'Tibia spells', isTfsProfile ? 'TFS 1.6 spells' : 'Official Tibia spells', ...record.combatTypes.map(titleCaseWords)],
    facts: [
      { key: 'Spell class', value: categoryLabel },
      { key: 'Words', value: record.words.join(' / ') || 'Rune or script invocation' },
      { key: 'Minimum level', value: Number.isFinite(minimumLevel) ? String(minimumLevel) : 'Not defined' },
      { key: 'Mana values', value: manaValues.length > 0 ? manaValues.join(' / ') : 'Not defined' },
      { key: 'Vocations', value: record.vocations.join(', ') || 'No registry restriction' },
      { key: 'Combat types', value: record.combatTypes.map(titleCaseWords).join(', ') || 'Utility or script-defined' },
      { key: 'Reference profile', value: isTfsProfile ? 'TFS 1.6' : 'Current official library' },
      ...(official ? [{ key: 'Official profile observed', value: String(official.observedAt || catalogMeta.generatedAt).slice(0, 10) }] : []),
    ],
    sections: [
      buildSpellFieldSection(record, categoryLabel, isTfsProfile),
      {
        id: 'requirements-and-words',
        title: `${record.displayName} requirements and spell words`,
        blocks: [
          {
            type: 'paragraph',
            text: isTfsProfile
              ? `${record.displayName} is represented by ${record.variants.length} player-facing TFS registry ${record.variants.length === 1 ? 'entry' : 'entries'}. Instant entries define spoken words and casting requirements; rune entries define use requirements, rune item ID, charges, target rules, and their own execution script. ${official ? 'A separate official-library table follows so current values can be compared without overwriting the Open Tibia implementation profile.' : 'A conjuring entry and the resulting rune-use entry are separate mechanical actions even when they share the same public name.'}`
              : `${record.displayName} is represented by the current official spell-library profile. The table records the published words, type, level, magic-level requirement when available, mana, soul cost, cooldown, and vocation access. Exact Open Tibia script bindings and formulas are intentionally left unclaimed when no TFS implementation maps to this spell.`,
          },
          {
            type: 'table',
            caption: `${record.displayName} casting requirements`,
            columns: ['Registry type', 'Words or activation', 'Level', 'Magic level', 'Mana', 'Soul', 'Cooldown', 'Vocations'],
            rows: variantRows,
          },
          ...(isTfsProfile && officialRequirementRows.length > 0 ? [{
            type: 'table',
            caption: `${record.displayName} current official requirements`,
            columns: ['Type', 'Words', 'Level', 'Magic level', 'Mana', 'Soul', 'Cooldown', 'Vocations'],
            rows: officialRequirementRows,
          }] : []),
        ],
      },
      {
        id: 'targeting-and-behavior',
        title: 'Targeting, aggression, and execution',
        blocks: [
          {
            type: 'paragraph',
            text: isTfsProfile
              ? `Registry flags determine whether ${record.displayName} needs a target, uses the caster, follows direction, can cross distance, blocks on walls or solid objects, consumes charges, and counts as aggressive. The spell group also controls shared cooldown behavior. The execution script can add area geometry, combat types, conditions, callbacks, item creation, summons, or other effects that do not appear in the one-line registry entry.`
              : `The current official profile identifies ${record.displayName} as ${categoryLabel.toLowerCase()} with ${official?.type || 'an unspecified'} activation type and ${official?.damageType ? `${titleCaseWords(official.damageType)} magic` : 'no published damage type'}. It does not expose target flags, wall blocking, area constants, script callbacks, or protection-zone checks. Those implementation details require the target server's spell registry and scripts.`,
          },
          {
            type: 'table',
            caption: `${record.displayName} behavior registry`,
            columns: ['Variant', 'Group', 'Range', 'Targeting', 'Aggressive', 'Charges', 'Script'],
            rows: behaviorRows,
          },
        ],
      },
      {
        id: 'implementation-signals',
        title: 'Damage, area, conditions, and formulas',
        blocks: [
          {
            type: 'paragraph',
            text: isTfsProfile
              ? `The implementation signals below are extracted from pinned Lua scripts without guessing missing values. Combat tokens identify declared damage families, area constants identify reusable shapes, condition tokens identify status effects, and setFormula arguments expose formula declarations when the script uses the standard combat API. A callback can still calculate values elsewhere, so an empty formula cell means no direct declaration was detected rather than zero effect.`
              : `The official library does not publish executable Lua, an engine formula, area constants, callback code, or raw scaling coefficients for ${record.displayName}. The table therefore records the published magic type and marks script-only fields as unavailable. This avoids presenting a community estimate or a different server's implementation as current official math.`,
          },
          {
            type: 'table',
            caption: `${record.displayName} source-level implementation signals`,
            columns: ['Script', 'Combat type', 'Area', 'Conditions', 'Formula declaration'],
            rows: signalRows,
          },
        ],
      },
      {
        id: 'resource-and-cooldown-economy',
        title: 'Resource cost and cooldown economy',
        blocks: [
          {
            type: 'paragraph',
            text: `Evaluate ${record.displayName} by both immediate cost and opportunity cost. Mana and soul are paid when the relevant variant succeeds under the active rules, while the individual cooldown and group cooldown determine what can be cast next. Rune charges move part of that cost into preparation and inventory capacity. Premium, learned-spell, weapon, vocation, level, magic-level, target, range, and protection-zone checks can reject a cast before the effect executes.`,
          },
          {
            type: 'list',
            items: [
              'Compare individual cooldown with the shared spell-group cooldown.',
              'Separate rune-conjuring cost from rune-use requirements and remaining charges.',
              'Verify whether failed casts consume resources or establish cooldowns on the deployed engine.',
              'Test PvP reduction, protection-zone restrictions, wall blocking, and target legality independently.',
            ],
          },
        ],
      },
      {
        id: 'vocation-and-tactical-use',
        title: 'Vocation access and tactical use',
        blocks: [
          {
            type: 'paragraph',
            text: record.vocations.length > 0
              ? `${record.displayName} is registered for ${record.vocations.join(', ')} in this profile. That list describes permission, not tactical value by itself. Damage and healing outcomes depend on the implementation formula, level, magic level, skills, target resistance, equipment modifiers, critical systems, server multipliers, and encounter geometry. A rotation guide should test those values on the exact server rather than importing official-world assumptions.`
              : `${record.displayName} has no vocation child in its registry entry. This can indicate a house command, general utility action, rune-use definition, or another spell whose permission is controlled outside the vocation list. Verify account state, access, premium requirements, and script checks before describing it as universally available.`,
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'Server spellbooks can diverge',
            text: `Words, requirements, formulas, cooldowns, vocations, visuals, and even the purpose of ${record.displayName} can be edited by a server owner. This entry documents ${isTfsProfile ? 'the pinned TFS 1.6 profile and any separately labeled current official comparison' : 'the current official library profile; Open Tibia implementations require their own verification'}.`,
          },
        ],
      },
      {
        id: 'verification-checklist',
        title: 'Verification checklist',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Confirm the registry', text: isTfsProfile ? 'Compare name, words, IDs, requirements, cooldowns, groups, target flags, and script binding with the deployed spells.xml.' : 'Compare the official words, group, type, level, mana, soul, cooldown, vocation, and premium facts with the current official library.' },
              { title: 'Read every bound script', text: isTfsProfile ? 'Trace combat objects, areas, formulas, callbacks, conditions, created items, and helper modules used by each variant.' : 'For an Open Tibia implementation, locate the deployed registry and script before claiming area, formula, condition, or target behavior.' },
              { title: 'Test boundary conditions', text: 'Check minimum level, magic level, mana, soul, vocation, premium, range, walls, target legality, protection zones, cooldown groups, and charges.' },
              { title: 'Record observable output', text: 'Measure results over controlled level, skill, equipment, resistance, and PvP cases before publishing calculated ranges.' },
            ],
          },
        ],
      },
    ],
    sources: isTfsProfile
      ? [
        sourceForRecord(record, 'spells'),
        ...sourceScriptRecords,
        knowledgeSourceRegistry.tfsSpellEngine,
        knowledgeSourceRegistry.tfsRelease,
        ...(official ? [officialSourceForRecord(record, 'spells'), knowledgeSourceRegistry.officialSpellLibrary, knowledgeSourceRegistry.tibiaDataTransport] : []),
      ]
      : [sourceForRecord(record, 'spells'), knowledgeSourceRegistry.officialSpellLibrary, knowledgeSourceRegistry.officialMagicManual, knowledgeSourceRegistry.tibiaDataTransport],
    relatedPaths: getRelatedSpellPaths(record),
    relatedServerSearches: [record.name, record.vocations[0] || 'TFS 1.6 spells', categoryLabel],
  };
}

function uniqueKeywords(values) {
  return [...new Set(values.map((value) => String(value || '').trim()).filter(Boolean))].slice(0, 18);
}

function neighbors(records, record, predicate, count) {
  const candidates = records.filter((candidate) => candidate.slug !== record.slug && predicate(candidate));
  const index = candidates.findIndex((candidate) => candidate.name.localeCompare(record.name) >= 0);
  const start = Math.max(0, index < 0 ? candidates.length - count : index - Math.floor(count / 2));
  return candidates.slice(start, start + count);
}

function getRelatedItemPaths(record) {
  const lootPaths = [
    ...record.lootSources.slice(0, 2).map((source) => source.monsterPath),
    ...(record.officialLootSources || []).slice(0, 2).map((source) => source.monsterPath),
  ];
  const itemPaths = neighbors(itemRecords, record, (candidate) => candidate.category === record.category, 4)
    .map((candidate) => candidate.canonicalPath);
  return unique([...lootPaths, ...itemPaths]).slice(0, 6);
}

function getRelatedMonsterPaths(record) {
  const lootPaths = [
    ...record.loot.filter((loot) => loot.itemPath).slice(0, 3).map((loot) => loot.itemPath),
    ...(record.official?.lootLinks || []).slice(0, 3).map((loot) => loot.itemPath),
  ];
  const className = record.bestiary.class;
  const monsterPaths = monsterRecords
    .filter((candidate) => candidate.slug !== record.slug && (
      (className && candidate.bestiary.class === className)
      || candidate.race === record.race
    ))
    .sort((left, right) => Math.abs(left.experience - record.experience) - Math.abs(right.experience - record.experience))
    .slice(0, 4)
    .map((candidate) => candidate.canonicalPath);
  return unique([...monsterPaths, ...lootPaths]).slice(0, 6);
}

function getRelatedSpellPaths(record) {
  const spellPaths = spellRecords
    .filter((candidate) => candidate.slug !== record.slug && (
      candidate.category === record.category
      || candidate.vocations.some((vocation) => record.vocations.includes(vocation))
    ))
    .slice(0, 5)
    .map((candidate) => candidate.canonicalPath);
  return unique([...record.itemPaths, ...spellPaths]).slice(0, 6);
}

export function getKnowledgeCatalogMeta() {
  return catalogMeta;
}

export function getKnowledgeCatalogDefinition(type) {
  return knowledgeCatalogDefinitions[type] || null;
}

export function getKnowledgeCatalogRecord(type, slug) {
  return recordMaps[type]?.get(slug) || null;
}

export function getKnowledgeCatalogArticle(type, slug) {
  const record = getKnowledgeCatalogRecord(type, slug);
  if (!record) return null;
  if (type === 'items') return buildItemArticle(record);
  if (type === 'monsters') return buildMonsterArticle(record);
  if (type === 'spells') return buildSpellArticle(record);
  return null;
}

export function getKnowledgeCatalogArticleByPath(pathname) {
  const [, knowledge, type, slug] = pathname.split('/');
  if (knowledge !== 'knowledge' || !type || !slug) return null;
  return getKnowledgeCatalogArticle(type, slug);
}

export function getKnowledgeCatalogIndex(type, { category = '', page = 1, pageSize = 48, query = '' } = {}) {
  const definition = getKnowledgeCatalogDefinition(type);
  const records = catalogRecords[type] || [];
  const normalizedQuery = String(query).trim().toLocaleLowerCase('en-US');
  const normalizedCategory = String(category).trim().toLocaleLowerCase('en-US');
  const filtered = records.filter((record) => {
    if (normalizedCategory && getRecordCategory(record, type) !== normalizedCategory) return false;
    if (!normalizedQuery) return true;
    const searchable = [
      record.name,
      record.slug,
      getRecordCategory(record, type),
      record.race,
      record.bestiary?.class,
      ...(record.words || []),
      ...(record.vocations || []),
    ].filter(Boolean).join(' ').toLocaleLowerCase('en-US');
    return searchable.includes(normalizedQuery);
  });
  const safePageSize = Math.min(100, Math.max(12, Number(pageSize) || 48));
  const totalPages = Math.max(1, Math.ceil(filtered.length / safePageSize));
  const currentPage = Math.min(totalPages, Math.max(1, Number(page) || 1));
  const start = (currentPage - 1) * safePageSize;
  const categoryLabels = new Map();
  const categoryCounts = Object.entries(records.reduce((counts, record) => {
    const recordCategory = getRecordCategory(record, type);
    if (!recordCategory) return counts;
    counts[recordCategory] = (counts[recordCategory] || 0) + 1;
    categoryLabels.set(recordCategory, getRecordCategoryLabel(record, type));
    return counts;
  }, {})).map(([slug, count]) => ({
    slug,
    count,
    label: categoryLabels.get(slug) || definition?.categoryLabels[slug] || titleCaseWords(slug),
  })).sort((left, right) => right.count - left.count || left.label.localeCompare(right.label));

  return {
    definition,
    records: filtered.slice(start, start + safePageSize),
    total: filtered.length,
    totalPages,
    currentPage,
    pageSize: safePageSize,
    categoryCounts,
  };
}

export function getKnowledgeCatalogCard(record, type) {
  if (type === 'items') {
    return {
      path: record.canonicalPath,
      name: record.displayName,
      eyebrow: itemCategoryLabels[record.category] || titleCaseWords(record.category),
      summary: `${record.identifierCount} item ${record.identifierCount === 1 ? 'identifier' : 'identifiers'}, ${Object.keys(record.attributes).length} XML attributes, ${record.lootSources.length} recorded loot sources.`,
      facts: [
        `${record.variants.length} ${record.variants.length === 1 ? 'variant' : 'variants'}`,
        (record.lootSources.length + (record.officialLootSources?.length || 0)) > 0
          ? `${record.lootSources.length} TFS drops / ${record.officialLootSources?.length || 0} official mentions`
          : 'No direct monster loot',
      ],
    };
  }

  if (type === 'monsters') {
    const isTfsProfile = record.sourceProfile === 'tfs';
    return {
      path: record.canonicalPath,
      name: record.displayName,
      eyebrow: record.bestiary.class || record.race || 'Creature',
      summary: isTfsProfile
        ? `${record.health.maximum.toLocaleString('en-US')} health, ${record.experience.toLocaleString('en-US')} experience, ${record.attacks.length} attacks, and ${record.loot.length} exact TFS loot entries${record.official ? ' with a current official comparison' : ''}.`
        : `${record.health.maximum.toLocaleString('en-US')} hitpoints, ${record.experience.toLocaleString('en-US')} experience, and ${record.official?.loot?.length || 0} current official named loot entries.`,
      facts: [
        isTfsProfile ? `Speed ${record.speed || 'not defined'}` : `${record.official?.weakness?.length || 0} weakness categories`,
        isTfsProfile
          ? record.flags.isboss ? 'Boss flag' : `${Object.keys(record.elements).length} element modifiers`
          : `${record.official?.strong?.length || 0} strength categories`,
      ],
    };
  }

  return {
    path: record.canonicalPath,
    name: record.displayName,
    eyebrow: spellCategoryLabels[record.category] || titleCaseWords(record.category),
    summary: `${record.variants.length} registry ${record.variants.length === 1 ? 'entry' : 'entries'}, ${record.words.join(' / ') || 'rune or script activation'}, ${record.vocations.length} vocation references.`,
    facts: [
      record.combatTypes.map(titleCaseWords).join(', ') || 'Utility or script-defined',
      record.vocations.slice(0, 2).join(', ') || 'No vocation restriction',
    ],
  };
}

export function getKnowledgeCatalogStaticParams() {
  const itemPriority = itemRecords
    .map((record) => ({
      record,
      score: (record.lootSources.length * 5)
        + (Object.keys(record.attributes).some((key) => ['attack', 'armor', 'defense', 'weaponType', 'slotType'].includes(key)) ? 30 : 0),
    }))
    .sort((left, right) => right.score - left.score || left.record.name.localeCompare(right.record.name))
    .slice(0, 80)
    .map(({ record }) => record);
  const monsterPriority = [...monsterRecords]
    .sort((left, right) => (
      Number(right.flags.isboss || 0) - Number(left.flags.isboss || 0)
      || right.experience - left.experience
      || right.health.maximum - left.health.maximum
    ))
    .slice(0, 100);

  return [
    ...itemPriority.map((record) => ({ type: 'items', slug: record.slug })),
    ...monsterPriority.map((record) => ({ type: 'monsters', slug: record.slug })),
    ...spellRecords.map((record) => ({ type: 'spells', slug: record.slug })),
  ];
}

export function getKnowledgeCatalogSitemapEntries() {
  return Object.entries(catalogRecords).flatMap(([type, records]) => records
    .filter((record) => record.canonicalPath === `/knowledge/${type}/${record.slug}`)
    .map((record) => ({
      path: record.canonicalPath,
      type,
      reviewedAt: catalogMeta.generatedAt,
    })));
}
