import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-active-players-server-uk');
}

export default function XanteriaWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-active-players-server-uk" />;
}
