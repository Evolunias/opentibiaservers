import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus');
}

export default function WithReviewsTibianusKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus" />;
}
