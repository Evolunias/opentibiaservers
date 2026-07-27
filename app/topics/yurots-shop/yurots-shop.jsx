import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-shop');
}

export default function YurotsShopKeywordPage() {
  return <StaticKeywordPage slug="yurots-shop" />;
}
