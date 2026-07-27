import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-active-players-server-north-america');
}

export default function XanteriaWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-active-players-server-north-america" />;
}
