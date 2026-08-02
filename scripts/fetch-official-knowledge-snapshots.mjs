import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(projectRoot, 'data', 'knowledge-source');
const apiRoot = (process.env.TIBIADATA_API_ROOT || 'https://api.tibiadata.com/v4').replace(/\/+$/, '');
const concurrency = Math.min(16, Math.max(1, Number(process.env.KNOWLEDGE_FETCH_CONCURRENCY) || 8));

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function fetchJson(pathname, attempts = 3) {
  const url = `${apiRoot}/${pathname.replace(/^\/+/, '')}`;
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: 'application/json',
          'user-agent': 'OpenTibiaServersKnowledge/1.0 (+https://opentibiaservers.com/contact)',
        },
        signal: AbortSignal.timeout(30000),
      });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await sleep(400 * attempt);
    }
  }

  throw new Error(`${url}: ${lastError?.message || 'request failed'}`);
}

async function fetchJsonOptional(pathname) {
  try {
    return await fetchJson(pathname, 2);
  } catch (error) {
    return { fetchError: error.message };
  }
}

async function concurrentMap(values, mapper) {
  const results = new Array(values.length);
  let cursor = 0;
  let completed = 0;

  async function worker() {
    while (cursor < values.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(values[index], index);
      completed += 1;
      if (completed % 50 === 0 || completed === values.length) {
        process.stdout.write(`Fetched ${completed}/${values.length} official records.\n`);
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, values.length) }, worker));
  return results;
}

function decodeEntities(value) {
  return String(value || '')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([a-f0-9]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function cleanObject(value) {
  if (Array.isArray(value)) return value.map(cleanObject);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.entries(value)
      .filter(([, entry]) => entry !== undefined)
      .map(([key, entry]) => [key, cleanObject(entry)]),
  );
}

async function fetchSpells() {
  const listResponse = await fetchJson('spells');
  const list = listResponse.spells?.spell_list || [];
  const records = await concurrentMap(list, async (summary) => {
    const response = await fetchJsonOptional(`spell/${encodeURIComponent(summary.spell_id)}`);
    const spell = response.spell || {};
    const information = spell.spell_information || {};
    const rune = spell.rune_information || {};
    return cleanObject({
      name: decodeEntities(spell.name || summary.name),
      spellId: summary.spell_id,
      formula: information.formula || summary.formula || '',
      vocations: information.vocation || [],
      group: (information.group_attack ?? summary.group_attack) ? 'attack' : (information.group_healing ?? summary.group_healing) ? 'healing' : 'support',
      type: (information.type_rune ?? summary.type_rune) ? 'rune' : 'instant',
      damageType: information.damage_type || '',
      cooldownSeconds: information.cooldown_alone ?? null,
      groupCooldownSeconds: information.cooldown_group ?? null,
      soulPoints: information.soul_points ?? null,
      amount: information.amount ?? null,
      level: information.level ?? summary.level ?? null,
      mana: information.mana ?? summary.mana ?? null,
      price: information.price ?? summary.price ?? null,
      cities: information.city || [],
      premium: information.premium_only ?? summary.premium_only ?? false,
      hasRuneInformation: Boolean(spell.has_rune_information),
      rune: spell.has_rune_information ? {
        vocations: rune.vocation || [],
        group: rune.group_attack ? 'attack' : rune.group_healing ? 'healing' : 'support',
        damageType: rune.damage_type || '',
        level: rune.level ?? null,
        magicLevel: rune.magic_level ?? null,
      } : null,
      officialUrl: response.information?.tibia_urls?.[0] || `https://www.tibia.com/library/?subtopic=spells&spell=${summary.spell_id}`,
      observedAt: response.information?.timestamp || listResponse.information?.timestamp,
      detailAvailable: Boolean(response.spell),
    });
  });

  return {
    source: 'Official Tibia spell library via TibiaData v4 transport',
    officialIndexUrl: 'https://www.tibia.com/library/?subtopic=spells',
    observedAt: listResponse.information?.timestamp,
    api: listResponse.information?.api,
    count: records.length,
    records,
  };
}

async function fetchCreatures() {
  const listResponse = await fetchJson('creatures');
  const list = listResponse.creatures?.creature_list || [];
  const records = await concurrentMap(list, async (summary) => {
    const response = await fetchJsonOptional(`creature/${encodeURIComponent(summary.race)}`);
    const creature = response.creature || {};
    return cleanObject({
      name: decodeEntities(creature.name || summary.name),
      race: summary.race,
      hitpoints: creature.hitpoints ?? null,
      experience: creature.experience_points ?? null,
      immune: (creature.immune || []).map(decodeEntities),
      strong: (creature.strong || []).map(decodeEntities),
      weakness: (creature.weakness || []).map(decodeEntities),
      healed: (creature.healed || []).map(decodeEntities),
      canBeParalysed: creature.be_paralysed ?? null,
      canBeSummoned: creature.be_summoned ?? null,
      summonMana: creature.summoned_mana ?? null,
      canBeConvinced: creature.be_convinced ?? null,
      convinceMana: creature.convinced_mana ?? null,
      seesInvisible: creature.see_invisible ?? null,
      lootable: creature.is_lootable ?? null,
      loot: (creature.loot_list || []).map(decodeEntities),
      featured: creature.featured ?? summary.featured ?? false,
      officialUrl: response.information?.tibia_urls?.[0] || `https://www.tibia.com/library/?subtopic=creatures&race=${summary.race}`,
      observedAt: response.information?.timestamp || listResponse.information?.timestamp,
      detailAvailable: Boolean(response.creature),
    });
  });

  return {
    source: 'Official Tibia creature library via TibiaData v4 transport',
    officialIndexUrl: 'https://www.tibia.com/library/?subtopic=creatures',
    observedAt: listResponse.information?.timestamp,
    api: listResponse.information?.api,
    count: records.length,
    records,
  };
}

async function writeJson(name, value) {
  await writeFile(path.join(outputRoot, name), `${JSON.stringify(value)}\n`, 'utf8');
}

await mkdir(outputRoot, { recursive: true });
const [spells, creatures] = await Promise.all([fetchSpells(), fetchCreatures()]);
await Promise.all([
  writeJson('official-spells.json', spells),
  writeJson('official-creatures.json', creatures),
]);
process.stdout.write(`Saved ${spells.count} official spell and ${creatures.count} official creature fact profiles.\n`);
