import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-canada');
}

export default function XanteriaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-canada" />;
}
