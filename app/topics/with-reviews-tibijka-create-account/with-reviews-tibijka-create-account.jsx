import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-create-account');
}

export default function WithReviewsTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-create-account" />;
}
