import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-uk');
}

export default function XanteriaEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-uk" />;
}
