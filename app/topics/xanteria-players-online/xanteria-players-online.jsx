import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-players-online');
}

export default function XanteriaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="xanteria-players-online" />;
}
