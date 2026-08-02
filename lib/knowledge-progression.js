import { pickKnowledgeSources } from './knowledge-sources.js';

const reviewedAt = '2026-08-02';

export const progressionArticles = [
  {
    slug: 'experience-levels',
    collection: 'progression',
    entityType: 'progression_system',
    name: 'Experience and Level Progression',
    shortName: 'Experience & Levels',
    canonicalPath: '/knowledge/progression/experience-levels',
    status: 'source-backed',
    profile: 'TFS 1.6 level curve with configurable stages',
    reviewedAt,
    readingMinutes: 12,
    summary:
      'The exact cubic level curve used by TFS 1.6, experience-to-next-level math, stage multipliers, stamina order, progress percentages, and rate-audit examples.',
    keywords: ['Tibia experience formula', 'Tibia level formula', 'TFS experience stages', 'Open Tibia experience table'],
    tags: ['experience', 'levels', 'stages', 'formula'],
    facts: [
      { key: 'Base curve', value: 'Cubic total experience requirement' },
      { key: 'Level-to-level cost', value: 'Quadratic difference between adjacent total requirements' },
      { key: 'Server controls', value: 'Experience stages, low-level bonus, stamina, party sharing, events, and scripts' },
      { key: 'Reference maximum', value: 'Implementation-dependent; database and integer limits still apply' },
    ],
    sections: [
      {
        id: 'total-experience',
        title: 'Total experience required for a level',
        blocks: [
          {
            type: 'paragraph',
            text: 'The TFS 1.6 player implementation calculates the cumulative experience required to begin level L with the classic cubic curve below. This base curve remains constant unless the engine is modified. Server experience rates change how quickly experience is earned; they do not normally rewrite the cumulative threshold stored for each level.',
          },
          {
            type: 'formula',
            label: 'Cumulative experience at level L',
            expression: 'E(L) = (50L^3 - 300L^2 + 850L - 600) / 3',
            variables: [
              'L is the character level and L >= 1.',
              'E(1) = 0 and E(2) = 100.',
              'The source implementation uses an algebraically equivalent integer expression to avoid floating-point arithmetic.',
            ],
          },
          {
            type: 'table',
            caption: 'Selected cumulative thresholds',
            columns: ['Level', 'Total experience', 'Experience to next level'],
            rows: [
              ['1', '0', '100'],
              ['2', '100', '100'],
              ['8', '4,200', '2,200'],
              ['20', '98,800', '17,200'],
              ['50', '1,847,300', '117,700'],
              ['100', '15,694,800', '485,200'],
              ['200', '129,389,800', '1,970,200'],
              ['500', '2,058,474,800', '12,425,200'],
            ],
          },
        ],
      },
      {
        id: 'next-level',
        title: 'Experience to the next level',
        blocks: [
          {
            type: 'paragraph',
            text: 'Subtracting E(L) from E(L + 1) simplifies the amount needed to advance from the current level to the next. The result is quadratic, which explains why a flat experience multiplier feels increasingly slower even though the multiplier itself has not changed.',
          },
          {
            type: 'formula',
            label: 'Adjacent-level requirement',
            expression: 'DeltaE(L) = E(L + 1) - E(L) = 50L^2 - 150L + 200',
            variables: [
              'At level 100, DeltaE = 485,200.',
              'At level 200, DeltaE = 1,970,200.',
              'Doubling level approximately quadruples the next-level requirement at high levels.',
            ],
          },
          {
            type: 'formula',
            label: 'Progress toward the next level',
            expression: 'Progress% = 100 x (XP_current - E(L)) / (E(L + 1) - E(L))',
            variables: [
              'Clamp the displayed result to the client-supported precision.',
              'Loss of experience can reduce the current level and requires recalculating both thresholds.',
            ],
          },
        ],
      },
      {
        id: 'gain-order',
        title: 'Reference experience-gain order',
        blocks: [
          {
            type: 'paragraph',
            text: 'In the stock TFS 1.6 gain-experience event, eligible monster experience is multiplied by the level stage, then by any low-level bonus, and then by the stamina modifier. Party sharing and upstream event callbacks can alter the amount before or around this event depending on the data pack.',
          },
          {
            type: 'formula',
            label: 'Reference gain model',
            expression: 'XP_awarded = XP_raw x Stage(L) x (1 + LowLevelBonus(L) / 100) x StaminaMultiplier',
            variables: [
              'Stage(L) is selected from the configured experience stage table.',
              'The premium bonus band uses 1.5; ordinary stamina uses 1.0; the low band uses 0.5.',
              'Events, prey, boosts, charms, party sharing, and custom scripts require separate terms when present.',
            ],
          },
          {
            type: 'table',
            caption: 'Worked gain example',
            columns: ['Input', 'Value'],
            rows: [
              ['Raw monster experience', '6,000'],
              ['Level stage', '3x'],
              ['Low-level bonus', '20%'],
              ['Premium stamina band', '1.5x'],
              ['Awarded experience', '6,000 x 3 x 1.20 x 1.50 = 32,400'],
            ],
          },
        ],
      },
      {
        id: 'stages',
        title: 'Experience stages shape the server economy',
        blocks: [
          {
            type: 'paragraph',
            text: 'A staged server applies different multipliers to level ranges. High early stages compress the tutorial and equipment ramp; lower later stages determine season length, death recovery, guild-war replacement cost, supply consumption, and how long hunting areas remain relevant. The stage table must be read together with monster experience, spawn density, party bonuses, stamina, tasks, quests, and purchasable boosts.',
          },
          {
            type: 'steps',
            items: [
              { title: 'Capture every boundary', text: 'Record minimum level, maximum level, multiplier, and whether ranges overlap or leave gaps.' },
              { title: 'Test the boundary levels', text: 'Verify one kill immediately below, at, and above each transition.' },
              { title: 'Include all bonus layers', text: 'A displayed 5x stage may produce much more after stamina, event, party, prey, or shop bonuses.' },
              { title: 'Model time, not labels', text: 'Estimate hours per level using realistic experience per hour and downtime.' },
            ],
          },
        ],
      },
      {
        id: 'server-comparison',
        title: 'Compare progression honestly',
        blocks: [
          {
            type: 'list',
            items: [
              'Publish the complete stage table rather than a single x-number.',
              'State whether task, quest, event, boss, PvP, and party experience use the same rate path.',
              'Disclose stamina, boosts, premium bonuses, and paid multipliers.',
              'Track season resets, rebirth, prestige, vocation resets, and level caps separately.',
              'Use median active-player progression when available; top-player pace alone is not representative.',
            ],
          },
        ],
      },
    ],
    relatedSlugs: ['skills-magic-level', 'stamina-system', 'ruleset-verification'],
    relatedServerSearches: ['low rate', 'high rate', 'staged experience', '1x', 'long term'],
    sources: pickKnowledgeSources('tfsRelease', 'tfsExperience', 'tfsStaminaUse', 'tfsConfiguration'),
  },
  {
    slug: 'skills-magic-level',
    collection: 'progression',
    entityType: 'progression_system',
    name: 'Skills and Magic-Level Progression',
    shortName: 'Skills & Magic Level',
    canonicalPath: '/knowledge/progression/skills-magic-level',
    status: 'source-backed',
    profile: 'TFS 1.6 vocation progression reference',
    reviewedAt,
    readingMinutes: 14,
    summary:
      'Source-level skill-try and mana-spent curves, vocation multipliers, target-level formulas, training behavior, rate settings, and controlled verification methods.',
    keywords: ['Tibia skill formula', 'Tibia magic level formula', 'TFS skill multiplier', 'Open Tibia training rates'],
    tags: ['skills', 'magic level', 'training', 'vocations'],
    facts: [
      { key: 'Skill curve', value: 'Skill-specific base multiplied exponentially by a vocation factor' },
      { key: 'Magic curve', value: '1,600 multiplied exponentially by the vocation mana factor' },
      { key: 'Displayed rate', value: 'rateSkill and rateMagic accelerate credited progress; they do not describe the base curve alone' },
      { key: 'Training eligibility', value: 'Depends on hit/block events, weapon behavior, offline scripts, and data-pack rules' },
    ],
    sections: [
      {
        id: 'skill-tries',
        title: 'Required tries for a target skill',
        blocks: [
          {
            type: 'paragraph',
            text: 'TFS 1.6 assigns a base value to each skill and an exponential multiplier to each vocation-skill pair. The requirement returned for target skill T is the base multiplied by the vocation factor raised to T minus eleven. Advancing from current skill S to S + 1 therefore uses target T = S + 1.',
          },
          {
            type: 'formula',
            label: 'Required tries for target skill T',
            expression: 'Tries(skill, T) = floor(Base_skill x Multiplier_vocation,skill^(T - 11))',
            variables: [
              'T is the target skill level.',
              'The exponent is zero at target skill 11.',
              'The C++ return type is an integer, so fractional results are truncated during conversion.',
            ],
          },
          {
            type: 'table',
            caption: 'Skill base values in TFS 1.6',
            columns: ['Skill', 'Base'],
            rows: [
              ['Fist fighting', '50'],
              ['Club fighting', '50'],
              ['Sword fighting', '50'],
              ['Axe fighting', '50'],
              ['Distance fighting', '30'],
              ['Shielding', '100'],
              ['Fishing', '20'],
            ],
          },
        ],
      },
      {
        id: 'vocation-multipliers',
        title: 'Stock vocation multipliers',
        blocks: [
          {
            type: 'paragraph',
            text: 'A lower multiplier means faster long-term advancement because each target level grows less sharply than the previous one. The difference compounds. A 1.1 factor and a 2.0 factor may look close on a configuration screen, but they produce radically different high-skill requirements.',
          },
          {
            type: 'table',
            caption: 'Unpromoted and promoted vocations share these stock factors',
            columns: ['Vocation', 'Fist', 'Club / sword / axe', 'Distance', 'Shielding', 'Magic mana factor'],
            rows: [
              ['Sorcerer / Master Sorcerer', '1.5', '2.0', '2.0', '1.5', '1.1'],
              ['Druid / Elder Druid', '1.5', '1.8', '1.8', '1.5', '1.1'],
              ['Paladin / Royal Paladin', '1.2', '1.2', '1.1', '1.1', '1.4'],
              ['Knight / Elite Knight', '1.1', '1.1', '1.4', '1.1', '3.0'],
            ],
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Promotion does not automatically change the curve',
            text: 'In the stock TFS 1.6 vocation file, promoted vocations retain the same skill and mana multipliers as their base vocations. Promotion changes regeneration and other attributes. Custom servers often change both.',
          },
        ],
      },
      {
        id: 'magic-level',
        title: 'Mana spent for a target magic level',
        blocks: [
          {
            type: 'paragraph',
            text: 'Magic-level advancement uses mana spent rather than weapon tries. The stock formula begins at 1,600 and compounds by the vocation mana multiplier. To advance from magic level M - 1 to M, evaluate the formula at target M.',
          },
          {
            type: 'formula',
            label: 'Required mana spent for target magic level M',
            expression: 'Mana(M) = floor(1,600 x ManaMultiplier^(M - 1))',
            variables: [
              'Sorcerer and druid use 1.1 in the stock profile.',
              'Paladin uses 1.4.',
              'Knight uses 3.0.',
            ],
          },
          {
            type: 'table',
            caption: 'Selected stock mana requirements',
            columns: ['Target magic level', 'Sorcerer / druid', 'Paladin', 'Knight'],
            rows: [
              ['10', '3,772', '33,057', '31,492,800'],
              ['20', '9,785', '956,208', '1,859,618,347,200'],
              ['50', '170,750', '23,141,618,559', 'Beyond practical stock integer range'],
            ],
          },
          {
            type: 'paragraph',
            text: 'These are per-target requirements returned by the base function, not cumulative mana from magic level zero. RateMagic, exercise weapons, offline training, event multipliers, loyalty-like systems, and custom mana-spent callbacks can change effective progress.',
          },
        ],
      },
      {
        id: 'training-events',
        title: 'A try must be earned before a rate can multiply it',
        blocks: [
          {
            type: 'paragraph',
            text: 'Training rate is only one part of advancement. Weapon skill progress depends on attack events and hit/block outcomes. Shielding depends on eligible blocked hits and shield state. Fishing depends on successful configured interactions. Magic progression depends on mana-spent credit. A server can advertise 10x skills while anti-training logic, attack speed, target armor, regeneration, exercise weapons, or offline trainers dominate the real pace.',
          },
          {
            type: 'steps',
            items: [
              { title: 'Fix the starting state', text: 'Record vocation, promotion, skill, percentage progress, weapon, target, attack speed, and server rates.' },
              { title: 'Count eligible events', text: 'Run a known number of attacks, blocks, casts, or training-weapon charges.' },
              { title: 'Measure credited progress', text: 'Compare exact internal tries or mana spent when administrative tooling is available.' },
              { title: 'Repeat at another level', text: 'Exponential curves can hide incorrect multipliers at low skills.' },
            ],
          },
        ],
      },
      {
        id: 'server-disclosure',
        title: 'What a complete server profile should disclose',
        blocks: [
          {
            type: 'list',
            items: [
              'Skill and magic rate values, including stage ranges and event modifiers.',
              'Vocation-specific multipliers and any promotion changes.',
              'Attack speed, training-monster rules, anti-idle policy, and multi-client policy.',
              'Offline training duration, conversion ratio, premium requirement, and daily cap.',
              'Exercise weapon charges, mana or health value per charge, and store availability.',
              'Loss of skills and magic level on death, blessings, skull penalties, and reset systems.',
            ],
          },
        ],
      },
    ],
    relatedSlugs: ['experience-levels', 'stamina-system', 'armor-defense-formulas'],
    relatedServerSearches: ['skill rate', 'magic rate', 'trainers', 'offline training', 'low rate'],
    sources: pickKnowledgeSources('officialCharacterManual', 'tfsRelease', 'tfsVocation', 'tfsVocationData', 'tfsConfiguration'),
  },
  {
    slug: 'stamina-system',
    collection: 'progression',
    entityType: 'progression_system',
    name: 'Stamina System',
    shortName: 'Stamina',
    canonicalPath: '/knowledge/progression/stamina-system',
    status: 'source-backed',
    profile: 'Official rules and TFS 1.6 reference scripts',
    reviewedAt,
    readingMinutes: 10,
    summary:
      'The 42-hour stamina clock, premium bonus band, ordinary and reduced experience bands, offline regeneration, loot implications, and server-specific audit checklist.',
    keywords: ['Tibia stamina system', 'Tibia stamina regeneration', 'TFS stamina', 'Tibia 42 hours stamina'],
    tags: ['stamina', 'experience', 'offline regeneration', 'premium'],
    facts: [
      { key: 'Maximum', value: '42 hours / 2,520 minutes' },
      { key: 'Bonus band', value: 'Above 39 hours, premium characters receive 150% monster experience in the reference profile' },
      { key: 'Low band', value: 'At or below 14 hours, monster experience is reduced to 50%' },
      { key: 'Regeneration delay', value: 'Begins after 10 minutes offline in the reference script' },
    ],
    sections: [
      {
        id: 'bands',
        title: 'Stamina bands',
        blocks: [
          {
            type: 'table',
            caption: 'Reference stamina bands',
            columns: ['Stamina remaining', 'Monster experience', 'Additional behavior'],
            rows: [
              ['39:00 to 42:00', '150% for premium characters; otherwise ordinary rate', 'Often called bonus or happy hours'],
              ['14:01 to 39:00', '100%', 'Ordinary stamina band'],
              ['00:01 to 14:00', '50%', 'Official rules also restrict monster loot when the top-damage character is in this band'],
              ['00:00', 'No monster experience in the TFS reference path', 'Server scripts may add further restrictions'],
            ],
          },
          {
            type: 'paragraph',
            text: 'The stock TFS gain-experience event reads stamina after consumption for the current gain and applies the multiplier. Exact boundary behavior should be tested on the deployed fork, particularly at 39:00 and 14:00, because scripts can consume and evaluate in a different order.',
          },
        ],
      },
      {
        id: 'consumption',
        title: 'Consumption follows rewarded monster activity',
        blocks: [
          {
            type: 'paragraph',
            text: 'In the reference event, stamina is consumed when experience is gained from a non-player source. The script tracks time between eligible gains and subtracts one or two minutes depending on elapsed time, preventing every individual monster from consuming a full minute. Player-sourced experience does not enter this event branch.',
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'Custom content can bypass the expected path',
            text: 'Task rewards, quest experience, training rooms, scripted bosses, party bonuses, and event rewards may call experience APIs differently. A server must test each source rather than assume stamina affects all experience uniformly.',
          },
        ],
      },
      {
        id: 'regeneration',
        title: 'Offline regeneration',
        blocks: [
          {
            type: 'paragraph',
            text: 'The TFS 1.6 login script subtracts a 10-minute waiting period from offline time. After that delay, ordinary stamina up to 39 hours regenerates at one stamina minute per three offline minutes. The final three bonus hours regenerate at one stamina minute per six offline minutes. The script caps stamina at 42 hours and caps a single offline interval considered for recovery at 21 days.',
          },
          {
            type: 'formula',
            label: 'Ordinary-band recovery after the delay',
            expression: 'Recovered ordinary minutes = floor(max(0, OfflineSeconds - 600) / 180)',
            variables: [
              'Recovery stops at 2,340 stamina minutes before the bonus-band rule applies.',
              'Configured timeToRegenMinuteStamina can replace 180 seconds.',
            ],
          },
          {
            type: 'formula',
            label: 'Bonus-band recovery after ordinary stamina is full',
            expression: 'Recovered bonus minutes = floor(RemainingEligibleOfflineSeconds / 360)',
            variables: [
              'The final cap is 2,520 stamina minutes.',
              'Configured timeToRegenMinutePremiumStamina can replace 360 seconds.',
            ],
          },
          {
            type: 'table',
            caption: 'Recovery examples after the 10-minute delay',
            columns: ['Starting stamina', 'Offline duration', 'Reference recovery'],
            rows: [
              ['20:00', '70 minutes', '20 ordinary minutes, reaching 20:20'],
              ['38:50', '70 minutes', '10 ordinary minutes to 39:00, then about 5 bonus minutes'],
              ['41:50', '70 minutes', '10 bonus minutes, reaching the 42:00 cap'],
            ],
          },
        ],
      },
      {
        id: 'planning',
        title: 'Plan sessions around goals, not only bonus hours',
        blocks: [
          {
            type: 'list',
            items: [
              'Use bonus stamina on the highest-value experience session if level progression is the goal.',
              'Ordinary stamina can be better for access quests, bestiary completion, gathering, trading, or low-risk exploration.',
              'Avoid entering the low band before a loot-dependent hunt unless the server explicitly overrides the official loot restriction.',
              'Account for the slower six-to-one recovery of the final three hours when planning daily sessions.',
              'On seasonal servers, compare stamina policy with paid boosts and multi-character play because those systems change competitive pressure.',
            ],
          },
        ],
      },
      {
        id: 'server-audit',
        title: 'Server stamina disclosure checklist',
        blocks: [
          {
            type: 'list',
            items: [
              'Is the stamina system enabled?',
              'What are the maximum, bonus threshold, low threshold, and exact multipliers?',
              'Does low stamina remove loot, experience, both, or neither?',
              'Which experience sources consume stamina and which receive the multiplier?',
              'What offline delay and recovery ratios apply?',
              'Can resting zones, beds, daily rewards, store items, or premium status regenerate stamina online?',
            ],
          },
        ],
      },
    ],
    relatedSlugs: ['experience-levels', 'skills-magic-level', 'skulls-frags-pvp'],
    relatedServerSearches: ['long term', 'low rate', 'premium stamina', 'seasonal', '1x'],
    sources: pickKnowledgeSources('officialCharacterManual', 'tfsRelease', 'tfsStaminaUse', 'tfsStaminaRegen', 'tfsConfiguration'),
  },
];
