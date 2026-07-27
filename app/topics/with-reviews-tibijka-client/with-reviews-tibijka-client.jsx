import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-client');
}

export default function WithReviewsTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-client" />;
}
