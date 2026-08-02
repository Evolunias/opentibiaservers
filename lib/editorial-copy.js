const playerFacingReplacements = [
  [/SEO-friendly exact-match pages/gi, 'clear, permanent server profiles'],
  [/SEO-friendly pages/gi, 'clear, permanent pages'],
  [/SEO-friendly server profiles/gi, 'easy-to-find server profiles'],
  [/exact-match server-name pages/gi, 'dedicated server pages'],
  [/exact-match server pages/gi, 'dedicated server pages'],
  [/exact-match directory coverage/gi, 'dedicated directory coverage'],
  [/exact-match page/gi, 'dedicated page'],
  [/exact-match/gi, 'dedicated'],
  [/modern SEO opportunity/gi, 'a richer directory opportunity'],
  [/search engine optimization/gi, 'discoverability'],
  [/\bSEO\b/g, 'discoverability'],
  [/search intent/gi, 'what players came to find'],
  [/user intent/gi, 'what players need'],
  [/high-intent/gi, 'well-known'],
  [/primary ranking target/gi, 'main subject'],
  [/thin keyword stuffing/gi, 'thin, repetitive copy'],
  [/thin keyword spam/gi, 'thin, repetitive copy'],
  [/keyword matching/gi, 'name matching'],
  [/keyword map/gi, 'topic map'],
  [/\bkeyword\b/gi, 'name'],
  [/player research/gi, 'player perspective'],
  [/source research/gi, 'source trail'],
  [/server research/gi, 'server guide'],
  [/world research/gi, 'world history'],
  [/research hub/gi, 'reference hub'],
  [/research page/gi, 'reference page'],
  [/research focus/gi, 'player focus'],
  [/research strength/gi, 'documentation strength'],
  [/research priority/gi, 'details to preserve next'],
  [/research quality/gi, 'evidence quality'],
  [/research areas/gi, 'details to explore'],
  [/research phase/gi, 'documentation phase'],
  [/\bresearching\b/gi, 'exploring'],
  [/\bresearchers\b/gi, 'community historians'],
  [/\bresearch\b/gi, 'documentation'],
  [/indexable/gi, 'permanent'],
];

function polishString(value) {
  return playerFacingReplacements.reduce(
    (result, [pattern, replacement]) => result.replace(pattern, replacement),
    value,
  );
}

const literalKeys = new Set(['href', 'path', 'src', 'url', 'canonicalPath', 'source_url', 'website_url']);

export function polishPlayerFacingCopy(value, key = '') {
  if (typeof value === 'string') return polishString(value);
  if (Array.isArray(value)) return value.map(polishPlayerFacingCopy);
  if (!value || typeof value !== 'object') return value;

  return Object.fromEntries(
    Object.entries(value).map(([entryKey, entry]) => [
      entryKey,
      literalKeys.has(entryKey) ? entry : polishPlayerFacingCopy(entry, entryKey),
    ]),
  );
}
