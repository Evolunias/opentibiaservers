import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-france');
}

export default function YurotsWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-france" />;
}
