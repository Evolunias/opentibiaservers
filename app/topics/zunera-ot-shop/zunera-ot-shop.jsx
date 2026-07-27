import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-shop');
}

export default function ZuneraOtShopKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-shop" />;
}
