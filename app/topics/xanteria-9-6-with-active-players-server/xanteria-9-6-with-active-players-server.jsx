import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-with-active-players-server');
}

export default function Xanteria96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-with-active-players-server" />;
}
