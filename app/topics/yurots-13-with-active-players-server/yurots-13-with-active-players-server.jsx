import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-with-active-players-server');
}

export default function Yurots13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-with-active-players-server" />;
}
