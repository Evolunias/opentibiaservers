import { buildAbsoluteUrl } from '@/lib/seo';

export const curatedPages = {
  tibia: {
    slug: 'tibia',
    path: '/tibia',
    type: 'topic',
    title: 'Tibia and Open Tibia Server Guide',
    h1: 'Tibia: Official Game, Open Tibia Servers, Worlds, Clients, and Community Discovery',
    dek: 'A player-focused hub for understanding Tibia search intent: the official MMORPG, Open Tibia servers, OT communities, world history, client versions, safe downloads, and active server discovery.',
    primaryKeyword: 'Tibia',
    keywords: [
      'Tibia',
      'Tibia servers',
      'Open Tibia servers',
      'OT servers',
      'Tibia worlds',
      'Tibia server list',
      'Tibia private servers',
      'OTLand',
      'OTServlist',
    ],
    metaDescription:
      'Tibia guide for players comparing official Tibia, Open Tibia servers, OT server lists, worlds, clients, safe downloads, forums, and active communities.',
    updatedAt: '2026-07-27',
    pageLabel: 'Open Tibia Reference Hub',
    heroImage: {
      src: '/images/guides/antica-hero.png',
      alt: 'Fantasy harbor city representing Tibia world history and Open Tibia server discovery',
    },
    overview:
      'Tibia is the root search term behind the entire Open Tibia ecosystem. Some players want the official MMORPG, some want a specific world, some want an OT server with faster progression or old-school mechanics, and some are trying to verify whether a server website, client download, Discord, forum thread, or server-list row is legitimate.',
    cta: {
      label: 'Browse Active Open Tibia Servers',
      href: '/',
    },
    facts: [
      { label: 'Primary topic', value: 'Tibia and Open Tibia discovery' },
      { label: 'Official game', value: 'Tibia by CipSoft' },
      { label: 'OT meaning', value: 'Independently operated Open Tibia servers' },
      { label: 'Player intent', value: 'Official game research, server discovery, worlds, clients, downloads, communities' },
    ],
    infobox: [
      { label: 'Canonical page', value: 'opentibiaservers.com/tibia' },
      { label: 'Classification', value: 'Core topic hub' },
      { label: 'Best use', value: 'Start here before comparing OT servers, worlds, and clients' },
      { label: 'Safety priority', value: 'Verify official sites and community sources before downloading clients' },
      { label: 'Community sources', value: 'Tibia.com, OTLand, OTServlist, server websites, Discords, forums' },
    ],
    timeline: [
      {
        date: '1997',
        title: 'Tibia begins its long-running MMORPG history',
        text:
          'Tibia becomes one of the longest-running online role-playing games, creating the mechanics, world identity, and player culture that later shaped Open Tibia servers.',
      },
      {
        date: 'Open Tibia era',
        title: 'Independent servers become a parallel discovery layer',
        text:
          'Open Tibia servers let communities experiment with different versions, rates, maps, PvP rules, custom systems, resets, and launch models while preserving familiar Tibia-style gameplay.',
      },
      {
        date: 'Server-list era',
        title: 'Directories and forums become essential verification sources',
        text:
          'Players increasingly rely on OTServlist, OTLand Server Gala, official server websites, Discords, and community threads to verify whether a server is active, safe, and worth playing.',
      },
      {
        date: 'OpenTibiaServers.com',
        title: 'The directory becomes a richer player research hub',
        text:
          'The goal is to aggregate public listings and community sources into pages with live data, source links, owner claims, reviews, screenshots, uptime monitoring, and long-term historical context.',
      },
    ],
    evergreenAngles: [
      'Tibia is both an official-game keyword and the parent intent behind Open Tibia server discovery.',
      'Players searching broad Tibia terms need routing: official game, worlds, servers, clients, guides, forums, screenshots, and safe download checks.',
      'The page should help users avoid unsafe downloads by pushing them toward official sites, known community threads, and owner-claimed listings.',
      'A strong Tibia hub can link exact-match server pages, official worlds, OTLand discoveries, OTServlist records, and player reviews into one durable resource.',
    ],
    glossary: [
      {
        term: 'Tibia',
        definition:
          'The official long-running MMORPG by CipSoft and the origin of the mechanics, world identity, and player culture that inspired Open Tibia servers.',
      },
      {
        term: 'Open Tibia server',
        definition:
          'An independently operated server inspired by Tibia, often using different client versions, rates, maps, PvP rules, custom systems, and reset policies.',
      },
      {
        term: 'OTServlist',
        definition:
          'A long-running public Open Tibia server list that players use to compare online counts, uptime, versions, rates, and server hosts.',
      },
      {
        term: 'OTLand Server Gala',
        definition:
          'An OtLand forum board where server owners advertise Open Tibia launches, updates, seasons, screenshots, rules, and community discussion.',
      },
      {
        term: 'Client version',
        definition:
          'The Tibia or OT client protocol version a server expects, such as 7.4, 8.0, 8.6, 10.98, 12.x, 13.x, 15.x, or a custom OTClient build.',
      },
    ],
    sourceLinks: [
      { label: 'Tibia official website', href: 'https://www.tibia.com/' },
      { label: 'Tibia game guide and worlds', href: 'https://www.tibia.com/gameguides/?section=world&subtopic=manual' },
      { label: 'OtLand Server Gala', href: 'https://otland.net/forums/server-gala.43/' },
      { label: 'OTServlist players-online ranking', href: 'https://otservlist.org/list-server_players_online-desc.html' },
    ],
    relatedServerQueries: [
      'Tibia servers',
      'Open Tibia servers',
      'OT servers',
      'Tibia 8.6 servers',
      'Tibia 7.4 servers',
      'OTLand Server Gala',
      'OTServlist',
      'Tibia worlds',
    ],
    sections: [
      {
        eyebrow: 'Search Intent',
        heading: 'Why Tibia needs a dedicated page on OpenTibiaServers.com',
        body: [
          'A broad search for Tibia can mean several different things. One player may want the official game website, another may want a specific world like Antica or Nova, another may want a modern high-rate OT server, and another may be trying to verify whether a private server client is safe to download.',
          'That mixed intent is exactly why this page exists. It routes the player toward official Tibia context, active Open Tibia server listings, OTLand launch threads, OTServlist snapshots, world-history pages, and claimable server profiles without pretending those sources are interchangeable.',
        ],
      },
      {
        eyebrow: 'Official vs OT',
        heading: 'The difference between Tibia and Open Tibia servers',
        body: [
          'Tibia is the official MMORPG operated by CipSoft. Open Tibia servers are independently operated communities inspired by Tibia mechanics. They may use old protocols, custom clients, faster rates, real maps, custom maps, resets, events, new systems, or rules that do not exist on official worlds.',
          'Players should treat that distinction seriously. Official Tibia world data belongs to Tibia.com, while OT server claims need verification through server websites, public lists, forums, Discords, owner claims, screenshots, and live monitoring.',
        ],
      },
      {
        eyebrow: 'Player Safety',
        heading: 'How to verify a Tibia or OT server before downloading anything',
        body: [
          'Before installing a client, verify the official website, account creation path, listed host, Discord or forum, rules, staff posts, screenshots, and whether the server appears in public listing data. Avoid unrelated mirrors and random download links when an official source is available.',
          'A trustworthy Open Tibia profile should eventually show live online count, uptime history, source links, owner-managed fields, screenshots, reviews, community discussion, and clear contact or support channels.',
        ],
      },
      {
        eyebrow: 'Discovery',
        heading: 'How OpenTibiaServers.com should serve Tibia players',
        body: [
          'The best directory is not a table clone. It should preserve live server-list data, but then expand each listing into a useful page: official links, launch history, rates, PvP rules, screenshots, reviews, forum context, Discord signals, uptime checks, and owner-verified corrections.',
          'For broad Tibia searchers, the directory should make it easy to move from a general idea to an exact-match page: Antica, Nova, Cyntara, Evolunia, NoxiousOT, OxygenOT, Kaldrox, Miracle 7.4, OTLand, OTServlist, and newly discovered Server Gala listings.',
        ],
      },
      {
        eyebrow: 'Community',
        heading: 'What the Tibia community can add here',
        body: [
          'Players can make the page more valuable by adding reviews, screenshots, correction reports, guild or war memories, server recommendations, and notes about dead links or unsafe mirrors.',
          'Server owners can claim their listings, add official websites, client links, Discords, rules, screenshots, FAQs, changelogs, event calendars, and staff contact information. That is how a broad Tibia hub becomes a practical community resource.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Tibia the same as Open Tibia?',
        answer:
          'No. Tibia is the official MMORPG. Open Tibia servers are independently operated servers inspired by Tibia mechanics and community culture.',
      },
      {
        question: 'What should I check before playing an Open Tibia server?',
        answer:
          'Verify the official website, listed host, client version, account page, rules, Discord or forum, screenshots, uptime, online count, and whether the download link comes from a trusted source.',
      },
      {
        question: 'Why does OpenTibiaServers.com cover official Tibia worlds?',
        answer:
          'Official world names are part of how players search. A player researching Antica, Nova, or another world may also want OT alternatives with similar PvP, old-school, or community characteristics.',
      },
      {
        question: 'Where do new Open Tibia servers get discovered?',
        answer:
          'Common discovery sources include OTServlist, OtLand Server Gala, server websites, Discord communities, forum posts, and player recommendations.',
      },
    ],
    researchNotes: [
      {
        label: 'Official-game source boundary',
        value:
          'Tibia.com remains the primary source for official Tibia game and world information. OpenTibiaServers.com should reference it clearly rather than merging official-world facts with private-server claims.',
      },
      {
        label: 'Community-source boundary',
        value:
          'OtLand Server Gala threads are useful public launch and discussion records. They should be treated as source leads that require owner or live-server verification before being considered complete listings.',
      },
    ],
    mediaLeads: [
      {
        label: 'Official Tibia website',
        href: 'https://www.tibia.com/',
        note: 'Use official pages for official-game context and avoid mirroring copyrighted material unless permission or license allows it.',
      },
      {
        label: 'OtLand Server Gala screenshots in source threads',
        href: 'https://otland.net/forums/server-gala.43/',
        note: 'Server owners often post launch graphics and gameplay screenshots in their threads; link to source threads unless permission allows local reuse.',
      },
    ],
  },
  antica: {
    slug: 'antica',
    path: '/antica',
    type: 'official-world',
    title: 'Antica Tibia World Guide',
    h1: 'Antica Tibia World: History, PvP Culture, and Server Alternatives',
    dek: 'A player-focused guide to Antica, the legacy Tibia world, with context for Open PvP players comparing official Tibia worlds and Open Tibia server alternatives.',
    primaryKeyword: 'Antica',
    keywords: [
      'Antica',
      'Antica Tibia',
      'Antica world',
      'Antica Open PvP',
      'Antica server',
      'Tibia Antica alternatives',
      'Open Tibia servers like Antica',
    ],
    metaDescription:
      'Antica Tibia world guide covering history, Open PvP identity, player intent, and Open Tibia server alternatives for players comparing legacy Tibia worlds.',
    updatedAt: '2026-07-26',
    pageLabel: 'Historical Reference',
    heroImage: {
      src: '/images/guides/antica-hero.png',
      alt: 'Ancient fantasy harbor city at sunrise representing Antica Tibia world history',
    },
    overview:
      'Antica is a legacy official Tibia world and one of the most important reference points for players researching old MMORPG culture, Open PvP history, rare-world identity, and the difference between official Tibia worlds and independent Open Tibia servers.',
    cta: {
      label: 'Compare Open Tibia Servers',
      href: '/',
    },
    facts: [
      { label: 'Game', value: 'Tibia' },
      { label: 'World type', value: 'Open PvP' },
      { label: 'Known for', value: 'Legacy status, long-running community, rare-history appeal' },
      { label: 'Search intent', value: 'World research, PvP culture, alternatives, active server discovery' },
    ],
    infobox: [
      { label: 'Primary topic', value: 'Antica Tibia world' },
      { label: 'Canonical page', value: 'opentibiaservers.com/antica' },
      { label: 'Classification', value: 'Official Tibia world, not an OT server' },
      { label: 'Ruleset context', value: 'Open PvP' },
      { label: 'Historical relevance', value: 'First-generation Tibia world identity' },
      { label: 'Best comparison use', value: 'Benchmark for legacy PvP culture and long-term world permanence' },
    ],
    timeline: [
      {
        date: '1997',
        title: 'Early Tibia world history begins',
        text:
          'Community references place Antica in Tibia earliest world history, which is why the name carries more historical weight than a normal server listing.',
      },
      {
        date: '2001',
        title: 'Antica becomes explicitly distinguished from newer worlds',
        text:
          'Tibia.com archival news from December 19, 2001 describes the creation of Nova and distinguishes Antica as the old world where existing characters remained.',
      },
      {
        date: 'Long-running era',
        title: 'Reputation compounds over years',
        text:
          'The world identity becomes shaped by guild memory, high-level characters, item history, PvP politics, and the social record players associate with old Tibia.',
      },
      {
        date: 'Open Tibia context',
        title: 'Antica becomes a comparison keyword',
        text:
          'Players use Antica as a benchmark when searching for old-school Open Tibia servers, Open PvP alternatives, real-map servers, and communities with a stronger sense of permanence.',
      },
    ],
    evergreenAngles: [
      'Historical world identity: why the name Antica still matters to Tibia players.',
      'Player intent: what someone searching Antica usually wants to know before playing or comparing alternatives.',
      'Open Tibia comparison: how OT servers can reproduce some old-world feel through rulesets, versions, rates, maps, and community design.',
      'Research quality: source-linked context, not thin keyword stuffing or generic server-list copy.',
    ],
    glossary: [
      {
        term: 'Open PvP',
        definition:
          'A Tibia world ruleset where player conflict is part of the world identity, making politics, reputation, guilds, and risk more important to the experience.',
      },
      {
        term: 'Open Tibia server',
        definition:
          'An independently operated server inspired by Tibia mechanics. OT servers can use different client versions, rates, maps, custom systems, reset policies, and community rules.',
      },
      {
        term: 'Real map',
        definition:
          'An Open Tibia server design that attempts to recreate or closely mirror the geography and progression feel of official Tibia, usually for players seeking familiarity.',
      },
      {
        term: 'Legacy world',
        definition:
          'A world whose value comes partly from age, memory, scarcity, long-running characters, and community history rather than only current online count.',
      },
    ],
    sourceLinks: [
      { label: 'Tibia.com game world context', href: 'https://www.tibia.com/gameguides/?section=world&subtopic=manual' },
      { label: 'Tibia.com historical Antica/Nova news', href: 'https://www.tibia.com/news/?id=116&subtopic=newsarchive' },
      { label: 'TibiaWiki Antica reference', href: 'https://tibia.fandom.com/wiki/Antica' },
      { label: 'Tibia Wiki Antica reference', href: 'https://www.tibia-wiki.net/wiki/Antica' },
    ],
    sections: [
      {
        eyebrow: 'Player Intent',
        heading: 'Why players search for Antica',
        body: [
          'Antica is one of the most searched Tibia world names because it represents the oldest layer of the game: long-term characters, old guild history, Open PvP identity, and the kind of social memory that newer worlds cannot easily reproduce.',
          'Most players searching for Antica are not only looking for a definition. They usually want to know whether the world is active, how competitive it feels, what kind of PvP culture surrounds it, and whether there are Open Tibia servers that capture part of that older-world feeling with different rates, custom systems, or a faster start.',
          'That makes Antica a useful historical keyword for OpenTibiaServers.com: the page can answer the official-world question, then help players translate that intent into practical OT server discovery.',
        ],
      },
      {
        eyebrow: 'World Profile',
        heading: 'What Antica means in Tibia culture',
        body: [
          'Antica is strongly associated with Tibia history. Community references describe it as a first-generation world with Open PvP rules and a reputation shaped by old guilds, rare items, high-level characters, and long-running conflicts.',
          'That history matters for search intent. A player who searches "Antica Tibia" is often comparing more than stats. They are evaluating whether the world has the kind of depth, risk, reputation, and social continuity they want from a MMORPG world.',
        ],
      },
      {
        eyebrow: 'Gameplay Fit',
        heading: 'Who Antica is best suited for',
        body: [
          'Antica is most attractive to players who care about official-world permanence, PvP politics, older community identity, and a world where reputation compounds over years. That can be compelling, but it can also be intimidating for players who want a fresh start or a faster path into meaningful fights.',
          'Open Tibia servers appeal to the second group. A server with accelerated experience, custom spawns, seasonal resets, or a different PvP balance can give players a faster version of the competitive loop while still keeping the Tibia-style mechanics they came for.',
        ],
      },
      {
        eyebrow: 'Historical Value',
        heading: 'Why a timeless Antica page belongs in an OT directory',
        body: [
          'A strong Open Tibia directory should not only mirror tables of online servers. It should explain the worlds, communities, names, and historical references that players actually search for when deciding where to play.',
          'Antica is a bridge keyword. It belongs to official Tibia history, but it also describes an intent pattern inside the OT community: players looking for old-school permanence, Open PvP pressure, social memory, and worlds that feel consequential.',
        ],
      },
      {
        eyebrow: 'Alternatives',
        heading: 'How to compare Open Tibia servers against Antica',
        body: [
          'Use Antica as the benchmark for legacy identity, then compare Open Tibia servers by live population, client version, PvP type, uptime, rates, region, and the quality of their official website or community.',
          'For players who want "old Tibia feeling," the most important filters are usually client version, PvP rules, real-map versus custom-map design, server age, reset policy, and whether the community is active outside the game through forums or Discord.',
        ],
      },
      {
        eyebrow: 'Directory Use',
        heading: 'Finding servers like Antica on OpenTibiaServers.com',
        body: [
          'OpenTibiaServers.com tracks public Open Tibia listings and turns raw server-list data into searchable pages. Instead of only seeing a compact table, players can compare each server by population, uptime, version, rates, and owner-managed information as listings are claimed and improved.',
          'If your intent is to play today, start with live player count and uptime. If your intent is to find a long-term home, also check community signals, official website quality, recent updates, and whether the server owner provides clear rules and support.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Antica an Open Tibia server?',
        answer:
          'No. Antica is an official Tibia game world. Open Tibia servers are independently operated servers inspired by Tibia mechanics and usually listed through OT communities and server lists.',
      },
      {
        question: 'Why do Open Tibia players search for Antica?',
        answer:
          'Antica is a reference point for legacy Tibia, Open PvP identity, and long-running world history. Players often use it as a benchmark when comparing old-school or PvP-focused Open Tibia servers.',
      },
      {
        question: 'What should I compare before choosing an Antica alternative?',
        answer:
          'Compare client version, PvP rules, rates, online population, uptime, hosting region, reset policy, website quality, and the activity of the server community.',
      },
      {
        question: 'Why does OpenTibiaServers.com cover official Tibia worlds like Antica?',
        answer:
          'Because official-world names are part of how players research the Open Tibia ecosystem. A player searching Antica may be comparing official Tibia history with OT servers that offer old-school PvP, real-map gameplay, faster progression, or fresh-start communities.',
      },
    ],
    relatedServerQueries: ['Open PvP', '8.6', '7.4', 'Brazil', 'USA'],
  },
  nova: {
    slug: 'nova',
    path: '/nova',
    type: 'official-world',
    title: 'Nova Tibia World History and Open Tibia Alternatives',
    h1: 'Nova Tibia World: The First New World, Fresh-Start History, and OT Alternatives',
    dek: 'A historical reference page for Nova, the second named Tibia world, built for players researching old Open PvP world history, fresh-start culture, and Open Tibia alternatives.',
    primaryKeyword: 'Nova',
    keywords: [
      'Nova',
      'Nova Tibia',
      'Nova world',
      'Nova Open PvP',
      'Nova server',
      'Tibia Nova history',
      'Open Tibia servers like Nova',
    ],
    metaDescription:
      'Nova Tibia world history covering its 2001 launch, Open PvP identity, 2014 merge into Iona, fresh-start intent, and Open Tibia alternatives.',
    updatedAt: '2026-07-26',
    pageLabel: 'Historical Reference',
    heroImage: {
      src: '/images/guides/nova-hero.png',
      alt: 'New medieval harbor settlement at sunrise representing Nova Tibia fresh-start world history',
    },
    overview:
      'Nova matters because it marks the moment Tibia moved from one old world into a multi-world game. For modern Open Tibia players, Nova is a historical fresh-start keyword: a reference point for players who want the feeling of a new world, clean competition, early economy, and Open PvP identity.',
    cta: { label: 'Find Fresh-Start OT Servers', href: '/?search=fresh%20start' },
    facts: [
      { label: 'Game', value: 'Tibia' },
      { label: 'World type', value: 'Open PvP' },
      { label: 'Online since', value: 'December 19, 2001' },
      { label: 'Offline since', value: 'November 10, 2014' },
      { label: 'Merged into', value: 'Iona' },
      { label: 'Search intent', value: 'Fresh-start history, Open PvP culture, old-world alternatives' },
    ],
    infobox: [
      { label: 'Primary topic', value: 'Nova Tibia world' },
      { label: 'Canonical page', value: 'opentibiaservers.com/nova' },
      { label: 'Classification', value: 'Deprecated official Tibia world, not an OT server' },
      { label: 'Historical role', value: 'First new game world after Antica' },
      { label: 'Best comparison use', value: 'Benchmark for fresh-start Open PvP server intent' },
    ],
    timeline: [
      {
        date: 'December 19, 2001',
        title: 'Nova is announced as a new world',
        text:
          'Tibia.com announced that there were now two game worlds: Antica and Nova. Antica held existing characters, while Nova offered a new world where everybody had to start a fresh career.',
      },
      {
        date: '2001-2014',
        title: 'Nova develops its own Open PvP history',
        text:
          'Community references describe Nova as an Open PvP world with strong PvP culture, old guild memory, and the kind of historical player identity that later became useful for comparing new-world servers.',
      },
      {
        date: 'November 10, 2014',
        title: 'Nova is merged into Iona',
        text:
          'TibiaWiki references describe Nova as merged with Lunara and Titania into Iona, making Nova a deprecated historical world rather than an active official world.',
      },
      {
        date: 'Open Tibia context',
        title: 'Nova becomes a fresh-start comparison keyword',
        text:
          'Players searching Nova today may be looking for history, nostalgia, or the modern OT equivalent of a clean world launch with active players and early competition.',
      },
    ],
    evergreenAngles: [
      'Fresh-start history: why Nova is more than another old world name.',
      'Player intent: how Nova searches connect to new-world OT launches and resets.',
      'Open PvP comparison: how modern OT servers can replicate some of Nova early-world pressure.',
      'Research quality: source-linked history plus practical alternatives for players who want to play now.',
    ],
    glossary: [
      {
        term: 'Fresh start',
        definition:
          'A server or world state where players begin with a cleaner economy and less established power structure, making early competition and discovery more important.',
      },
      {
        term: 'Deprecated world',
        definition:
          'A world that is no longer active as its own destination, often because it was merged, closed, or replaced in the official world structure.',
      },
      {
        term: 'World merge',
        definition:
          'A process where characters and histories from multiple worlds are combined into another world, preserving some continuity but ending the original world identity.',
      },
      {
        term: 'Open PvP world',
        definition:
          'A world ruleset where player conflict affects daily play, guild politics, hunting decisions, and the long-term reputation of characters and groups.',
      },
    ],
    sourceLinks: [
      { label: 'Tibia.com Nova launch news', href: 'https://www.tibia.com/news/?id=116&subtopic=newsarchive' },
      { label: 'TibiaWiki Nova reference', href: 'https://tibia.fandom.com/wiki/Nova' },
      { label: 'Tibia Wiki Nova reference', href: 'https://www.tibia-wiki.net/wiki/Nova' },
      { label: 'Tibia Wiki Brazil Nova reference', href: 'https://www.tibiawiki.com.br/wiki/Nova' },
    ],
    sections: [
      {
        eyebrow: 'Player Intent',
        heading: 'Why players search for Nova',
        body: [
          'Nova searches usually carry historical and fresh-start intent. Players may remember the first split from a single-world Tibia era, or they may be looking for a modern Open Tibia server that recreates the feeling of a new world launch.',
          'That intent is useful for OpenTibiaServers.com because it maps naturally to servers with fresh starts, reset seasons, early economy, active PvP, and launch-day competition.',
        ],
      },
      {
        eyebrow: 'World Profile',
        heading: 'What Nova means in Tibia history',
        body: [
          'Nova is historically important because it made Tibia a multi-world game. The official 2001 announcement positioned Antica as the old world and Nova as a new world where everyone needed to start over.',
          'That distinction is exactly what many Open Tibia players still search for: a place where existing power is not already settled and where a new character can matter quickly.',
        ],
      },
      {
        eyebrow: 'Open Tibia Fit',
        heading: 'How to compare OT servers against Nova intent',
        body: [
          'Use Nova as the benchmark for fresh-start feeling, then compare Open Tibia servers by launch date, season age, reset policy, player count, uptime, PvP type, rates, and Discord/forum activity.',
          'If a server has strong launch messaging, visible rules, screenshots, owner contact, and live community discussion, it is much closer to satisfying Nova-style intent than a raw IP row on an outdated list.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Nova still an active Tibia world?',
        answer:
          'No. Community references describe Nova as a deprecated world that went offline on November 10, 2014 and was merged into Iona.',
      },
      {
        question: 'Why is Nova important to Tibia history?',
        answer:
          'Nova was announced on December 19, 2001 as the new world alongside Antica. It represented the first major fresh-start world distinction in Tibia history.',
      },
      {
        question: 'What kind of Open Tibia servers match Nova search intent?',
        answer:
          'Fresh-start, Open PvP, seasonal, old-school, and launch-focused OT servers are the closest matches because they offer a cleaner competitive environment and early-world progression.',
      },
    ],
    relatedServerQueries: ['fresh start', 'Open PvP', 'old school', 'new season', '8.6'],
  },
  otservlist: {
    slug: 'otservlist',
    path: '/otservlist',
    type: 'ecosystem',
    title: 'otservlist.org Alternative and Open Tibia Server Discovery',
    h1: 'otservlist.org and Modern Open Tibia Server Discovery',
    dek: 'A practical guide to using public OT server-list data while comparing servers with richer search, SEO-friendly pages, and owner-managed context.',
    primaryKeyword: 'otservlist',
    keywords: ['otservlist', 'otservlist.org', 'otservlist alternative', 'Open Tibia server list', 'OT server list'],
    metaDescription:
      'Compare otservlist.org with OpenTibiaServers.com for Open Tibia server discovery, live player counts, uptime, versions, rates, and richer listing pages.',
    updatedAt: '2026-07-26',
    pageLabel: 'Directory Reference',
    overview:
      'otservlist.org is a major discovery point for Open Tibia servers. This page is designed as a lasting reference for how players use server-list data, what raw listings can and cannot answer, and how richer directory pages can improve discovery.',
    cta: { label: 'Browse Live OT Servers', href: '/' },
    facts: [
      { label: 'Category', value: 'Open Tibia server list' },
      { label: 'User intent', value: 'Find active OT servers and compare population, rates, uptime, and versions' },
      { label: 'Opportunity', value: 'Richer listing pages, better filtering, SEO-friendly server profiles' },
    ],
    infobox: [
      { label: 'Primary topic', value: 'Open Tibia server-list discovery' },
      { label: 'Canonical page', value: 'opentibiaservers.com/otservlist' },
      { label: 'Search intent', value: 'Find, compare, and verify active OT servers' },
      { label: 'Important caveat', value: 'Raw rows need context before players choose where to spend time' },
    ],
    timeline: [
      {
        date: 'Server-list era',
        title: 'Raw listings become the default discovery layer',
        text:
          'Players learn to scan IP, server name, players online, uptime, points, EXP rate, PvP type, and client version before opening a server website.',
      },
      {
        date: 'API removal context',
        title: 'Directory operators need resilient sync methods',
        text:
          'When public APIs disappear or become limited, a directory needs careful public-data ingestion, deduplication, source mapping, and crawlable page templates.',
      },
      {
        date: 'Modern SEO opportunity',
        title: 'Server names need permanent pages',
        text:
          'The strongest user experience is not just a sortable table. It is a stable record for every important server name with history, official links, live signals, and comparison context.',
      },
    ],
    evergreenAngles: [
      'How players interpret online counts, versions, uptime, and rates.',
      'Why source data needs context, owner-managed details, and historical snapshots.',
      'How a modern directory can preserve discoverability after public APIs disappear.',
      'Why exact-match server-name pages can answer intent better than a table alone.',
    ],
    glossary: [
      {
        term: 'Server list',
        definition:
          'A directory of Open Tibia servers, usually showing IP, server name, online players, uptime, rates, PvP type, and client version.',
      },
      {
        term: 'Source mapping',
        definition:
          'The process of storing public listing fields in a normalized database so records can be deduplicated, updated, enriched, and rendered into better pages.',
      },
      {
        term: 'Claimed listing',
        definition:
          'A directory record that a verified server owner or manager can enrich with official links, descriptions, images, rules, and support information.',
      },
    ],
    sourceLinks: [
      { label: 'otservlist.org', href: 'https://otservlist.org/' },
      { label: 'otservlist FAQ', href: 'https://usa.otservlist.org/pages/faq' },
      { label: 'otservlist live USA listing', href: 'https://usa.otservlist.org/' },
    ],
    sections: [
      {
        eyebrow: 'Comparison',
        heading: 'What players want from an OT server list',
        body: [
          'Players use otservlist-style pages to answer fast questions: which servers are online, which have real players, which client version they run, and which are worth trying today.',
          'A stronger directory experience adds intent-focused pages, cleaner filters, deeper server profiles, claimable listings, reviews, uptime history, and search-friendly pages for each server name.',
        ],
      },
      {
        eyebrow: 'Discovery',
        heading: 'Why richer server pages matter',
        body: [
          'Raw tables are useful for scanning, but they do not fully answer user intent. A player deciding where to spend time wants rules, website links, community links, launch context, rates, client notes, and trust signals.',
          'OpenTibiaServers.com is structured to preserve public listing data while expanding each record into a durable, indexable page.',
        ],
      },
      {
        eyebrow: 'Directory Strategy',
        heading: 'How OpenTibiaServers.com can improve on raw server lists',
        body: [
          'The goal is not to replace useful public rows with marketing copy. The goal is to preserve the data players already trust, then add context that helps them make better decisions.',
          'That means hourly sync, normalized schema mapping, canonical server-name pages, owner claim flows, official sources, reviews, uptime history, screenshots or curated visuals, and internal links between similar servers.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is OpenTibiaServers.com an otservlist replacement?',
        answer:
          'It is designed as a richer Open Tibia directory experience: public listing data, better rendering, individual server pages, owner-managed context, reviews, uptime history, and SEO-friendly exact-match pages.',
      },
      {
        question: 'Why are exact-match server pages important?',
        answer:
          'Players often search for a specific server name rather than a generic list. A permanent exact-match page can combine live data, official links, history, rules, visuals, and comparison context.',
      },
    ],
    relatedServerQueries: ['Cyntara', 'OTMadness', 'Evolunia', '8.6'],
  },
  otland: {
    slug: 'otland',
    path: '/otland',
    type: 'ecosystem',
    title: 'OTLand Open Tibia Community Guide',
    h1: 'OTLand: Open Tibia Development, Server Gala, and Community Discovery',
    dek: 'A curated guide to OTLand for players, server owners, developers, and people researching the Open Tibia ecosystem.',
    primaryKeyword: 'OTLand',
    keywords: ['OTLand', 'Open Tibia forum', 'OpenTibia community', 'OTLand server gala', 'The Forgotten Server'],
    metaDescription:
      'Guide to OTLand, the Open Tibia community, including server advertisements, support, resources, tutorials, and development projects.',
    updatedAt: '2026-07-26',
    pageLabel: 'Community Reference',
    overview:
      'OTLand is a major Open Tibia community reference point for players, developers, server owners, and researchers. It connects server advertising, technical support, development resources, and community discussion.',
    cta: { label: 'Find Servers Listed by the OT Community', href: '/' },
    facts: [
      { label: 'Category', value: 'Open Tibia community' },
      { label: 'Known for', value: 'Forums, Server Gala, support, resources, tutorials' },
      { label: 'Developer relevance', value: 'The Forgotten Server, OTClient, maps, scripts, and tools' },
    ],
    infobox: [
      { label: 'Primary topic', value: 'Open Tibia community and development' },
      { label: 'Canonical page', value: 'opentibiaservers.com/otland' },
      { label: 'Useful for', value: 'Players, server owners, developers, mappers, and scripters' },
      { label: 'Discovery area', value: 'Server Gala advertisement board for OpenTibia servers' },
      { label: 'Development areas', value: 'The Forgotten Server, OTClient, mapping, scripting, tools, resources' },
    ],
    timeline: [
      {
        date: 'Community forum era',
        title: 'OTLand becomes a central Open Tibia knowledge base',
        text:
          'The forum format gives Open Tibia a long-lived record of support questions, server launches, mapping work, scripting discussions, tools, and resources.',
      },
      {
        date: 'Server Gala',
        title: 'Server advertisements gain their own discovery channel',
        text:
          'OTLand Server Gala is an advertisement board for OpenTibia servers, making it one of the natural places players and owners use around launch discovery.',
      },
      {
        date: 'Modern directory context',
        title: 'Forum discovery and database discovery complement each other',
        text:
          'A forum thread can show launch narrative and community replies; a directory record can preserve live data, uptime, structured fields, and exact-match SEO pages.',
      },
    ],
    evergreenAngles: [
      'OTLand as a discovery channel for server launches and community trust.',
      'OTLand as a development hub for server code, clients, maps, scripts, and guides.',
      'How community presence can help players evaluate whether an OT server is credible.',
      'Why OpenTibiaServers.com should link forum discovery with live directory data instead of treating them as separate worlds.',
    ],
    glossary: [
      {
        term: 'Server Gala',
        definition:
          'An OTLand forum area used for OpenTibia server advertisements, launch threads, replies, and community discovery.',
      },
      {
        term: 'The Forgotten Server',
        definition:
          'A widely referenced open-source Open Tibia server project associated with the OTLand development ecosystem.',
      },
      {
        term: 'OTClient',
        definition:
          'An Open Tibia client ecosystem often discussed alongside server development, custom clients, UI work, and compatibility questions.',
      },
    ],
    sourceLinks: [
      { label: 'OTLand', href: 'https://otland.net/' },
      { label: 'OTLand Server Gala', href: 'https://otland.net/forums/server-gala.43/' },
      { label: 'OTLand GitHub', href: 'https://github.com/otland' },
      { label: 'OTS Guide', href: 'https://docs.otland.net/ots-guide' },
    ],
    sections: [
      {
        eyebrow: 'Community',
        heading: 'Why OTLand matters',
        body: [
          'OTLand is one of the central communities around Open Tibia. Players use it to discover server launches, while owners and developers use it for support, resources, maps, scripts, and discussion.',
          'For searchers, OTLand often means intent beyond a single server: they may be trying to find a new launch, learn how OT servers work, or evaluate whether a server has real community presence.',
        ],
      },
      {
        eyebrow: 'Server Discovery',
        heading: 'How OTLand fits into Open Tibia server research',
        body: [
          'OTLand threads can carry launch announcements, replies, updates, staff presence, criticism, and community history. That is valuable context that a raw listing cannot fully capture.',
          'OpenTibiaServers.com can complement that by turning server names into structured records: live player counts, uptime, rates, versions, countries, source links, official websites, and claimable owner-managed details.',
        ],
      },
      {
        eyebrow: 'Development Context',
        heading: 'Why OTLand also matters to server owners',
        body: [
          'Owners and developers research OTLand for server engines, client work, mapping, scripting, AACs, tools, and troubleshooting. Those development signals often correlate with whether a server has a credible team behind it.',
          'A strong directory should eventually surface those trust signals carefully: official thread links, update history, owner verification, source community presence, and whether the server maintains clear support channels.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is OTLand used for?',
        answer:
          'OTLand is used for Open Tibia discussion, support, resources, server advertisements, development topics, mapping, scripting, client work, and community discovery.',
      },
      {
        question: 'Why does an Open Tibia directory need OTLand context?',
        answer:
          'Many server launches and community discussions happen on forums. Directory pages can use that context alongside live listing data to help players evaluate credibility and activity.',
      },
    ],
    relatedServerQueries: ['Server Gala', '8.6', 'Open PvP'],
  },
  'aurera-global': {
    slug: 'aurera-global',
    path: '/aurera-global',
    type: 'server',
    title: 'Aurera Global Open Tibia Server Wiki and Player Research Page',
    h1: 'Aurera Global: Worlds, Rules, Retro-PvP Signals, and Player Research',
    dek: 'A source-backed Aurera Global reference page for players researching worlds, live activity, rates, rules, multiclient policy, official wiki material, and similar Open Tibia servers.',
    primaryKeyword: 'Aurera Global',
    keywords: ['Aurera Global', 'Aurera Global server', 'Aurera Global OT', 'Aurera Global Tibia', 'Aurera Global wiki'],
    metaDescription:
      'Aurera Global Open Tibia server reference covering official worlds, rules, multiclient policy, rates, live activity, source links, and similar OT server comparisons.',
    updatedAt: '2026-07-26',
    pageLabel: 'Server Reference',
    overview:
      'Aurera Global is a high-intent Open Tibia server name because players usually search it to verify the official website, active worlds, rates, rules, and whether a particular world is worth starting on now. A useful Aurera page needs to separate official world data from list snapshots and give players a practical way to compare activity, PvP rules, client expectations, and owner-confirmed links.',
    cta: { label: 'Compare Aurera Global Alternatives', href: '/?search=Aurera%20Global' },
    facts: [
      { label: 'Category', value: 'Open Tibia server network' },
      { label: 'Official domain', value: 'aurera-global.com' },
      { label: 'otservlist host signal', value: 'play.aurera-global.com' },
      { label: 'Listing snapshot', value: 'PVP, client 15.0, x200 EXP, strong players-online visibility' },
      { label: 'Research focus', value: 'Worlds, rates, rules, multiclient limits, activity, official wiki' },
    ],
    infobox: [
      { label: 'Primary topic', value: 'Aurera Global Open Tibia server' },
      { label: 'Canonical page', value: 'opentibiaservers.com/aurera-global' },
      { label: 'Official research areas', value: 'Rules page, wiki worlds page, official domain, world activity' },
      { label: 'Directory comparison', value: 'Players online, uptime, EXP, PvP type, version, source host' },
      { label: 'Claim status', value: 'Unclaimed on OpenTibiaServers.com until verified by an owner or manager' },
    ],
    timeline: [
      {
        date: '2014 world context',
        title: 'Aurera world history extends beyond a simple listing row',
        text:
          'The official Aurera wiki worlds page lists world-level details such as creation date, location, PvP type, rates, commands, and live player activity, which makes the network better suited for a wiki-style profile than a short table row.',
      },
      {
        date: 'Current otservlist snapshot',
        title: 'Aurera Global ranks high by players online',
        text:
          'The public otservlist players-online ranking has shown play.aurera-global.com near the top of the list with a PVP, client 15.0, x200 EXP signal. That is useful discovery context, but it should be paired with official-world data.',
      },
      {
        date: 'Rules and risk context',
        title: 'Rules define what players should verify before joining',
        text:
          'Aurera rules include event and multiclient constraints. Players should read the official rules before assuming that high activity or high rates mean unrestricted gameplay.',
      },
    ],
    evergreenAngles: [
      'World-level research: players need to know which Aurera world they are evaluating.',
      'Rules-first trust: multiclient and event rules shape real gameplay more than a raw EXP number.',
      'Snapshot discipline: public list data is useful only when labeled as time-sensitive.',
      'Comparison value: Aurera should be compared against other active high-population PVP and Retro-PvP servers.',
    ],
    glossary: [
      {
        term: 'World network',
        definition:
          'A server structure where more than one named world can exist under the same project, making world-specific rates, location, PvP type, and activity important.',
      },
      {
        term: 'Retro-PvP',
        definition:
          'A PvP style associated with older Tibia conflict expectations. Players should verify the exact implementation on the official world page.',
      },
      {
        term: 'Multiclient policy',
        definition:
          'Rules governing how many characters a person can use at the same time and where those characters may participate.',
      },
    ],
    sourceLinks: [
      { label: 'Aurera Global official website', href: 'https://aurera-global.com/' },
      { label: 'Aurera rules page', href: 'https://telaria.aurera-global.com/?view=nossas_regras' },
      { label: 'Aurera wiki worlds page', href: 'https://wiki.aurera-global.com/worlds' },
      { label: 'otservlist players-online ranking', href: 'https://otservlist.org/list-server_players_online-desc.html' },
    ],
    researchNotes: [
      {
        label: 'Official world data',
        value:
          'The Aurera wiki worlds page exposes world status, players online, creation date, location, PvP type, rate information, commands, and party bonus context. That makes official-world mapping central to a good profile.',
      },
      {
        label: 'Rules and multiclient policy',
        value:
          'The official rules page includes event restrictions and multiclient limits, including separate limits depending on activity type. These rules should be summarized and linked rather than copied wholesale.',
      },
      {
        label: 'Directory snapshot',
        value:
          'otservlist has shown play.aurera-global.com as a high-population listing with PVP, client 15.0, x200 EXP, and high uptime visibility. This is a time-sensitive discovery signal, not a permanent guarantee.',
      },
    ],
    mediaLeads: [
      {
        label: 'Aurera wiki worlds page',
        href: 'https://wiki.aurera-global.com/worlds',
        note:
          'Official source for world-level status, rates, commands, and visual world cards that should guide future screenshot/media curation.',
      },
      {
        label: 'Aurera official website',
        href: 'https://aurera-global.com/',
        note:
          'Candidate source for owner-approved screenshots, branding, downloads, and account flow.',
      },
    ],
    sections: [
      {
        eyebrow: 'Player Intent',
        heading: 'Why players search for Aurera Global',
        body: [
          'Aurera Global searches are usually practical: players want the official website, the active world list, the current population, rates, rules, and whether a world is worth joining today.',
          'The page should answer that intent by showing official links first, then list snapshots, then community research gaps that verified owners or players can improve.',
        ],
      },
      {
        eyebrow: 'World Research',
        heading: 'Aurera should be evaluated world by world',
        body: [
          'The official wiki world data is important because a network can contain worlds with different histories, activity levels, locations, rates, and PvP expectations.',
          'A single ranking row cannot tell the full story. OpenTibiaServers.com should preserve the row but expand it into world-level context, rules, screenshots, reviews, and similar-server comparisons.',
        ],
      },
      {
        eyebrow: 'Verification',
        heading: 'What to verify before playing Aurera Global',
        body: [
          'Players should verify the official domain, world name, current online count, client requirements, rules, multiclient limits, event restrictions, downloads, and support channels.',
          'Owner-claimed data should eventually add screenshots, changelogs, Discord/forum links, contact details, and world-specific guide material.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is Aurera Global?',
        answer:
          'Aurera Global is an Open Tibia server/network keyword with official world and rules sources. Players commonly search it to verify worlds, activity, rules, rates, and official play links.',
      },
      {
        question: 'Is the Aurera Global player count permanent?',
        answer:
          'No. Public server-list player counts are snapshots. They should be refreshed by sync jobs and interpreted alongside official world pages and uptime history.',
      },
      {
        question: 'What should Aurera Global players check first?',
        answer:
          'Check the official world page, rules, multiclient policy, event restrictions, client/download path, and whether the world you want has active players in your time zone.',
      },
    ],
    relatedServerQueries: ['PVP', 'Retro PvP', '15.0', 'high population'],
  },
  'baiak-ilusion': {
    slug: 'baiak-ilusion',
    path: '/baiak-ilusion',
    type: 'server',
    title: 'Baiak Ilusion Open Tibia Server Wiki and Player Research Page',
    h1: 'Baiak Ilusion: Baiak 8.60, No-Reset PvP, Systems, and Player Research',
    dek: 'A source-backed Baiak Ilusion reference page for players researching the official site, Baiak 8.60 gameplay, no-reset claims, rates, systems, PvP, screenshots, and similar servers.',
    primaryKeyword: 'Baiak Ilusion',
    keywords: ['Baiak Ilusion', 'Baiak Ilusion server', 'Baiak Ilusion OT', 'Baiak Ilusion 8.60', 'Baiak Ilusion Baiak'],
    metaDescription:
      'Baiak Ilusion Open Tibia server reference covering official links, Baiak 8.60 gameplay, no-reset positioning, rates, systems, PvP, screenshots, and alternatives.',
    updatedAt: '2026-07-26',
    pageLabel: 'Server Reference',
    overview:
      'Baiak Ilusion is a major Baiak-style Open Tibia server keyword. Players searching for it usually want the official website, current online count, whether the server resets, what systems exist, how PvP works, and whether the 8.60 Baiak experience is active enough to justify starting now.',
    cta: { label: 'Compare Baiak Servers', href: '/?search=baiak' },
    facts: [
      { label: 'Category', value: 'Baiak Open Tibia server' },
      { label: 'Official domain', value: 'baiak-ilusion.com.br' },
      { label: 'otservlist host signal', value: 'sv.baiak-ilusion.com.br' },
      { label: 'Listing snapshot', value: 'PVP, client 8.6, x400 EXP, high Brazilian activity' },
      { label: 'Research focus', value: 'No-reset claim, custom systems, PvP map, rates, official account flow' },
    ],
    infobox: [
      { label: 'Primary topic', value: 'Baiak Ilusion Open Tibia server' },
      { label: 'Canonical page', value: 'opentibiaservers.com/baiak-ilusion' },
      { label: 'Style', value: 'Baiak / highrate / PvP / custom systems' },
      { label: 'Directory comparison', value: 'Players online, uptime, EXP, client, PvP type, server-list descriptions' },
      { label: 'Claim status', value: 'Unclaimed on OpenTibiaServers.com until verified by an owner or manager' },
    ],
    timeline: [
      {
        date: '2016-present claim',
        title: 'Long-running Baiak identity',
        text:
          'Public third-party server-list descriptions describe Baiak Ilusion as online since 2016 and positioned as a professional Baiak server that does not reset. This claim should remain linked to sources until owner-confirmed.',
      },
      {
        date: 'Current list context',
        title: 'High players-online visibility',
        text:
          'otservlist and third-party server-list snapshots have shown Baiak Ilusion with high online counts, PVP, client 8.6, x400 EXP, and strong uptime visibility.',
      },
      {
        date: 'Community research phase',
        title: 'Systems need owner/community verification',
        text:
          'Server-list descriptions mention systems such as offline trainer, warzones, dodge, critical, reflect, fatal, restore, weapon upgrades, autoloot, shared experience bonus, anti-rollback work, tickets, custom client, mounts, newer outfits/items, and City War maps.',
      },
    ],
    evergreenAngles: [
      'Baiak intent: players want fast, custom, PvP-heavy gameplay rather than strict real-map pacing.',
      'No-reset trust: long-running/no-reset claims are valuable but should be source-linked and owner-confirmed.',
      'System depth: Baiak pages should document actual mechanics, not just repeat EXP rate.',
      'Brazilian community discovery: Portuguese-language sources and activity windows matter.',
    ],
    glossary: [
      {
        term: 'Baiak',
        definition:
          'A Brazilian Open Tibia style usually associated with custom maps, high rates, PvP, teleports, unique systems, and faster progression than strict old-school servers.',
      },
      {
        term: 'City War',
        definition:
          'A PvP-focused event or system where players fight across dedicated maps or arenas. Baiak Ilusion descriptions reference City War with multiple maps.',
      },
      {
        term: 'No reset',
        definition:
          'A server promise that player progress will not be wiped. This is a major trust signal and should be verified through official owner statements and historical records.',
      },
    ],
    sourceLinks: [
      { label: 'Baiak Ilusion official website', href: 'https://baiak-ilusion.com.br/' },
      { label: 'Baiak Ilusion play website', href: 'https://play.baiak-ilusion.com.br/' },
      { label: 'otservlist Baiak listing context', href: 'https://brazil.otservlist.org/list-server_name-asc-14' },
    ],
    researchNotes: [
      {
        label: 'Official site signal',
        value:
          'The official Baiak Ilusion domain and play subdomain provide the candidate official path for account creation, downloads, and owner-approved information.',
      },
      {
        label: 'Owner-confirmation needed',
        value:
          'The official domains are the correct path for downloads, account flow, and owner-approved information. Long-term history, no-reset claims, event systems, and screenshots should be confirmed by server staff or moderated community sources before being treated as permanent facts.',
      },
      {
        label: 'Directory snapshot',
        value:
          'otservlist has shown sv.baiak-ilusion.com.br as a high-population Brazilian PVP 8.6 listing with x400 EXP and high uptime visibility. This should be refreshed periodically.',
      },
    ],
    mediaLeads: [
      {
        label: 'Baiak Ilusion official website',
        href: 'https://baiak-ilusion.com.br/',
        note:
          'Primary candidate source for official branding, screenshots, downloads, account creation, and owner-approved media.',
      },
      {
        label: 'Baiak Ilusion play website',
        href: 'https://play.baiak-ilusion.com.br/',
        note:
          'Official/play surface with project branding and copyright context.',
      },
    ],
    sections: [
      {
        eyebrow: 'Player Intent',
        heading: 'Why players search for Baiak Ilusion',
        body: [
          'Baiak Ilusion searches are usually high-intent and immediate. Players want to create an account, download the right client, check the online count, confirm the server is still active, and understand whether its Baiak PvP systems fit them.',
          'The right page should not be a generic Baiak article. It should preserve the exact server name, host, rates, source links, no-reset positioning, systems, and gaps that still need owner/community verification.',
        ],
      },
      {
        eyebrow: 'Server Fit',
        heading: 'Who Baiak Ilusion is likely to fit',
        body: [
          'Baiak Ilusion is most relevant for players who want 8.60-style Brazilian Baiak gameplay, fast progression, PvP, custom maps/systems, and a server with visible activity.',
          'Players looking for slow real-map progression, strict old-school rates, or minimal custom systems should compare it against 7.4, 7.6, 8.0, lowrate, and real-map servers instead.',
        ],
      },
      {
        eyebrow: 'Verification',
        heading: 'What to verify before playing Baiak Ilusion',
        body: [
          'Verify the official domain, play/download path, account creation page, client version, rules, rates, current uptime, online count, Discord/contact channel, and whether the no-reset claim is owner-confirmed.',
          'The page should eventually include screenshots of the actual client, depot, trainers, City War, bosses, hunts, upgrade systems, and market/community areas.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is Baiak Ilusion?',
        answer:
          'Baiak Ilusion is a Brazilian Baiak-style Open Tibia server commonly researched for 8.60 PvP gameplay, high rates, custom systems, no-reset positioning, and active player counts.',
      },
      {
        question: 'What client/version does Baiak Ilusion use?',
        answer:
          'Public list snapshots show Baiak Ilusion as an 8.6 listing. Players should verify the current official client/download path on baiak-ilusion.com.br before installing anything.',
      },
      {
        question: 'What makes Baiak Ilusion different from a normal OT server?',
        answer:
          'Public descriptions emphasize Baiak-style PvP, custom maps, offline trainer, upgrades, autoloot, warzones, City War, custom client features, and no-reset positioning.',
      },
    ],
    relatedServerQueries: ['Baiak', '8.6', 'PVP', 'Brazil', 'highrate'],
  },
  cyleria: {
    slug: 'cyleria',
    path: '/cyleria',
    type: 'server',
    title: 'Cyleria Open Tibia Server Wiki and Player Research Page',
    h1: 'Cyleria: Polish OTS, Mobile Client, No-Reset Progression, and Player Research',
    dek: 'A source-backed Cyleria reference page for players researching the Polish OTS, mobile/PC client, no-reset progression, events, Discord community, screenshots, and similar servers.',
    primaryKeyword: 'Cyleria',
    keywords: ['Cyleria', 'Cyleria.pl', 'Cyleria server', 'Cyleria OTS', 'Cyleria mobile client'],
    metaDescription:
      'Cyleria Open Tibia server reference covering official FAQ, mobile and PC play, no-reset progression, events, Discord, screenshots, live activity, and similar OTS comparisons.',
    updatedAt: '2026-07-26',
    pageLabel: 'Server Reference',
    overview:
      'Cyleria is a major Polish OTS keyword with unusually strong public source material: the official site describes no-reset progression, mobile and PC play, events, rewards, PvP wars, rankings, and support paths, while the Discord discovery page shows community scale and long-lived server identity.',
    cta: { label: 'Compare Polish OTS Servers', href: '/?search=Poland%208.6' },
    facts: [
      { label: 'Category', value: 'Polish Open Tibia server' },
      { label: 'Official domain', value: 'cyleria.pl' },
      { label: 'otservlist host signal', value: 'go.cyleria.pl' },
      { label: 'Listing snapshot', value: 'PVP, client 8.6, x300 EXP, high Polish activity' },
      { label: 'Research focus', value: 'Mobile client, no resets, events, Discord, FAQ, screenshots' },
    ],
    infobox: [
      { label: 'Primary topic', value: 'Cyleria Open Tibia server' },
      { label: 'Canonical page', value: 'opentibiaservers.com/cyleria' },
      { label: 'Official research areas', value: 'Home page, FAQ, Tibia OTS page, Discord discovery' },
      { label: 'Directory comparison', value: 'Players online, uptime, EXP, client, PvP type, source host' },
      { label: 'Claim status', value: 'Unclaimed on OpenTibiaServers.com until verified by an owner or manager' },
    ],
    timeline: [
      {
        date: '2016 Discord creation signal',
        title: 'Community presence has long-lived roots',
        text:
          'Discord discovery lists the Cyleria.pl community server as created on July 18, 2016, with thousands of members and active online users. That makes Discord an important public source for community context.',
      },
      {
        date: 'Official site current context',
        title: 'Official site emphasizes no-reset and mobile play',
        text:
          'The Cyleria official site references long online duration, players online, no resets, new areas, equipment upgrades, level rewards, events, PvP wars, rankings, and an Android/mobile client path.',
      },
      {
        date: 'Current list context',
        title: 'High otservlist visibility',
        text:
          'otservlist has shown go.cyleria.pl as a high-population Polish PVP 8.6 listing with x300 EXP and high uptime visibility.',
      },
    ],
    evergreenAngles: [
      'Polish OTS intent: language, community, time zone, and Discord matter.',
      'Mobile-client intent: Cyleria searches often include Android/mobile play questions.',
      'No-reset value: long-term progression is central to how players evaluate the server.',
      'Screenshot quality: Cyleria official pages already expose real visual/gameplay examples that should guide media curation.',
    ],
    glossary: [
      {
        term: 'OTS',
        definition:
          'Open Tibia Server. In Poland, OTS culture is a major search and community category, often tied to Polish-language sites, Discords, and local play schedules.',
      },
      {
        term: 'Mobile client',
        definition:
          'An Android or phone-compatible client path. Cyleria official FAQ and marketing pages reference mobile play and a mobile client with built-in bot support.',
      },
      {
        term: 'No resets',
        definition:
          'A progression promise that characters and progress are not wiped by seasonal resets. Cyleria official/discovery copy emphasizes stable no-reset gameplay.',
      },
    ],
    sourceLinks: [
      { label: 'Cyleria official website', href: 'https://cyleria.pl/' },
      { label: 'Cyleria FAQ', href: 'https://cyleria.pl/?subtopic=faq' },
      { label: 'Cyleria Tibia OTS page', href: 'https://cyleria.pl/?subtopic=tibia-ots' },
      { label: 'Cyleria Discord discovery', href: 'https://discord.com/servers/cyleria-pl-204566377980231680' },
      { label: 'otservlist players-online ranking', href: 'https://otservlist.org/list-server_players_online-desc.html' },
    ],
    researchNotes: [
      {
        label: 'Official FAQ signals',
        value:
          'The Cyleria FAQ explains where to find server info, how to start, how to play on smartphone, bot policy, multiclient limits, and PvP level context. These are high-value onboarding facts for players.',
      },
      {
        label: 'Official visual/source depth',
        value:
          'The official Tibia OTS page includes real screenshots/visual descriptions for terrain, castle/mechanical residence, invasions, MOBA-style battles, bosses, trading/market activity, and player-facing calls to register/download.',
      },
      {
        label: 'Discord community signal',
        value:
          'Discord discovery describes Cyleria as a Polish Open Tibia Server community for computer and phone play, with thousands of members, online users, starting gifts, weekend EXP events, giveaways, updates, and no-reset stability.',
      },
      {
        label: 'Directory snapshot',
        value:
          'otservlist has shown go.cyleria.pl as a high-population Polish PVP 8.6 listing with x300 EXP and high uptime visibility.',
      },
    ],
    mediaLeads: [
      {
        label: 'Cyleria Tibia OTS screenshot page',
        href: 'https://cyleria.pl/?subtopic=tibia-ots',
        note:
          'Official page with multiple public gameplay/feature screenshots and visual descriptions suitable for rights-aware media curation.',
      },
      {
        label: 'Cyleria official website',
        href: 'https://cyleria.pl/',
        note:
          'Official source for current events, rankings, account flow, downloads, and homepage visuals.',
      },
      {
        label: 'Cyleria Discord discovery',
        href: 'https://discord.com/servers/cyleria-pl-204566377980231680',
        note:
          'Public community source for Discord scale, language, activity, and server positioning.',
      },
    ],
    sections: [
      {
        eyebrow: 'Player Intent',
        heading: 'Why players search for Cyleria',
        body: [
          'Cyleria searches usually come from Polish OTS players who want to verify the official site, create an account, download the right client, check whether mobile play works, and see if the community is active.',
          'The page should satisfy that intent by linking official FAQ and Discord sources, summarizing onboarding details, preserving list snapshots, and making screenshot/community contribution areas prominent.',
        ],
      },
      {
        eyebrow: 'Mobile And No-Reset Fit',
        heading: 'Why Cyleria is not just another 8.6 listing',
        body: [
          'Cyleria official copy emphasizes mobile/PC play, no resets, rewards, events, equipment upgrades, and PvP wars. Those details matter more to a player than a raw x300 EXP field alone.',
          'A useful directory page should help visitors understand whether they want the convenience and community of a Polish no-reset OTS or whether they should compare against global highrate, lowrate, or real-map servers.',
        ],
      },
      {
        eyebrow: 'Verification',
        heading: 'What to verify before playing Cyleria',
        body: [
          'Players should verify the official domain, FAQ, download path, Android/mobile client, bot and multiclient rules, PvP level, current online count, event schedule, and Discord support path.',
          'Future owner/community enrichment should add current screenshots, changelog highlights, class/build guidance, boss/event guides, market notes, and player reviews.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is Cyleria?',
        answer:
          'Cyleria is a Polish Open Tibia Server commonly searched for OTS gameplay, mobile and PC play, no-reset progression, events, Discord community, and 8.6-style PvP activity.',
      },
      {
        question: 'Can Cyleria be played on mobile?',
        answer:
          'The official FAQ and public Discord discovery text reference smartphone/Android play. Players should download only from the official Cyleria site and verify current client requirements.',
      },
      {
        question: 'Does Cyleria reset?',
        answer:
          'Official and public discovery copy emphasizes stable no-reset gameplay. As with any server claim, players should verify current policy on the official site and community channels.',
      },
    ],
    relatedServerQueries: ['Poland', '8.6', 'PVP', 'mobile', 'no reset'],
  },
  cyntara: {
    slug: 'cyntara',
    path: '/cyntara',
    type: 'server',
    title: 'Cyntara Open Tibia Server Wiki and Player Research Page',
    h1: 'Cyntara: Highrate Open Tibia Server, Library, Seasons, and Player Research',
    dek: 'A reference-style Cyntara page for players comparing activity, rules, library resources, guides, achievements, seasons, and similar highrate Open Tibia servers.',
    primaryKeyword: 'Cyntara',
    keywords: ['Cyntara', 'Cyntara server', 'Cyntara OT', 'Cyntara Open Tibia', 'Cyntara highrate'],
    metaDescription:
      'Cyntara Open Tibia server wiki-style page covering activity, rules, library resources, guides, achievements, seasons, and highrate OT comparisons.',
    updatedAt: '2026-07-26',
    pageLabel: 'Server Reference',
    heroImage: {
      src: '/images/guides/cyntara-hero.png',
      alt: 'Fantasy server library and training arena representing Cyntara guides, armory, and highrate progression',
    },
    overview:
      'Cyntara is a long-running highrate Open Tibia server name with unusually strong player-research intent. People searching Cyntara are usually not looking for a definition; they want to know whether the server is active, what client or downloads are required, what the rules allow, how the season is progressing, and whether the official library provides enough depth to start intelligently.',
    cta: { label: 'View Cyntara and Similar OT Servers', href: '/' },
    facts: [
      { label: 'Category', value: 'Open Tibia server' },
      { label: 'Known for', value: 'Highrate gameplay, library guides, custom systems' },
      { label: 'User intent', value: 'Check activity, rules, client download, guides, and current season details' },
      { label: 'Research strength', value: 'Official library, wiki, armory, achievements, patch notes, and activity signals' },
    ],
    infobox: [
      { label: 'Primary topic', value: 'Cyntara Open Tibia server' },
      { label: 'Canonical page', value: 'opentibiaservers.com/cyntara' },
      { label: 'Research priority', value: 'Rules, library, activity, downloads, and season information' },
      { label: 'Official resources', value: 'Library, downloads, rules, server information, wiki, armory, achievements' },
      { label: 'Directory comparison', value: 'Population, uptime, points, rates, PvP type, launch/season context' },
    ],
    timeline: [
      {
        date: '2009-2026',
        title: 'Long-running server identity',
        text:
          'Cyntara presents itself with a long operational history, which makes it a stronger research target than a short-lived launch listing.',
      },
      {
        date: 'Current season',
        title: 'Season activity and patch cadence matter',
        text:
          'The official library surfaces season age, recent posts, patch notes, online players, and activity messages, giving players more context than a raw server-list row.',
      },
      {
        date: 'Player onboarding',
        title: 'Library-driven learning loop',
        text:
          'Downloads, rules, server information, game guides, wiki pages, armory entries, achievements, and newcomer resources create a structured path for new players.',
      },
    ],
    evergreenAngles: [
      'How to evaluate a highrate OT server before investing time.',
      'Why official libraries and rules pages matter as trust signals.',
      'How live directory data complements official server resources.',
      'Why season age, patch notes, guides, achievements, and armory depth are stronger signals than a one-line server name.',
    ],
    glossary: [
      {
        term: 'Highrate',
        definition:
          'A server style with faster progression than lowrate or old-school worlds. For Cyntara-style research, players should compare experience rate, rebirth or late-game systems, PvP pressure, and seasonal pacing.',
      },
      {
        term: 'Server library',
        definition:
          'A structured collection of official resources such as rules, downloads, server information, guides, wiki pages, achievements, and equipment references.',
      },
      {
        term: 'Season age',
        definition:
          'A signal for how far the current competitive cycle has progressed. Newer seasons can be easier to enter; older seasons may have more established players and economy.',
      },
      {
        term: 'Armory',
        definition:
          'A server-specific equipment reference that helps players understand item progression, relative strength, and what long-term goals exist beyond leveling.',
      },
    ],
    sourceLinks: [
      { label: 'Cyntara Library', href: 'https://cyntara.org/library' },
      { label: 'Cyntara Downloads', href: 'https://cyntara.org/library/downloads' },
      { label: 'Cyntara Rules', href: 'https://cyntara.org/library/rules' },
      { label: 'Cyntara Home', href: 'https://cyntara.org/?subtopic=createaccount' },
      { label: 'Cyntara Wiki', href: 'https://wiki.cyntara.org/' },
    ],
    researchNotes: [
      {
        label: 'Live official-site signals',
        value:
          'Cyntara official pages expose online count, capacity, peak, uptime, season age, country, downloads, Android client messaging, recent patch notes, top players, server activity, and guide navigation.',
      },
      {
        label: '2026 season context',
        value:
          'The Cyntara home page references Cyntara v19 as a Summer 2026 update with a July 10, 2026 launch, Android client support, rendering improvements, UI scaling, vBot support, side action bars, and progression updates.',
      },
      {
        label: 'Rule depth',
        value:
          'The official rules page covers harassment, illegal advertising, real-money trading, bug abuse, staff impersonation, and bug-report expectations, which makes rules a major trust signal for the page.',
      },
      {
        label: 'Player knowledge base',
        value:
          'The Cyntara Wiki presents itself as a player-made knowledge base that supplements official guides, with topics including beginners guides, quests, hunting guides, artifacts, rebirth, addons, bosses, dungeons, and voids.',
      },
    ],
    mediaLeads: [
      {
        label: 'Cyntara gameplay/interface screenshot source',
        href: 'https://wiki.cyntara.org/books/quests/page/lv-200-alchemy-101',
        note:
          'Public Cyntara Wiki quest page with an in-game interface screenshot showing client UI, backpack, skills, hotkeys, and chat context.',
      },
      {
        label: 'Cyntara Ferumbras Tower screenshot source',
        href: 'https://wiki.cyntara.org/books/quests/page/lv-800-ferumbras-tower',
        note:
          'Public Cyntara Wiki quest page with an in-game endgame quest screenshot and portal encounter context.',
      },
      {
        label: 'Cyntara Wiki media hub',
        href: 'https://wiki.cyntara.org/',
        note:
          'Useful media and guide source for future rights-aware screenshot curation and attribution.',
      },
    ],
    sections: [
      {
        eyebrow: 'Server Research',
        heading: 'What players should check before joining Cyntara',
        body: [
          'Cyntara search intent is usually practical: players want the current population, client download, rules, guides, active season information, and whether the server has enough community depth to justify starting.',
          'The official Cyntara library is a useful signal because it organizes rules, guides, server information, equipment, achievements, and other player-facing resources.',
          'That level of official documentation matters because highrate servers can otherwise feel opaque. A player should be able to answer basic questions before logging in: how progression works, what behavior is punished, where to download the client, what systems exist after the early levels, and where active players gather.',
        ],
      },
      {
        eyebrow: 'Trust Signals',
        heading: 'Why Cyntara has stronger research signals than a thin listing',
        body: [
          'A raw listing can show players online, maximum capacity, uptime, points, rates, and PvP type. Those are useful discovery signals, but they do not explain the experience.',
          'Cyntara adds a library layer: downloads, server rules, server information, guides, miscellaneous systems, community wiki, armory, achievements, newcomer material, highscores, deaths, guilds, and recent posts. For a directory page, those are the kinds of signals worth preserving because they answer user intent after the initial click.',
        ],
      },
      {
        eyebrow: 'Player Fit',
        heading: 'Who Cyntara is most likely to fit',
        body: [
          'Cyntara is most relevant for players who want a highrate server with enough documentation to learn custom systems without relying entirely on word of mouth.',
          'It may be less ideal for players looking for slow, lowrate permanence or strict old-school minimalism. Those players should compare Cyntara against real-map, 7.4, 8.0, or 8.6 servers in the broader OpenTibiaServers.com directory.',
        ],
      },
      {
        eyebrow: 'How To Compare',
        heading: 'How to compare Cyntara against other popular OT servers',
        body: [
          'Start with live population and uptime, then compare the official resource depth. A server with active patch notes, rules, guides, community pages, and visible player activity is easier to evaluate than a server with only a login IP.',
          'For highrate players, the strongest comparison points are experience rate, PvP environment, season age, update cadence, custom systems, late-game itemization, Discord or forum activity, and whether new players have a credible path to catch up.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Cyntara a highrate Open Tibia server?',
        answer:
          'Yes. Cyntara is commonly researched as a highrate Open Tibia server, and players should evaluate it by progression speed, current season state, rules, library resources, and active population.',
      },
      {
        question: 'What makes Cyntara easier to research than many OT servers?',
        answer:
          'Cyntara has official player-facing resources such as downloads, rules, server information, game guides, wiki material, armory references, achievements, and recent posts. These help players understand the server beyond a raw listing row.',
      },
      {
        question: 'What should I check before starting on Cyntara?',
        answer:
          'Check current online players, uptime, season age, client download requirements, rules, server information, guides, recent posts, Discord or community activity, and whether the highrate pacing matches your play style.',
      },
    ],
    relatedServerQueries: ['Highrate', 'FUN', 'USA', 'n/a'],
  },
  evolunia: {
    slug: 'evolunia',
    path: '/evolunia',
    type: 'server',
    title: 'Evolunia Open Tibia Server Wiki and Player Research Page',
    h1: 'Evolunia: Fun Evo PVPe Server, Rules, Activity, and Player Research',
    dek: 'A wiki-style Evolunia reference page for players researching rules, client version, online activity, progression fit, community expectations, and similar Open Tibia servers.',
    primaryKeyword: 'Evolunia',
    keywords: ['Evolunia', 'Evolunia server', 'Evolunia OT', 'Evolunia Open Tibia'],
    metaDescription:
      'Evolunia Open Tibia server reference covering rules, client, online activity, PVPe identity, player intent, and similar OT server comparisons.',
    updatedAt: '2026-07-26',
    pageLabel: 'Server Reference',
    heroImage: {
      src: '/images/guides/evolunia-hero.png',
      alt: 'Floating fantasy citadel and magical progression grounds representing Evolunia Open Tibia server research',
    },
    overview:
      'Evolunia is a popular Open Tibia server keyword with clear player intent around rules, client version, online activity, PVPe gameplay, and long-term community fit. A useful Evolunia page needs to do more than say that the server exists; it should help players understand what to verify, how to compare it, and how the official rules shape the playing environment.',
    cta: { label: 'Compare Evolunia Alternatives', href: '/' },
    facts: [
      { label: 'Category', value: 'Open Tibia server' },
      { label: 'Research focus', value: 'Rules, community fit, similar OT servers' },
      { label: 'Client signal', value: 'Official site references client 10.98' },
      { label: 'Listing signal', value: 'otservlist has listed Evolunia as Fun Evo PVPe with active online players' },
    ],
    infobox: [
      { label: 'Primary topic', value: 'Evolunia Open Tibia server' },
      { label: 'Canonical page', value: 'opentibiaservers.com/evolunia' },
      { label: 'Research priority', value: 'Rules, community fit, activity, and similar servers' },
      { label: 'Official site signals', value: 'Rules, downloads, characters, online list, highscores, market, guilds, spells, commands, FAQ' },
      { label: 'Directory comparison', value: 'Players online, uptime, rate, PvP type, version, country/source listing' },
    ],
    timeline: [
      {
        date: 'Ongoing server era',
        title: 'Evolunia becomes a recognizable Fun Evo keyword',
        text:
          'Evolunia is searched as a named OT server rather than a generic category, which means the page should preserve server-specific context and source links.',
      },
      {
        date: 'January 14, 2024',
        title: 'Client update notice appears on the official site',
        text:
          'The official rules page includes a notice about a major client update released on January 14, 2024, reminding players to download the updated client.',
      },
      {
        date: 'Current listing context',
        title: 'Live-list data provides activity context',
        text:
          'otservlist has shown Evolunia with Fun Evo PVPe positioning, client/version context, uptime, and live population, making it a good candidate for exact-match directory coverage.',
      },
    ],
    evergreenAngles: [
      'How rules shape the long-term server experience.',
      'Why players compare server identity before choosing where to play.',
      'How to use live listing data alongside official server information.',
      'Why exact-match server pages should preserve official-site context, activity signals, and player decision criteria.',
    ],
    glossary: [
      {
        term: 'Fun Evo',
        definition:
          'A faster, custom-progression Open Tibia style where players usually expect accelerated leveling, custom systems, and a more active late-game loop than strict old-school servers.',
      },
      {
        term: 'PVPe',
        definition:
          'A PvP-oriented environment commonly used in OT listings to describe servers where player conflict and enhanced progression can coexist.',
      },
      {
        term: 'Multiclient rule',
        definition:
          'A server rule limiting or controlling how many clients one person can use. Evolunia rules reference a limit and prohibit using multiclients to kill players.',
      },
      {
        term: 'Client version',
        definition:
          'The required game client version for connecting. Evolunia official site context references client 10.98, while players should always verify current requirements before downloading.',
      },
    ],
    sourceLinks: [
      { label: 'Evolunia Rules', href: 'https://evolunia.net/?subtopic=rules' },
      { label: 'Evolunia official website', href: 'https://evolunia.net/' },
      { label: 'Evolunia OTLand thread', href: 'https://otland.net/threads/germany-10-98-evolunia.255188/' },
      { label: 'otservlist Sweden listing context', href: 'https://www.sweden.otservlist.org/' },
    ],
    researchNotes: [
      {
        label: 'Official rules',
        value:
          'Evolunia rules prohibit real-money or cross-server trading, channel spam, killing players with multiclients, and exceeding the listed multiclient limit. The rules also reserve broad staff enforcement authority.',
      },
      {
        label: 'Official update history',
        value:
          'The Evolunia home page has referenced a 2026 website update improving guild kills, character pages, spells, market history, wiki item redirects, and other player-facing systems.',
      },
      {
        label: 'Navigation depth',
        value:
          'The official site exposes player-facing areas such as characters, online list, highscores, experience history, power gamers, market, kills, guilds, support, spells, commands, FAQ, downloads, and server information.',
      },
      {
        label: 'Community media source',
        value:
          'The Evolunia OTLand thread includes public in-game screenshots and discussion, making it a useful source lead for rights-aware media curation and historical community context.',
      },
    ],
    mediaLeads: [
      {
        label: 'Evolunia OTLand screenshot thread',
        href: 'https://otland.net/threads/germany-10-98-evolunia.255188/page-8',
        note:
          'Public OTLand thread page with in-game Evolunia screenshot material and community discussion context.',
      },
      {
        label: 'Evolunia official website',
        href: 'https://evolunia.net/',
        note:
          'Official source for current announcements, navigation, downloads, and server information.',
      },
    ],
    sections: [
      {
        eyebrow: 'Server Research',
        heading: 'How to evaluate Evolunia and similar servers',
        body: [
          'Evolunia-related searches usually come from players checking whether the server rules, pacing, and community environment fit their play style.',
          'Before committing time to any Open Tibia server, compare official rules, active population, uptime, update history, client requirements, and community channels.',
          'Evolunia is especially rule-sensitive because its official rules address real-money trading, spam, multiclient behavior, and staff enforcement. Those rules tell players what kind of community behavior the server is trying to protect.',
        ],
      },
      {
        eyebrow: 'Rules And Trust',
        heading: 'Why Evolunia rules are part of the search intent',
        body: [
          'Players searching for Evolunia often want reassurance before creating an account or downloading a client. Rules are a trust signal because they clarify what behavior can get punished and how strongly the staff reserves enforcement authority.',
          'For a directory page, the right approach is not to copy the rules page. It is to summarize why the rules matter, link the official source, and help players understand what to check before spending time on the server.',
        ],
      },
      {
        eyebrow: 'Activity Signals',
        heading: 'How live data should frame Evolunia',
        body: [
          'The official site exposes community navigation such as characters, online list, highscores, experience history, power gamers, market, kills, guilds, support, spells, commands, FAQ, downloads, and server information.',
          'OpenTibiaServers.com can make that easier to compare by pairing those official resources with live listing data: player count, uptime, version, rates, points, PvP type, and source history.',
        ],
      },
      {
        eyebrow: 'Player Fit',
        heading: 'Who Evolunia is most likely to fit',
        body: [
          'Evolunia is most relevant for players looking for a Fun Evo or PVPe-style server with active progression, visible community systems, and an established named identity.',
          'Players looking for slow, lowrate, roleplay-heavy, or highly traditional old-school Tibia should compare Evolunia against servers tagged by client version, lower rates, real-map design, or classic PvP rules.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is Evolunia?',
        answer:
          'Evolunia is an Open Tibia server name commonly researched by players looking for Fun Evo or PVPe-style gameplay, official rules, client/download information, online activity, and similar servers.',
      },
      {
        question: 'What client does Evolunia use?',
        answer:
          'The official Evolunia site context references client 10.98. Players should verify the current download and client requirement directly on the official site before installing anything.',
      },
      {
        question: 'What rules should Evolunia players check first?',
        answer:
          'Check rules around real-money trading, spam, multiclient limits, using multiclients to kill players, and staff enforcement authority. These rules strongly affect community expectations.',
      },
      {
        question: 'How should I compare Evolunia to other Open Tibia servers?',
        answer:
          'Compare online count, uptime, PvP type, rates, client version, update cadence, rules, community tools, official downloads, and whether the Fun Evo pacing fits your goals.',
      },
    ],
    relatedServerQueries: ['Highrate', 'FUN', 'PvP'],
  },
  otmadness: {
    slug: 'otmadness',
    path: '/otmadness',
    type: 'server',
    title: 'OTMadness Open Tibia Server Wiki and High-EXP Research Page',
    h1: 'OTMadness: High-EXP FUN Server, Activity Signals, and Player Research',
    dek: 'A reference-style OTMadness page for players researching high-EXP gameplay, official play links, live listing signals, community activity, and similar OT servers.',
    primaryKeyword: 'OTMadness',
    keywords: ['OTMadness', 'OTMadness server', 'OTMadness OT', 'OTMadness Open Tibia'],
    metaDescription:
      'OTMadness Open Tibia server reference covering high-EXP FUN gameplay, official play links, live activity signals, and similar OT server comparisons.',
    updatedAt: '2026-07-26',
    pageLabel: 'Server Reference',
    heroImage: {
      src: '/images/guides/otmadness-hero.png',
      alt: 'Fantasy tournament arena and portal hub representing OTMadness high-EXP Open Tibia server activity',
    },
    overview:
      'OTMadness is a high-intent Open Tibia server keyword associated with high-EXP or FUN-style gameplay. A useful OTMadness page should help players verify the official site, compare live listing signals, understand the appeal of fast progression, and find similar servers when the current population, launch timing, or rules do not match their goals.',
    cta: { label: 'Find High-EXP OT Servers', href: '/' },
    facts: [
      { label: 'Category', value: 'Open Tibia server' },
      { label: 'Research focus', value: 'High-EXP gameplay, community activity, server alternatives' },
      { label: 'Official site signal', value: 'Landing page references OTMadness name, versions 10.x/13.x, IP, status, rules, and agreements' },
      { label: 'Listing signal', value: 'otservlist has shown OTMadness as a high-EXP FUN listing with strong online-count visibility' },
    ],
    infobox: [
      { label: 'Primary topic', value: 'OTMadness Open Tibia server' },
      { label: 'Canonical page', value: 'opentibiaservers.com/otmadness' },
      { label: 'Research priority', value: 'High-EXP gameplay, activity signals, Discord presence, and alternatives' },
      { label: 'Official resource type', value: 'Landing page, play entry, agreements, rules, privacy policy' },
      { label: 'Directory comparison', value: 'Players online, max players, uptime, points, EXP rate, PvP type, version' },
    ],
    timeline: [
      {
        date: 'High-EXP discovery era',
        title: 'OTMadness becomes a fast-progression search term',
        text:
          'Players search OTMadness when they want a named high-EXP option instead of a generic list of FUN servers.',
      },
      {
        date: 'Current official context',
        title: 'Official landing-page signals',
        text:
          'The OTMadness landing page presents the server name, version range, IP, status, play entry, and links to agreements, rules, and privacy policy.',
      },
      {
        date: 'Live-list comparison',
        title: 'otservlist activity context',
        text:
          'otservlist has shown OTMadness near high-EXP and FUN server discovery queries, making live population and uptime important to preserve over time.',
      },
    ],
    evergreenAngles: [
      'How high-EXP servers differ from long-term lowrate worlds.',
      'Why activity signals matter more than headline rates alone.',
      'How to compare OTMadness-style servers with other FUN or highrate OT servers.',
      'Why exact-match pages should help players verify official links before downloading or logging in.',
    ],
    glossary: [
      {
        term: 'High-EXP',
        definition:
          'A fast progression server style where experience rates are much higher than traditional lowrate worlds. Players should still check population, uptime, PvP rules, and update cadence.',
      },
      {
        term: 'FUN server',
        definition:
          'An OT listing category often associated with custom systems, accelerated gameplay, events, and less traditional progression than classic real-map servers.',
      },
      {
        term: 'Landing page',
        definition:
          'A short official entry page that points players toward play access, rules, agreements, privacy policy, status, and basic version or IP information.',
      },
      {
        term: 'Activity signal',
        definition:
          'Any visible proof that a server is worth checking now: online count, uptime, recent update, Discord activity, live listing position, or current launch messaging.',
      },
    ],
    sourceLinks: [
      { label: 'OTMadness official landing page', href: 'https://otmadness.com/landing/' },
      { label: 'OTMadness Discord discovery listing', href: 'https://discord.com/servers?query=t%C3%ADbia' },
      { label: 'otservlist live listing context', href: 'https://usa.otservlist.org/' },
    ],
    researchNotes: [
      {
        label: 'Official landing signals',
        value:
          'The OTMadness landing page identifies the server name, version range, IP, online status, play entry, and links to server agreements, rules, and privacy policy.',
      },
      {
        label: 'Discord discovery signal',
        value:
          'Discord server discovery has listed OTMadness as an ancient high-EXP Open Tibia server, which supports its high-EXP/FUN research positioning and community-discovery intent.',
      },
      {
        label: 'otservlist signal',
        value:
          'otservlist listing context has shown OTMadness through login.otmadness.com with high online counts, high uptime, high point visibility, and FUN/high-EXP positioning.',
      },
      {
        label: 'Third-party archive caveat',
        value:
          'Third-party server archives can be useful for historical comparison, but they may be stale or inconsistent with current official/listing data, so the page should separate current official facts from archive context.',
      },
    ],
    mediaLeads: [
      {
        label: 'OTMadness official landing page',
        href: 'https://otmadness.com/landing/',
        note:
          'Official source for current play path, rules links, agreements, status, IP, and version range.',
      },
      {
        label: 'OTMadness Discord discovery listing',
        href: 'https://discord.com/servers?query=tibia+ot',
        note:
          'Public community discovery source with OTMadness listing, member/online signals, and splash/banner context.',
      },
      {
        label: 'otservlist OTMadness listing context',
        href: 'https://usa.otservlist.org/',
        note:
          'Public listing source for live population, uptime, points, EXP, type, and version context.',
      },
    ],
    sections: [
      {
        eyebrow: 'Server Research',
        heading: 'What OTMadness searchers usually want',
        body: [
          'OTMadness searches are typically high-intent. Players are looking for the server website, current online count, launch status, Discord activity, and whether similar high-EXP or FUN servers are active.',
          'Use live directory data to compare OTMadness against other high-EXP servers by players online, uptime, version, PvP type, and update cadence.',
          'The official landing page is important because fast-progression servers often spread through short links, Discord mentions, server lists, and community referrals. Players should verify the official domain and rules before downloading or logging in.',
        ],
      },
      {
        eyebrow: 'High-EXP Fit',
        heading: 'Why high-EXP players search OTMadness',
        body: [
          'High-EXP players usually want speed, activity, and immediate goals. They are less interested in a slow historical world and more interested in whether the server has enough live population to make progression, events, PvP, and competition feel active.',
          'That means the best OTMadness page should emphasize current signals: online count, uptime, official play link, version context, rules, and alternatives when the server is quiet.',
        ],
      },
      {
        eyebrow: 'Verification',
        heading: 'How to verify OTMadness before playing',
        body: [
          'Start from the official landing page, then compare the listing data against the directory record. Confirm the domain, IP, status, rules, agreements, privacy policy, client/version notes, and community channel before installing anything.',
          'For any high-EXP server, avoid judging by rate alone. A huge EXP number does not answer whether the server has real activity, fair rules, stable uptime, and a meaningful late-game loop.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is OTMadness?',
        answer:
          'OTMadness is an Open Tibia server name commonly researched by players looking for high-EXP or FUN-style gameplay, official play links, live activity, and similar fast-progression servers.',
      },
      {
        question: 'What should I verify before playing OTMadness?',
        answer:
          'Verify the official domain, IP or play link, status, rules, agreements, privacy policy, client/version requirements, and live listing activity before downloading or logging in.',
      },
      {
        question: 'How should I compare OTMadness with other high-EXP servers?',
        answer:
          'Compare online count, uptime, max population, EXP rate, PvP type, client version, update cadence, Discord or community activity, and whether the server has enough late-game depth.',
      },
    ],
    relatedServerQueries: ['FUN', 'High EXP', 'OTMadness'],
  },
};

export function getCuratedPage(slug) {
  return curatedPages[slug] || null;
}

export function getCuratedPages() {
  return Object.values(curatedPages);
}

export function buildCuratedJsonLd(page) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.h1,
      description: page.metaDescription,
      datePublished: page.publishedAt || page.updatedAt,
      dateModified: page.updatedAt,
      mainEntityOfPage: buildAbsoluteUrl(page.path),
      image: page.heroImage ? buildAbsoluteUrl(page.heroImage.src) : undefined,
      articleSection: page.type === 'resource' ? 'Open Tibia Resources' : undefined,
      citation: page.sourceLinks?.map((source) => source.href),
      isPartOf: {
        '@type': 'WebSite',
        name: 'OpenTibiaServers.com',
        url: buildAbsoluteUrl('/'),
      },
      about: page.keywords?.slice(0, 8).map((keyword) => ({
        '@type': 'Thing',
        name: keyword,
      })),
      author: {
        '@type': 'Organization',
        name: 'OpenTibiaServers.com',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Open Tibia Servers', item: buildAbsoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: page.primaryKeyword, item: buildAbsoluteUrl(page.path) },
      ],
    },
    page.faqs?.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: page.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null,
    page.glossary?.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'DefinedTermSet',
          name: `${page.primaryKeyword} glossary`,
          hasDefinedTerm: page.glossary.map((entry) => ({
            '@type': 'DefinedTerm',
            name: entry.term,
            description: entry.definition,
          })),
        }
      : null,
  ].filter(Boolean);
}
