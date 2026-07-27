import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-create-account');
}

export default function WithReviewsYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-create-account" />;
}
