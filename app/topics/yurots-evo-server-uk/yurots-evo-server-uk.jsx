import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-uk');
}

export default function YurotsEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-uk" />;
}
