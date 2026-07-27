import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-reviews-server-europe');
}

export default function XanteriaWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-reviews-server-europe" />;
}
