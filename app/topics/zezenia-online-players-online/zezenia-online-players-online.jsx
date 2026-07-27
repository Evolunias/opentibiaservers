import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-players-online');
}

export default function ZezeniaOnlinePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-players-online" />;
}
