import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-official');
}

export default function WithReviewsTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-official" />;
}
