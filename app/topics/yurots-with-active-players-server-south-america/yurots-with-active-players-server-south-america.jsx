import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-south-america');
}

export default function YurotsWithActivePlayersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-south-america" />;
}
