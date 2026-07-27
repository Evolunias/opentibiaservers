import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-1-with-active-players-server');
}

export default function Yurots81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-1-with-active-players-server" />;
}
