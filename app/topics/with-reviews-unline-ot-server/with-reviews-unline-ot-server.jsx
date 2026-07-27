import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-ot-server');
}

export default function WithReviewsUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-ot-server" />;
}
