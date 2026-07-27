import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-usa');
}

export default function XanteriaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-usa" />;
}
