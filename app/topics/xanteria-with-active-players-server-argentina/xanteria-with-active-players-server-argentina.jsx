import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-active-players-server-argentina');
}

export default function XanteriaWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-active-players-server-argentina" />;
}
