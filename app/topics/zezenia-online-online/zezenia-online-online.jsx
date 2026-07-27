import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-online');
}

export default function ZezeniaOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-online" />;
}
