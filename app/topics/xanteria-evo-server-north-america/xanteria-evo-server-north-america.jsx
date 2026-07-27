import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-north-america');
}

export default function XanteriaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-north-america" />;
}
