import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-register');
}

export default function WithReviewsYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-register" />;
}
