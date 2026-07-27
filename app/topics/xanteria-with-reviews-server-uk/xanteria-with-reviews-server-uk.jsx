import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-reviews-server-uk');
}

export default function XanteriaWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-reviews-server-uk" />;
}
