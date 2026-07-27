import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-reviews-server-chile');
}

export default function XanteriaWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-reviews-server-chile" />;
}
