import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-ots');
}

export default function WithReviewsUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-ots" />;
}
