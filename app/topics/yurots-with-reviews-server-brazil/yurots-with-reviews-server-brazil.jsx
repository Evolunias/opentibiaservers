import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-reviews-server-brazil');
}

export default function YurotsWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-reviews-server-brazil" />;
}
