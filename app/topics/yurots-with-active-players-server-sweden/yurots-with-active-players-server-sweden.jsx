import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-sweden');
}

export default function YurotsWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-sweden" />;
}
