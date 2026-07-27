import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-open-tibia');
}

export default function WithReviewsTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-open-tibia" />;
}
