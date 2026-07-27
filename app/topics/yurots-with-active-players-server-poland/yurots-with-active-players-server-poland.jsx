import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-poland');
}

export default function YurotsWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-poland" />;
}
