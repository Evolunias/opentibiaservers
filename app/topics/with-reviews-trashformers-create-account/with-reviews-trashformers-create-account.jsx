import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-create-account');
}

export default function WithReviewsTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-create-account" />;
}
