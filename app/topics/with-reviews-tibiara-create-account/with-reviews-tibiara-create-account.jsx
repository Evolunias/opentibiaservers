import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-create-account');
}

export default function WithReviewsTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-create-account" />;
}
