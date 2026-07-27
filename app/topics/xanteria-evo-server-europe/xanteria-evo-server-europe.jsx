import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-europe');
}

export default function XanteriaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-europe" />;
}
