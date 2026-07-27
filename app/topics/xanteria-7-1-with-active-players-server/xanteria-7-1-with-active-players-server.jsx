import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-1-with-active-players-server');
}

export default function Xanteria71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-1-with-active-players-server" />;
}
