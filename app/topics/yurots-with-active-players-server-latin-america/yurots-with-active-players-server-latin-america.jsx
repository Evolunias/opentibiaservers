import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-active-players-server-latin-america');
}

export default function YurotsWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-active-players-server-latin-america" />;
}
