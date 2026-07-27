import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-brazil');
}

export default function YurotsWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-brazil" />;
}
