import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers');
}

export default function WithReviewsTrashformersKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers" />;
}
