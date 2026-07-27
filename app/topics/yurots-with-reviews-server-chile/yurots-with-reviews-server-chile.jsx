import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-reviews-server-chile');
}

export default function YurotsWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-reviews-server-chile" />;
}
