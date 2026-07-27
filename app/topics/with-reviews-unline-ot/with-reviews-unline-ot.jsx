import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-ot');
}

export default function WithReviewsUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-ot" />;
}
