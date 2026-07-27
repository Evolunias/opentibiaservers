import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-usa');
}

export default function YurotsWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-usa" />;
}
