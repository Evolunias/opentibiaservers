import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-online');
}

export default function ZuneraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-online" />;
}
