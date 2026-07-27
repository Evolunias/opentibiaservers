import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-mexico');
}

export default function YurotsWithActivePlayersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-mexico" />;
}
