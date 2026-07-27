import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-with-active-players-server');
}

export default function Xanteria81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-with-active-players-server" />;
}
