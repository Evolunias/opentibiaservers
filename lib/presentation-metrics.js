function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function isFeaturedEvomanias(server = {}) {
  const haystack = [
    server.slug,
    server.name,
    server.host,
    server.ip,
    server.website_url,
    server.external_launch_url,
    server.source_url,
  ]
    .filter(Boolean)
    .map((value) => String(value).toLowerCase())
    .join(' ');

  return haystack.includes('evomanias');
}

export function deriveDisplayRating(server = {}) {
  const playersOnline = Math.max(0, toNumber(server.players_online));
  const maxPlayers = Math.max(0, toNumber(server.max_players));
  const peakPlayers = Math.max(0, toNumber(server.players_peak));

  const occupancy = maxPlayers > 0
    ? clamp(playersOnline / maxPlayers, 0, 1)
    : clamp(playersOnline / Math.max(peakPlayers || playersOnline || 1, 50), 0, 1);

  const momentum = peakPlayers > 0
    ? clamp(playersOnline / peakPlayers, 0, 1)
    : occupancy;

  const volume = clamp(playersOnline / 1000, 0, 1);
  const score = clamp((occupancy * 0.65) + (momentum * 0.2) + (volume * 0.15), 0, 1);

  return Number((3 + score * 2).toFixed(1));
}

export function deriveDisplayReviewCount(server = {}) {
  const playersOnline = Math.max(0, toNumber(server.players_online));
  const maxPlayers = Math.max(0, toNumber(server.max_players));
  const peakPlayers = Math.max(0, toNumber(server.players_peak));

  const occupancy = maxPlayers > 0
    ? clamp(playersOnline / maxPlayers, 0, 1)
    : clamp(playersOnline / Math.max(peakPlayers || playersOnline || 1, 50), 0, 1);

  const activity = clamp(playersOnline / 1500, 0, 1);
  const spread = clamp((occupancy * 0.7) + (activity * 0.3), 0, 1);

  return Math.max(1, Math.min(10, Math.round(1 + spread * 9)));
}

export function applyPresentationMetrics(server = {}) {
  return {
    ...server,
    average_rating: deriveDisplayRating(server),
    review_count: deriveDisplayReviewCount(server),
  };
}

export function prioritizeFeaturedServer(servers = []) {
  const index = servers.findIndex((server) => isFeaturedEvomanias(server));
  if (index <= 0) return servers;

  const next = [...servers];
  const [featured] = next.splice(index, 1);
  next.unshift(featured);
  return next;
}

