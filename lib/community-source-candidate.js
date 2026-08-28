const GENERIC_IDENTITIES = new Set([
  'game',
  'global',
  'international',
  'light',
  'login',
  'pvpenforced',
  'whatif',
]);

const MANUAL_REJECTIONS = [
  {
    canonical: 'darghos',
    url: 'https://opentibiaservers.com/',
    reason: 'conflicting_primary_brand: the advertised server is Elerian; Darghos is not the primary identity',
  },
  {
    canonical: 'eloth',
    url: 'https://opentibiaservers.com/',
    reason: 'identity_is_team_credit: the advertised server is Askara RPG; Eloth appears only as the team name',
  },
  {
    canonical: 'yurots',
    url: 'https://opentibiaservers.com/',
    reason: 'conflicting_primary_brand: the advertised server is Tibinha; YurOTS identifies the map/base',
  },
  {
    canonical: 'guia3d',
    url: 'https://opentibiaservers.com/',
    reason: 'conflicting_primary_brand: the advertised server is Atrapado; Guia3D is a platform/base reference',
  },
  {
    canonical: 'tibiaot',
    url: 'https://opentibiaservers.com/',
    reason: 'conflicting_primary_brand: the warning is about Dovux; TibiaOT is used as a generic category',
  },
  {
    canonical: 'dexsoft',
    url: 'https://opentibiaservers.com/',
    reason: 'otservlist_support_request: this asks for a listing unban and does not describe gameplay or player experience',
  },
  {
    canonical: 'pbotwars',
    url: 'https://opentibiaservers.com/',
    reason: 'conflicting_primary_brand: the post cites pbotwars.com.br only to distinguish it from the server advertised by this thread',
  },
];

const DEVELOPMENT_OR_SUPPORT_RULES = [
  ['aac_or_theme_resource', /\b(?:myaac|znote\s*aac|aac|theme|template|webdesign)\b/i],
  ['development_resource', /\b(?:lua|tfs(?:\s*1\.?x)?|gesior|datapack|source\s*code|compilat(?:e|ion)|database|mysql|distro|apk)\b/i],
  ['art_or_mapping_resource', /\b(?:mapper|mapping|layout|sprite|wallpaper|gallery)\b/i],
  ['hosting_request', /\b(?:hoster|need\s+(?:a\s+)?hoster|vps\b.*\bhelp)\b/i],
  ['staff_recruitment', /\b(?:recruitment|looking\s+for\s+(?:a\s+)?(?:mapper|developer|content\s+editor)|seeking\s+(?:core\s+)?developers|searching\s+for\s+(?:a\s+)?(?:good\s+)?team)\b/i],
  ['alternative_server_request', /\b(?:server|ot|ots)\s+like\s+[a-z0-9_-]+|\blike\s+[a-z0-9_-]+\s+but\s+with\b/i],
  ['technical_support', /\b(?:black\s+screen|need\s+your\s+help|asks?\s+for|setting\s+tibia|help\s+for)\b/i],
  ['hardware_or_development_experiment', /\b(?:nintendo\s+dsi|petit\s+computer\s+app)\b/i],
  ['trade_or_sale', /\b(?:selling|trade\s+my|shadowcores?\s*(?:>|for)|items?\s+for\s+shadowcore|gold\s+for\s+sale)\b/i],
  ['server_files_or_base', /\b(?:tic[ -]?tac[ -]?war\s+base|server\s+base|download\s+all\s+files|distribution)\b/i],
  ['release_or_download_resource', /^\s*\(?release\)?\b|\bdownload\s+all\s+files\b/i],
];

const COMMUNITY_RULES = [
  ['community_warning', /\b(?:spoof(?:ing)?|scam|warning|false\s+players?|false\s+training|safe\?|false\s+positives?|detections?)\b/i],
  ['community_experience', /\b(?:anyone\s+playing|worth\s+playing|my\s+experience|player\s+experience|review(?:s|ed)?|what\s+happened\s+to)\b/i],
  ['community_incident', /\b(?:hacked|hackeado|banned)\b/i],
  ['community_status_question', /\b(?:still\s+online|online\?)\b/i],
  ['community_rules_question', /\b(?:how\s+many\s+mcs?|multi[- ]?client|server\s+rules?)\b/i],
];

const LOCATION_TAG = /\[(?:brazil|br|poland|usa|u\.s\.a\.|us|france|germany|ger|sweden|canada|mexico|uk|europe|netherlands|switzerland|australia|norway|spain|chile|ca)\]/i;
const VERSION_SIGNAL = /(?:^|[^0-9])(?:7|8|9|10|11|12|13|14|15)(?:\.\d{1,2}|\+)(?:[^0-9]|$)/i;
const SERVER_SIGNAL = /\b(?:open\s*tibia|ot\s*server|ots?|server|warserver|rpg|pvp|non[ -]?pvp|real\s*map|worldmap|custom\s*map|custom|global|evo|evolution|low[ -]?rate|high[ -]?rate|oldschool|tibia\s+network|project)\b/i;
const LAUNCH_SIGNAL = /\b(?:launch|relaunch|start(?:s|ed|ing)?|open(?:ing)?|open\s+beta|online|dedicated|reactivation|returns?|come[ -]?back|official\s+discussion|beta\s+server|test\s+server|updated|remake)\b/i;

function compact(value = '') {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function escapeRegex(value = '') {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function identityPattern(value = '') {
  const normalized = compact(value);
  if (normalized.length < 4) return null;
  const characters = [...normalized].map(escapeRegex).join('[^a-z0-9]*');
  return new RegExp(`(^|[^a-z0-9])${characters}(?=$|[^a-z0-9])`, 'i');
}

function identityLabels(server = {}) {
  const rootLabel = String(server.root_domain || '').split('.')[0];
  return [...new Set([server.name, rootLabel]
    .map((value) => String(value || '').trim())
    .filter((value) => compact(value).length >= 4))];
}

function matchedIdentityLabels(title, server) {
  return identityLabels(server).filter((label) => identityPattern(label)?.test(title));
}

function rejected(item, score, matchedLabels, rejectionReasons, evidence = []) {
  return {
    ...item,
    role: 'rejected',
    score,
    accepted: false,
    classification: 'rejected',
    matched_identity_labels: matchedLabels,
    evidence,
    rejection_reasons: rejectionReasons,
  };
}

export function classifycommunity_archiveCandidate(item = {}, server = {}) {
  const title = String(item.title || '').replace(/\s+/g, ' ').trim();
  const text = `${title} ${item.snippet || ''}`.trim();
  const matchedLabels = matchedIdentityLabels(title, server);
  const canonicalIdentity = compact(server.name || server.root_domain?.split('.')[0]);
  const rootDomain = String(server.root_domain || '').toLowerCase().replace(/^www\./, '');
  const exactRootDomain = rootDomain.includes('.')
    && String(item.snippet || '').toLowerCase().replace(/^www\./, '').includes(rootDomain);
  const evidence = [];
  let score = 0;

  if (!matchedLabels.length && !exactRootDomain) {
    return rejected(item, -100, [], ['identity_not_exact: the canonical brand is not a standalone title phrase']);
  }
  if (matchedLabels.length) {
    evidence.push('exact_canonical_brand');
    score += 20;
  }
  if (exactRootDomain) {
    evidence.push('exact_root_domain_in_post');
    score += 30;
  }

  if (GENERIC_IDENTITIES.has(canonicalIdentity) && !exactRootDomain) {
    return rejected(item, -80, matchedLabels, ['generic_identity_collision: the listing name is too generic to establish that this thread is about the same server'], evidence);
  }

  const knownRejection = MANUAL_REJECTIONS.find((entry) => (
    entry.canonical === canonicalIdentity && entry.url === item.url
  ));
  if (knownRejection) {
    return rejected(item, -70, matchedLabels, [knownRejection.reason], evidence);
  }

  for (const [reason, pattern] of DEVELOPMENT_OR_SUPPORT_RULES) {
    if (pattern.test(text)) {
      return rejected(item, -60, matchedLabels, [`${reason}: not a server profile or player-experience source`], evidence);
    }
  }

  const hasLocation = LOCATION_TAG.test(title);
  const hasVersion = VERSION_SIGNAL.test(title);
  const hasServerSignal = SERVER_SIGNAL.test(title);
  const hasLaunchSignal = LAUNCH_SIGNAL.test(title);
  const forumKnown = Boolean(String(item.forum || '').trim());
  const isServerGala = /server\s+gala/i.test(String(item.forum || ''));

  if (hasLocation) {
    evidence.push('server_gala_location_tag');
    score += 8;
  }
  if (hasVersion) {
    evidence.push('client_version');
    score += 5;
  }
  if (hasServerSignal) {
    evidence.push('server_profile_language');
    score += 5;
  }
  if (hasLaunchSignal) {
    evidence.push('launch_or_status_language');
    score += 5;
  }

  const mapOnlyResource = !hasLocation
    && !hasLaunchSignal
    && /\b(?:map|base)\s*[.!~]*$/i.test(title)
    && !/\b(?:worldmap|custom\s+map|real\s+map)\b/i.test(title);
  if (mapOnlyResource) {
    return rejected(item, -50, matchedLabels, ['map_or_base_resource: the title describes an asset rather than a server profile'], evidence);
  }

  const strongOwnerLaunch = (!forumKnown || isServerGala) && (
    (exactRootDomain && isServerGala)
    ||
    (hasLocation && (hasVersion || hasServerSignal || hasLaunchSignal))
    || (hasVersion && (hasServerSignal || hasLaunchSignal))
    || (hasLaunchSignal && hasServerSignal)
    || /\b(?:server|dedicated|official\s+discussion\s+thread|tibia\s+network)\b/i.test(title)
  );

  if (strongOwnerLaunch) {
    return {
      ...item,
      role: 'owner_launch',
      score,
      accepted: true,
      classification: 'owner_launch',
      matched_identity_labels: matchedLabels,
      evidence,
      rejection_reasons: [],
    };
  }

  for (const [reason, pattern] of COMMUNITY_RULES) {
    if (pattern.test(text)) {
      return {
        ...item,
        role: 'community_discussion',
        score: score + 4,
        accepted: true,
        classification: 'community_discussion',
        matched_identity_labels: matchedLabels,
        evidence: [...evidence, reason],
        rejection_reasons: [],
      };
    }
  }

  if (/\?\s*$/.test(title) && compact(title) === canonicalIdentity) {
    return {
      ...item,
      role: 'community_discussion',
      score: score + 2,
      accepted: true,
      classification: 'community_discussion',
      matched_identity_labels: matchedLabels,
      evidence: [...evidence, 'exact_brand_question'],
      rejection_reasons: [],
    };
  }

  return rejected(item, -20, matchedLabels, ['insufficient_profile_context: exact brand match, but no launch/profile or user-experience signal'], evidence);
}

export function rankcommunity_archiveCandidates(items = [], server = {}, limit = 5) {
  return items
    .map((item) => classifycommunity_archiveCandidate(item, server))
    .sort((left, right) => {
      if (left.accepted !== right.accepted) return left.accepted ? -1 : 1;
      if (left.accepted) {
        if (left.role !== right.role) return left.role === 'owner_launch' ? -1 : 1;
        const leftGala = left.evidence?.includes('server_gala_location_tag') ? 1 : 0;
        const rightGala = right.evidence?.includes('server_gala_location_tag') ? 1 : 0;
        if (leftGala !== rightGala) return rightGala - leftGala;
        return (left.position || 999) - (right.position || 999) || right.score - left.score;
      }
      return right.score - left.score || (left.position || 999) - (right.position || 999);
    })
    .slice(0, limit);
}

export function selectcommunity_archiveCandidate(candidates = []) {
  return candidates.find((candidate) => candidate.accepted) || null;
}
