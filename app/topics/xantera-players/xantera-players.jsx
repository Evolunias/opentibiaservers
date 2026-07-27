import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-players');
}

export default function XanteraPlayersKeywordPage() {
  return <StaticKeywordPage slug="xantera-players" />;
}
