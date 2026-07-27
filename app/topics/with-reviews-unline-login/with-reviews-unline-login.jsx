import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-login');
}

export default function WithReviewsUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-login" />;
}
