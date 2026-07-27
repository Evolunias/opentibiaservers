import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-reviews-server-north-america');
}

export default function XanteriaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-reviews-server-north-america" />;
}
