import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-spells');
}

export default function XanteriaSpellsKeywordPage() {
  return <StaticKeywordPage slug="xanteria-spells" />;
}
