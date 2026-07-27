import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-active-players-server-france');
}

export default function XanteriaWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-active-players-server-france" />;
}
