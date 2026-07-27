import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-europe');
}

export default function YurotsWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-europe" />;
}
