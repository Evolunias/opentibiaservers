import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-players-online');
}

export default function ZuneraOtPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-players-online" />;
}
