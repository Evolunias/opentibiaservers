import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-with-active-players-server');
}

export default function Yurots14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-with-active-players-server" />;
}
