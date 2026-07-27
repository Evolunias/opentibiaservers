import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-active-players-server-germany');
}

export default function XanteriaWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-active-players-server-germany" />;
}
