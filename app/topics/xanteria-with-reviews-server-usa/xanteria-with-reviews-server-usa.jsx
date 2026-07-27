import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-reviews-server-usa');
}

export default function XanteriaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-reviews-server-usa" />;
}
