import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-active-players-server-poland');
}

export default function XanteriaWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-active-players-server-poland" />;
}
