import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-germany');
}

export default function YurotsWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-germany" />;
}
