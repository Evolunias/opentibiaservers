import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-shop');
}

export default function ZezeniaOnlineShopKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-shop" />;
}
