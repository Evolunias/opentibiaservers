import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-reviews-server-latin-america');
}

export default function XanteriaWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-reviews-server-latin-america" />;
}
