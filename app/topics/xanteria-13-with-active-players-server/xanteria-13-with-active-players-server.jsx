import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-with-active-players-server');
}

export default function Xanteria13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-with-active-players-server" />;
}
