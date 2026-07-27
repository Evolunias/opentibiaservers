import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-uk');
}

export default function YurotsWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-uk" />;
}
