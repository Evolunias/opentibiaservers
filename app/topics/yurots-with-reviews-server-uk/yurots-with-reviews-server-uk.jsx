import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-reviews-server-uk');
}

export default function YurotsWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-reviews-server-uk" />;
}
