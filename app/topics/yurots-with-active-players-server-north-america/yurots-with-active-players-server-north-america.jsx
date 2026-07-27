import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-north-america');
}

export default function YurotsWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-north-america" />;
}
