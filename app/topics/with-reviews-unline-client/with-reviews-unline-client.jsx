import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-client');
}

export default function WithReviewsUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-client" />;
}
