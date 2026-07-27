import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-shop');
}

export default function XanteriaShopKeywordPage() {
  return <StaticKeywordPage slug="xanteria-shop" />;
}
