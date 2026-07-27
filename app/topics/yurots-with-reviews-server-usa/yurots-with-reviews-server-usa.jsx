import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-reviews-server-usa');
}

export default function YurotsWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-reviews-server-usa" />;
}
