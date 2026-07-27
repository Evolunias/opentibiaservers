import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-active-players-server-sweden');
}

export default function XanteriaWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-active-players-server-sweden" />;
}
