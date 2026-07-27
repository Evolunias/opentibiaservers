import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-reviews-server-germany');
}

export default function YurotsWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-reviews-server-germany" />;
}
