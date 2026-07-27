import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-players-online');
}

export default function YurotsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="yurots-players-online" />;
}
