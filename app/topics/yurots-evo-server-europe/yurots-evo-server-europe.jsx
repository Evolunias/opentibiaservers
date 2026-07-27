import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-europe');
}

export default function YurotsEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-europe" />;
}
