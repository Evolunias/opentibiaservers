import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-active-players-server-latin-america');
}

export default function XanteriaWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-active-players-server-latin-america" />;
}
