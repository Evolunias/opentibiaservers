import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-players');
}

export default function ZaneraPlayersKeywordPage() {
  return <StaticKeywordPage slug="zanera-players" />;
}
