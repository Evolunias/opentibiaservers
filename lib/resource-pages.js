import { polishPlayerFacingCopy } from './editorial-copy.js';

const updatedAt = '2026-07-28';

const officialTibiaRules = {
  label: 'Official Tibia rule 3b on unofficial software',
  href: 'https://www.tibia.com/support/?rule=3b&subtopic=tibiarules',
};

const battleyeAnnouncement = {
  label: 'Official 2017 Tibia BattlEye announcement',
  href: 'https://www.tibia.com/news/?id=3950&subtopic=newsarchive',
};

const commonGlossary = [
  {
    term: 'OTBM',
    definition: 'The Open Tibia Binary Map format used to store map tiles, floors, towns, houses, waypoints, and related world data.',
  },
  {
    term: 'OTB',
    definition: 'The Open Tibia binary item mapping format used by servers and tools to keep server item IDs aligned with client item IDs.',
  },
  {
    term: 'DAT',
    definition: 'A classic Tibia client data file containing client-side metadata for items, creatures, effects, projectiles, and appearances.',
  },
  {
    term: 'SPR',
    definition: 'The classic Tibia sprite container. A DAT entry describes an appearance while the SPR file supplies its image data.',
  },
  {
    term: 'appearances.dat',
    definition: 'A newer client asset file used by modern Tibia versions instead of the classic DAT-only metadata workflow.',
  },
  {
    term: 'AAC',
    definition: 'Automatic Account Creator, the website and administration layer used for accounts, characters, news, shops, downloads, and community pages.',
  },
  {
    term: 'Protocol version',
    definition: 'The network and asset contract expected by a particular client and server build. Matching the visible version number alone does not guarantee compatibility.',
  },
  {
    term: 'Fork',
    definition: 'A separately maintained code line derived from an earlier project. A fork may preserve the name while changing supported protocols, build systems, and features.',
  },
];

const officialAccessBySlug = {
  'remeres-map-editor': [
    { label: 'OpenTibiaBR RME releases', href: 'https://github.com/opentibiabr/remeres-map-editor/releases', kind: 'download', note: 'Current maintained release line used with Canary and newer Open Tibia asset workflows.' },
    { label: 'Historical upstream RME releases', href: 'https://github.com/hampusborgos/rme/releases', kind: 'download', note: 'Original open-source lineage and historical 3.x release archive.' },
    { label: 'SourceForge RME file archive', href: 'https://sourceforge.net/projects/rme/files/', kind: 'download', note: 'Long-running public file archive for older release verification.' },
  ],
  'open-tibia-item-editor': [
    { label: 'OTTools ItemEditor releases', href: 'https://github.com/ottools/ItemEditor/releases', kind: 'download', note: 'Maintained community release archive for item editing workflows.' },
    { label: 'Original OpenTibia item-editor source', href: 'https://github.com/opentibia/item-editor', kind: 'reference', note: 'Archived source lineage used for historical verification.' },
  ],
  'dat-editor': [
    { label: '7.72 DAT Editor releases', href: 'https://github.com/nekiro/7.72-dat-editor/releases', kind: 'download', note: 'Archived release page for the classic 7.72 DAT editing line.' },
    { label: 'OpenTibia tools source', href: 'https://github.com/ppnowak/opentibia-tools', kind: 'reference', note: 'Source project covering DAT/SPR/OTB asset utilities.' },
  ],
  'spr-editor': [
    { label: 'OpenTibia tools source', href: 'https://github.com/ppnowak/opentibia-tools', kind: 'reference', note: 'Source project covering DAT/SPR/OTB asset utilities.' },
    { label: 'Lapis Item Editor releases', href: 'https://github.com/giuinktse7/LapisItemEditor/releases', kind: 'download', note: 'Modern item and asset editor release page.' },
  ],
  'lapis-item-editor': [
    { label: 'Lapis Item Editor releases', href: 'https://github.com/giuinktse7/LapisItemEditor/releases', kind: 'download', note: 'Official GitHub release channel for Lapis builds.' },
    { label: 'Lapis Item Editor source', href: 'https://github.com/giuinktse7/LapisItemEditor', kind: 'reference', note: 'Project source and issue context.' },
  ],
  'open-tibia-library': [
    { label: 'Open Tibia Library releases', href: 'https://github.com/gesior/open-tibia-library/releases', kind: 'download', note: 'Official release archive for the PHP library.' },
    { label: 'Open Tibia Library source', href: 'https://github.com/gesior/open-tibia-library', kind: 'reference', note: 'Project source and documentation context.' },
  ],
  otclient: [
    { label: 'OpenTibiaBR OTClient releases', href: 'https://github.com/opentibiabr/otclient/releases', kind: 'download', note: 'Current maintained OTClient release line.' },
    { label: 'Original edubart OTClient source', href: 'https://github.com/edubart/otclient', kind: 'reference', note: 'Historical upstream source lineage.' },
  ],
  'forgotten-server': [
    { label: 'The Forgotten Server releases', href: 'https://opentibiaservers.com//forgottenserver/releases', kind: 'download', note: 'Official community archive GitHub release archive.' },
    { label: 'The Forgotten Server source', href: 'https://opentibiaservers.com//forgottenserver', kind: 'reference', note: 'Primary source repository for engine code and issues.' },
  ],
  canary: [
    { label: 'Canary releases', href: 'https://github.com/opentibiabr/canary/releases', kind: 'download', note: 'Official OpenTibiaBR Canary release channel.' },
    { label: 'Canary Docker images', href: 'https://hub.docker.com/r/opentibiabr/canary', kind: 'download', note: 'Official Docker image distribution for reproducible deployments.' },
  ],
  gesior: [
    { label: 'Gesior2012 source', href: 'https://github.com/gesior/Gesior2012', kind: 'reference', note: 'Primary project source; verify forks and templates before production use.' },
  ],
  'znote-aac': [
    { label: 'Znote AAC releases', href: 'https://github.com/Znote/ZnoteAAC/releases', kind: 'download', note: 'Official GitHub release channel.' },
    { label: 'Znote AAC source', href: 'https://github.com/Znote/ZnoteAAC', kind: 'reference', note: 'Primary source repository and documentation context.' },
  ],
  myaac: [
    { label: 'MyAAC releases', href: 'https://github.com/slawkens/myaac/releases', kind: 'download', note: 'Official release archive for MyAAC.' },
    { label: 'MyAAC project website', href: 'https://my-aac.org/', kind: 'reference', note: 'Official project site and documentation entry point.' },
  ],
  neobot: [
    { label: 'community archive NeoBot shutdown discussion', href: 'https://opentibiaservers.com/threads/official-neobot-shut-down.245462/', kind: 'reference', note: 'Historical community record only; no safe current download is endorsed.' },
    { label: 'Official Tibia unofficial software rule', href: officialTibiaRules.href, kind: 'reference', note: 'Rule context for automation history.' },
  ],
  'blackd-proxy': [
    { label: 'BlackdTools official site archive', href: 'https://blackdtools.com/', kind: 'reference', note: 'Historical publisher domain. This page does not endorse executable downloads.' },
    { label: 'Official Tibia unofficial software rule', href: officialTibiaRules.href, kind: 'reference', note: 'Rule context for proxy and automation history.' },
  ],
  'tibiabot-ng': [
    { label: 'community archive automation discussion archive', href: 'https://opentibiaservers.com/threads/tibiabot-ng.67312/', kind: 'reference', note: 'Historical community discussion only; no safe current download is endorsed.' },
    { label: 'Official Tibia BattlEye announcement', href: battleyeAnnouncement.href, kind: 'reference', note: 'Official anti-cheat context.' },
  ],
  elfbot: [
    { label: 'community archive ElfBot discussion archive', href: 'https://opentibiaservers.com/threads/elfbot-8-6.76204/', kind: 'reference', note: 'Historical community discussion only; no safe current download is endorsed.' },
    { label: 'Official Tibia unofficial software rule', href: officialTibiaRules.href, kind: 'reference', note: 'Rule context for automation history.' },
  ],
};

const resourceDefinitions = [
  {
    slug: 'remeres-map-editor',
    aliases: ['rme'],
    aliasLabels: { rme: 'RME' },
    name: "Remere's Map Editor",
    category: 'Mapping',
    status: 'Active community-maintained lineages',
    era: '2007-present',
    originalRelease: 'Earliest verified public archive: December 28, 2007',
    evidenceLevel: 'Archive-backed',
    lineage: 'Created by Remere; later maintained through community GitHub repositories and forks',
    technology: 'C++, wxWidgets, OTBM maps, OTB item data',
    summary: "Remere's Map Editor is the defining visual OTBM map editor for Open Tibia, used to build and maintain towns, hunting grounds, houses, spawns, quests, and complete custom worlds.",
    sourceLinks: [
      { label: "Remere's Map Editor SourceForge file archive", href: 'https://sourceforge.net/projects/rme/files/' },
      { label: 'Original hampusborgos/rme GitHub lineage', href: 'https://github.com/hampusborgos/rme' },
      { label: 'Original RME GitHub releases', href: 'https://github.com/hampusborgos/rme/releases' },
      { label: 'OpenTibiaBR Remere\'s Map Editor', href: 'https://github.com/opentibiabr/remeres-map-editor' },
      { label: 'OpenTibiaBR RME releases', href: 'https://github.com/opentibiabr/remeres-map-editor/releases' },
    ],
    origin: [
      "The oldest public artifact verified for this page is the SourceForge file area dated December 28, 2007. That is an archive boundary, not proof that the first private build was written on that exact day. It is the earliest date this page can responsibly present without turning community memory into a false release claim.",
      "The editor was created by Remere and became closely associated with the OTBM map format. The hampusborgos/rme repository later preserved the principal open-source lineage, while the OpenTibiaBR fork extended the editor for Canary and newer client assets. The current ecosystem therefore contains a historical upstream and actively maintained descendants rather than one uninterrupted commercial-style product line.",
    ],
    trends: [
      "Early RME workflows centered on classic DAT, SPR, OTB, and OTBM combinations. As server distributions added houses, spawn metadata, waypoints, extensions, larger maps, and newer item properties, the editor grew from a tile painter into a world-authoring environment. GitHub releases in the 3.x line added better search, minimap export, animation previews, high-DPI support, and safer map inspection.",
      "The OpenTibiaBR line marks the modern shift. Its releases connect RME to Canary, newer client assets, zones, tileset management, current monsters and NPCs, and client 11-or-newer appearance data. That trend matters because a map can open visually while still being incompatible with the server's item definitions, map schema, or client asset set.",
    ],
    uses: [
      "Mappers use RME to paint terrain, borders, walls, floors, decorations, doors, teleports, and elevation changes; define towns and temple positions; configure houses and exits; place monster and NPC spawns; and inspect unique IDs, action IDs, containers, and writable objects.",
      "Server teams also use it for operational work: importing map sections, reviewing player-submitted areas, locating broken tiles, exporting minimaps, comparing extensions, organizing backup copies, and preparing a controlled map revision for deployment.",
      "A reliable workflow starts with the exact server distribution and client asset set, opens a copy of the map, validates item and OTB versions, and tests the saved result on a staging server. The map, spawn files, house data, and matching item definitions should be versioned together.",
    ],
    notableCases: [
      "RME became the common visual language of Open Tibia mapping. Countless custom continents, real-map edits, quest rooms, event arenas, and hunting grounds were built in it, which is why old tutorials and modern engine documentation still refer to RME even when the maintained repository has changed.",
      "Its continued inclusion in Canary and OpenTibiaBR documentation is a notable longevity case: a tool with a verifiable public footprint from 2007 remains part of a modern C++20 server workflow. The current fork's support for newer assets shows how the community adapted a classic editor instead of discarding the OTBM ecosystem.",
    ],
    evaluation: [
      "Before choosing a build, verify the target client version, OTB major/minor version, server engine branch, items.otb, items.xml, extension files, and whether the map uses classic DAT/SPR assets or modern appearances data. A release described as current may still target a different server contract.",
      "Never make the first edit against the only production copy. Map corruption, item remapping, invalid house data, duplicate unique IDs, and unsupported attributes may appear only when the server loads or a player reaches the edited area. Keep binary backups and a reproducible staging test.",
    ],
    timeline: [
      {
        date: 'December 28, 2007',
        title: 'Earliest verified SourceForge archive date',
        text: 'SourceForge preserves an OldFiles area dated December 28, 2007. This page uses that as the earliest verified public evidence, not as an unsupported claim about the first line of code.',
        sourceLabel: 'SourceForge file archive',
        sourceHref: 'https://sourceforge.net/projects/rme/files/',
      },
      {
        date: 'May 13, 2008',
        title: 'Main SourceForge file line is visible',
        text: 'The main rme directory in the historical SourceForge project is dated May 13, 2008, documenting the editor as an established public project.',
        sourceLabel: 'SourceForge file archive',
        sourceHref: 'https://sourceforge.net/projects/rme/files/',
      },
      {
        date: 'December 4, 2015',
        title: 'RME 3.0 enters the GitHub release record',
        text: 'The hampusborgos lineage records v3.0 as its earliest published GitHub release, followed by a long 3.x series of mapping, search, platform, and compatibility work.',
        sourceLabel: 'hampusborgos/rme releases',
        sourceHref: 'https://github.com/hampusborgos/rme/releases',
      },
      {
        date: '2020-2026',
        title: 'OpenTibiaBR continues the modern lineage',
        text: 'The OpenTibiaBR fork connects RME to Canary and modern asset workflows, with later releases adding zones, tileset management, newer creatures, and client 11+ support.',
        sourceLabel: 'OpenTibiaBR RME releases',
        sourceHref: 'https://github.com/opentibiabr/remeres-map-editor/releases',
      },
    ],
    evidenceNotes: [
      { label: 'Release-date standard', value: 'The December 2007 date comes from a surviving public file archive. It is intentionally described as the earliest verified archive, not an exact private-development start date.' },
      { label: 'Lineage standard', value: 'The original GitHub repository and the OpenTibiaBR fork are listed separately so readers can distinguish historical continuity from current maintenance.' },
      { label: 'Compatibility evidence', value: 'The modern repository and release notes explicitly connect the current editor line to Canary and newer client assets.' },
    ],
    related: ['OTBM map editor', 'Open Tibia mapping', 'Canary map editor', 'TFS map editor', 'custom Tibia maps'],
  },
  {
    slug: 'otitemeditor',
    aliases: ['item-editor', 'otb-editor'],
    aliasLabels: { 'item-editor': 'Item Editor', 'otb-editor': 'OTB Editor' },
    name: 'OTItemEditor',
    category: 'Item Editing',
    status: 'Original repository archived; community successor available',
    era: '2012-present',
    originalRelease: 'Public repository created July 23, 2012',
    evidenceLevel: 'Repository-backed',
    lineage: 'opentibia/item-editor followed by community ItemEditor implementations',
    technology: 'C#, OTB, DAT, SPR, image-based item matching',
    summary: 'OTItemEditor is the historical Open Tibia item-mapping editor used to connect client item IDs and graphics with the stable server-side IDs stored in OTB data.',
    sourceLinks: [
      { label: 'Original opentibia/item-editor repository', href: 'https://github.com/opentibia/item-editor' },
      { label: 'community archive New OTItemEditor announcement', href: 'https://opentibiaservers.com/threads/new-otitemeditor.208346/' },
      { label: 'ottools ItemEditor repository', href: 'https://github.com/ottools/ItemEditor' },
      { label: 'ottools ItemEditor releases', href: 'https://github.com/ottools/ItemEditor/releases' },
    ],
    origin: [
      "The current public record begins with the opentibia/item-editor repository, created on July 23, 2012. Its own documentation defines the core problem clearly: CipSoft changed client-side item IDs between major versions, while servers and tools needed a consistent server-side mapping. OTItemEditor existed to reconcile those two namespaces.",
      "The original project could read Tibia.dat and Tibia.spr, match appearances through image recognition, and add items to OTB data. That repository was archived after its last active period. A later ottools/ItemEditor project continued the same practical category with broader version support and published releases beginning with v0.4 on November 7, 2017.",
    ],
    trends: [
      "The historical trend is from manual item-table maintenance toward visual comparison and repeatable ID mapping. An operator could inspect client appearances beside server IDs instead of treating items.otb as an opaque binary file. This reduced one class of mismatch, but it did not eliminate the need to coordinate items.xml, client assets, map data, and protocol behavior.",
      "Newer Tibia clients moved beyond the classic DAT/SPR pair toward appearances.dat and compressed sprite packages. That transition split the tool landscape: classic ItemEditor builds remain relevant to older OT protocols, while newer projects such as LapisItemEditor address modern appearance formats.",
    ],
    uses: [
      "Common uses include opening an existing items.otb, importing client appearance data, comparing client and server IDs, creating missing mappings, changing supported OTB metadata, and preparing an item set for a specific server/client pair.",
      "Item editors are also used during client upgrades and downgrades. A distribution moving between protocol families may need a new OTB, revised items.xml entries, map validation, and client asset changes. The editor handles one part of that migration, not the entire compatibility problem.",
      "The safest workflow keeps the original OTB and client assets untouched, records the source client version, exports a candidate mapping, and validates item appearance, movement flags, containers, fluids, doors, weapons, and map loading on a disposable server instance.",
    ],
    notableCases: [
      "OTItemEditor's most important contribution is conceptual: it made the client-ID versus server-ID boundary visible to ordinary server developers. Many mysterious invisible-item, wrong-sprite, blocked-tile, or map-load failures are really contract mismatches across OTB, XML, DAT/SPR, and the server executable.",
      "The original repository's archived status and the 2017 successor illustrate a recurring Open Tibia pattern. A familiar tool name can refer to several code lines with different format support, so the repository and release date matter more than a download filename copied into an old forum post.",
    ],
    evaluation: [
      "Choose an editor by exact input formats and supported client range. Confirm whether it reads classic DAT/SPR, modern appearances data, the required OTB revision, and the server distribution's item schema. A tool that opens the file is not automatically safe to save it.",
      "Treat old compiled binaries and repacks as untrusted. Prefer source repositories and signed or checksummed releases where available, scan artifacts, and test output on backups. Never overwrite the only items.otb used by a live server.",
    ],
    timeline: [
      {
        date: 'July 23, 2012',
        title: 'Original public repository is created',
        text: 'The opentibia/item-editor repository establishes the public code line and documents OTB mapping, DAT/SPR reading, image recognition, and adding new items.',
        sourceLabel: 'Original OTItemEditor repository',
        sourceHref: 'https://github.com/opentibia/item-editor',
      },
      {
        date: 'February 2014',
        title: 'New OTItemEditor is discussed on community archive',
        text: 'The community archive announcement provides a dated community record for the editor, its intended workflow, and the practical version questions users were asking.',
        sourceLabel: 'community archive announcement',
        sourceHref: 'https://opentibiaservers.com/threads/new-otitemeditor.208346/',
      },
      {
        date: 'March 8, 2015',
        title: 'Original repository reaches its last recorded push',
        text: 'The original code line later became read-only, making its archive status an important compatibility and security signal.',
        sourceLabel: 'Original OTItemEditor repository',
        sourceHref: 'https://github.com/opentibia/item-editor',
      },
      {
        date: 'November 7, 2017',
        title: 'ottools ItemEditor publishes v0.4',
        text: 'A community successor began a separate release history, preserving the OTB item-editor category for additional client versions and operating systems.',
        sourceLabel: 'ItemEditor releases',
        sourceHref: 'https://github.com/ottools/ItemEditor/releases',
      },
    ],
    evidenceNotes: [
      { label: 'Purpose from upstream', value: 'The original README explicitly explains why client IDs must be mapped to stable server and tool IDs.' },
      { label: 'Status from upstream', value: 'The original GitHub repository is archived and states that no builds are currently supplied there.' },
      { label: 'Continuation evidence', value: 'The ottools project has its own repository and release history and should be evaluated as a separate implementation.' },
    ],
    related: ['OTB editor', 'items.otb editor', 'Tibia item IDs', 'Open Tibia items', 'OTItemEditor download history'],
  },
  {
    slug: 'dat-editor',
    aliases: ['tibia-dat-editor'],
    aliasLabels: { 'tibia-dat-editor': 'Tibia DAT Editor' },
    name: 'Tibia DAT Editor',
    category: 'Client Data',
    status: 'A family of version-specific tools, not one universal product',
    era: 'Classic-client era-present',
    originalRelease: 'No single release date; selected 7.72 project appeared November 19, 2019',
    evidenceLevel: 'Tool-family record',
    lineage: 'Multiple independent editors for different Tibia client formats',
    technology: 'DAT appearance metadata, protocol-specific client assets',
    summary: 'Tibia DAT editors inspect or change the classic client metadata that describes items, creatures, outfits, effects, missiles, animation properties, and sprite references.',
    sourceLinks: [
      { label: 'nekiro 7.72 DAT Editor repository', href: 'https://github.com/nekiro/7.72-dat-editor' },
      { label: 'nekiro 7.72 DAT Editor releases', href: 'https://github.com/nekiro/7.72-dat-editor/releases' },
      { label: 'opentibia-tools DAT workflow', href: 'https://github.com/ppnowak/opentibia-tools' },
      { label: 'community archive DAT and SPR editor discussion', href: 'https://opentibiaservers.com/threads/looking-for-tibia-spr-and-tibia-dat-editor-ubuntu-or-windows.269447/' },
    ],
    origin: [
      "DAT editor is a category name. Many unrelated utilities used that description across different Tibia versions, so assigning the category one inventor or one original release date would be misleading. This page instead anchors its chronology to surviving projects and states which date belongs to which implementation.",
      "A concrete example is nekiro's free, open-source 7.72 DAT editor. Its repository and first beta release both date to November 19, 2019, and its README limits the intended target to protocol 7.72 while warning that older versions might work without a guarantee. The later opentibia-tools project documents extraction and compilation workflows for Tibia.dat alongside sprites and other asset containers.",
    ],
    trends: [
      "Classic Tibia clients split appearance metadata and pixels between DAT and SPR files. DAT editors exposed flags and sprite references that the official client otherwise treated as binary data. This was essential to custom items and outfits, but every client update could alter counts, flags, signatures, or serialization details.",
      "Modern clients shifted appearance definitions toward protobuf-derived appearances.dat and changed sprite packaging. As a result, DAT editor searches now divide into two intents: preserving a specific old protocol such as 7.72 or 8.60, and finding a modern appearance editor whose workflow is fundamentally different.",
    ],
    uses: [
      "Historically common tasks included inspecting object flags, changing stack or movement behavior, defining animation frames, assigning sprite IDs, adding custom items or outfits, and keeping a modified client's metadata synchronized with its SPR file.",
      "Preservation projects use DAT tooling to extract and document old client versions. Server developers use it when reproducing an older protocol, testing custom appearances, or diagnosing why the client renders or interacts with an object differently from the server.",
      "A complete change often crosses several files. Editing DAT metadata without the corresponding sprites, OTB mapping, server item definitions, and protocol expectations can produce blank graphics, shifted IDs, incorrect collision, or client crashes.",
    ],
    notableCases: [
      "The 7.72 editor is notable because it states a narrow protocol target instead of claiming universal compatibility. That is the right historical model for DAT tools: each implementation should be understood in relation to a specific binary format and client build.",
      "The migration from DAT/SPR to appearances.dat is itself the major trend. It explains why older tutorials remain valuable for preservation but can be actively harmful when applied unchanged to client 11+ assets.",
    ],
    evaluation: [
      "Start by identifying the exact client binary and DAT signature, then verify the editor's stated protocol range. Check whether it can preserve unknown flags, animation metadata, frame groups, extended sprite IDs, and the expected file signature.",
      "Work only from copies and keep DAT and SPR versions paired. A successfully saved file is not proof of correctness; launch a controlled client, inspect multiple object classes, and test connection to a matching staging server.",
    ],
    timeline: [
      {
        date: '2000s',
        title: 'DAT editor becomes a tool category',
        text: 'Independent editors circulated around classic Tibia versions. Surviving archives are fragmented, so this page does not invent a single launch date or owner for the category.',
      },
      {
        date: 'November 19, 2019',
        title: 'Open-source 7.72 DAT Editor is published',
        text: 'The repository and v1.0-beta release provide a clear, dated implementation focused on Tibia 7.72 and built in C# with WPF.',
        sourceLabel: '7.72 DAT Editor releases',
        sourceHref: 'https://github.com/nekiro/7.72-dat-editor/releases',
      },
      {
        date: 'September 13, 2020',
        title: '7.72 DAT Editor v1.1 closes the archived release line',
        text: 'The repository was later archived, preserving a stable historical tool but signaling that users should not expect ongoing format support.',
        sourceLabel: '7.72 DAT Editor repository',
        sourceHref: 'https://github.com/nekiro/7.72-dat-editor',
      },
      {
        date: '2021-present',
        title: 'Scriptable extraction and modern asset workflows expand',
        text: 'Projects such as opentibia-tools place DAT work inside repeatable extraction, compilation, sprite, and image-conversion pipelines.',
        sourceLabel: 'opentibia-tools',
        sourceHref: 'https://github.com/ppnowak/opentibia-tools',
      },
    ],
    evidenceNotes: [
      { label: 'Date caveat', value: 'November 19, 2019 is the first release of the selected 7.72 editor, not the birth date of DAT editing as a category.' },
      { label: 'Protocol caveat', value: 'The selected editor explicitly targets 7.72 and does not promise broad compatibility.' },
      { label: 'Format transition', value: 'Modern tools increasingly operate on appearances.dat and compressed assets rather than only Tibia.dat.' },
    ],
    related: ['Tibia.dat editor', '7.72 DAT editor', 'Tibia appearance editor', 'custom Tibia client', 'DAT SPR tools'],
  },
  {
    slug: 'spr-editor',
    aliases: ['tibia-spr-editor'],
    aliasLabels: { 'tibia-spr-editor': 'Tibia SPR Editor' },
    name: 'Tibia SPR Editor',
    category: 'Client Sprites',
    status: 'A historical tool family with modern extraction and packing successors',
    era: 'Classic-client era-present',
    originalRelease: 'No single release date; multiple independent implementations',
    evidenceLevel: 'Tool-family record',
    lineage: 'Classic sprite editors, extractors, packers, and modern asset pipelines',
    technology: 'SPR containers, bitmap/PNG sprites, sprite IDs, asset packing',
    summary: 'Tibia SPR editors and packers expose the images stored in classic Tibia sprite containers so developers can inspect, export, replace, and rebuild client graphics.',
    sourceLinks: [
      { label: 'opentibia-tools sprite extraction and packing', href: 'https://github.com/ppnowak/opentibia-tools' },
      { label: 'community archive DAT and SPR editor discussion', href: 'https://opentibiaservers.com/threads/looking-for-tibia-spr-and-tibia-dat-editor-ubuntu-or-windows.269447/' },
      { label: 'LapisItemEditor modern asset repository', href: 'https://github.com/giuinktse7/LapisItemEditor' },
    ],
    origin: [
      "SPR editor, like DAT editor, describes a class of utilities rather than one canonical product. Classic clients stored pixel data in Tibia.spr while Tibia.dat described how those sprites formed objects and animations. Editors emerged wherever developers needed to see or replace images in that binary container.",
      "Because early tools circulated through forums, file mirrors, and closed utilities, the exact first release is not safely recoverable from the sources used here. The current evidence set instead documents a modern open-source pipeline: ppnowak's opentibia-tools repository, opened in November 2021, can extract and compile Tibia.spr and convert BMP or PNG images.",
    ],
    trends: [
      "The first trend was manual sprite replacement: export an image, edit it, preserve dimensions and transparency rules, then rebuild the container. Larger custom projects demanded batch extraction, deterministic packing, extended sprite IDs, and scripts that could be repeated whenever a client version changed.",
      "The second trend was format migration. Newer clients use different asset packages and compression, so a classic SPR editor is not automatically useful for appearances.dat or LZMA-compressed sprite workflows. Modern projects often combine sprite handling with item mapping and appearance metadata in one pipeline.",
    ],
    uses: [
      "Common legitimate development uses include creating custom item art, outfits, monsters, effects, projectiles, UI-linked assets, and visual replacements for a private server client. Preservation users extract sprites to compare historical client versions or build searchable image archives.",
      "SPR work is rarely isolated. Each appearance may reference one or many sprite IDs across width, height, layers, patterns, directions, animation phases, and frame groups. Changing the pixel container without updating metadata can point an object at the wrong image or beyond the end of the file.",
      "Teams benefit from keeping original exported sprites, source artwork, a packing manifest, the exact DAT or appearances file, and checksums for built client assets. That turns a fragile manual edit into a reproducible release process.",
    ],
    notableCases: [
      "Sprite tooling made the visual identity of custom Open Tibia servers possible. Distinctive items, outfits, creatures, spell effects, and themed maps often began as changes to a classic SPR package.",
      "The long life of old protocols creates a second notable case: 7.x and 8.6 communities still need classic sprite knowledge, while modern engines increasingly use asset editors built around newer formats. Both histories coexist and should not be collapsed into one download recommendation.",
    ],
    evaluation: [
      "Verify the client version, sprite signature, extended-sprite support, transparency handling, maximum dimensions, animation metadata, and whether the tool preserves untouched sprites exactly. Test rebuilt files with the matching DAT and client executable.",
      "Respect asset rights. Open-source tooling does not automatically grant permission to redistribute CipSoft graphics or another server's custom artwork. Publish only assets you created, licensed, or have permission to share.",
    ],
    timeline: [
      {
        date: '2000s',
        title: 'Classic SPR editing spreads through Tibia communities',
        text: 'Independent utilities supported different client ranges. The fragmented archive prevents a defensible single original-release claim.',
      },
      {
        date: '2010s',
        title: 'Extended sprites and batch workflows become more important',
        text: 'Larger custom clients needed more than one-at-a-time image replacement, increasing demand for repeatable extraction, packing, and extended-ID support.',
      },
      {
        date: 'November 21, 2021',
        title: 'opentibia-tools opens a scriptable asset pipeline',
        text: 'The public repository documents Tibia.spr extraction, image conversion, and related DAT and CWM workflows in a Node.js toolchain.',
        sourceLabel: 'opentibia-tools',
        sourceHref: 'https://github.com/ppnowak/opentibia-tools',
      },
      {
        date: '2020s',
        title: 'Modern asset editors move beyond classic SPR-only assumptions',
        text: 'Projects such as LapisItemEditor support appearances.dat and compressed sprites, documenting the format shift in newer clients.',
        sourceLabel: 'LapisItemEditor',
        sourceHref: 'https://github.com/giuinktse7/LapisItemEditor',
      },
    ],
    evidenceNotes: [
      { label: 'Category caveat', value: 'There is no single canonical Tibia SPR Editor with one author and one launch date.' },
      { label: 'Modern evidence', value: 'opentibia-tools documents extraction, compilation, and image conversion rather than an opaque GUI-only workflow.' },
      { label: 'Rights caveat', value: 'Technical ability to unpack a sprite archive is separate from permission to redistribute its artwork.' },
    ],
    related: ['Tibia.spr editor', 'Tibia sprite extractor', 'Tibia sprite packer', 'custom Tibia sprites', 'DAT SPR editor'],
  },
  {
    slug: 'lapis-item-editor',
    aliases: [],
    name: 'LapisItemEditor',
    category: 'Item Editing',
    status: 'Public alpha-stage modern item editor',
    era: '2021-present',
    originalRelease: 'First GitHub release: July 24, 2022',
    evidenceLevel: 'Release-backed',
    lineage: 'Independent modern editor crediting ottools/ItemEditor',
    technology: 'C#, Avalonia, OTB, appearances.dat, LZMA-compressed sprites',
    summary: 'LapisItemEditor is a cross-platform item editor designed around client 11+ appearance formats and compressed sprites rather than only the classic DAT/SPR workflow.',
    sourceLinks: [
      { label: 'LapisItemEditor repository', href: 'https://github.com/giuinktse7/LapisItemEditor' },
      { label: 'LapisItemEditor releases', href: 'https://github.com/giuinktse7/LapisItemEditor/releases' },
      { label: 'Credited ottools ItemEditor project', href: 'https://github.com/ottools/ItemEditor' },
    ],
    origin: [
      "The public repository was created on December 18, 2021. Its first published GitHub release, v0.1.0-alpha, followed on July 24, 2022. Those dates are stronger than an inferred launch year because they come from the project's own repository and release record.",
      "LapisItemEditor was written in C# with Avalonia and explicitly credits ottools/ItemEditor. Its defining purpose is modern-format support: version 11+ appearances.dat metadata and LZMA-compressed sprites, while partial classic DAT/SPR work remains unfinished in a separate backend area.",
    ],
    trends: [
      "The project represents the Open Tibia asset transition from classic DAT/SPR editors to tools that understand protobuf-derived appearance definitions and compressed sprite storage. That shift changes both the file parser and the operator's mental model.",
      "Its release labels remain alpha, and the README is candid about partially implemented item-attribute editing and known bugs. That transparency is valuable: modern format support does not make the tool production-safe without validation.",
    ],
    uses: [
      "Documented uses include creating items.otb files, loading modern client assets, creating missing items, importing item names, changing supported appearance options, saving OTB output, and saving a modified appearances.dat for the client.",
      "The distinction between server and client output is essential. Some properties are stored in items.otb, while options such as takeability, lying-object behavior, and animation flags may live in appearances.dat. A server-only save will not reproduce a client-side appearance change.",
      "The project also exposes configurable client versions and OTB major versions, making it useful as a reference for developers studying the relationship between modern appearance data and Open Tibia item mappings.",
    ],
    notableCases: [
      "LapisItemEditor is notable less for age than for timing: it appeared when newer OT stacks needed a practical bridge between appearances.dat, compressed sprites, and the familiar items.otb server contract.",
      "Its cross-platform Avalonia UI and explicit limitations make it a useful case study in modernizing old OT tooling while preserving compatibility concepts inherited from ItemEditor.",
    ],
    evaluation: [
      "Treat every alpha build as experimental. Read the repository limitations, inspect open issues, keep source assets and backups, and test whether both the generated OTB and client appearances file behave correctly.",
      "Confirm the configured client version, OTB version, asset package, and server engine before saving. If a feature is marked partial or buggy upstream, do not rely on it for a production migration without reviewing the output.",
    ],
    timeline: [
      {
        date: 'December 18, 2021',
        title: 'Public repository is created',
        text: 'The repository establishes LapisItemEditor as a modern C# and Avalonia item editor for Open Tibia assets.',
        sourceLabel: 'LapisItemEditor repository',
        sourceHref: 'https://github.com/giuinktse7/LapisItemEditor',
      },
      {
        date: 'July 24, 2022',
        title: 'v0.1.0-alpha is published',
        text: 'The first GitHub release creates a clear public release boundary for the project.',
        sourceLabel: 'LapisItemEditor releases',
        sourceHref: 'https://github.com/giuinktse7/LapisItemEditor/releases',
      },
      {
        date: '2022-2024',
        title: 'Alpha releases iterate on the modern editor',
        text: 'Subsequent alpha releases continue the modern OTB and appearances workflow while the project documents incomplete attribute support.',
        sourceLabel: 'LapisItemEditor releases',
        sourceHref: 'https://github.com/giuinktse7/LapisItemEditor/releases',
      },
      {
        date: 'Present',
        title: 'Modern-format reference with explicit limitations',
        text: 'The repository remains useful for current asset research, but its own warnings require backup-first and test-first use.',
        sourceLabel: 'LapisItemEditor README',
        sourceHref: 'https://github.com/giuinktse7/LapisItemEditor',
      },
    ],
    evidenceNotes: [
      { label: 'Release evidence', value: 'The original release date is taken from the first GitHub release, not merely the repository creation timestamp.' },
      { label: 'Format evidence', value: 'The README explicitly names appearances.dat and LZMA-compressed sprites for client version 11+.' },
      { label: 'Limitation evidence', value: 'The project itself warns that parts of item-attribute editing are incomplete and contain bugs.' },
    ],
    related: ['modern OTB editor', 'appearances.dat editor', 'LZMA Tibia sprites', 'client 11 item editor', 'Lapis Item Editor'],
  },
  {
    slug: 'open-tibia-library',
    aliases: ['opentibia-library'],
    aliasLabels: { 'opentibia-library': 'OpenTibia Library' },
    name: 'Open Tibia Library',
    category: 'Developer Library',
    status: 'Active developer building block',
    era: '2019-present',
    originalRelease: 'First GitHub release: June 11, 2020',
    evidenceLevel: 'Release-backed',
    lineage: 'Created by Gesior as a reusable TypeScript file-manipulation layer',
    technology: 'TypeScript, browser/Node.js tooling, OTS and OTClient file formats',
    summary: 'Open Tibia Library is a TypeScript library for parsing and manipulating files used by Open Tibia servers and OTClient, designed as a base for editors and asset utilities.',
    sourceLinks: [
      { label: 'Open Tibia Library repository', href: 'https://github.com/gesior/open-tibia-library' },
      { label: 'Open Tibia Library releases', href: 'https://github.com/gesior/open-tibia-library/releases' },
    ],
    origin: [
      "The repository was created on October 28, 2019, and the earliest published release in its GitHub record is version 0.1.1 from June 11, 2020. The project describes itself as a TypeScript library for manipulating OTS and OTClient files and as a base for OT Item Editor and Map Editor work.",
      "Unlike a desktop editor, the library is an infrastructure component. Its origin reflects a broader development need: parse binary formats once, expose stable programmatic objects, and let several browser, command-line, or editor interfaces build on the same implementation.",
    ],
    trends: [
      "Open Tibia tooling historically duplicated binary readers across C++, C#, PHP, and one-off utilities. A TypeScript library moves the ecosystem toward reusable packages, browser-capable tools, automated tests, and scripted transformations.",
      "The project's continued release activity also tracks the community's move toward web interfaces and asset automation. An item image generator can run in a browser, while server pipelines can use the same parsing concepts without asking an operator to click through a legacy GUI.",
    ],
    uses: [
      "Developers can use the library as a foundation for item editors, map viewers, map editors, image generators, conversion utilities, validation tools, and research scripts that need structured access to Open Tibia files.",
      "Its example item-image generator demonstrates a practical use case: load OT assets, render recognizable item images, and produce output that can support websites, wikis, shops, or internal catalogs.",
      "Because it is a library rather than a turnkey application, adopters must still design storage, error handling, version detection, UI, testing, and safe write operations. A parser that understands one revision should not silently accept every historical variant.",
    ],
    notableCases: [
      "The project is notable for treating OT formats as reusable developer APIs. That approach can reduce repeated reverse engineering and help future editors share the same tested core.",
      "Its relationship to item and map editor ambitions makes it a bridge between desktop-era Open Tibia tooling and modern browser or Node.js applications.",
    ],
    evaluation: [
      "Before adopting it, inspect the supported file list, current release notes, open issues, package API, test coverage, and whether the needed client/server version has fixtures. Pin a known version instead of tracking the default branch blindly.",
      "For write operations, verify round-trip behavior: read a known file, serialize it without intended changes, compare output, then load it in the target client or server. Binary preservation is a stronger test than successful parsing.",
    ],
    timeline: [
      {
        date: 'October 28, 2019',
        title: 'Public repository is created',
        text: 'The project begins its public TypeScript code line for OTS and OTClient file manipulation.',
        sourceLabel: 'Open Tibia Library repository',
        sourceHref: 'https://github.com/gesior/open-tibia-library',
      },
      {
        date: 'June 11, 2020',
        title: 'Version 0.1.1 is published',
        text: 'The first recorded GitHub release establishes a public package milestone.',
        sourceLabel: 'Open Tibia Library releases',
        sourceHref: 'https://github.com/gesior/open-tibia-library/releases',
      },
      {
        date: '2020s',
        title: 'Library serves editor and image-generation use cases',
        text: 'The README positions the code as a base for item and map editors and includes an item-image generator example.',
        sourceLabel: 'Open Tibia Library README',
        sourceHref: 'https://github.com/gesior/open-tibia-library',
      },
      {
        date: 'Present',
        title: 'Reusable tooling continues to replace isolated utilities',
        text: 'Ongoing releases make the library part of the modern move toward shared parsers, browser tools, and repeatable asset pipelines.',
        sourceLabel: 'Open Tibia Library releases',
        sourceHref: 'https://github.com/gesior/open-tibia-library/releases',
      },
    ],
    evidenceNotes: [
      { label: 'Role evidence', value: 'The upstream README calls the project a TypeScript library and a base for item and map editors.' },
      { label: 'Release evidence', value: 'June 11, 2020 is the earliest published release in the current GitHub release record.' },
      { label: 'Use-case evidence', value: 'The repository includes a browser-oriented item-image generator example.' },
    ],
    related: ['Open Tibia TypeScript', 'OT file parser', 'Open Tibia item image generator', 'OTClient tools', 'browser map editor'],
  },
  {
    slug: 'otclient',
    aliases: [],
    name: 'OTClient',
    category: 'Client',
    status: 'Open-source client lineage with several maintained forks',
    era: '2010-present',
    originalRelease: 'Original public repository created November 18, 2010',
    evidenceLevel: 'Repository-backed',
    lineage: 'Created by edubart; extended through multiple community forks including OTClient Redemption',
    technology: 'C++, Lua, OTML, OpenGL, modular client UI',
    summary: 'OTClient is the foundational alternative Tibia client for Open Tibia servers, built as a modular C++ and Lua framework rather than a fixed official-client replica.',
    sourceLinks: [
      { label: 'Original edubart/otclient repository', href: 'https://github.com/edubart/otclient' },
      { label: 'Original OTClient wiki', href: 'https://github.com/edubart/otclient/wiki' },
      { label: 'OpenTibiaBR OTClient Redemption', href: 'https://github.com/opentibiabr/otclient' },
      { label: 'OTClient Redemption releases', href: 'https://github.com/opentibiabr/otclient/releases' },
      { label: 'community archive OTClient lineage discussion', href: 'https://opentibiaservers.com/threads/there-is-no-main-otclient-repo.277890/page-2' },
    ],
    origin: [
      "The original edubart/otclient repository was created on November 18, 2010. Its README describes an alternative client for OTServ that aims to be complete and flexible, with game-interface behavior written in Lua and appearance controlled through OTML. The public-repository date is used here because the original line did not maintain a conventional release history.",
      "OTClient was designed as both a playable client and a framework. The modular architecture allowed server owners to replace interface elements, add modules, expose new client-side features, and target platforms that were difficult to reach with the official client. Later forks inherited that flexibility while adding protocol support, rendering changes, mobile work, updaters, and server-specific systems.",
    ],
    trends: [
      "The first era focused on replacing hard-coded client UI with Lua modules and style files. That made custom health panels, hotkeys, game windows, effects, language packs, and protocol extensions practical. It also created a maintenance burden: every server's fork could diverge in packets, modules, and assets.",
      "The modern era is defined by forks such as OTClient Redemption. Its public line adds newer protocol support, performance work, shaders, attached effects, Android and web build paths, and integrations with TFS or Canary. There is no single universal OTClient binary; the exact repository, commit, assets, and server protocol form one release.",
    ],
    uses: [
      "Players encounter OTClient as a server-provided branded client. Owners use it to control login endpoints, UI layout, client modules, asset loading, protocol features, updater behavior, mobile support, and visual systems not available in the standard client.",
      "Developers use the Lua module layer to build windows, hotkeys, status displays, task interfaces, shops, effects, and server-specific features. The C++ layer handles rendering, networking, input, asset decoding, and the lower-level game API.",
      "The correct player workflow is to obtain the client from the verified server domain and verify checksums or signatures when supplied. The correct owner workflow is to pin a source commit, record required assets and protocol features, and test login, movement, combat, containers, chat, effects, reconnects, and updates as one package.",
    ],
    notableCases: [
      "OTClient changed what an Open Tibia server could look and feel like. Lua-driven interface modules, shaders, animated textures, transparency, attached effects, mobile ports, and custom protocol messages let projects build experiences that were impossible with a simple IP changer.",
      "Its fragmented lineage is equally notable. Community discussions about which repository is the main OTClient are not merely naming disputes; they reflect real differences in protocol support, stability, features, and maintenance. A good directory must record the exact client lineage used by each server.",
    ],
    evaluation: [
      "Verify the repository and commit, supported protocol range, required DAT/SPR or modern assets, server feature flags, encryption or login changes, updater source, build instructions, and open security issues. A build made for one server should not be assumed safe or compatible with another.",
      "Owners should remove embedded secrets, restrict update origins, sign distributions where possible, and provide a transparent download path. Players should avoid repacked executables from videos, file mirrors, or unofficial Discord messages.",
    ],
    timeline: [
      {
        date: 'November 18, 2010',
        title: 'Original public OTClient repository begins',
        text: 'The edubart repository establishes the modular C++, Lua, and OTML client architecture that later forks inherited.',
        sourceLabel: 'Original OTClient repository',
        sourceHref: 'https://github.com/edubart/otclient',
      },
      {
        date: '2010s',
        title: 'Lua modules and OTML reshape custom clients',
        text: 'OTClient becomes a framework for custom interfaces, protocol extensions, graphics effects, language support, and cross-platform experiments.',
        sourceLabel: 'Original OTClient wiki',
        sourceHref: 'https://github.com/edubart/otclient/wiki',
      },
      {
        date: 'June 18, 2020',
        title: 'Modern OpenTibiaBR lineage opens',
        text: 'The repository now maintained as OTClient Redemption begins a separate public line based on the original project.',
        sourceLabel: 'OTClient Redemption repository',
        sourceHref: 'https://github.com/opentibiabr/otclient',
      },
      {
        date: 'December 31, 2022-present',
        title: 'Redemption publishes versioned releases',
        text: 'The maintained fork records releases from 2.6.2 onward, later expanding performance, protocol, mobile, web, rendering, and UI capabilities.',
        sourceLabel: 'OTClient Redemption releases',
        sourceHref: 'https://github.com/opentibiabr/otclient/releases',
      },
    ],
    evidenceNotes: [
      { label: 'Origin evidence', value: 'The original repository metadata and README establish the 2010 public code line and its intended architecture.' },
      { label: 'Lineage evidence', value: 'The modern OpenTibiaBR README explicitly states that it is based on the edubart repository.' },
      { label: 'Compatibility evidence', value: 'Both upstream documentation and fork release notes show that protocol, assets, modules, and source revision must be evaluated together.' },
    ],
    related: ['OTClient download', 'OTClient Redemption', 'custom Tibia client', 'OTClient Lua modules', 'OTClient mobile'],
  },
  {
    slug: 'the-forgotten-server',
    aliases: ['tfs'],
    aliasLabels: { tfs: 'TFS' },
    name: 'The Forgotten Server',
    category: 'Server Engine',
    status: 'Active open-source server emulator',
    era: '2007-present',
    originalRelease: 'Earliest verified public TFS threads: June-July 2007',
    evidenceLevel: 'Forum and release-backed',
    lineage: 'Fork of the OpenTibia Server project, maintained by the community archive community',
    technology: 'C++, Lua, SQL, OTBM maps, XML and scripted datapacks',
    summary: 'The Forgotten Server, commonly shortened to TFS, is a foundational Open Tibia MMORPG server engine and the basis for a large share of historical and modern OT distributions.',
    sourceLinks: [
      { label: 'The Forgotten Server GitHub', href: 'https://opentibiaservers.com//forgottenserver' },
      { label: 'The Forgotten Server releases', href: 'https://opentibiaservers.com//forgottenserver/releases' },
      { label: 'The Forgotten Server wiki', href: 'https://opentibiaservers.com//forgottenserver/wiki' },
      { label: 'June 2007 community archive TFS version thread', href: 'https://opentibiaservers.com/threads/the-forgotten-server-always-new-version-exe-and-svn.6311/' },
      { label: 'July 2007 community archive TFS 0.2.3 thread', href: 'https://opentibiaservers.com/threads/the-forgotten-server-0-2-3.431/' },
    ],
    origin: [
      "The Forgotten Server identifies itself as a fork of the OpenTibia Server project. Surviving community archive threads document public TFS builds and version discussion in June and July 2007. Those records support a 2007 public origin while avoiding an unsupported exact day for the first private or test build.",
      "The current GitHub repository was created on July 1, 2013, after years of SVN-era and distribution-era development. Its first published GitHub release is TFS 1.0 from November 1, 2014. The project therefore has an older community history than its current repository creation date.",
    ],
    trends: [
      "Early TFS distributions bundled an engine, datapack, map, XML configuration, Lua scripts, and database schema for a particular Tibia protocol. The 0.2, 0.3, and 0.4 families developed their own long-lived communities, and many later servers were forks or downgrades of those branches.",
      "The 1.x era emphasized modern C++, CMake and package tooling, Lua APIs, safer memory management, Docker or CI support, clearer releases, and newer protocol work. Branch identity remains critical: a script written for 0.4 or a downgraded 1.2 tree cannot be assumed compatible with current master or a 1.4-based distribution.",
    ],
    uses: [
      "TFS provides the authoritative game simulation: login and protocol handling, creatures, combat, movement, items, containers, houses, parties, guilds, conditions, scheduling, persistence, and the bridge between C++ engine code and Lua gameplay scripts.",
      "Server developers use its Lua interfaces for actions, movements, creaturescripts, globalevents, talkactions, spells, weapons, NPCs, raids, quests, and custom systems. Database schemas, map files, OTB item mappings, client assets, and AAC websites complete the operating stack.",
      "A disciplined deployment pins a TFS branch and commit, uses the matching schema and config, compiles with documented dependencies, imports only compatible datapack content, runs migrations, and validates gameplay on staging before accepting public accounts.",
    ],
    notableCases: [
      "TFS is notable because it became both an engine and a vocabulary. Server advertisements routinely identify a TFS version, script authors target TFS Lua APIs, AAC projects publish compatibility tables, and map/item tooling is tested against TFS-derived contracts.",
      "The release history also captures protocol preservation. The 1.4 release line is explicitly documented as the stable 10.98 family, while newer development extends engine and protocol behavior. This lets older-client communities and modern-client projects coexist without pretending they use the same runtime.",
    ],
    evaluation: [
      "Confirm the exact branch, commit, protocol, database schema, compiler, dependency set, map format, OTB, Lua API, datapack origin, and client. Version labels copied by a fork may not reflect the actual source ancestry.",
      "Review configuration defaults and security before exposing the server. Database credentials, RSA keys, admin accounts, web endpoints, ports, file permissions, crash handling, backups, and update procedures are production concerns, not optional installation details.",
    ],
    timeline: [
      {
        date: 'June-July 2007',
        title: 'Earliest verified public TFS discussions',
        text: 'community archive preserves threads for current SVN builds and TFS 0.2.3, documenting the engine as an active public Open Tibia project in 2007.',
        sourceLabel: 'community archive 2007 TFS thread',
        sourceHref: 'https://opentibiaservers.com/threads/the-forgotten-server-0-2-3.431/',
      },
      {
        date: '2008-2012',
        title: '0.x distributions become community standards',
        text: 'The 0.2, 0.3, and 0.4 families spread through releases, forks, datapacks, scripts, and support threads that still influence older OT servers.',
      },
      {
        date: 'July 1, 2013',
        title: 'Current GitHub repository begins',
        text: 'The modern Git history centralizes ongoing development after the earlier forum and SVN eras.',
        sourceLabel: 'The Forgotten Server GitHub',
        sourceHref: 'https://opentibiaservers.com//forgottenserver',
      },
      {
        date: 'November 1, 2014-present',
        title: 'Versioned 1.x releases modernize the engine',
        text: 'TFS 1.0 opens the current GitHub release record, followed by substantial engine, Lua, build, protocol, and maintenance milestones.',
        sourceLabel: 'The Forgotten Server releases',
        sourceHref: 'https://opentibiaservers.com//forgottenserver/releases',
      },
    ],
    evidenceNotes: [
      { label: 'Origin evidence', value: 'Dated 2007 community archive threads establish that TFS predates the current GitHub repository.' },
      { label: 'Lineage evidence', value: 'The upstream README identifies TFS as a fork of the OpenTibia Server project.' },
      { label: 'Release evidence', value: 'The current GitHub release record begins with v1.0 on November 1, 2014.' },
    ],
    related: ['TFS server', 'The Forgotten Server compile', 'TFS Lua', 'TFS 1.4', 'Open Tibia engine'],
  },
  {
    slug: 'canary',
    aliases: ['opentibiabr-canary'],
    aliasLabels: { 'opentibiabr-canary': 'OpenTibiaBR Canary' },
    name: 'Canary',
    category: 'Server Engine',
    status: 'Active OpenTibiaBR server emulator',
    era: '2021-present',
    originalRelease: 'First stable GitHub release: February 17, 2022',
    evidenceLevel: 'Release-backed',
    lineage: 'Fork of OTServBR-Global maintained by OpenTibiaBR',
    technology: 'C++20, Lua, SQL, Docker, CMake presets, automated tests',
    summary: 'Canary is OpenTibiaBR\'s modern C++20 and Lua server emulator, combining the engine, datapacks, schema, build presets, tests, and operational tooling in one maintained project.',
    sourceLinks: [
      { label: 'OpenTibiaBR Canary GitHub', href: 'https://github.com/opentibiabr/canary' },
      { label: 'Canary releases', href: 'https://github.com/opentibiabr/canary/releases' },
      { label: 'Canary documentation', href: 'https://docs.opentibiabr.com/opentibiabr/canary' },
      { label: 'Canary Docker image', href: 'https://hub.docker.com/r/opentibiabr/canary' },
    ],
    origin: [
      "The Canary repository was created on July 25, 2021. Its README identifies the engine as a fork of OTServBR-Global and describes a complete project containing C++ core code, Lua scripts, datapacks, database schema, build presets, automated tests, and development tools.",
      "The first stable release in the repository record is stable-1.2.0 from February 17, 2022. That is the clearest original public release milestone for the Canary name, while the OTServBR-Global ancestry explains why some systems and content predate the fork.",
    ],
    trends: [
      "Canary reflects the move from loosely assembled distributions toward an integrated, continuously tested server platform. CMake presets, package management, linting, test targets, documentation, and Docker paths make the environment itself part of the maintained product.",
      "The project also tracks several runtime contracts rather than one historical client. Current documentation references current, 11.00, and 8.60 paths, modern assets, login services, and recommended client or editor projects. This creates flexibility, but it makes branch and asset selection more important.",
    ],
    uses: [
      "Owners use Canary to run modern global-like or custom Open Tibia servers, write Lua gameplay systems, maintain datapacks, connect SQL persistence, serve multiple protocol targets, and operate local or containerized development environments.",
      "The documented Docker quickstart combines the server runtime, MyAAC for website administration, and an OpenTibiaBR login server. Recommended tools include Remere's Map Editor, OTClient Redemption, asset editors, and prepared client resources.",
      "Developers can use generated Lua API documentation, tests, CMake presets, telemetry hooks, and code-quality tooling to make changes with stronger feedback than older copy-and-run distributions offered.",
    ],
    notableCases: [
      "Canary is notable for making the surrounding toolchain explicit. The server README points directly to the map editor, client, asset editor, login service, AAC, and documentation, presenting an ecosystem rather than an isolated executable.",
      "Its compatibility work across current, 11.00, and 8.60 contracts is another important case. It gives server teams migration options while demanding careful separation of maps, items, assets, packets, and client builds.",
    ],
    evaluation: [
      "Choose a documented runtime contract and keep its branch, schema, client, assets, map editor, login service, and AAC aligned. Do not mix a current-client datapack with an older protocol merely because the server compiles.",
      "Use stable releases for public operation unless the project specifically requires main-branch work. Nightly artifacts are useful for testing recent changes but may contain behavior not present in a stable release.",
    ],
    timeline: [
      {
        date: 'July 25, 2021',
        title: 'Canary repository is created',
        text: 'OpenTibiaBR begins the public Canary line as a fork of OTServBR-Global.',
        sourceLabel: 'Canary repository',
        sourceHref: 'https://github.com/opentibiabr/canary',
      },
      {
        date: 'February 17, 2022',
        title: 'stable-1.2.0 is published',
        text: 'The first recorded stable GitHub release creates a clear release boundary for the Canary name.',
        sourceLabel: 'Canary releases',
        sourceHref: 'https://github.com/opentibiabr/canary/releases',
      },
      {
        date: '2022-2025',
        title: 'Integrated tooling and modern protocol work expand',
        text: 'Successive releases add engine, datapack, build, test, observability, asset, and protocol improvements.',
        sourceLabel: 'Canary releases',
        sourceHref: 'https://github.com/opentibiabr/canary/releases',
      },
      {
        date: '2026',
        title: 'Canary documents a complete local stack',
        text: 'Current project documentation includes Docker quickstart paths, MyAAC, a login service, recommended clients and editors, and multiple runtime contracts.',
        sourceLabel: 'Canary documentation',
        sourceHref: 'https://docs.opentibiabr.com/opentibiabr/canary',
      },
    ],
    evidenceNotes: [
      { label: 'Origin evidence', value: 'The upstream README explicitly states that Canary is a fork of OTServBR-Global.' },
      { label: 'Release evidence', value: 'February 17, 2022 is the first stable release in the current GitHub record.' },
      { label: 'Stack evidence', value: 'The current repository documents Docker, MyAAC, login-server, map editor, client, tests, and multiple runtime contracts.' },
    ],
    related: ['Canary OpenTibia', 'OpenTibiaBR server', 'Canary Docker', 'Canary 8.60', 'Canary Lua'],
  },
  {
    slug: 'gesior-aac',
    aliases: ['gesior'],
    aliasLabels: { gesior: 'Gesior' },
    name: 'Gesior AAC',
    category: 'Website Application',
    status: 'Historically foundational AAC lineage with surviving forks',
    era: '2008-present',
    originalRelease: 'Earliest verified public distribution evidence: December 17, 2008',
    evidenceLevel: 'Forum and repository-backed',
    lineage: 'Created by Gesior; distributed under Gesior AAC and UNNAMED Account Maker names',
    technology: 'PHP, MySQL, TFS database integration',
    summary: 'Gesior AAC is the historically influential PHP account-maker lineage that shaped how Open Tibia servers handled accounts, characters, news, highscores, guilds, shops, and administration.',
    sourceLinks: [
      { label: 'Gesior2012 repository', href: 'https://github.com/gesior/Gesior2012' },
      { label: 'December 2008 UNNAMED Account Maker thread', href: 'https://opentibiaservers.com/threads/unnamed-acc-maker-0-3-2-beta-for-tfs-with-new-design.17556/' },
      { label: 'February 2009 Gesior and UNNAMED naming discussion', href: 'https://opentibiaservers.com/threads/is-there-a-fully-working-gesior-acc-maker-for-latest-tfs.21951/' },
      { label: 'community archive website applications forum', href: 'https://opentibiaservers.com/forums/website-applications.118/' },
    ],
    origin: [
      "The earliest verified public record used here is an community archive distribution thread dated December 17, 2008. The release credits Gesior and identifies the code as UNNAMED Account Maker 0.3.2 beta. A February 2009 support thread explains that community members used Gesior AAC and UNNAMED Account Maker for the same lineage.",
      "The Gesior2012 repository was created on October 24, 2012 and preserves a later public code line. That repository date should not be mistaken for the original product launch; the 2008 and 2009 forum evidence proves the account maker was already circulating years earlier.",
    ],
    trends: [
      "Gesior AAC grew during the period when an OT website was tightly coupled to a TFS database and config.lua. Installers, character creation, highscores, death lists, guild pages, news, shops, admin panels, and Tibia-inspired layouts became expected parts of a server launch.",
      "The same tight coupling produced fragmentation. Copies were modified for particular TFS schemas, client versions, shop systems, templates, and PHP releases. Modern descendants inherited the feature model but had to address maintainability, dependency management, security, and cleaner plugin systems.",
    ],
    uses: [
      "Players used Gesior-based sites to create accounts and characters, download clients, read news, inspect online lists and highscores, search characters, review deaths, manage guilds, and interact with donation or shop systems.",
      "Owners used the administration layer to publish updates, configure vocations and towns, manage content, expose database-backed rankings, and connect a public website to the game server's account and character records.",
      "For historical installations, the correct workflow is forensic rather than automatic: identify the exact fork, TFS schema, PHP version, database assumptions, template modifications, shop code, and local patches before attempting an upgrade.",
    ],
    notableCases: [
      "Gesior AAC established the visual and functional template copied by a generation of OT websites. Even players who never knew the software name recognize the familiar account, character, highscores, guild, deaths, and shop navigation pattern.",
      "Its influence is visible in MyAAC, whose official project identifies itself as a Gesior fork. This makes Gesior not only an old website package but an ancestor of maintained AAC systems.",
    ],
    evaluation: [
      "Do not deploy an unknown historical Gesior archive directly to the internet. Review authentication, password hashing, SQL handling, file uploads, installer access, admin authorization, shop callbacks, session security, and PHP compatibility.",
      "Prefer a maintained descendant or a reviewed fork when building a new site. When preserving a historical installation, isolate it, remove credentials and personal data, and document which features are archival rather than supported.",
    ],
    timeline: [
      {
        date: 'December 17, 2008',
        title: 'Earliest verified public distribution',
        text: 'An community archive thread distributes UNNAMED Account Maker 0.3.2 beta and explicitly credits Gesior, establishing a dated public footprint.',
        sourceLabel: 'community archive 2008 distribution thread',
        sourceHref: 'https://opentibiaservers.com/threads/unnamed-acc-maker-0-3-2-beta-for-tfs-with-new-design.17556/',
      },
      {
        date: 'February 3, 2009',
        title: 'Gesior AAC and UNNAMED naming is documented',
        text: 'A support discussion records the community treating the two names as the same account-maker lineage.',
        sourceLabel: 'community archive naming discussion',
        sourceHref: 'https://opentibiaservers.com/threads/is-there-a-fully-working-gesior-acc-maker-for-latest-tfs.21951/',
      },
      {
        date: 'October 24, 2012',
        title: 'Gesior2012 public repository begins',
        text: 'The later repository preserves and updates the lineage for newer TFS and client environments.',
        sourceLabel: 'Gesior2012 repository',
        sourceHref: 'https://github.com/gesior/Gesior2012',
      },
      {
        date: '2017-present',
        title: 'Descendants modernize the Gesior model',
        text: 'Projects such as MyAAC retain the familiar AAC role while adding installers, plugins, templates, modern PHP support, and active security maintenance.',
        sourceLabel: 'MyAAC about page',
        sourceHref: 'https://my-aac.org/about/',
      },
    ],
    evidenceNotes: [
      { label: 'Date evidence', value: 'The 2008 date comes from a surviving public community archive distribution that credits Gesior.' },
      { label: 'Naming evidence', value: 'A 2009 community archive discussion directly connects Gesior AAC and UNNAMED Account Maker.' },
      { label: 'Lineage evidence', value: 'MyAAC publicly identifies itself as a fork of the Gesior project.' },
    ],
    related: ['Gesior account maker', 'UNNAMED Account Maker', 'TFS website', 'Open Tibia AAC', 'Gesior shop system'],
  },
  {
    slug: 'znote-aac',
    aliases: ['znote'],
    aliasLabels: { znote: 'Znote' },
    name: 'Znote AAC',
    category: 'Website Application',
    status: 'Open-source AAC with a long public repository history',
    era: '2013-present',
    originalRelease: 'Earliest verified community use: February 3, 2013',
    evidenceLevel: 'Forum and repository-backed',
    lineage: 'Created and maintained as an independent PHP AAC',
    technology: 'PHP, MySQL, TFS/OT distribution compatibility',
    summary: 'Znote AAC is a full Open Tibia website and account system designed for straightforward installation and compatibility across several popular OT server distributions.',
    sourceLinks: [
      { label: 'ZnoteAAC GitHub', href: 'https://github.com/Znote/ZnoteAAC' },
      { label: 'ZnoteAAC wiki', href: 'https://github.com/Znote/ZnoteAAC/wiki' },
      { label: 'February 2013 community archive Znote AAC issue', href: 'https://opentibiaservers.com/threads/znote-aac-issues.179752/' },
      { label: 'community archive Znote website thread', href: 'https://opentibiaservers.com/threads/znote-website.289220/' },
    ],
    origin: [
      "A surviving community archive support thread shows Znote AAC in active use on February 3, 2013. The current GitHub repository was created on August 28, 2013. Because an exact first-release announcement was not verified, this page uses February 2013 as the earliest confirmed community-use date rather than claiming a more precise launch.",
      "The upstream project defines Znote AAC as a full website used with an Open Tibia server, emphasizing easy installation and compatibility with popular distributions. Its public repository and wiki became the durable reference point for installation, schema conversion, configuration, and features.",
    ],
    trends: [
      "Znote AAC arrived after years of tightly forked account makers and pursued broader distribution compatibility. Its configuration layer recognizes several TFS and OTHire families, while helper scripts and a special conversion area support adapting existing databases.",
      "Over time, the expected AAC surface expanded from account creation into two-factor authentication, account recovery, support tickets, server configuration displays, kill and death feeds, item lists, houses, guilds, character profiles, and custom vocation or town support.",
    ],
    uses: [
      "Owners use Znote AAC to provide registration, login, account management, character creation, downloads, server information, online data, highscores, guilds, houses, news, and community-facing game records.",
      "The project can parse server configuration and data such as config.lua, stages.xml, and items.xml to present rates, PvP settings, experience stages, and item information. This makes the site a view onto both the SQL database and the server's file configuration.",
      "Operational setup includes selecting the correct server engine, importing or converting the database schema, configuring mail when verification or recovery is enabled, securing the web server, and testing every write path against a non-production database.",
    ],
    notableCases: [
      "Znote AAC is notable for documenting a broad compatibility promise in the README instead of existing as one unnamed server fork. That made it easier for new owners to identify a supported engine and follow a repeatable installation path.",
      "Its feature list demonstrates how AACs became community platforms rather than simple account forms. Two-factor authentication, tickets, dynamic server settings, and detailed character or guild pages moved the website closer to a full service layer.",
    ],
    evaluation: [
      "Check the repository branch, commit age, PHP and database requirements, selected ServerEngine value, schema converter, mail library, and open security issues. README requirements can lag behind current hosting platforms, so verify them in staging.",
      "Use HTTPS, modern password storage supported by the target engine, least-privilege database credentials, protected configuration, rate limits, CSRF defenses, and tested backups. Remove installation or conversion surfaces that are not needed after setup.",
    ],
    timeline: [
      {
        date: 'February 3, 2013',
        title: 'Earliest verified community-use record',
        text: 'An community archive support thread documents a running Znote AAC installation and a real presentation issue.',
        sourceLabel: 'community archive Znote AAC issue',
        sourceHref: 'https://opentibiaservers.com/threads/znote-aac-issues.179752/',
      },
      {
        date: 'August 28, 2013',
        title: 'Current GitHub repository is created',
        text: 'The public repository becomes the central source for code, installation guidance, compatibility details, and issue tracking.',
        sourceLabel: 'ZnoteAAC GitHub',
        sourceHref: 'https://github.com/Znote/ZnoteAAC',
      },
      {
        date: '2010s',
        title: 'Compatibility and feature surface expand',
        text: 'The project documents multiple server-engine families, database conversion, configuration parsing, character systems, guilds, houses, tickets, and two-factor authentication.',
        sourceLabel: 'ZnoteAAC README',
        sourceHref: 'https://github.com/Znote/ZnoteAAC',
      },
      {
        date: 'Present',
        title: 'Repository remains the authoritative evaluation point',
        text: 'Users should judge current support through the source repository, wiki, issues, and commit history rather than old packaged copies.',
        sourceLabel: 'ZnoteAAC GitHub',
        sourceHref: 'https://github.com/Znote/ZnoteAAC',
      },
    ],
    evidenceNotes: [
      { label: 'Date caveat', value: 'February 2013 is the earliest verified use found for this page; it is not presented as an exact private-development start date.' },
      { label: 'Purpose evidence', value: 'The upstream README describes a full-fledged OT website focused on easy installation and distribution compatibility.' },
      { label: 'Feature evidence', value: 'The repository documents engine selection, schema conversion, two-factor authentication, tickets, configuration parsing, and community pages.' },
    ],
    related: ['Znote AAC install', 'Znote AAC TFS', 'Open Tibia website', 'TFS account maker', 'Znote two factor authentication'],
  },
  {
    slug: 'myaac',
    aliases: ['my-aac'],
    aliasLabels: { 'my-aac': 'MyAAC' },
    name: 'MyAAC',
    category: 'Website Application',
    status: 'Actively maintained open-source AAC and CMS',
    era: '2007-present',
    originalRelease: 'Creator dates the first version to late 2007',
    evidenceLevel: 'Creator-documented',
    lineage: 'Created by slawkens; modern code is a fork of Gesior AAC',
    technology: 'PHP, MySQL, templates, plugins, web installer',
    summary: 'MyAAC is a free Open Tibia Automatic Account Creator and CMS that modernizes the Gesior lineage through releases, templates, plugins, administration, and maintained security updates.',
    sourceLinks: [
      { label: 'MyAAC official about page', href: 'https://my-aac.org/about/' },
      { label: 'MyAAC GitHub', href: 'https://github.com/slawkens/myaac' },
      { label: 'MyAAC releases', href: 'https://github.com/slawkens/myaac/releases' },
      { label: 'MyAAC 0.7.0 release announcement', href: 'https://my-aac.org/2017/11/20/myaac-0-7-0-released/' },
      { label: 'MyAAC plugins', href: 'https://github.com/slawkens/myaac-plugins' },
    ],
    origin: [
      "The official MyAAC about page says slawkens created the first version at the end of 2007 while running an Open Tibia server. That creator-authored statement is the best available origin source and is more informative than the current repository timestamp alone.",
      "The modern GitHub repository was created on April 20, 2017 and identifies MyAAC as a fork of Gesior2012. Version 0.7.0 was publicly announced on November 20, 2017. The ten-year gap reflects a project that began as a personal AAC and later became a structured public CMS with releases and plugins.",
    ],
    trends: [
      "MyAAC carries forward familiar Gesior features while separating templates, plugins, administration, and core updates more deliberately. That structure supports server-specific presentation without requiring every owner to modify the same core files.",
      "Recent release lines show the second major trend: security maintenance is now a first-class AAC responsibility. Release notes call out session fixes, redirect handling, installer authorization, BBCode and forum issues, Cloudflare trust, and migration away from older branches.",
    ],
    uses: [
      "A MyAAC installation can provide account and character management, news, downloads, server information, rankings, guild and character pages, shop integrations, templates, plugins, and administrative workflows.",
      "Owners use the plugin ecosystem to add server-specific features while keeping a path to core updates. Designers use templates to change presentation without replacing authentication or database code.",
      "The official repository currently documents multiple release tracks with different PHP requirements and stability expectations. Selecting a version is an architecture decision: it affects plugins, templates, database compatibility, upgrade procedures, and security support.",
    ],
    notableCases: [
      "MyAAC is a notable continuity case because its creator traces the first version to 2007 while the maintained public project embraces modern releases and security work. It connects the early account-maker era to today's CMS expectations.",
      "The project's security release notes are also valuable historical records. They show why AAC maintenance cannot stop after a server launches: installer access, sessions, redirects, BBCode, forums, proxies, and dependencies all remain attack surfaces.",
    ],
    evaluation: [
      "Install from the official repository or release page, choose a supported branch, verify PHP and MySQL requirements, confirm server-engine compatibility, and test required plugins and templates before migration.",
      "Follow security release notes closely. Protect the installer and configuration, use least-privilege database credentials, apply updates, remove abandoned plugins, review shop callbacks, and back up both database and uploaded assets before upgrades.",
    ],
    timeline: [
      {
        date: 'Late 2007',
        title: 'First MyAAC version is created',
        text: 'The official about page says slawkens created the first version while building a website for his own Open Tibia server.',
        sourceLabel: 'MyAAC official about page',
        sourceHref: 'https://my-aac.org/about/',
      },
      {
        date: 'April 20, 2017',
        title: 'Modern public repository begins',
        text: 'The current GitHub code line opens and identifies itself as a fork of the Gesior project.',
        sourceLabel: 'MyAAC GitHub',
        sourceHref: 'https://github.com/slawkens/myaac',
      },
      {
        date: 'November 20, 2017',
        title: 'MyAAC 0.7.0 is released',
        text: 'An official announcement documents a public milestone and highlights dynamically loaded menus managed through the admin panel.',
        sourceLabel: 'MyAAC 0.7.0 announcement',
        sourceHref: 'https://my-aac.org/2017/11/20/myaac-0-7-0-released/',
      },
      {
        date: '2020s',
        title: 'Plugins, parallel branches, and security releases mature',
        text: 'The project maintains release tracks and a plugin ecosystem while publishing explicit fixes and upgrade guidance for web-security issues.',
        sourceLabel: 'MyAAC releases',
        sourceHref: 'https://github.com/slawkens/myaac/releases',
      },
    ],
    evidenceNotes: [
      { label: 'Origin evidence', value: 'The late-2007 date is stated by the creator on the official MyAAC about page.' },
      { label: 'Lineage evidence', value: 'The repository README identifies MyAAC as a fork of Gesior.' },
      { label: 'Maintenance evidence', value: 'Current release notes document branch guidance, PHP requirements, security fixes, and upgrade recommendations.' },
    ],
    related: ['MyAAC install', 'MyAAC plugins', 'MyAAC templates', 'Open Tibia CMS', 'Gesior fork'],
  },
  {
    slug: 'neobot',
    aliases: [],
    name: 'NeoBot',
    category: 'Historical Bot',
    status: 'Discontinued in December 2011',
    era: '2010-2011',
    originalRelease: 'Publicly documented by July 8, 2010',
    evidenceLevel: 'Contemporary community record',
    lineage: 'Commercial Tibia automation project founded and developed by Greg',
    technology: 'Historical client automation with paid accounts and trials',
    summary: 'NeoBot was a short-lived but prominent Tibia automation product from 2010-2011, remembered for its external-tool positioning, paid licensing, and abrupt official discontinuation.',
    sourceLinks: [
      { label: 'community archive archive of the NeoBot shutdown announcement', href: 'https://opentibiaservers.com/threads/neobot-comes-to-an-end.147355/' },
      officialTibiaRules,
      battleyeAnnouncement,
    ],
    origin: [
      "NeoBot was already visible in public automation history by 2010. No surviving official launch announcement was verified, so 2010 is presented as a defensible era marker rather than an exact commercial release day.",
      "The shutdown text, copied from the original NeoBot forum and preserved by community archive, identifies the founder and developer as Greg. It describes the software as a pastime that became a demanding project, then announces that new license time would stop being sold and remaining accounts would expire.",
    ],
    trends: [
      "NeoBot appeared during a shift from simpler macros and proxy tools toward products marketed around broad automation, external operation, paid account time, and claims of lower detectability. Community records discuss healing, targeting, looting, cave automation, and a time-limited trial.",
      "Its December 2011 shutdown immediately changed the market conversation. The same community archive thread shows users discussing alternatives, including a then-pre-release XenoBot. NeoBot's end therefore became a visible transition point between two generations of Tibia automation products.",
    ],
    uses: [
      "Historically documented uses included automated healing and mana decisions, target selection, looting, route-based hunting, training, and related repetitive actions. Those descriptions explain why the product mattered; they are not instructions or a recommendation.",
      "Players also associated the tool with paid license accounts and a trial system. That business model made software availability dependent on an authentication service, which is why the shutdown affected even users who still had local program files.",
      "For historians, the product is useful evidence of how bot markets, game updates, anti-cheat claims, licensing, and community attitudes interacted around 2010-2011.",
    ],
    notableCases: [
      "The most notable documented event is the December 26-27, 2011 discontinuation announcement. The developer cited a desire to pursue other projects and concern about Canada's changing legal landscape, while explaining how remaining license time would be handled.",
      "Community reaction was sharply divided. Some users worried about lost automation or account value, while others welcomed the prospect of fewer bots. That debate makes the thread a valuable primary-era record of how strongly automation affected Tibia's economy and player culture.",
    ],
    evaluation: [
      "NeoBot is obsolete historical software. Old executables, cracks, license bypasses, and mirror downloads create substantial malware and account-theft risk and should not be used.",
      "CipSoft's current rule 3b forbids using unofficial software to automate play and warns that cheat programs often contain malicious code. Individual Open Tibia servers publish their own rules, which must also be followed.",
    ],
    timeline: [
      {
        date: 'By 2010',
        title: 'NeoBot appears in public automation history',
        text: 'Community and shutdown records place NeoBot in the 2010-2011 commercial bot era, with paid licensing, trial language, and an external-tool positioning.',
        sourceLabel: 'community archive shutdown archive',
        sourceHref: 'https://opentibiaservers.com/threads/neobot-comes-to-an-end.147355/',
      },
      {
        date: '2010-2011',
        title: 'Tutorial culture forms around the product',
        text: 'The product became associated with walkthroughs, cavebot-style workflows, targeting, healing, looting, and paid account support before its discontinuation.',
        sourceLabel: officialTibiaRules.label,
        sourceHref: officialTibiaRules.href,
      },
      {
        date: 'December 26-27, 2011',
        title: 'Founder announces discontinuation',
        text: 'The preserved announcement ends new license sales and explains that the project will be halted.',
        sourceLabel: 'community archive shutdown archive',
        sourceHref: 'https://opentibiaservers.com/threads/neobot-comes-to-an-end.147355/',
      },
      {
        date: '2012 onward',
        title: 'NeoBot becomes a historical reference point',
        text: 'The name persists in bot-history discussions, but surviving downloads are obsolete and unsafe while official Tibia rules continue to prohibit automation.',
        sourceLabel: 'Official Tibia rule 3b',
        sourceHref: 'https://www.tibia.com/support/?rule=3b&subtopic=tibiarules',
      },
    ],
    evidenceNotes: [
      { label: 'Launch-date caveat', value: '2010 is used as a public-era marker; no official launch day was verified.' },
      { label: 'Shutdown evidence', value: 'community archive preserves the founder-written announcement copied from the original NeoBot forum.' },
      { label: 'Safety evidence', value: 'Official Tibia rules prohibit automated play and explicitly warn about malware and account theft in cheat software.' },
    ],
    related: ['NeoBot Tibia history', 'Tibia bots 2010', 'NeoBot discontinued', 'Tibia automation history', 'old Tibia bots'],
  },
  {
    slug: 'xenobot',
    aliases: [],
    name: 'XenoBot',
    category: 'Historical Bot',
    status: 'Archived historical product',
    era: '2011-2010s',
    originalRelease: 'Public pre-release documented December 28, 2011',
    evidenceLevel: 'Developer and contemporary record',
    lineage: 'Created by Nick Cano, known in the Tibia community as DarkstaR',
    technology: 'Injected client automation, Lua scripting, multi-version updater',
    summary: 'XenoBot was a commercial Tibia automation platform whose developer later published unusually detailed retrospectives about its origin, update architecture, and long-term impact.',
    sourceLinks: [
      { label: 'XenoBot official historical page', href: 'https://www.xenobot.net/' },
      { label: 'Nick Cano XenoBot architecture retrospective', href: 'https://nickcano.com/bot-architecture-2/' },
      { label: 'December 2011 community archive pre-release discussion', href: 'https://opentibiaservers.com/threads/neobot-comes-to-an-end.147355/' },
      officialTibiaRules,
      battleyeAnnouncement,
    ],
    origin: [
      "A December 28, 2011 community archive discussion describes XenoBot as a working pre-release alternative immediately after NeoBot's shutdown. The developer's own historical page says he wrote the first code as a teenager and that a tool shared among friends grew into a product sold to thousands.",
      "Nick Cano's later architecture retrospective adds an unusually precise personal origin detail: XenoBot was started when he was 15. Because the surviving sources do not provide one formal launch announcement, this page separates the verified December 2011 pre-release footprint from the unknown exact date of first paid availability.",
    ],
    trends: [
      "XenoBot's defining trend was multi-version support. Open Tibia servers often remained on old client protocols, so a bot tied only to the latest official client would miss a large audience. The updater mapped many client-specific offset files to shared core packages and allowed old and new versions to coexist.",
      "The project also reflects the professionalization of the bot market: automatic updates, paid customers, Lua scripting, a managed launcher, version detection, and a persistent service around the executable. The official retrospective says the project influenced the developer's later security career, writing, and conference work.",
    ],
    uses: [
      "Historically described uses included cave automation, healing, targeting, looting, HUDs, combat assistance, and Lua scripts. The December 2011 thread specifically mentions cavebot, looter, targeter, combo, HUD, and planned Lua scripting during pre-release.",
      "The XenoSuite launcher detected client versions, selected matching offset data and core files, and updated them automatically. This addressed the practical problem of official Tibia updates and long-lived OT protocol versions without requiring users to manage dozens of isolated installs.",
      "These details are preserved to explain software history and architecture. They should not be treated as operational guidance for violating a game's rules.",
    ],
    notableCases: [
      "The developer's 2017 retrospective records 62 offset sets across 17 offset versions. That is a notable engineering response to a niche but difficult compatibility matrix: many client builds, several core versions, and frequent upstream updates.",
      "The official historical page says the product was sold to thousands and later archived, with the forums preserved and the old product made freely accessible. More important than the download status is the personal record: a teenage project became a pathway into a professional computer-security career.",
    ],
    evaluation: [
      "XenoBot is historical software, not a current recommendation. Injection-based binaries and archived update systems should be considered untrusted on modern computers, especially when obtained from mirrors or repacks.",
      "Official Tibia prohibits automated play and introduced BattlEye in 2017 as a proactive anti-cheat measure. OT servers may have different policies, but each server's published rules remain authoritative.",
    ],
    timeline: [
      {
        date: 'December 28, 2011',
        title: 'Public pre-release is documented',
        text: 'community archive users discuss XenoBot as a functioning pre-release successor option after NeoBot announces its shutdown.',
        sourceLabel: 'community archive December 2011 discussion',
        sourceHref: 'https://opentibiaservers.com/threads/neobot-comes-to-an-end.147355/',
      },
      {
        date: '2012-2013',
        title: 'Commercial product and updater architecture mature',
        text: 'The project develops multi-version packages, automatic updates, scripting, and a customer service model across official and emulated Tibia versions.',
        sourceLabel: 'Developer architecture retrospective',
        sourceHref: 'https://nickcano.com/bot-architecture-2/',
      },
      {
        date: 'September 10, 2017',
        title: 'Developer publishes architecture retrospective',
        text: 'Nick Cano documents the multi-version update design, 62 offset sets, 17 offset versions, and lessons from starting the project at age 15.',
        sourceLabel: 'Bot Architecture Part 2',
        sourceHref: 'https://nickcano.com/bot-architecture-2/',
      },
      {
        date: 'Archived era',
        title: 'Official site becomes a historical memorial',
        text: "The official page records the project's personal and commercial impact and preserves selected community material after active development ended.",
        sourceLabel: 'XenoBot official historical page',
        sourceHref: 'https://www.xenobot.net/',
      },
    ],
    evidenceNotes: [
      { label: 'Origin evidence', value: 'The developer says he started the project at age 15; a contemporary community archive thread documents public pre-release status in December 2011.' },
      { label: 'Scale evidence', value: 'The official historical page says the product was sold to thousands.' },
      { label: 'Architecture evidence', value: 'The developer-authored retrospective explains multi-versioning, automatic updates, and the recorded offset/package counts.' },
    ],
    related: ['XenoBot history', 'Nick Cano XenoBot', 'DarkstaR Tibia', 'Tibia bot architecture', 'old Tibia automation'],
  },
  {
    slug: 'blackd-proxy',
    aliases: ['blackd'],
    aliasLabels: { blackd: 'BlackD' },
    name: 'BlackD Proxy',
    category: 'Historical Bot',
    status: 'Legacy software preserved by its historical publisher',
    era: '2005-2017',
    originalRelease: 'Publisher dates the BlackD brand to 2005; exact proxy launch not independently preserved',
    evidenceLevel: 'Publisher and contemporary archive',
    lineage: 'Developed and published through BlackdTools',
    technology: 'Proxy-based Tibia automation, scripts, multiclient and utility suite',
    summary: 'BlackD Proxy was a long-running proxy-based Tibia automation suite associated with BlackdTools, client-version updates, scripting, multiclient workflows, and the early commercial bot era.',
    sourceLinks: [
      { label: 'BlackD Proxy historical product page', href: 'https://www.blackdtools.com/blackdproxy.php' },
      { label: 'BlackdTools public file catalog', href: 'https://www.blackdtools.com/freedownloads.php' },
      { label: 'BlackdTools 2008 news archive', href: 'https://blackdtools.com/news.php?p=59' },
      officialTibiaRules,
      battleyeAnnouncement,
    ],
    origin: [
      "BlackdTools dates its brand and service history to 2005. Surviving community and publisher material places BlackD Proxy in use by the mid-2000s, but an exact first proxy release announcement was not verified. This page therefore records 2005 as the publisher-claimed origin year and keeps the release day explicitly unknown.",
      "The project was not only one executable. BlackdTools published a wider utility family around the proxy, multiclient support, scripts, light and VIP tools, ping utilities, recordings, and later source packages. That ecosystem helps explain why veteran players remember BlackD as both a product name and a toolbox.",
    ],
    trends: [
      "BlackD Proxy belonged to the proxy and packet-era of Tibia automation. The publisher maintained compatibility across many client releases, posted rapid update notices, sold licenses, and documented different behavior for older and newer versions.",
      "By 2008-2009, the official news archive was discussing automatic bans, safer updates, instant license delivery, scripts, and war-oriented automation. Later client changes and BattlEye altered the official-game environment, while the product's own page now frames compatibility as historical and includes old OT use.",
    ],
    uses: [
      "Historically advertised functions included cave automation, healing, targeting, looting, scripts, multiclient support, information overlays, and PvP or party coordination. Older community records also associate proxy tools with rune making and low-resource client sessions.",
      "The proxy model sat between or alongside the client and server communication path, which made protocol versions central. A Tibia update could require new packet handling, addresses, or compatibility work even when the visible feature set did not change.",
      "For historical study, BlackdTools is valuable because its publisher preserved dated news, a version catalog, tutorials, and forum archives instead of leaving only anonymous download mirrors.",
    ],
    notableCases: [
      "The 2008 publisher archive documents repeated updates for Tibia 8.11, 8.21, and 8.22, plus explicit concern about automatic bans. This shows the update treadmill and detection debate as they happened, rather than through later nostalgia.",
      "The public file catalog lists BlackD Proxy source and installer entries through the Tibia 11.10/11.11 era and dates the BlackdTools brand to 2005. Its longevity across many client generations is the product's most defensible notable distinction.",
    ],
    evaluation: [
      "The surviving software is obsolete and high risk. Old Visual Basic dependencies, injected or proxy behavior, license components, unsigned binaries, and third-party mirrors create malware, credential, and compatibility concerns.",
      "Do not use the page as download guidance. Official Tibia prohibits automated play and warns that cheat programs can contain account-stealing malware. OT server policies vary, but a server's explicit rules still govern permitted client modifications.",
    ],
    timeline: [
      {
        date: '2005',
        title: 'BlackdTools origin year',
        text: 'The publisher dates the BlackD brand and service history to 2005. The exact first BlackD Proxy release date remains unverified.',
        sourceLabel: 'BlackdTools file catalog',
        sourceHref: 'https://www.blackdtools.com/freedownloads.php',
      },
      {
        date: '2006-2007',
        title: 'BlackD Proxy becomes established community vocabulary',
        text: 'Contemporary forum records discuss the product in Tibia automation, PvP, and licensing contexts before the better-preserved publisher news archive.',
      },
      {
        date: '2008-2009',
        title: 'Publisher records rapid updates and anti-detection pressure',
        text: 'Official news pages document support for successive Tibia clients, scripts, automatic-ban concerns, licenses, and proposed war automation.',
        sourceLabel: 'BlackdTools 2008 news archive',
        sourceHref: 'https://blackdtools.com/news.php?p=59',
      },
      {
        date: '2017 and after',
        title: 'Source catalog and archives preserve the legacy',
        text: 'The publisher lists late proxy builds and source packages, while archived tutorials and forums preserve historical context after active official-game relevance declined.',
        sourceLabel: 'BlackD Proxy product page',
        sourceHref: 'https://www.blackdtools.com/blackdproxy.php',
      },
    ],
    evidenceNotes: [
      { label: 'Date caveat', value: '2005 is the origin year stated by BlackdTools; the exact first proxy release day was not independently verified.' },
      { label: 'Publisher evidence', value: 'Dated news pages document version updates, scripts, license delivery, and anti-detection claims during 2008-2009.' },
      { label: 'Preservation evidence', value: 'The publisher and a static archive preserve files, tutorials, screenshots, and forum material for historical reference.' },
    ],
    related: ['BlackD Proxy history', 'BlackD Tibia', 'BlackdTools', 'Tibia proxy bot', 'old Tibia bots'],
  },
  {
    slug: 'tibiabot-ng',
    aliases: ['tibia-bot-ng'],
    aliasLabels: { 'tibia-bot-ng': 'Tibia Bot NG' },
    name: 'TibiaBot NG',
    category: 'Historical Bot',
    status: 'Discontinued legacy commercial bot',
    era: '2005-2010',
    originalRelease: 'Archived public footprint by December 2005; exact launch date uncertain',
    evidenceLevel: 'Contemporary community archive',
    lineage: 'Associated with developer LordOfWar and the tibiabot.com product line',
    technology: 'Client automation, scripts, hotkeys, targeting and early cavebot workflows',
    summary: 'TibiaBot NG was one of the best-known commercial Tibia bots of the mid-to-late 2000s and a predecessor in the product ecosystem later associated with ElfBot NG.',
    sourceLinks: [
      { label: '2010 community archive bot-lineage discussion', href: 'https://opentibiaservers.com/threads/no-more-elfbot.98952/' },
      officialTibiaRules,
      battleyeAnnouncement,
    ],
    origin: [
      "The early archive is incomplete and naming is inconsistent. Community discussion places TibiaBot NG in the mid-2000s paid-bot ecosystem, but no clean official launch announcement was verified.",
      "Community sources consistently associate TibiaBot NG with LordOfWar and tibiabot.com. Because the December 2004 post does not clearly prove the later NG branding, this page uses December 2005 as the earliest defensible TibiaBot NG footprint and treats the exact launch date as unresolved.",
    ],
    trends: [
      "TibiaBot NG belongs to the transition from small trainers and hotkey utilities toward commercial multi-feature automation. Version 4.x references show a mature paid product with keys, automatic login behavior, frequent client-version releases, and a dedicated forum.",
      "By the late 2000s, the market expected targeting, healing, scripts, cave routes, looting, and PvP assistance. The product line then intersected with ElfBot NG, whose more advanced scripting and OT popularity increasingly dominated community discussion before both lines stopped following new official clients.",
    ],
    uses: [
      "Historical users associated TibiaBot NG with auto healing, rune aiming, target and chase assistance, training, looting, scripts, and eventually cave-oriented automation. Specific capability varied substantially by client version.",
      "The paid key system and per-version updates made the website and update service part of the product. Community records quote release 4.6.2 resetting keys and fixing automatic logins in September 2007.",
      "The software remains historically relevant because its terminology, script culture, and commercial model influenced later bots and Open Tibia client discussions.",
    ],
    notableCases: [
      "TibiaBot NG is one of the earliest Tibia automation names with a broad, surviving mid-2000s community footprint. It appears repeatedly in forum discussions alongside BlackD Proxy and later ElfBot.",
      "The relationship between TibiaBot NG, LordOfWar, and ElfBot NG is a notable but partly community-documented lineage. community archive veterans describe ElfBot as a separate developer's project released under the NG business ecosystem, illustrating how product branding can obscure technical authorship.",
    ],
    evaluation: [
      "The software is obsolete. Historical versions target old Windows clients and old update services, and mirror downloads may contain cracks, credential stealers, or modified binaries.",
      "Official Tibia prohibits bot and macro automation. For Open Tibia servers, read the current server rules; some allow limited client features while others prohibit cavebots, macros, multiclient, or injected tools.",
    ],
    timeline: [
      {
        date: 'Mid-2000s',
        title: 'Early Tibia automation utilities circulate',
        text: 'TibiaBot NG belongs to the mid-2000s transition from small hotkey utilities toward commercial multi-feature automation suites.',
        sourceLabel: officialTibiaRules.label,
        sourceHref: officialTibiaRules.href,
      },
      {
        date: '2005-2006',
        title: 'TibiaBot NG public footprint is established',
        text: 'Community memory places TibiaBot NG in the paid-bot ecosystem before ElfBot NG became the dominant old-client reference point.',
        sourceLabel: 'community archive bot-lineage discussion',
        sourceHref: 'https://opentibiaservers.com/threads/no-more-elfbot.98952/',
      },
      {
        date: 'Late 2000s',
        title: 'Commercial bot expectations mature',
        text: 'The market expected healing, targeting, looting, scripts, cave routes, and PvP assistance, while official rules continued to prohibit automation.',
        sourceLabel: officialTibiaRules.label,
        sourceHref: officialTibiaRules.href,
      },
      {
        date: '2010',
        title: 'NG-era product lines stop following current Tibia',
        text: 'community archive discussion records the end of ElfBot updates and looks back on TibiaBot NG as an older product line, while old-protocol OT use persists.',
        sourceLabel: 'community archive 2010 discussion',
        sourceHref: 'https://opentibiaservers.com/threads/no-more-elfbot.98952/',
      },
    ],
    evidenceNotes: [
      { label: 'Naming caveat', value: 'Early bot naming is inconsistent, so this page uses mid-2000s historical positioning instead of a precise launch-day claim.' },
      { label: 'Version evidence', value: 'Surviving community discussion preserves the relationship between TibiaBot NG, ElfBot NG, old client versions, and paid-bot culture.' },
      { label: 'Lineage caveat', value: 'Developer and business relationships are partly preserved through community testimony rather than complete company archives.' },
    ],
    related: ['TibiaBot NG history', 'Tibia Bot NG', 'LordOfWar Tibia', 'Tibia bots 2005', 'NG bot history'],
  },
  {
    slug: 'elfbot',
    aliases: ['elf-bot'],
    aliasLabels: { 'elf-bot': 'Elf Bot' },
    name: 'ElfBot',
    category: 'Historical Bot',
    status: 'Discontinued for current Tibia; historically persistent in 8.6 OT culture',
    era: '2008-2010 and legacy OT use',
    originalRelease: 'Public release line verified by 2008',
    evidenceLevel: 'Contemporary release and community archive',
    lineage: 'Developed from the private Elf tool and distributed as ElfBot NG',
    technology: 'Scriptable client automation, HUDs, hotkeys, cavebot and PvP features',
    summary: 'ElfBot, widely known as ElfBot NG, was a highly scriptable Tibia automation product whose hotkey language, HUDs, cavebot, and PvP features became deeply embedded in old-client Open Tibia culture.',
    sourceLinks: [
      { label: 'August 2010 community archive discontinuation discussion', href: 'https://opentibiaservers.com/threads/no-more-elfbot.98952/' },
      { label: 'November 2010 community archive old-version question', href: 'https://opentibiaservers.com/threads/is-there-elfbot-for-8-0.107848/' },
      officialTibiaRules,
      battleyeAnnouncement,
    ],
    origin: [
      "The surviving public release archive documents ElfBot NG versions 2.0, 3.x, 4.1.8, 4.2.x, and 4.3.0 around the Tibia 8.11 period in 2008. Community testimony describes an earlier private PvP tool called Elf, but a precise private-development date is not sufficiently preserved for a factual launch claim.",
      "community archive discussions associate the technical work with a developer known as Ekx or Nya and the NG distribution with LordOfWar's business ecosystem. That history is valuable but partly testimonial, so this page distinguishes the public release record from community accounts of the private predecessor.",
    ],
    trends: [
      "ElfBot's major trend was programmability. Its hotkey and scripting language let users build behavior beyond fixed checkboxes, while HUDs and labeled waypoints made complex profiles easier to understand. This raised expectations for every bot product that followed.",
      "The second trend is its afterlife in Open Tibia. When updates for current official Tibia stopped in 2010, ElfBot did not disappear from community vocabulary. Old-protocol servers, especially 8.6 environments, continued to discuss compatible clients, scripts, PvP rules, and whether automation was allowed.",
    ],
    uses: [
      "Historically described uses included healing, targeting, looting, cave routes, training, HUDs, alarms, equipment changes, PvP timing, movement assistance, and custom hotkeys. Profiles could combine many small rules into a server- or vocation-specific setup.",
      "In Open Tibia contexts, the same scriptability was used for both convenience and competitive automation. That is why server rules often name ElfBot, cavebot, dash, combo, macros, or bot clients explicitly rather than using only a generic cheating clause.",
      "For historians and server operators, old ElfBot scripts reveal which client data and gameplay behaviors players expected to automate. They can inform anti-abuse policy and preservation work without distributing the executable.",
    ],
    notableCases: [
      "ElfBot is notable for making an automation scripting language part of everyday Tibia vocabulary. HUD layouts, short hotkeys, labeled waypoints, targeting profiles, and PvP scripts circulated as community content independently of the original developer.",
      "Its discontinuation in 2010 did not end its influence. Instead, the product became closely associated with Tibia 8.6 OT servers, where owners still have to decide whether to block it, tolerate limited features, or build gameplay around an OTC alternative.",
    ],
    evaluation: [
      "Old ElfBot binaries, key generators, cracks, custom clients, and script packs are untrusted software. They target obsolete Windows and client environments and frequently circulate without source or provenance.",
      "This page documents history, not usage. Official Tibia prohibits automated play. Every OT server should publish a clear automation policy, and players should follow it before using any macro, modified client, or assistance feature.",
    ],
    timeline: [
      {
        date: 'Private predecessor era',
        title: 'Elf begins as a private PvP-oriented tool',
        text: 'Community testimony describes a private tool called Elf before the public NG release, but the exact origin date is not independently verified.',
      },
      {
        date: '2008',
        title: 'ElfBot NG 2.x-4.x public releases are archived',
        text: 'Community records around the 8.x era document a highly scriptable public product with HUDs, cavebot workflows, and hotkey culture.',
        sourceLabel: 'August 2010 community archive discussion',
        sourceHref: 'https://opentibiaservers.com/threads/no-more-elfbot.98952/',
      },
      {
        date: '2009-2010',
        title: 'Scripting and cavebot culture peak',
        text: 'Community use expands around HUDs, hotkeys, waypoints, automation profiles, and PvP features before current-client updates stop.',
      },
      {
        date: 'August 27, 2010 onward',
        title: 'Discontinuation shifts ElfBot into old-protocol OT history',
        text: 'community archive records the end of new-client updates, while later questions and server rules show continuing interest in older versions.',
        sourceLabel: 'community archive discontinuation discussion',
        sourceHref: 'https://opentibiaservers.com/threads/no-more-elfbot.98952/',
      },
    ],
    evidenceNotes: [
      { label: 'Release evidence', value: 'community archive community records preserve ElfBot NG discontinuation and old-version discussion around the 8.x OT era.' },
      { label: 'Origin caveat', value: 'The private Elf predecessor is documented mainly through community testimony, so no exact first-build date is claimed.' },
      { label: 'Legacy evidence', value: 'community archive discussions record both the 2010 discontinuation and later demand for old-client compatibility.' },
    ],
    related: ['ElfBot NG history', 'ElfBot 8.6', 'ElfBot scripts history', 'Tibia bot hotkeys', 'old Open Tibia bots'],
  },
];

function makeAliasIntroduction(resource, requestedSlug, displayName) {
  if (requestedSlug === resource.slug) return null;
  return `${displayName} is a common search name for ${resource.name}. This route preserves that exact terminology while documenting the same project lineage, verified dates, source record, and compatibility context under its canonical product name.`;
}

function toPage(resource, requestedSlug = resource.slug) {
  const path = `/${requestedSlug}`;
  const displayName = requestedSlug === resource.slug
    ? resource.name
    : resource.aliasLabels?.[requestedSlug] || requestedSlug;
  const aliasIntroduction = makeAliasIntroduction(resource, requestedSlug, displayName);
  const isHistoricalBot = resource.category === 'Historical Bot';
  const aliasKeywords = Object.values(resource.aliasLabels || {});
  const keywordList = [
    displayName,
    resource.name,
    `${displayName} Tibia`,
    `${displayName} Open Tibia`,
    `${resource.name} history`,
    `${resource.name} release date`,
    `${resource.name} origin`,
    `${resource.name} uses`,
    `${resource.name} wiki`,
    resource.category,
    ...resource.aliases,
    ...aliasKeywords,
    ...resource.related,
  ];

  const sections = [
    {
      eyebrow: 'Origin and release record',
      heading: `${resource.name}: origin and original release date`,
      body: [
        ...(aliasIntroduction ? [aliasIntroduction] : []),
        ...resource.origin,
        `Evidence classification: ${resource.evidenceLevel}. The date shown in the reference box is phrased to match what the surviving source actually proves.`,
      ],
    },
    {
      eyebrow: 'Historical development',
      heading: `How ${resource.name} changed over time`,
      body: resource.trends,
    },
    {
      eyebrow: 'Common uses',
      heading: `What ${resource.name} was or is commonly used for`,
      body: resource.uses,
    },
    {
      eyebrow: 'Notable impact',
      heading: `The most notable ${resource.name} cases and legacy`,
      body: resource.notableCases,
    },
    {
      eyebrow: isHistoricalBot ? 'Rules and safety' : 'Compatibility and safety',
      heading: `How to evaluate ${resource.name} responsibly`,
      body: resource.evaluation,
    },
    {
      eyebrow: 'Source method',
      heading: `What is verified and what remains uncertain`,
      body: [
        `This page separates a confirmed public date from an assumed development date. Its release statement is: ${resource.originalRelease}.`,
        `The recorded lineage is ${resource.lineage}. The source links preserve the repository, release page, official documentation, publisher archive, or contemporary discussion used to support that description.`,
        isHistoricalBot
          ? 'Historical automation pages explain community impact without providing setup steps, working downloads, license bypasses, or instructions that enable rule violations.'
          : 'Project activity, compatibility, and security can change. Readers should use the linked upstream repository or official documentation to confirm current support before adopting the resource.',
      ],
    },
  ];

  return {
    type: 'resource',
    slug: requestedSlug,
    path,
    primaryKeyword: displayName,
    title: requestedSlug === resource.slug
      ? `${resource.name}: History, Release Date, Uses and Legacy`
      : `${displayName}: ${resource.name} History and Resource Guide`,
    h1: requestedSlug === resource.slug
      ? `${resource.name} History and Resource Guide`
      : `${displayName}: ${resource.name} Resource Guide`,
    dek: `${resource.summary} Explore its verified origin, release chronology, historical trends, common uses, notable impact, compatibility, and current status.`,
    metaDescription: `${resource.name} history, origin, verified release date, common uses, notable legacy, compatibility notes, current status, and primary source links.`,
    updatedAt,
    publishedAt: updatedAt,
    keywords: keywordList,
    cta: { label: 'Browse Open Tibia Servers', href: '/' },
    facts: [
      { label: 'Category', value: resource.category },
      { label: 'Status', value: resource.status },
      { label: 'Original release', value: resource.originalRelease },
      { label: 'Historical era', value: resource.era },
      { label: 'Evidence', value: resource.evidenceLevel },
    ],
    infobox: [
      { label: 'Canonical name', value: resource.name },
      { label: 'Also known as', value: aliasKeywords.length ? aliasKeywords.join(', ') : 'No major alias recorded' },
      { label: 'Resource type', value: resource.category },
      { label: 'Origin / lineage', value: resource.lineage },
      { label: 'Technology / formats', value: resource.technology },
      { label: 'Current status', value: resource.status },
    ],
    overview: `${aliasIntroduction ? `${aliasIntroduction} ` : ''}${resource.summary} This article uses dated repositories, releases, official documentation, publisher archives, and contemporary community records to distinguish verified history from uncertain recollection.`,
    timeline: resource.timeline,
    sections,
    faqs: [
      {
        question: `When was ${resource.name} first released?`,
        answer: `${resource.originalRelease}. The page uses that exact wording because the evidence level is ${resource.evidenceLevel.toLowerCase()}; it does not turn an archive or repository date into a more precise claim than the source supports.`,
      },
      {
        question: `Where did ${resource.name} come from?`,
        answer: `${resource.lineage}. See the origin section and dated timeline for the difference between the first verified public record and any older, less certain development history.`,
      },
      {
        question: `What was ${resource.name} commonly used for?`,
        answer: resource.uses[0],
      },
      {
        question: `Why is ${resource.name} notable in Open Tibia history?`,
        answer: resource.notableCases[0],
      },
      {
        question: `Is ${resource.name} still active or safe to use?`,
        answer: `${resource.status}. ${resource.evaluation[0]}`,
      },
      {
        question: isHistoricalBot
          ? `Does this page recommend downloading or using ${resource.name}?`
          : `What should be verified before adopting ${resource.name}?`,
        answer: isHistoricalBot
          ? 'No. The entry exists for historical documentation, rule awareness, and community memory. It does not provide working downloads, bypasses, or setup instructions.'
          : resource.evaluation[1],
      },
    ],
    glossary: commonGlossary,
    researchNotes: resource.evidenceNotes,
    mediaLeads: [],
    evergreenAngles: [
      `Records the verified origin and release chronology of ${resource.name}.`,
      `Explains common uses and the project's role in Open Tibia history.`,
      'Separates primary evidence, contemporary records, and uncertain community memory.',
      isHistoricalBot
        ? 'Preserves automation history without functioning as a download or usage guide.'
        : 'Provides compatibility and backup guidance before production adoption.',
    ],
    relatedServerQueries: resource.related,
    sourceLinks: resource.sourceLinks,
    officialAccess: officialAccessBySlug[resource.slug] || [],
  };
}

export const resourcePages = Object.fromEntries(
  resourceDefinitions.flatMap((resource) => [
    [resource.slug, toPage(resource)],
    ...resource.aliases.map((alias) => [alias, toPage(resource, alias)]),
  ])
);

export function getResourcePage(slug) {
  return resourcePages[slug] ? polishPlayerFacingCopy(resourcePages[slug]) : null;
}

export function getResourcePages() {
  return Object.values(resourcePages).map((page) => polishPlayerFacingCopy(page));
}

export function getPrimaryResourcePages() {
  return resourceDefinitions.map((resource) => polishPlayerFacingCopy(resourcePages[resource.slug]));
}
