import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-market');
}

export default function ZezeniaOnlineMarketKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-market" />;
}
