import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-canada');
}

export default function YurotsWithActivePlayersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-canada" />;
}
