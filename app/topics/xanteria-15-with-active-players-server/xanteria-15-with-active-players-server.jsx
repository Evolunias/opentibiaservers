import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-with-active-players-server');
}

export default function Xanteria15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-with-active-players-server" />;
}
