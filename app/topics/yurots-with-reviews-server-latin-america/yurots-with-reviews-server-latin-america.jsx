import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-reviews-server-latin-america');
}

export default function YurotsWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-reviews-server-latin-america" />;
}
