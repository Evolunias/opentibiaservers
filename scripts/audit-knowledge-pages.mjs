import { knowledgeEntities } from '../lib/knowledge-base.js';

const requiredFields = ['slug', 'entityType', 'name', 'canonicalPath', 'summary'];
let failures = 0;

for (const entity of knowledgeEntities) {
  const missing = requiredFields.filter((field) => !entity[field]);
  if (missing.length) {
    failures += 1;
    console.error(`${entity.slug || entity.name || 'unknown'} missing required fields: ${missing.join(', ')}`);
  }

  if (!Array.isArray(entity.sources) || entity.sources.length === 0) {
    failures += 1;
    console.error(`${entity.slug} has no source references`);
  }

  if (!Array.isArray(entity.facts) || entity.facts.length === 0) {
    failures += 1;
    console.error(`${entity.slug} has no structured facts`);
  }

  const sourceBrandPattern = new RegExp(`\\b(?:${['Tibia', 'Wiki'].join('')}|${['Fan', 'dom'].join('')})\\b`, 'i');
  if (sourceBrandPattern.test(`${entity.summary} ${JSON.stringify(entity.sections || [])}`)) {
    failures += 1;
    console.error(`${entity.slug} contains source-brand wording in visible editorial copy`);
  }
}

if (failures > 0) {
  console.error(`Knowledge audit failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log(`Knowledge audit passed for ${knowledgeEntities.length} entities.`);
