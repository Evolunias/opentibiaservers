import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-vip');
}

export default function ZezeniaOnlineVipKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-vip" />;
}
