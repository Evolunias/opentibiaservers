import { pickKnowledgeSources } from './knowledge-sources.js';

const reviewedAt = '2026-08-02';

export const guideArticles = [
  {
    slug: 'ruleset-verification',
    collection: 'systems',
    entityType: 'system',
    name: 'Open Tibia Ruleset Verification',
    shortName: 'Ruleset Verification',
    canonicalPath: '/knowledge/systems/ruleset-verification',
    status: 'source-backed',
    profile: 'Cross-server verification standard',
    reviewedAt,
    readingMinutes: 11,
    summary:
      'A repeatable evidence standard for separating official behavior, engine defaults, data-pack values, owner claims, live observations, and community reports on Open Tibia servers.',
    keywords: ['Open Tibia ruleset', 'TFS server settings', 'OT server verification', 'Tibia server mechanics'],
    tags: ['verification', 'sources', 'server owners', 'data quality'],
    facts: [
      { key: 'Strongest evidence', value: 'Deployed code/configuration plus a controlled live test' },
      { key: 'Engine default', value: 'A reproducible baseline, not proof of a production server setting' },
      { key: 'Owner statement', value: 'Authoritative for intent, subject to live verification' },
      { key: 'Community report', value: 'Useful corroboration, not sufficient for exact formulas by itself' },
    ],
    sections: [
      {
        id: 'profiles',
        title: 'Every exact fact needs a profile',
        blocks: [
          {
            type: 'paragraph',
            text: 'Open Tibia servers deliberately modify the game. A fact such as Dragon has 1,000 health is meaningful only when attached to a profile such as TFS 1.6 reference data or verified on Server X at a specific date. Without that profile, accurate source data can become false production information.',
          },
          {
            type: 'table',
            caption: 'Evidence layers',
            columns: ['Layer', 'What it establishes', 'What it cannot establish alone'],
            rows: [
              ['Official documentation', 'Current official-game rules and terminology', 'A private server copied those rules'],
              ['Engine tag or commit', 'The implementation at that source revision', 'The live server deployed it unchanged'],
              ['Data pack and configuration', 'Configured values and content definitions', 'Runtime scripts or database overrides are inactive'],
              ['Owner-verified statement', 'The intended production rules', 'The deployment matches the statement'],
              ['Controlled live test', 'Observed behavior under recorded conditions', 'Every untested branch behaves the same'],
              ['Community report', 'Potential issue, change, or player experience', 'Exact causation without reproducible evidence'],
            ],
          },
        ],
      },
      {
        id: 'status-model',
        title: 'Publication status model',
        blocks: [
          {
            type: 'table',
            caption: 'Knowledge-page states',
            columns: ['Status', 'Minimum evidence', 'Presentation rule'],
            rows: [
              ['Source-backed', 'Pinned primary source and named profile', 'Exact values may be indexed with the profile visible'],
              ['Owner verified', 'Authenticated owner claim plus source or live corroboration', 'Show owner verification date and changed fields'],
              ['Observed', 'Controlled live test with conditions and timestamp', 'Describe the test boundary; do not generalize beyond it'],
              ['Partial', 'Some facts sourced; material gaps remain', 'Do not place in the main index or sitemap as a complete guide'],
              ['Disputed', 'Credible sources conflict', 'Show both claims, evidence dates, and the unresolved question'],
              ['Retired', 'Historical profile no longer deployed', 'Preserve for history with a prominent archival label'],
            ],
          },
        ],
      },
      {
        id: 'audit-procedure',
        title: 'Mechanic verification procedure',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Identify the deployment', text: 'Record engine family, tag or commit, client protocol, data pack, world, and test date.' },
              { title: 'Collect intended values', text: 'Read configuration, XML, Lua, database values, and owner documentation.' },
              { title: 'Trace the execution path', text: 'Find the code and callbacks that consume those values, including ordering and rounding.' },
              { title: 'Construct a controlled test', text: 'Change one variable at a time; fix level, skill, equipment, target, zone, and random sample size.' },
              { title: 'Retain evidence', text: 'Store exact input, logs, observed output, commit identifiers, and screenshots where useful.' },
              { title: 'Publish the boundary', text: 'State what was proven, what remains server-dependent, and when the result should be rechecked.' },
            ],
          },
        ],
      },
      {
        id: 'change-control',
        title: 'Change control for a living directory',
        blocks: [
          {
            type: 'list',
            items: [
              'Hash or version source snapshots so a later upstream edit cannot silently change the evidence.',
              'Separate automated telemetry fields from editorial mechanics fields.',
              'Require authenticated owner edits to produce an audit event with old value, new value, actor, and timestamp.',
              'Re-run targeted checks after engine updates, season resets, balance patches, map changes, and website relaunches.',
              'Expire volatile claims such as online counts and event schedules; retain stable formula profiles until a source changes.',
              'Never fill missing facts by copying another server with a similar client version or map label.',
            ],
          },
        ],
      },
    ],
    relatedSlugs: ['combat-damage-pipeline', 'experience-levels', 'quest-access-and-safety'],
    relatedServerSearches: ['verified servers', 'real map', 'custom', 'low rate', 'long term'],
    sources: pickKnowledgeSources('officialCharacterManual', 'officialCombatManual', 'tfsRelease', 'tfsConfiguration'),
  },
  {
    slug: 'magic-plate-armor',
    collection: 'equipment',
    entityType: 'item',
    name: 'Magic Plate Armor',
    shortName: 'Magic Plate Armor',
    canonicalPath: '/knowledge/equipment/magic-plate-armor',
    legacyPaths: ['/knowledge/items/magic-plate-armor'],
    status: 'source-backed',
    profile: 'TFS 1.6 item and Demon-loot reference',
    reviewedAt,
    readingMinutes: 9,
    summary:
      'A source-backed Magic Plate Armor profile covering item ID, armor, weight, slot, reference acquisition, mitigation value, economy role, and Open Tibia overrides.',
    keywords: ['Magic Plate Armor', 'Magic Plate Armor Tibia', 'MPA Tibia', 'Tibia armor 17'],
    tags: ['item', 'armor', 'rare loot', 'equipment'],
    facts: [
      { key: 'Item ID', value: '2472 in the TFS 1.6 data set' },
      { key: 'Armor', value: '17' },
      { key: 'Weight', value: '85.00 oz' },
      { key: 'Slot', value: 'Body armor' },
      { key: 'Reference source', value: 'Demon loot at 88 / 100,000 base chance' },
      { key: 'Base drop percentage', value: '0.088% at rateLoot 1' },
    ],
    sections: [
      {
        id: 'definition',
        title: 'Reference item definition',
        blocks: [
          {
            type: 'paragraph',
            text: 'In the TFS 1.6 item registry, Magic Plate Armor is body armor with item identifier 2472, armor 17, and weight 8,500 hundredths of an ounce, displayed as 85.00 oz in compatible clients. The reference definition does not assign level, vocation, element protection, speed, skill, charge, or decay attributes.',
          },
          {
            type: 'table',
            caption: 'Structured item attributes',
            columns: ['Attribute', 'Reference value', 'Verification note'],
            rows: [
              ['Server item ID', '2472', 'Client sprite IDs and custom OTB mappings can differ'],
              ['Armor', '17', 'Feeds the flat armor total when equipped and enabled'],
              ['Weight', '85.00 oz', 'Capacity systems and custom weight multipliers can alter impact'],
              ['Slot', 'Body', 'Competes with every other body-armor item'],
              ['Requirements', 'None in this item entry', 'Movement or equip scripts can add requirements elsewhere'],
              ['Element protection', 'None in this item entry', 'Upgrade, imbuement, or custom ability systems can add it'],
            ],
          },
        ],
      },
      {
        id: 'mitigation',
        title: 'What armor 17 contributes',
        blocks: [
          {
            type: 'paragraph',
            text: 'Armor 17 is added to armor from the other counted equipment slots before the vocation multiplier. The final total, not the body item alone, determines the native random armor reduction. Replacing armor 15 with armor 17 adds two points to total armor; it does not reduce every physical hit by two and does not provide 17% physical resistance.',
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Flat armor and percentage protection are different',
            text: 'The native armor roll subtracts a bounded integer amount when enabled. Element or physical absorption is evaluated separately and can have a much larger effect against high-damage attacks.',
          },
        ],
      },
      {
        id: 'acquisition',
        title: 'Reference acquisition and rarity',
        blocks: [
          {
            type: 'paragraph',
            text: 'The TFS 1.6 Demon loot definition includes Magic Plate Armor with chance 88 on the 100,000-point base scale: 0.088% at rateLoot 1 before server-specific loot multipliers and callbacks. That is roughly one successful entry per 1,136 independent Demon loot rolls in expectation, not a guarantee. Random variance remains large, and the stock rateLoot setting changes effective results.',
          },
          {
            type: 'formula',
            label: 'Expected base rolls per success',
            expression: 'Expected rolls = 1 / 0.00088 = 1,136.36',
            variables: [
              'Expectation is a long-run average, not a pity timer.',
              'The probability of no drop after n independent base-rate kills is (1 - 0.00088)^n.',
              'Shops, quests, bosses, rewards, upgrades, and owner edits can make the item much more common.',
            ],
          },
        ],
      },
      {
        id: 'server-economy',
        title: 'Why its value changes across servers',
        blocks: [
          {
            type: 'list',
            items: [
              'Loot rate and Demon density alter supply.',
              'Quest chests, NPC shops, starter sets, token shops, or donation stores can remove rarity.',
              'Upgrade, imbuement, tier, socket, or refinement systems can make the base armor only one part of value.',
              'Death loss and item insurance alter replacement demand.',
              'Client era and competing custom armor determine whether armor 17 is progression, prestige, or vendor loot.',
              'Season resets and server age determine accumulated stock.',
            ],
          },
        ],
      },
    ],
    relatedSlugs: ['armor-defense-formulas', 'demon', 'equipment-progression', 'elemental-resistance'],
    relatedServerSearches: ['8.6', 'old school', 'Demon', 'loot', 'economy'],
    sources: pickKnowledgeSources('tfsRelease', 'tfsMagicPlateArmor', 'tfsDemon', 'tfsLootScale', 'tfsConfiguration'),
  },
  {
    slug: 'equipment-progression',
    collection: 'equipment',
    entityType: 'equipment_guide',
    name: 'Equipment Progression and Loadout Design',
    shortName: 'Equipment Progression',
    canonicalPath: '/knowledge/equipment/equipment-progression',
    status: 'source-backed',
    profile: 'Cross-server equipment analysis framework',
    reviewedAt,
    readingMinutes: 13,
    summary:
      'A complete framework for building weapon, shield, helmet, armor, legs, boots, ring, and amulet progression around encounter math instead of item rarity alone.',
    keywords: ['Tibia equipment progression', 'Tibia gear guide', 'Open Tibia equipment', 'Tibia best armor'],
    tags: ['equipment', 'progression', 'loadouts', 'economy'],
    facts: [
      { key: 'Primary decision', value: 'Survival or throughput gain per unit of cost and capacity' },
      { key: 'Flat mitigation', value: 'Armor and defense' },
      { key: 'Percentage mitigation', value: 'Combat-type absorption and field absorption' },
      { key: 'Active attributes', value: 'Skills, magic level, speed, regeneration, leech, critical, reflection, charges, and custom systems' },
    ],
    sections: [
      {
        id: 'slots',
        title: 'Evaluate each slot by its job',
        blocks: [
          {
            type: 'table',
            caption: 'Slot decision map',
            columns: ['Slot', 'Typical contribution', 'High-value comparison'],
            rows: [
              ['Weapon', 'Attack, element, range, hit chance, skill requirement, extra defense', 'Real damage against the target after resistance and attack interval'],
              ['Shield / off-hand', 'Defense, protection, extra attributes, ammunition support', 'Burst reduction and block behavior versus lost two-handed damage'],
              ['Helmet', 'Armor, skills, magic level, protection, mana effects', 'Damage or sustain gain per weight and cost'],
              ['Body armor', 'Largest armor contribution, vocation protection, imbuement slots', 'Encounter-specific protection versus general armor'],
              ['Legs', 'Armor, protection, speed, capacity tradeoff', 'Incremental survival without compromising mobility'],
              ['Boots', 'Speed, armor, regeneration, terrain or condition utility', 'Pathing and escape thresholds versus raw defense'],
              ['Amulet', 'High-impact protection, charges, death protection, utility', 'Expected protection per charge and replacement cost'],
              ['Ring', 'Temporary skill, speed, regeneration, invisibility, protection', 'Uptime, charge duration, and opportunity cost'],
            ],
          },
        ],
      },
      {
        id: 'progression-tree',
        title: 'Build a progression tree from constraints',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Define the next activity', text: 'Name the hunting place, quest, boss, PvP role, or farming route. Generic best-in-slot lists hide encounter needs.' },
              { title: 'Measure the failure mode', text: 'Identify whether deaths come from physical burst, one element, mana drain, speed loss, crowd control, or insufficient damage.' },
              { title: 'Set hard requirements', text: 'Filter by vocation, level, skill, premium, quest access, upgrade tier, capacity, and client support.' },
              { title: 'Compare marginal gains', text: 'Calculate the improvement over the currently equipped item, not the new item in isolation.' },
              { title: 'Price the full lifecycle', text: 'Include charges, imbuements, repair, refinement failure, death loss, resale, and season length.' },
              { title: 'Keep alternate sets', text: 'A fire set, energy set, speed set, death set, and general set can outperform one expensive universal outfit.' },
            ],
          },
        ],
      },
      {
        id: 'comparison',
        title: 'Normalize unlike attributes',
        blocks: [
          {
            type: 'paragraph',
            text: 'Armor, percentage resistance, skill, magic level, speed, leech, and critical chance cannot be ranked by adding tooltip numbers. Convert each candidate into encounter outcomes: damage taken per cycle, healing required per minute, time to kill, supply cost, escape reliability, and probability of surviving the burst envelope.',
          },
          {
            type: 'formula',
            label: 'Simple encounter score',
            expression: 'NetValue = SurvivalGain + ThroughputGain + UtilityGain - LifecycleCost',
            variables: [
              'Each term must use the same hunt duration and server ruleset.',
              'Survival gain should include the actual incoming damage mix.',
              'Lifecycle cost includes consumable charges, death risk, and resale loss, not only purchase price.',
            ],
          },
        ],
      },
      {
        id: 'upgrade-systems',
        title: 'Custom upgrade paths need their own ledger',
        blocks: [
          {
            type: 'list',
            items: [
              'Record every tier, success chance, failure outcome, protection consumable, material cost, and pity rule.',
              'Separate permanent base-item attributes from temporary imbuements and account-wide bonuses.',
              'Test whether percentage bonuses stack additively or sequentially.',
              'Verify whether upgrades survive trade, death, transformation, decay, and season migration.',
              'Compare a high-tier common item with an unmodified rare item using final outcomes, not names.',
            ],
          },
        ],
      },
      {
        id: 'server-profile',
        title: 'Required fields for server-specific item pages',
        blocks: [
          {
            type: 'table',
            caption: 'Minimum item record',
            columns: ['Group', 'Required fields'],
            rows: [
              ['Identity', 'Server item ID, client ID, name, slot, sprite revision, profile version'],
              ['Requirements', 'Level, vocation, skill, magic level, premium, quest, storage, reputation'],
              ['Attributes', 'Attack, defense, extra defense, armor, weight, range, hit chance, speed, skills, protection'],
              ['Systems', 'Critical, leech, reflection, charges, decay, imbuement, sockets, tier, refinement'],
              ['Acquisition', 'Monster and chance profile, quest, NPC, crafting, event, store, owner grant'],
              ['Economy', 'NPC value, market observations, bind state, tradeability, loss behavior, last verified date'],
            ],
          },
        ],
      },
    ],
    relatedSlugs: ['magic-plate-armor', 'armor-defense-formulas', 'elemental-resistance', 'critical-hits'],
    relatedServerSearches: ['custom items', 'upgrade system', 'real map', 'high rate', 'old school'],
    sources: pickKnowledgeSources('tfsRelease', 'tfsItems', 'tfsDefense', 'tfsResistance'),
  },
  {
    slug: 'spell-rune-combat',
    collection: 'combat',
    entityType: 'combat_guide',
    name: 'Spell and Rune Combat System',
    shortName: 'Spells & Runes',
    canonicalPath: '/knowledge/combat/spell-rune-combat',
    status: 'source-backed',
    profile: 'TFS 1.6 spell registry and execution model',
    reviewedAt,
    readingMinutes: 15,
    summary:
      'How instant spells and runes declare words, level, magic level, mana, soul, cooldowns, aggression, targeting, range, damage formulas, charges, and protection-zone behavior.',
    keywords: ['Tibia spells list', 'Tibia rune spells', 'TFS spells XML', 'Open Tibia spell formula'],
    tags: ['spells', 'runes', 'cooldowns', 'combat'],
    facts: [
      { key: 'Spell families', value: 'Instant and rune spells' },
      { key: 'Requirement layers', value: 'Level, magic level, mana or mana percent, soul, vocation, premium, learned state' },
      { key: 'Cooldown layers', value: 'Individual spell and shared group cooldowns' },
      { key: 'Execution layers', value: 'Words or item use, target resolution, eligibility, cost, combat object, effects, cooldown' },
    ],
    sections: [
      {
        id: 'registry',
        title: 'The spell registry is a contract',
        blocks: [
          {
            type: 'paragraph',
            text: 'The TFS spell registry connects a player-facing spell or rune to its script and requirements. A complete entry can define name, incantation, level, magic level, mana cost or percentage, soul cost, premium requirement, vocation access, aggression, target behavior, range, blocking rules, cooldown, shared group, charges, and whether the character must learn it. The script then defines area, damage type, formula, conditions, and visual effects.',
          },
          {
            type: 'table',
            caption: 'Core spell fields',
            columns: ['Field', 'Purpose', 'Common OT override'],
            rows: [
              ['Words / rune ID', 'Selects the action', 'Custom incantation, hotkey, client opcode, or item mapping'],
              ['Level / magic level', 'Progression gate', 'Rebirth, vocation rank, quest, prestige, or no gate'],
              ['Mana / mana percent', 'Casting resource', 'Health, rage, energy, charges, cooldown-only systems'],
              ['Soul', 'Secondary resource cost', 'Disabled, accelerated regeneration, custom resource'],
              ['Cooldown / group', 'Individual and shared timing', 'Global exhaustion, attack exhaustion, vocation-specific groups'],
              ['Aggressive', 'Enables combat and zone restrictions', 'Safe-zone exceptions or custom arena policy'],
              ['Target / range / block walls', 'Resolves valid destination', 'Extended screen, floor targeting, smart targeting'],
              ['Script', 'Formula, area, condition, visuals', 'Most custom-server identity lives here'],
            ],
          },
        ],
      },
      {
        id: 'requirements',
        title: 'Requirement evaluation',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Identify the action', text: 'Match spell words, rune item, target mode, and client action.' },
              { title: 'Validate character gates', text: 'Check vocation, level, magic level, premium, learned state, weapon, and custom storage requirements.' },
              { title: 'Validate world state', text: 'Check protection zone, aggression, floor, line of sight, range, secure mode, target type, and combat lock.' },
              { title: 'Validate resources', text: 'Confirm mana, soul, health, charges, ammunition, or custom resource.' },
              { title: 'Validate exhaustion', text: 'Check both the spell cooldown and every shared cooldown group.' },
              { title: 'Execute and charge', text: 'Run the script, apply damage or effect, consume resources and charges, and add cooldowns according to the implementation.' },
            ],
          },
        ],
      },
      {
        id: 'damage-formulas',
        title: 'Damage and healing formulas belong to the script profile',
        blocks: [
          {
            type: 'paragraph',
            text: 'A registry mana cost does not reveal output. Combat scripts can use level and magic level coefficients, weapon skill, maximum mana, current health, target health, fixed min/max values, or arbitrary Lua. They also choose damage type, area, whether armor or shields block, whether resistance is ignored, whether conditions apply, and whether the caster or top creature is targeted.',
          },
          {
            type: 'formula',
            label: 'Common configurable shape',
            expression: 'Value = random(Min(Level, MagicLevel, Skill), Max(Level, MagicLevel, Skill))',
            variables: [
              'This is a structural pattern, not one universal Tibia formula.',
              'The exact coefficients and rounding must be read from the deployed script.',
              'Area, target, rune charge, and cooldown behavior can matter more than nominal maximum damage.',
            ],
          },
        ],
      },
      {
        id: 'cooldowns',
        title: 'Cooldowns form a graph, not one timer',
        blocks: [
          {
            type: 'paragraph',
            text: 'A cast can start an individual cooldown and one or more shared groups such as attack, healing, support, or special. Another spell may be ready individually but remain blocked by a shared group. Weapon attack speed, item-use exhaustion, movement delays, client prediction, and network latency create additional timing constraints outside the spell entry.',
          },
          {
            type: 'table',
            caption: 'Cooldown audit',
            columns: ['Timer', 'Question'],
            rows: [
              ['Individual spell', 'When can the same spell be cast again?'],
              ['Primary group', 'Which other spells are blocked?'],
              ['Secondary group', 'Does the cast also block support, healing, or special actions?'],
              ['Item use', 'Can a potion, rune, or tool be used during the spell delay?'],
              ['Attack cycle', 'Does casting reset, pause, or coexist with weapon attacks?'],
              ['Client display', 'Does the visible icon match server authority under latency?'],
            ],
          },
        ],
      },
      {
        id: 'complete-record',
        title: 'Minimum complete spell entry',
        blocks: [
          {
            type: 'table',
            caption: 'Required documentation fields',
            columns: ['Group', 'Fields'],
            rows: [
              ['Identity', 'Name, words or rune item, family, vocation, profile version'],
              ['Requirements', 'Level, magic level, mana, mana percent, soul, premium, learned, quest, weapon'],
              ['Timing', 'Individual cooldown, every group cooldown, attack and item-use interaction'],
              ['Targeting', 'Self, target, direction, area, range, floor, wall blocking, secure-mode behavior'],
              ['Output', 'Damage or healing type, exact min/max formula, condition, duration, ticks, critical eligibility'],
              ['Costs', 'Rune charges, ammunition, health, custom resource, reagents'],
              ['PvP', 'Damage scaling, protection-zone rule, skull behavior, party/guild exceptions'],
              ['Sources', 'Registry line, script file, engine profile, live test date'],
            ],
          },
        ],
      },
    ],
    relatedSlugs: ['combat-damage-pipeline', 'critical-hits', 'skills-magic-level', 'protection-zones'],
    relatedServerSearches: ['custom spells', '8.6', 'real map', 'custom vocations', 'runes'],
    sources: pickKnowledgeSources('tfsRelease', 'tfsSpells', 'tfsSpellEngine', 'tfsVocationData'),
  },
  {
    slug: 'quest-access-and-safety',
    collection: 'quests',
    entityType: 'quest_guide',
    name: 'Quest Access, Walkthroughs, and Safety',
    shortName: 'Quest Preparation',
    canonicalPath: '/knowledge/quests/quest-access-and-safety',
    status: 'source-backed',
    profile: 'Cross-server quest verification standard',
    reviewedAt,
    readingMinutes: 12,
    summary:
      'A production standard for step-by-step quest guides: access gates, storage states, required items, route safety, boss mechanics, rewards, repeatability, shortcuts, and server overrides.',
    keywords: ['Tibia quest guide', 'Open Tibia quests', 'TFS quest storage', 'Tibia access quest'],
    tags: ['quests', 'access', 'bosses', 'walkthroughs'],
    facts: [
      { key: 'Quest-log source', value: 'Named storage ranges and mission descriptions' },
      { key: 'Execution source', value: 'NPC, action, movement, creature, global, and boss scripts' },
      { key: 'Map source', value: 'Doors, teleport destinations, unique IDs, action IDs, and walkable route' },
      { key: 'Live proof', value: 'Fresh character test through every branch and failure state' },
    ],
    sections: [
      {
        id: 'why-guides-fail',
        title: 'Why copied walkthroughs fail on Open Tibia servers',
        blocks: [
          {
            type: 'paragraph',
            text: 'A server can use familiar names and maps while changing access storages, NPC dialogue, item requirements, level gates, boss cooldowns, lever sizes, rewards, shortcuts, and death behavior. A walkthrough from another world may lead a player to a locked door, consume a rare item, or enter an encounter with the wrong mechanic assumptions.',
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'Quest names are not version identifiers',
            text: 'Every walkthrough must name the server, world, season or revision, client profile, and verification date.',
          },
        ],
      },
      {
        id: 'guide-schema',
        title: 'Complete walkthrough structure',
        blocks: [
          {
            type: 'table',
            caption: 'Required quest sections',
            columns: ['Section', 'Required content'],
            rows: [
              ['Overview', 'Purpose, reward, repeatability, party size, estimated time, failure cost'],
              ['Prerequisites', 'Level, vocation, premium, prior missions, storage, reputation, access, cooldown'],
              ['Required items', 'Exact item, count, whether consumed, source, substitutes'],
              ['Route', 'Start point, floor changes, doors, teleports, hazards, resupply and escape points'],
              ['Dialogue and actions', 'NPC keywords, lever order, action sequence, storage transitions'],
              ['Combat', 'Creatures, damage types, fields, waves, summons, immunities, phase triggers'],
              ['Boss', 'Entry, arena lock, mechanics, roles, enrage, death, re-entry, loot ownership'],
              ['Rewards', 'Guaranteed and random rewards, choice, account or character scope, claim conditions'],
              ['Aftercare', 'Shortcut unlocked, new travel, repeat timer, next mission, correction contact'],
            ],
          },
        ],
      },
      {
        id: 'storage-model',
        title: 'Storage values are a state machine',
        blocks: [
          {
            type: 'paragraph',
            text: 'TFS quest logs commonly expose a storage identifier with a start value, end value, and mission descriptions for ranges or specific states. Actual progression occurs in scripts. A guide must trace every write and read of those storages, including negative or unset values, skipped states, party credit, daily resets, and migration from an older season.',
          },
          {
            type: 'formula',
            label: 'Quest state transition',
            expression: 'State_next = Transition(State_current, action, prerequisites, world_state)',
            variables: [
              'action may be dialogue, use, movement, kill credit, item delivery, or timer completion.',
              'prerequisites include storage, item, level, party, cooldown, and account state.',
              'world_state includes boss availability, event state, map revision, and global storages.',
            ],
          },
        ],
      },
      {
        id: 'boss-safety',
        title: 'Boss encounter briefing',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Entry', text: 'Document lever positions, party count, level, cooldown, occupied-arena behavior, and whether entry consumes items.' },
              { title: 'Arena', text: 'Map safe tiles, hazards, teleport exits, walls, floor changes, summon locations, and reset boundaries.' },
              { title: 'Damage profile', text: 'List every verified channel, burst envelope, field, condition, reflection, and immunity.' },
              { title: 'Phases and triggers', text: 'Record health thresholds, timers, summons, objects, dialogue, and fail conditions.' },
              { title: 'Recovery', text: 'Explain death destination, blessing and item loss, re-entry, cooldown, and whether surviving players retain progress.' },
              { title: 'Reward ownership', text: 'Clarify corpse, chest, participation, damage, party, account, and daily reward rules.' },
            ],
          },
        ],
      },
      {
        id: 'verification',
        title: 'Walkthrough acceptance test',
        blocks: [
          {
            type: 'list',
            items: [
              'Use a fresh character with only documented prerequisites.',
              'Execute every step in the published order without administrative teleport or storage edits.',
              'Test missing-item, wrong-state, full-arena, death, logout, server-save, and repeated-attempt paths.',
              'Confirm every item count, storage transition, shortcut, cooldown, and reward.',
              'Capture route coordinates and screenshots from the deployed map, not a similarly named distribution.',
              'Re-run after map, NPC, quest, boss, engine, or season updates.',
            ],
          },
        ],
      },
    ],
    relatedSlugs: ['ruleset-verification', 'protection-zones', 'demon', 'equipment-progression'],
    relatedServerSearches: ['quests', 'bosses', 'access', 'real map', 'custom map'],
    sources: pickKnowledgeSources('tfsRelease', 'tfsQuestRegistry', 'tfsConfiguration'),
  },
];
