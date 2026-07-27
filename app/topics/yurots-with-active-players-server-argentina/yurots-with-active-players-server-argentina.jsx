import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-argentina');
}

export default function YurotsWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-argentina" />;
}
