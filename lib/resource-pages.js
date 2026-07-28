const updatedAt = '2026-07-28';

const commonGlossary = [
  {
    term: 'OTB',
    definition: 'The Open Tibia binary item mapping format used by servers and tools to keep item IDs consistent across client versions.',
  },
  {
    term: 'DAT',
    definition: 'A Tibia client data file that stores client-side item and appearance metadata. Different client versions can require different handling.',
  },
  {
    term: 'SPR',
    definition: 'A Tibia sprite container used by older clients for graphical assets. Sprite tooling is version-sensitive and should be tested against backups.',
  },
  {
    term: 'AAC',
    definition: 'Automatic Account Creator, the website layer used by many Open Tibia servers for accounts, characters, shops, news, and administration.',
  },
];

const resourceDefinitions = [
  {
    slug: 'remeres-map-editor',
    aliases: ['rme'],
    name: "Remere's Map Editor",
    category: 'Mapping',
    status: 'Active community tool',
    era: '2000s-present',
    sourceLinks: [
      { label: 'OpenTibiaBR Remere\'s Map Editor GitHub', href: 'https://github.com/opentibiabr/remeres-map-editor' },
      { label: 'Original hampusborgos/rme GitHub', href: 'https://github.com/hampusborgos/rme' },
      { label: 'Legacy SourceForge project note', href: 'https://sourceforge.net/projects/rme/files/' },
    ],
    summary: "Remere's Map Editor is one of the central Open Tibia mapping tools, used to create, inspect, and maintain OTBM maps for OT servers.",
    notes: [
      'Players search this tool when they want to understand how custom maps, hunting areas, cities, depots, spawns, and quest zones are built.',
      'Server owners should treat map files as production data: keep backups, version control major edits, and test with the exact server/client stack.',
    ],
  },
  {
    slug: 'otitemeditor',
    aliases: ['item-editor', 'otb-editor'],
    name: 'OTItemEditor',
    category: 'Item Editing',
    status: 'Archived upstream, historically important',
    era: '2010s-present',
    sourceLinks: [
      { label: 'opentibia/item-editor GitHub archive', href: 'https://github.com/opentibia/item-editor' },
      { label: 'OTLand New OTItemEditor thread', href: 'https://otland.net/threads/new-otitemeditor.208346/' },
      { label: 'ottools ItemEditor GitHub', href: 'https://github.com/ottools/ItemEditor' },
    ],
    summary: 'OTItemEditor is used around OTB item files, helping servers and tools map client-side item IDs to server-side IDs.',
    notes: [
      'The key user intent is practical: identify which editor matches the server distribution, client version, OTB format, and item workflow.',
      'Because the original repository is archived, users should verify forks, releases, and compatibility notes before modifying production item files.',
    ],
  },
  {
    slug: 'dat-editor',
    aliases: ['tibia-dat-editor'],
    name: 'Tibia DAT Editor',
    category: 'Client Data',
    status: 'Version-specific tooling',
    era: '2000s-present',
    sourceLinks: [
      { label: 'nekiro 7.72 DAT editor GitHub', href: 'https://github.com/nekiro/7.72-dat-editor' },
      { label: 'OTLand editor tag archive', href: 'https://otland.net/tags/editor/' },
      { label: 'opentibia-tools DAT notes', href: 'https://github.com/ppnowak/opentibia-tools' },
    ],
    summary: 'DAT editors are used to inspect or modify Tibia client data files, usually for narrow protocol ranges and controlled development workflows.',
    notes: [
      'DAT editing is not one universal workflow. The client version, file format, item appearance system, and tool assumptions matter.',
      'A serious resource page should warn users to work from backups and to document every client-data change alongside server-side item mappings.',
    ],
  },
  {
    slug: 'spr-editor',
    aliases: ['tibia-spr-editor'],
    name: 'Tibia SPR Editor',
    category: 'Client Sprites',
    status: 'Version-specific tooling',
    era: '2000s-present',
    sourceLinks: [
      { label: 'OTLand DAT and SPR editor discussion', href: 'https://otland.net/threads/looking-for-tibia-spr-and-tibia-dat-editor-ubuntu-or-windows.269447/' },
      { label: 'opentibia-tools sprite packing notes', href: 'https://github.com/ppnowak/opentibia-tools' },
    ],
    summary: 'SPR editors and sprite packers are part of the historical Open Tibia client-customization workflow for graphics and client assets.',
    notes: [
      'Sprite editing attracts players looking for visual customization, but it also creates compatibility risk when client, DAT, SPR, and server item data drift.',
      'The page should preserve history while pointing users toward source-linked tools and cautious, backup-first workflows.',
    ],
  },
  {
    slug: 'lapis-item-editor',
    aliases: [],
    name: 'LapisItemEditor',
    category: 'Item Editing',
    status: 'Modern item editor project',
    era: '2020s',
    sourceLinks: [
      { label: 'LapisItemEditor GitHub', href: 'https://github.com/giuinktse7/LapisItemEditor' },
    ],
    summary: 'LapisItemEditor is a newer OTB-oriented editor built around modern client asset formats such as appearances.dat and compressed sprites.',
    notes: [
      'It belongs on the resources page because newer Open Tibia stacks moved beyond the classic DAT/SPR-only workflow.',
      'Users should read project limitations and issues before relying on any editor for production item changes.',
    ],
  },
  {
    slug: 'open-tibia-library',
    aliases: ['opentibia-library'],
    name: 'Open Tibia Library',
    category: 'Developer Library',
    status: 'Developer library',
    era: '2020s',
    sourceLinks: [
      { label: 'gesior/open-tibia-library GitHub', href: 'https://github.com/gesior/open-tibia-library' },
    ],
    summary: 'Open Tibia Library is a TypeScript library for manipulating files used by OTS and OTClient, forming a base for editor-style tooling.',
    notes: [
      'This is useful for developers who want repeatable parsing, packing, image generation, or editor workflows instead of one-off manual tools.',
      'It should be documented as a building block rather than a turnkey end-user application.',
    ],
  },
  {
    slug: 'otclient',
    aliases: [],
    name: 'OTClient',
    category: 'Client',
    status: 'Open-source client lineage',
    era: '2010s-present',
    sourceLinks: [
      { label: 'OpenTibiaBR OTClient GitHub', href: 'https://github.com/opentibiabr/otclient' },
      { label: 'edubart OTClient GitHub', href: 'https://github.com/edubart/otclient' },
      { label: 'OTLand OTClient discussion', href: 'https://otland.net/threads/there-is-no-main-otclient-repo.277890/page-2' },
    ],
    summary: 'OTClient is an alternative Tibia client lineage for OTServ, known for Lua scripting, modular UI, and client customization.',
    notes: [
      'For players, the key question is whether a server provides an official client build and what version it supports.',
      'For owners, OTClient research usually leads into modules, protocol compatibility, asset packaging, launcher strategy, and UI customization.',
    ],
  },
  {
    slug: 'the-forgotten-server',
    aliases: ['tfs'],
    name: 'The Forgotten Server',
    category: 'Server Engine',
    status: 'Open-source server emulator',
    era: '2000s-present',
    sourceLinks: [
      { label: 'otland/forgottenserver GitHub', href: 'https://github.com/otland/forgottenserver' },
      { label: 'The Forgotten Server wiki', href: 'https://github.com/otland/forgottenserver/wiki' },
    ],
    summary: 'The Forgotten Server is a major open-source C++ MMORPG server emulator and one of the foundational Open Tibia server projects.',
    notes: [
      'A resources wiki should connect TFS to compiling, Lua scripting, database setup, datapacks, maps, clients, account makers, and long-term maintenance.',
      'Server listings can use this page as an internal reference when a world identifies itself as TFS-based.',
    ],
  },
  {
    slug: 'canary',
    aliases: ['opentibiabr-canary'],
    name: 'Canary',
    category: 'Server Engine',
    status: 'Active OpenTibiaBR server emulator',
    era: '2020s-present',
    sourceLinks: [
      { label: 'OpenTibiaBR Canary GitHub', href: 'https://github.com/opentibiabr/canary' },
      { label: 'Canary documentation', href: 'https://docs.opentibiabr.com/opentibiabr/canary' },
      { label: 'Canary Docker image', href: 'https://hub.docker.com/r/opentibiabr/canary' },
    ],
    summary: 'Canary is an OpenTibiaBR C++20 and Lua server emulator for modern Open Tibia development.',
    notes: [
      'Canary belongs beside TFS because many modern servers, tools, and map workflows now target newer client/server behavior.',
      'The page should help owners understand engine lineage, documentation, Docker usage, map editing, and client expectations.',
    ],
  },
  {
    slug: 'gesior-aac',
    aliases: ['gesior'],
    name: 'Gesior AAC',
    category: 'Website Application',
    status: 'Historical AAC lineage',
    era: '2000s-present',
    sourceLinks: [
      { label: 'OTLand website applications forum', href: 'https://otland.net/forums/website-applications.118/' },
      { label: 'Gesior 2012 GitHub reference', href: 'https://github.com/gesior/Gesior2012' },
    ],
    summary: 'Gesior AAC is a historically important account-maker lineage for Open Tibia websites and server account systems.',
    notes: [
      'This page should explain the AAC role: account creation, character lists, highscores, shops, news, downloads, and admin workflows.',
      'Because many installs are old or forked, compatibility and security review matter before deploying any legacy AAC.',
    ],
  },
  {
    slug: 'znote-aac',
    aliases: ['znote'],
    name: 'Znote AAC',
    category: 'Website Application',
    status: 'Open-source AAC',
    era: '2010s-present',
    sourceLinks: [
      { label: 'ZnoteAAC GitHub', href: 'https://github.com/znote/znoteaac' },
      { label: 'OTLand Znote website thread', href: 'https://otland.net/threads/znote-website.289220/' },
    ],
    summary: 'Znote AAC is a PHP website and account system used with Open Tibia servers, known for broad OT distribution compatibility.',
    notes: [
      'Players see the AAC as the official server website; owners see it as account, character, download, and community infrastructure.',
      'A resource page should emphasize maintenance, PHP version compatibility, database configuration, and security hygiene.',
    ],
  },
  {
    slug: 'myaac',
    aliases: ['my-aac'],
    name: 'MyAAC',
    category: 'Website Application',
    status: 'Open-source AAC',
    era: '2010s-present',
    sourceLinks: [
      { label: 'MyAAC GitHub', href: 'https://github.com/slawkens/myaac' },
      { label: 'MyAAC official about page', href: 'https://my-aac.org/about/' },
      { label: 'MyAAC plugins GitHub', href: 'https://github.com/slawkens/myaac-plugins' },
    ],
    summary: 'MyAAC is a free open-source Automatic Account Creator and CMS for Open Tibia servers, forked from the Gesior project.',
    notes: [
      'MyAAC intent covers installation, templates, plugins, admin tools, shop systems, news, account pages, and compatibility with server databases.',
      'The page should point owners toward official releases, plugins, and documentation rather than random repacks.',
    ],
  },
  {
    slug: 'neobot',
    aliases: [],
    name: 'NeoBot',
    category: 'Historical Bot',
    status: 'Deprecated historical entry',
    era: 'Late 2000s-early 2010s',
    sourceLinks: [
      { label: 'OTLand NeoBot comes to an end thread', href: 'https://otland.net/threads/neobot-comes-to-an-end.147355/' },
    ],
    summary: 'NeoBot is part of Tibia botting history and is included here for legacy context, not as a recommendation or usage guide.',
    notes: [
      'The useful search intent is historical: what NeoBot was, why older players remember it, and how it fits into Tibia automation history.',
      'OpenTibiaServers.com should avoid download guidance and instead document risks, rule conflicts, detection history, and community memory.',
    ],
  },
  {
    slug: 'xenobot',
    aliases: [],
    name: 'XenoBot',
    category: 'Historical Bot',
    status: 'Deprecated historical entry',
    era: '2010s',
    sourceLinks: [
      { label: 'XenoBot official historical page', href: 'https://www.xenobot.net/' },
      { label: 'Nick Cano bot architecture article', href: 'https://nickcano.com/bot-architecture-2/' },
      { label: 'OTLand NeoBot and XenoBot discussion', href: 'https://otland.net/threads/neobot-comes-to-an-end.147355/' },
    ],
    summary: 'XenoBot is documented as a historical Tibia automation project with developer-written retrospective material and community discussion.',
    notes: [
      'The page should focus on history, architecture context, and how automation changed player behavior, not on enabling bot use.',
      'Because the name overlaps with unrelated living-robot research, the title and copy need to stay clearly Tibia-specific.',
    ],
  },
  {
    slug: 'blackd-proxy',
    aliases: ['blackd'],
    name: 'BlackD Proxy',
    category: 'Historical Bot',
    status: 'Deprecated historical entry',
    era: '2000s-2010s',
    sourceLinks: [
      { label: 'BlackD Proxy archive', href: 'https://divinity76.github.io/blackdproxy.net_archive/www.blackdtools.net/archive/index.php/f-9.html' },
    ],
    summary: 'BlackD Proxy is part of older Tibia bot and proxy history, remembered by veteran players and preserved through archived community material.',
    notes: [
      'The resource page should preserve the name, era, and historical role without linking players into unsafe or obsolete downloads.',
      'This is valuable as a timeline entry for how client automation, proxy tools, and server rules evolved.',
    ],
  },
  {
    slug: 'tibiabot-ng',
    aliases: ['tibia-bot-ng'],
    name: 'TibiaBot NG',
    category: 'Historical Bot',
    status: 'Deprecated historical entry',
    era: '2000s',
    sourceLinks: [
      { label: 'Community bot history discussion', href: 'https://www.reddit.com/r/TibiaMMO/comments/k1kh68/a_common_misconception_that_many_tibians_seems_to/' },
    ],
    summary: 'TibiaBot NG is included as a legacy automation keyword because veteran Tibia players still reference it in bot-history discussions.',
    notes: [
      'This page should be handled carefully: community memory is useful, but bot use can violate server rules and official game policy.',
      'The historical angle helps players understand why many Open Tibia servers publish explicit bot, cavebot, macro, and client-modification rules.',
    ],
  },
  {
    slug: 'elfbot',
    aliases: ['elf-bot'],
    name: 'ElfBot',
    category: 'Historical Bot',
    status: 'Deprecated historical entry',
    era: '2000s-2010s',
    sourceLinks: [
      { label: 'OTLand tools and bot-history context', href: 'https://otland.net/' },
    ],
    summary: 'ElfBot is a legacy Tibia automation keyword remembered in older Open Tibia and Tibia community discussions.',
    notes: [
      'This entry should exist for historical completeness, with strict framing around rules, account risk, and deprecated software.',
      'Future enrichment should attach primary archived references before expanding the page beyond high-level context.',
    ],
  },
];

function toPage(resource) {
  const path = `/${resource.slug}`;
  const keywordList = [
    resource.name,
    `${resource.name} Tibia`,
    `${resource.name} Open Tibia`,
    `${resource.name} wiki`,
    `${resource.name} history`,
    `${resource.name} resource`,
    resource.category,
    ...resource.aliases,
  ];

  return {
    type: 'resource',
    slug: resource.slug,
    path,
    primaryKeyword: resource.name,
    title: `${resource.name} | Open Tibia Resource Wiki`,
    h1: `${resource.name} Open Tibia Resource`,
    dek: `${resource.summary} This page preserves source-linked context for Tibia fans, server owners, developers, and researchers.`,
    metaDescription: `${resource.name} Open Tibia resource page covering purpose, history, status, source links, compatibility context, and related Tibia tools.`,
    updatedAt,
    publishedAt: updatedAt,
    keywords: keywordList,
    cta: { label: 'Browse Open Tibia Servers', href: '/' },
    facts: [
      { label: 'Category', value: resource.category },
      { label: 'Status', value: resource.status },
      { label: 'Era', value: resource.era },
      { label: 'Primary intent', value: resource.category.includes('Bot') ? 'Historical research' : 'Tool research' },
    ],
    infobox: [
      { label: 'Name', value: resource.name },
      { label: 'Resource type', value: resource.category },
      { label: 'Current status', value: resource.status },
      { label: 'Historical window', value: resource.era },
    ],
    overview: `${resource.summary} OpenTibiaServers.com treats this as a reference page: source links first, compatibility notes second, and community context around how the tool or name fits into the Open Tibia ecosystem.`,
    timeline: [
      {
        date: resource.era,
        title: `${resource.name} becomes part of Tibia community vocabulary`,
        text: `${resource.name} is searched because players, owners, or developers need context that older forum posts, GitHub repositories, and archived pages do not always organize cleanly.`,
      },
      {
        date: '2026',
        title: 'Added to OpenTibiaServers.com resources',
        text: 'This resource page was added to connect exact-match search intent with source-linked Open Tibia history and modern server discovery.',
      },
    ],
    sections: [
      {
        eyebrow: 'Purpose',
        heading: `What ${resource.name} is used for`,
        body: [
          resource.summary,
          resource.notes[0],
          `A useful ${resource.name} page should answer the next question after the search click: whether the project is active, archived, version-specific, risky, historical, or still useful for a modern Open Tibia workflow.`,
        ],
      },
      {
        eyebrow: 'Evaluation',
        heading: `How players and owners should evaluate ${resource.name}`,
        body: [
          resource.notes[1] || 'Evaluate the source, project status, compatibility notes, and community discussion before relying on this resource.',
          resource.category.includes('Bot')
            ? 'Automation tools are documented here as history. Players should follow the rules of the server they play, avoid unsafe downloads, and treat old automation names as research topics rather than recommendations.'
            : 'Development tools should be tested against copies of maps, item files, clients, and databases before touching a live server. Version drift is one of the most common causes of broken assets and confusing behavior.',
          'OpenTibiaServers.com links these resources to server listings so players can understand what tools, engines, clients, and website systems may be behind the worlds they browse.',
        ],
      },
      {
        eyebrow: 'Community context',
        heading: `${resource.name} in the Open Tibia ecosystem`,
        body: [
          `${resource.name} is part of a larger toolchain that can include map editors, item editors, DAT and SPR tools, OTClient builds, server engines, Lua scripts, account makers, launchers, forums, Discords, and server-list pages.`,
          'The strongest resource pages will keep separating verified source material from community memory. That lets the page serve both current users and veteran players trying to understand where a tool, bot name, or engine fits historically.',
        ],
      },
    ],
    faqs: [
      {
        question: `Is ${resource.name} still useful?`,
        answer: `${resource.status}. Use the source links and project notes to confirm whether it matches your client version, server distribution, and intended workflow.`,
      },
      {
        question: `Why does OpenTibiaServers.com have a page for ${resource.name}?`,
        answer: `Because Open Tibia discovery is not only server lists. Players and owners also search for tools, engines, account makers, editors, historical bots, and client resources that explain how the community works.`,
      },
      {
        question: resource.category.includes('Bot') ? `Does this page recommend using ${resource.name}?` : `Should I use ${resource.name} on a live server?`,
        answer: resource.category.includes('Bot')
          ? 'No. Historical bot pages are for context, rule awareness, and community memory. They are not download or usage guides.'
          : 'Only after testing with backups and verifying compatibility. Tool pages should guide research, not encourage blind edits to production files.',
      },
    ],
    glossary: commonGlossary,
    researchNotes: resource.sourceLinks.map((source) => ({
      label: source.label,
      value: `Primary or community source for ${resource.name}: ${source.href}`,
    })),
    mediaLeads: [],
    evergreenAngles: [
      'Preserves Open Tibia history in a source-linked format.',
      'Helps players understand server technology, rules, and community vocabulary.',
      'Connects exact-match tool searches with active server discovery.',
      'Separates current development tools from deprecated historical software.',
    ],
    relatedServerQueries: [
      resource.name,
      resource.category,
      'Open Tibia tools',
      'OTLand resources',
      'Tibia server tools',
    ],
    sourceLinks: resource.sourceLinks,
  };
}

export const resourcePages = Object.fromEntries(
  resourceDefinitions.flatMap((resource) => {
    const page = toPage(resource);
    return [
      [resource.slug, page],
      ...resource.aliases.map((alias) => [alias, { ...page, slug: alias, path: `/${alias}`, primaryKeyword: alias }]),
    ];
  })
);

export function getResourcePage(slug) {
  return resourcePages[slug] || null;
}

export function getResourcePages() {
  return Object.values(resourcePages);
}

export function getPrimaryResourcePages() {
  return resourceDefinitions.map((resource) => resourcePages[resource.slug]);
}
