import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-reviews-server-north-america');
}

export default function YurotsWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-reviews-server-north-america" />;
}
