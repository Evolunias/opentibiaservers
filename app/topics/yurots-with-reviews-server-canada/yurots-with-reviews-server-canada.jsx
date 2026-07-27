import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-reviews-server-canada');
}

export default function YurotsWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-reviews-server-canada" />;
}
