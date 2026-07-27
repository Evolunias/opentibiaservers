import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-ot');
}

export default function WithReviewsTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-ot" />;
}
