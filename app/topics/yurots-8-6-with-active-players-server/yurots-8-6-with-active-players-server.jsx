import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-with-active-players-server');
}

export default function Yurots86WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-with-active-players-server" />;
}
