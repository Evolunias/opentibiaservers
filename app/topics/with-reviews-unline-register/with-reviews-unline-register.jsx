import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-register');
}

export default function WithReviewsUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-register" />;
}
