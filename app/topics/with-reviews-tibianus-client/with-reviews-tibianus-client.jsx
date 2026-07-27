import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-client');
}

export default function WithReviewsTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-client" />;
}
