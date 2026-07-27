import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-active-players-server-usa');
}

export default function XanteriaWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-active-players-server-usa" />;
}
