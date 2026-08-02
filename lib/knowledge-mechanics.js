import { pickKnowledgeSources } from './knowledge-sources.js';

const reviewedAt = '2026-08-02';

export const mechanicsArticles = [
  {
    slug: 'combat-damage-pipeline',
    collection: 'mechanics',
    entityType: 'mechanic',
    name: 'Combat Damage Pipeline',
    shortName: 'Damage Pipeline',
    canonicalPath: '/knowledge/mechanics/combat-damage-pipeline',
    status: 'source-backed',
    profile: 'TFS 1.6 targeted-combat reference',
    reviewedAt,
    readingMinutes: 11,
    summary:
      'A source-level walkthrough of how an Open Tibia hit moves from eligibility and base damage through defense, armor, resistance, PvP reduction, critical damage, and final health loss.',
    keywords: ['Tibia damage formula', 'Open Tibia combat formula', 'TFS damage calculation', 'Tibia armor formula'],
    tags: ['combat', 'formula', 'mitigation', 'TFS 1.6'],
    facts: [
      { key: 'Reference profile', value: 'The Forgotten Server 1.6, targeted health combat' },
      { key: 'Primary stages', value: 'Eligibility, base roll, blocking, resistance, PvP scaling, critical, health change' },
      { key: 'Most common OT override', value: 'Lua spell formulas, vocation multipliers, custom critical systems, and PvP scaling' },
      { key: 'Universal across servers', value: 'No. Confirm the engine tag, data pack, and local scripts.' },
    ],
    sections: [
      {
        id: 'scope',
        title: 'Read the profile before the formula',
        blocks: [
          {
            type: 'paragraph',
            text: 'Open Tibia does not have one universal combat equation. The engine establishes an execution pipeline, while XML, Lua, configuration, and fork-specific C++ determine the numbers fed into it. This article documents the targeted health-combat path in The Forgotten Server 1.6. It is a reproducible baseline for server comparison, not a claim that every 7.4, 8.6, 10.98, or current-protocol server behaves identically.',
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'Do not mix ruleset profiles',
            text: 'Official Tibia, TFS 0.x, OTX, Canary, Nekiro downgrade forks, and heavily customized distributions can change formulas or their order. A value is only exact when its engine version and server configuration are named.',
          },
        ],
      },
      {
        id: 'pipeline',
        title: 'The targeted-hit pipeline',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Combat eligibility', text: 'The engine checks world type, protection level, tile zone, target state, aggression rules, and whether the action is allowed. A rejected action never reaches the damage roll.' },
              { title: 'Base damage', text: 'A weapon, rune, instant spell, condition, monster attack, or script produces primary and optional secondary damage components. Their formulas may depend on level, skill, magic level, attack value, or explicit min/max values.' },
              { title: 'Shield and armor checks', text: 'When the combat parameters request them, defense is rolled first and armor is rolled after it. A defense roll that reduces damage to zero prevents the armor roll for that hit.' },
              { title: 'Immunity and resistance', text: 'Immunity can cancel the component. Monster element percentages or equipped-item absorption then modify surviving damage according to the target implementation.' },
              { title: 'Player-versus-player scaling', text: 'In the TFS 1.6 targeted path, damage against another player is halved unless the target has a black skull. This occurs before the standard targeted critical-hit bonus.' },
              { title: 'Critical-hit evaluation', text: 'Eligible direct damage can receive an additive percentage bonus when the attacker passes the configured critical chance roll.' },
              { title: 'Final resource change', text: 'The resulting signed value is applied to health or mana, followed by death, leech, messages, visual effects, conditions, and event callbacks as applicable.' },
            ],
          },
          {
            type: 'formula',
            label: 'Conceptual pipeline',
            expression: 'D_final = HealthChange(Critical(PvP(Resistance(Armor(Defense(D_base))))))',
            variables: [
              'D_base is the damage produced by the weapon, spell, rune, condition, or scripted attack.',
              'Each function may be disabled by combat parameters or replaced by custom scripts.',
              'Rounding is stage-specific; delaying rounding until the end can produce a different result.',
            ],
          },
        ],
      },
      {
        id: 'worked-example',
        title: 'Worked example without hidden rounding',
        blocks: [
          {
            type: 'paragraph',
            text: 'Assume an eligible direct physical hit begins at 420 damage. The target rolls 70 defense reduction, then 18 armor reduction. A single equipped item absorbs 10% physical damage. The target is another normal player, and the attacker has a 10% critical chance with 50% extra critical damage. If the critical roll succeeds, the reference calculation proceeds as follows.',
          },
          {
            type: 'table',
            caption: 'Illustrative targeted hit',
            columns: ['Stage', 'Operation', 'Result'],
            rows: [
              ['Base damage', 'Given', '420'],
              ['Defense', '420 - 70', '350'],
              ['Armor', '350 - 18', '332'],
              ['10% resistance', '332 - ceil(332 x 0.10)', '298'],
              ['PvP reduction', 'integer division by 2', '149'],
              ['Successful +50% critical', '149 + round(149 x 0.50)', '224'],
            ],
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Expected value is not a guaranteed hit',
            text: 'At 10% chance and +50% extra damage, critical hits add 5% average damage over many eligible attacks. Individual attacks remain either normal or critical; the engine does not add 5% to every hit.',
          },
        ],
      },
      {
        id: 'audit',
        title: 'How to audit a real server',
        blocks: [
          {
            type: 'list',
            items: [
              'Identify the engine family, exact tag or commit, protocol distribution, and data pack.',
              'Read weapon and spell definitions for level, skill, magic-level, and min/max coefficients.',
              'Inspect vocation damage, defense, and armor multipliers.',
              'Check world type, protection level, PvP damage reduction, frag timers, and custom combat callbacks.',
              'Record all equipment absorption, imbuement, critical, leech, reflection, and charge behavior.',
              'Run controlled hits against fixed armor and resistance, retaining raw server logs instead of relying on floating client text alone.',
            ],
          },
          {
            type: 'paragraph',
            text: 'A trustworthy server page should publish the resulting ruleset profile and the date it was verified. Marketing labels such as real map, old school, or global do not establish mechanical parity.',
          },
        ],
      },
    ],
    relatedSlugs: ['armor-defense-formulas', 'elemental-resistance', 'critical-hits', 'protection-zones'],
    relatedServerSearches: ['real map', 'low rate', '8.6', '7.4', 'custom combat'],
    sources: pickKnowledgeSources('tfsRelease', 'tfsBlocking', 'tfsResistance', 'tfsCritical', 'tfsConfiguration'),
  },
  {
    slug: 'armor-defense-formulas',
    collection: 'mechanics',
    entityType: 'mechanic',
    name: 'Armor and Defense Formulas',
    shortName: 'Armor & Defense',
    canonicalPath: '/knowledge/mechanics/armor-defense-formulas',
    status: 'source-backed',
    profile: 'TFS 1.6 player blocking reference',
    reviewedAt,
    readingMinutes: 12,
    summary:
      'Exact TFS 1.6 reference formulas for total armor, shield defense, fight-mode factors, random block ranges, equipment slots, and practical mitigation comparisons.',
    keywords: ['Tibia armor formula', 'Tibia defense formula', 'TFS shield formula', 'Open Tibia armor calculation'],
    tags: ['armor', 'defense', 'shielding', 'formula'],
    facts: [
      { key: 'Armor slots counted', value: 'Head, necklace, armor, legs, feet, and ring' },
      { key: 'Defense source', value: 'Selected shield/weapon defense, relevant skill, fight mode, and vocation multiplier' },
      { key: 'Defense roll', value: 'Uniform random reduction from floor(defense / 2) through defense' },
      { key: 'Armor roll', value: 'For armor above 3, a bounded random reduction; armor 1-3 removes one point' },
    ],
    sections: [
      {
        id: 'armor-total',
        title: 'Total armor',
        blocks: [
          {
            type: 'paragraph',
            text: 'The reference player implementation adds armor from six enabled inventory positions: head, necklace, body armor, legs, feet, and ring. It then multiplies the sum by the vocation armor multiplier and returns an integer. Backpacks, ammunition, and hand slots do not contribute to this armor sum unless a fork changes the code or exposes protection through another ability.',
          },
          {
            type: 'formula',
            label: 'Player armor value',
            expression: 'A = trunc((A_head + A_neck + A_body + A_legs + A_feet + A_ring) x M_armor)',
            variables: [
              'A_slot is the armor attribute of the enabled item in that slot.',
              'M_armor is the vocation armor multiplier; the stock TFS 1.6 vocation data uses 1.0.',
              'Custom sets may also carry percentage resistance that is applied separately from armor.',
            ],
          },
          {
            type: 'paragraph',
            text: 'When an incoming attack requests an armor check and total armor is greater than three, the engine subtracts a random integer between armor divided by two and armor minus either one or two. Odd and even totals therefore have slightly different upper bounds. If armor is one, two, or three, the reduction is exactly one.',
          },
          {
            type: 'table',
            caption: 'Reference armor roll ranges',
            columns: ['Total armor', 'Minimum reduction', 'Maximum reduction', 'Notes'],
            rows: [
              ['3', '1', '1', 'Small-armor branch'],
              ['10', '5', '9', 'Even total: upper bound A - 1'],
              ['11', '5', '9', 'Odd total: upper bound A - 2'],
              ['30', '15', '29', 'Average roll is near 22'],
              ['45', '22', '43', 'Vocation multiplier already included'],
            ],
          },
        ],
      },
      {
        id: 'defense-value',
        title: 'Defense value and shield selection',
        blocks: [
          {
            type: 'paragraph',
            text: 'The engine first finds a weapon and the strongest shield or quiver defense in the two hand slots. With a shield, shielding skill becomes the defense skill. The shield defense value is used, and a wielded weapon can contribute its extra-defense attribute. Without a shield, weapon defense and the weapon skill are used. With neither, fist skill and a base defense value of seven apply.',
          },
          {
            type: 'formula',
            label: 'Effective defense before random roll',
            expression: 'DEF = trunc((S / 4 + 2.23) x V x 0.15 x F_mode x M_defense)',
            variables: [
              'S is shielding skill with a shield, the weapon skill with a weapon, or fist skill when unarmed.',
              'V is shield defense plus weapon extra defense, weapon defense plus extra defense, or 7 when unarmed.',
              'F_mode is the current fight-mode defense factor.',
              'M_defense is the vocation defense multiplier.',
            ],
          },
          {
            type: 'table',
            caption: 'Fight-mode defense factors in the reference implementation',
            columns: ['Fight mode', 'After a recent attack', 'When the attack interval has elapsed'],
            rows: [
              ['Offensive', '0.50', '1.00'],
              ['Balanced', '0.75', '1.00'],
              ['Defensive', '1.00', '1.00'],
            ],
          },
          {
            type: 'paragraph',
            text: 'For an eligible defense event, the engine subtracts a uniformly selected integer between half of DEF and DEF. If that reduction reaches or exceeds the incoming damage, the hit is marked as blocked by defense and the armor check is skipped. Defense therefore has both magnitude and event-frequency behavior; a large theoretical value does not mean every simultaneous attacker is fully checked.',
          },
        ],
      },
      {
        id: 'worked-defense',
        title: 'Worked shield example',
        blocks: [
          {
            type: 'paragraph',
            text: 'Take shielding skill 90, shield defense 35, no weapon extra defense, and a 1.0 vocation multiplier. In defensive mode, DEF is trunc((90 / 4 + 2.23) x 35 x 0.15), which is 129. The random defense reduction is therefore 64 through 129. In balanced mode immediately after attacking, the 0.75 factor lowers DEF to 97, producing a 48 through 97 reduction range.',
          },
          {
            type: 'formula',
            label: 'Defensive-mode example',
            expression: 'DEF = trunc((90 / 4 + 2.23) x 35 x 0.15 x 1.00 x 1.00) = 129',
            variables: ['Eligible reduction range: uniform_random(64, 129).'],
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Armor and defense are not percentages',
            text: 'They subtract bounded integer amounts. Percentage elemental protection is a separate layer. This distinction matters more as monster damage rises: flat mitigation becomes a smaller share of a very large hit.',
          },
        ],
      },
      {
        id: 'server-variance',
        title: 'What Open Tibia servers commonly change',
        blocks: [
          {
            type: 'list',
            items: [
              'Vocation armor and defense multipliers, especially on promoted or custom vocations.',
              'Shield block frequency, dual wield behavior, two-handed weapon defense, and quiver handling.',
              'Fight-mode factors and attack-speed interactions.',
              'Whether spells, runes, fields, or monster attacks request defense and armor checks.',
              'Upgrade systems that add armor, defense, percentage protection, reflection, dodge, or resilience.',
              'Custom formulas implemented in Lua callbacks after the engine has already performed its native block calculation.',
            ],
          },
        ],
      },
    ],
    relatedSlugs: ['combat-damage-pipeline', 'elemental-resistance', 'equipment-progression'],
    relatedServerSearches: ['old school', 'low rate', 'knight', 'custom items', 'real map'],
    sources: pickKnowledgeSources('tfsRelease', 'tfsDefense', 'tfsBlocking', 'tfsVocationData'),
  },
  {
    slug: 'elemental-resistance',
    collection: 'mechanics',
    entityType: 'mechanic',
    name: 'Elemental Resistance and Vulnerability',
    shortName: 'Elemental Resistance',
    canonicalPath: '/knowledge/mechanics/elemental-resistance',
    status: 'source-backed',
    profile: 'TFS 1.6 player and monster resistance reference',
    reviewedAt,
    readingMinutes: 10,
    summary:
      'How physical, fire, earth, energy, ice, holy, death, life drain, mana drain, and field modifiers are represented and applied in a TFS 1.6 ruleset.',
    keywords: ['Tibia elemental resistance', 'TFS resistance formula', 'Tibia protection percentage', 'Open Tibia vulnerability'],
    tags: ['resistance', 'elements', 'equipment', 'monsters'],
    facts: [
      { key: 'Player equipment', value: 'Each enabled item applies its absorption percentage sequentially' },
      { key: 'Monster elements', value: 'Positive values reduce damage; negative values increase damage' },
      { key: 'Rounding', value: 'Player item absorption uses ceiling at each item step' },
      { key: 'Field protection', value: 'Can be stored and consumed separately from direct-hit absorption' },
    ],
    sections: [
      {
        id: 'damage-families',
        title: 'Damage families are independent channels',
        blocks: [
          {
            type: 'paragraph',
            text: 'A combat event can contain primary and secondary damage components. Physical and elemental portions are not automatically merged before protection. Each component is evaluated against its own combat type, allowing a weapon to produce physical damage plus fire damage while the target resists the two parts differently.',
          },
          {
            type: 'table',
            caption: 'Common combat channels in TFS-derived servers',
            columns: ['Channel', 'Typical sources', 'Common protection'],
            rows: [
              ['Physical', 'Melee, distance, physical runes, monster attacks', 'Armor when enabled; physical absorption'],
              ['Fire', 'Spells, runes, fields, weapon elements', 'Fire immunity or fire absorption'],
              ['Earth', 'Poison-style spells, fields, weapon elements', 'Earth immunity or earth absorption'],
              ['Energy', 'Spells, beams, waves, weapon elements', 'Energy immunity or energy absorption'],
              ['Ice', 'Spells, waves, weapon elements', 'Ice immunity or ice absorption'],
              ['Holy / death', 'Vocation spells, runes, monsters', 'Matching holy or death absorption'],
              ['Life / mana drain', 'Monster abilities and custom effects', 'Dedicated drain immunity or absorption'],
            ],
          },
        ],
      },
      {
        id: 'equipment-stacking',
        title: 'Equipment protection stacks sequentially',
        blocks: [
          {
            type: 'paragraph',
            text: 'For players in TFS 1.6, the engine loops through enabled equipment. Each non-zero absorption percentage removes the ceiling of that percentage from the current remaining damage. Two 10% items therefore do not produce a flat 20% reduction. They leave 90% and then 90% of the remainder, for 81% remaining damage before integer-rounding effects.',
          },
          {
            type: 'formula',
            label: 'Idealized sequential stacking',
            expression: 'D_after = D_before x (1 - r1) x (1 - r2) x ... x (1 - rn)',
            variables: [
              'ri is the decimal protection on one enabled item.',
              'The exact engine applies ceil(current damage x ri) after each item, so small hits can differ from the continuous formula.',
              'Effective protection is 1 - product(1 - ri), not the arithmetic sum of item percentages.',
            ],
          },
          {
            type: 'table',
            caption: 'Two 10% items against a 1,000-damage component',
            columns: ['Step', 'Calculation', 'Damage remaining'],
            rows: [
              ['First item', '1,000 - ceil(1,000 x 0.10)', '900'],
              ['Second item', '900 - ceil(900 x 0.10)', '810'],
              ['Combined effect', '1 - (0.90 x 0.90)', '19% protection'],
            ],
          },
        ],
      },
      {
        id: 'monster-elements',
        title: 'Monster resistance percentages',
        blocks: [
          {
            type: 'paragraph',
            text: 'Monster definitions store an element modifier by combat type. The TFS 1.6 monster block code multiplies damage by (100 - modifier) / 100 and rounds the result. A positive 80 means the monster receives 20% of that damage type. A negative 10 means it receives 110%, creating a 10% vulnerability. Explicit immunities are checked earlier and reduce the matching damage to zero.',
          },
          {
            type: 'formula',
            label: 'Monster element modifier',
            expression: 'D_after = round(D_before x ((100 - P) / 100))',
            variables: [
              'P = 80 means 80% resistance and 20% damage remains.',
              'P = -10 means 10% vulnerability and 110% damage remains.',
              'An immunity is not the same as P = 100 in data semantics, even though both can result in zero damage.',
            ],
          },
        ],
      },
      {
        id: 'audit-loadout',
        title: 'Evaluate a loadout by encounter, not by total percentage',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'List incoming channels', text: 'Separate melee physical, distance physical, waves, beams, fields, conditions, and mana drain.' },
              { title: 'Estimate channel share', text: 'A 15% fire item matters little in an encounter where almost all incoming damage is physical.' },
              { title: 'Apply stacking correctly', text: 'Use multiplicative sequential protection and engine-specific rounding.' },
              { title: 'Include opportunity cost', text: 'Compare lost armor, skill, speed, capacity, or another element when changing equipment.' },
              { title: 'Verify charges', text: 'Some absorption consumes charges, making sustained-hunt economics different from a short boss attempt.' },
            ],
          },
        ],
      },
    ],
    relatedSlugs: ['combat-damage-pipeline', 'armor-defense-formulas', 'dragon', 'demon'],
    relatedServerSearches: ['custom items', 'bosses', 'real map', 'high rate', 'elemental protection'],
    sources: pickKnowledgeSources('tfsRelease', 'tfsResistance', 'tfsMonsterResistance'),
  },
  {
    slug: 'critical-hits',
    collection: 'mechanics',
    entityType: 'mechanic',
    name: 'Critical Hit Chance and Damage',
    shortName: 'Critical Hits',
    canonicalPath: '/knowledge/mechanics/critical-hits',
    status: 'source-backed',
    profile: 'TFS 1.6 targeted direct-damage reference',
    reviewedAt,
    readingMinutes: 9,
    summary:
      'Exact targeted critical-hit eligibility, chance, bonus damage, expected-value math, PvP ordering, rounding, and Open Tibia verification steps.',
    keywords: ['Tibia critical hit formula', 'TFS critical hit chance', 'Tibia critical damage', 'Open Tibia crit formula'],
    tags: ['critical', 'combat', 'expected value', 'imbuement'],
    facts: [
      { key: 'Chance roll', value: 'Integer roll from 1 through 100 against critical-hit chance' },
      { key: 'Bonus', value: 'round(current damage x critical extra damage / 100)' },
      { key: 'Excluded', value: 'Healing, condition-origin damage, and damage already marked critical' },
      { key: 'Reference order', value: 'Target mitigation and normal-player PvP halving occur before targeted critical bonus' },
    ],
    sections: [
      {
        id: 'eligibility',
        title: 'Eligibility comes before probability',
        blocks: [
          {
            type: 'paragraph',
            text: 'A character can display critical statistics without every damage event being eligible. In the TFS 1.6 targeted path, the standard critical check requires a player caster, positive chance and extra-damage values, a non-healing component, damage not originating from a condition, and a damage object that is not already marked critical. Custom scripts may add independent critical systems outside this path.',
          },
          {
            type: 'list',
            items: [
              'Direct weapon, rune, or instant-spell damage may be eligible when routed through the standard combat path.',
              'Damage-over-time conditions are excluded by the native check.',
              'Healing is excluded by the native check.',
              'A script that pre-marks damage as critical prevents the native check from applying a second critical.',
              'Area combat follows a separate implementation path and should be tested against the exact fork rather than inferred from the targeted path.',
            ],
          },
        ],
      },
      {
        id: 'formula',
        title: 'Targeted critical formula',
        blocks: [
          {
            type: 'formula',
            label: 'Successful critical hit',
            expression: 'D_critical = D_current + round(D_current x B / 100)',
            variables: [
              'D_current is the damage remaining at the critical stage.',
              'B is the critical extra-damage statistic in percentage points.',
              'The chance succeeds when a 1-100 integer roll is less than or equal to the critical chance statistic.',
            ],
          },
          {
            type: 'table',
            caption: 'Examples after prior mitigation',
            columns: ['Current damage', 'Extra critical damage', 'Bonus', 'Critical result'],
            rows: [
              ['149', '50%', 'round(74.5) = 75', '224'],
              ['400', '25%', '100', '500'],
              ['1,001', '10%', 'round(100.1) = 100', '1,101'],
            ],
          },
        ],
      },
      {
        id: 'expected-value',
        title: 'Expected value for sustained damage',
        blocks: [
          {
            type: 'paragraph',
            text: 'For a stable stream of eligible hits and ignoring integer rounding, the average multiplicative contribution is one plus critical probability times extra-damage fraction. This is useful for comparing builds, but it does not describe burst risk, kill thresholds, leech interactions, or fights too short for the average to settle.',
          },
          {
            type: 'formula',
            label: 'Long-run multiplier',
            expression: 'E[M] = 1 + p x b',
            variables: [
              'p is chance as a decimal: 10% becomes 0.10.',
              'b is extra critical damage as a decimal: +50% becomes 0.50.',
              'A 10% chance with +50% damage yields 1.05, or about 5% more eligible damage over a large sample.',
            ],
          },
          {
            type: 'table',
            caption: 'Idealized long-run contribution',
            columns: ['Chance', 'Extra damage', 'Average multiplier', 'Average gain'],
            rows: [
              ['5%', '+50%', '1.025', '2.5%'],
              ['10%', '+50%', '1.050', '5.0%'],
              ['10%', '+100%', '1.100', '10.0%'],
              ['20%', '+25%', '1.050', '5.0%'],
            ],
          },
        ],
      },
      {
        id: 'server-audit',
        title: 'Critical systems that require separate verification',
        blocks: [
          {
            type: 'list',
            items: [
              'Native special-skill critical values granted by equipment or conditions.',
              'Forge, tier, charm, wheel, awakening, upgrade, or prestige systems implemented by a data pack.',
              'Lua callbacks that multiply raw damage before native mitigation.',
              'Area-of-effect critical behavior and whether one roll applies to every target or each target rolls independently.',
              'Critical healing, condition criticals, boss-only caps, PvP caps, and visual-only critical indicators.',
              'Leech calculation order: leech based on pre-mitigation, final, or displayed damage produces different sustain.',
            ],
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'Never infer a formula from an item tooltip alone',
            text: 'A tooltip establishes a configured stat, not the exact execution path. Controlled combat logs and the deployed server code are stronger evidence.',
          },
        ],
      },
    ],
    relatedSlugs: ['combat-damage-pipeline', 'elemental-resistance', 'spell-rune-combat'],
    relatedServerSearches: ['custom combat', 'bosses', 'high rate', 'imbuements', 'upgrade system'],
    sources: pickKnowledgeSources('tfsRelease', 'tfsCritical', 'tfsResistance'),
  },
  {
    slug: 'protection-zones',
    collection: 'mechanics',
    entityType: 'mechanic',
    name: 'Protection Zones, Temples, and Teleports',
    shortName: 'Protection Zones',
    canonicalPath: '/knowledge/mechanics/protection-zones',
    status: 'source-backed',
    profile: 'Official concepts with TFS 1.6 configuration reference',
    reviewedAt,
    readingMinutes: 9,
    summary:
      'A practical guide to protection-zone tiles, combat locks, temple return points, teleport destinations, logout behavior, and common Open Tibia map mistakes.',
    keywords: ['Tibia protection zone', 'Tibia temple teleport', 'TFS PZ lock', 'Open Tibia protection zone'],
    tags: ['protection zone', 'temple', 'teleport', 'map'],
    facts: [
      { key: 'Protection source', value: 'A tile or zone flag, not the visual appearance of a room' },
      { key: 'Combat effect', value: 'Aggressive combat is rejected in protected contexts' },
      { key: 'Combat lock', value: 'Can prevent entry, logout, travel, or selected interactions' },
      { key: 'Temple rule', value: 'A temple is commonly protected, but the map flags determine actual behavior' },
    ],
    sections: [
      {
        id: 'tile-state',
        title: 'A protection zone is map state',
        blocks: [
          {
            type: 'paragraph',
            text: 'Players recognize depots, temples, houses, and safe rooms visually, but the server decides protection from tile and zone state. Decorative stone, depot lockers, a temple altar, or a teleport effect does not make a tile safe by itself. Map flags and server callbacks do.',
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Naming rule',
            text: 'This knowledge base uses temple as a general architectural term. A named location keeps its proper name, but generic return rooms and protection areas are not treated as proper nouns.',
          },
        ],
      },
      {
        id: 'state-machine',
        title: 'Combat state and movement restrictions',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Aggression begins', text: 'An aggressive action may add an in-fight condition, a protection-zone lock, and a skull state depending on world type and target relationship.' },
              { title: 'Entry is evaluated', text: 'When a player attempts to move into a protected tile, the engine checks the current zone, destination flags, and combat lock.' },
              { title: 'Travel systems check state', text: 'Boats, NPC travel, scripted teleports, logout, beds, and event portals may add their own combat or protection checks.' },
              { title: 'Timers expire', text: 'The in-fight icon, protection-zone lock, and skull are related but not interchangeable. Their configured durations can differ.' },
            ],
          },
          {
            type: 'paragraph',
            text: 'The stock TFS 1.6 configuration sets pzLocked to 60,000 milliseconds and whiteSkullTime to 15 minutes. These are defaults, not guaranteed values on a listed server. A server can also keep the visible in-fight state longer than the short entry lock or add scripts that block teleports after recent damage.',
          },
        ],
      },
      {
        id: 'temples',
        title: 'Temple and return-position behavior',
        blocks: [
          {
            type: 'paragraph',
            text: 'A character return position is normally stored independently from the protection flag. Death, first login, town changes, citizenship, or account-manager flows can update that position. A correct temple setup therefore needs a valid destination coordinate, walkable floor, protected tile flags, enough free placement space, and a town or return-position mapping that references the intended location.',
          },
          {
            type: 'list',
            items: [
              'Confirm the destination exists on the deployed map and on the correct floor.',
              'Confirm the exact arrival tile and nearby fallback tiles are walkable.',
              'Confirm temple tiles are protected and do not contain unintended floor-change or damage fields.',
              'Confirm each town identifier maps to the correct temple position.',
              'Test first login, ordinary death, red/black-skull death rules, and relocation after a map update.',
            ],
          },
        ],
      },
      {
        id: 'teleports',
        title: 'Teleports cross two independent locations',
        blocks: [
          {
            type: 'paragraph',
            text: 'A teleport has an origin interaction and a destination. The origin can be inside a protection zone while the destination is unsafe, or the reverse. Event scripts may also bypass ordinary walking checks. A proper audit records both tile states, destination walkability, return path, level and storage requirements, combat-lock behavior, and what happens when the destination is occupied.',
          },
          {
            type: 'table',
            caption: 'Teleport verification matrix',
            columns: ['Case', 'Origin', 'Destination', 'Expected check'],
            rows: [
              ['Depot exit', 'Protected', 'Unprotected', 'Combat lock normally irrelevant until leaving; destination must be safe to place'],
              ['Arena entrance', 'Unprotected', 'Combat area', 'Entry storage, party, cooldown, and occupied tile handling'],
              ['Escape portal', 'Combat area', 'Protected', 'Recent-combat policy must be explicit'],
              ['Death return', 'Any', 'temple', 'Town mapping, placement fallback, and protection flag'],
            ],
          },
        ],
      },
    ],
    relatedSlugs: ['skulls-frags-pvp', 'combat-damage-pipeline', 'quest-access-and-safety'],
    relatedServerSearches: ['PVP', 'no PVP', 'war', 'custom map', 'real map'],
    sources: pickKnowledgeSources('officialCombatManual', 'tfsConfiguration', 'tfsRelease'),
  },
  {
    slug: 'skulls-frags-pvp',
    collection: 'mechanics',
    entityType: 'mechanic',
    name: 'Skulls, Frags, and PvP Aggression',
    shortName: 'Skulls & PvP',
    canonicalPath: '/knowledge/mechanics/skulls-frags-pvp',
    status: 'source-backed',
    profile: 'Official concepts with stock TFS 1.6 defaults',
    reviewedAt,
    readingMinutes: 11,
    summary:
      'A ruleset-aware explanation of aggression marks, unjustified kills, frag decay, red and black skull thresholds, PvP world types, and protection-zone locks.',
    keywords: ['Tibia skull system', 'Tibia frag rules', 'TFS red skull', 'Open Tibia PvP rules'],
    tags: ['PvP', 'skulls', 'frags', 'aggression'],
    facts: [
      { key: 'Stock world type', value: 'pvp' },
      { key: 'Stock red-skull threshold', value: '3 unjustified kills worth of active frag time' },
      { key: 'Stock black-skull threshold', value: '6 unjustified kills worth of active frag time' },
      { key: 'Stock frag decay', value: '24 hours per unjustified kill' },
    ],
    sections: [
      {
        id: 'world-types',
        title: 'World type defines the starting ruleset',
        blocks: [
          {
            type: 'table',
            caption: 'Common TFS world-type profiles',
            columns: ['World type', 'Player combat', 'Unjustified-kill tracking', 'Typical use'],
            rows: [
              ['no-pvp', 'Restricted outside configured exceptions', 'Normally not the core progression pressure', 'Optional-PvP and social worlds'],
              ['pvp', 'Allowed under skull and protection rules', 'Yes', 'Open PvP worlds'],
              ['pvp-enforced', 'Broadly allowed', 'Native unjustified-kill penalty path is bypassed', 'Hardcore or war-focused worlds'],
            ],
          },
          {
            type: 'paragraph',
            text: 'Server labels are not enough. An advertised PvP world may add level protection, anti-rook rules, guild-war exceptions, secure-mode changes, warmode arenas, anti-magebomb systems, custom blessings, or reduced death loss.',
          },
        ],
      },
      {
        id: 'skull-meanings',
        title: 'Skull colors communicate relationships and penalties',
        blocks: [
          {
            type: 'table',
            caption: 'Common skull meanings',
            columns: ['Mark', 'General meaning', 'Verification note'],
            rows: [
              ['White', 'Recent unjustified aggression', 'Duration and clearing conditions are configurable'],
              ['Yellow', 'A relationship-specific retaliation or aggression indicator', 'Visibility can depend on who attacked whom'],
              ['Green', 'Party or allied relationship indicator', 'Not a punishment mark'],
              ['Red', 'Unjustified-kill threshold reached', 'Death and item-loss consequences vary by server'],
              ['Black', 'Higher unjustified-kill threshold reached', 'Attack, healing, death, and loss restrictions can be stricter'],
              ['Orange', 'Revenge-right or related temporary PvP relationship in supported rulesets', 'Not implemented identically in older clients and forks'],
            ],
          },
        ],
      },
      {
        id: 'frag-accounting',
        title: 'TFS 1.6 frag accounting uses time debt',
        blocks: [
          {
            type: 'paragraph',
            text: 'In the stock implementation, an unjustified kill adds one configured frag-time unit to skullTicks. The default unit is 24 hours. Red skull is assigned when active skull time exceeds the equivalent of two units, which occurs on the third active unjustified kill at stock settings. Black skull is assigned on the sixth. The accumulated timer decreases over real time until the punishment clears outside active combat.',
          },
          {
            type: 'formula',
            label: 'Stock active frag debt',
            expression: 'T_active = max(0, T_previous + unjustifiedKills x 24h - elapsedTime)',
            variables: [
              'Red threshold: 3 active frag units under stock killsToRedSkull = 3.',
              'Black threshold: 6 active frag units under stock killsToBlackSkull = 6.',
              'Servers frequently replace this with daily, weekly, and monthly frag windows in Lua or database logic.',
            ],
          },
          {
            type: 'table',
            caption: 'Stock configuration values',
            columns: ['Setting', 'Default', 'Meaning'],
            rows: [
              ['protectionLevel', '1', 'Player combat protection below or at the configured boundary, subject to implementation'],
              ['killsToRedSkull', '3', 'Active frag units required for red skull'],
              ['killsToBlackSkull', '6', 'Active frag units required for black skull'],
              ['timeToDecreaseFrags', '24 hours', 'Debt added per unjustified kill'],
              ['whiteSkullTime', '15 minutes', 'Stock white-skull duration'],
              ['pzLocked', '60 seconds', 'Stock protection-zone entry lock'],
            ],
          },
        ],
      },
      {
        id: 'player-checklist',
        title: 'Read these rules before choosing a PvP server',
        blocks: [
          {
            type: 'list',
            items: [
              'Daily, weekly, monthly, and total frag thresholds, including how server save affects them.',
              'Level protection, secure mode, party, guild, war, revenge, and arena exceptions.',
              'Protection-zone lock duration after attacking, assisting, healing, or receiving damage.',
              'Blessing, experience, skill, container, equipment, and premium-item loss on death.',
              'Red and black skull restrictions on combat, healing, logout, trade, travel, and item loss.',
              'Multi-client, anti-logout, anti-push, stair-hop, field, summon, and unjustified-assist rules.',
            ],
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'A stock default is not a server promise',
            text: 'OpenTibiaServers.com should display owner-verified PvP rules on each listing. Until verified, players should treat the server website and deployed rules page as controlling.',
          },
        ],
      },
    ],
    relatedSlugs: ['protection-zones', 'combat-damage-pipeline', 'stamina-system'],
    relatedServerSearches: ['PVP', 'PVPe', 'WAR', 'hardcore', 'no PVP'],
    sources: pickKnowledgeSources('officialCombatManual', 'tfsConfiguration', 'tfsRelease'),
  },
];
