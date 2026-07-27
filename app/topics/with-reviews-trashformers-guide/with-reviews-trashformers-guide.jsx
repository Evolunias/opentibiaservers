import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-guide');
}

export default function WithReviewsTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-guide" />;
}
