import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-latin-america');
}

export default function XanteriaEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-latin-america" />;
}
