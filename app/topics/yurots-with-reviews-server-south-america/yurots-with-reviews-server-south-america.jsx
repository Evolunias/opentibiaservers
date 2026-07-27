import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-reviews-server-south-america');
}

export default function YurotsWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-reviews-server-south-america" />;
}
