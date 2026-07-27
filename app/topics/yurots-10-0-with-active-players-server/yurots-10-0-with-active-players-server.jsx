import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-with-active-players-server');
}

export default function Yurots100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-with-active-players-server" />;
}
