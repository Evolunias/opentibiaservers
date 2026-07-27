import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-with-active-players-server');
}

export default function Yurots12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-with-active-players-server" />;
}
