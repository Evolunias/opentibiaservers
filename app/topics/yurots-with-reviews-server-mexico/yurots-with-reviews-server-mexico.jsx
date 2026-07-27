import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-reviews-server-mexico');
}

export default function YurotsWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-reviews-server-mexico" />;
}
