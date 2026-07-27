import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-spells');
}

export default function YurotsSpellsKeywordPage() {
  return <StaticKeywordPage slug="yurots-spells" />;
}
