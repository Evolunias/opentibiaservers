import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-create-account');
}

export default function WithReviewsTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-create-account" />;
}
