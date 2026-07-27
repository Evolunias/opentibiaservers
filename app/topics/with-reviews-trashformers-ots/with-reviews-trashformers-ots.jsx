import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-ots');
}

export default function WithReviewsTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-ots" />;
}
