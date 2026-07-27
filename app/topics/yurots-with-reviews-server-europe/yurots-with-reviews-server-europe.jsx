import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-reviews-server-europe');
}

export default function YurotsWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-reviews-server-europe" />;
}
