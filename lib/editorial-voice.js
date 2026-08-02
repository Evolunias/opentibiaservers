export function stableEditorialHash(value = '') {
  let hash = 2166136261;
  for (const character of String(value)) {
    hash ^= character.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function pickEditorial(seed, salt, choices) {
  if (!Array.isArray(choices) || choices.length === 0) return '';
  const index = stableEditorialHash(`${seed}:${salt}`) % choices.length;
  return choices[index];
}

export function naturalList(values = [], fallback = 'none recorded') {
  const clean = [...new Set(values.map((value) => String(value || '').trim()).filter(Boolean))];
  if (clean.length === 0) return fallback;
  if (clean.length === 1) return clean[0];
  if (clean.length === 2) return `${clean[0]} and ${clean[1]}`;
  return `${clean.slice(0, -1).join(', ')}, and ${clean.at(-1)}`;
}

export function sentenceCount(value = '') {
  return String(value)
    .split(/[.!?]+(?:\s+|$)/)
    .map((sentence) => sentence.trim())
    .filter(Boolean)
    .length;
}

