import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-tibia');
}

export default function WithReviewsTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-tibia" />;
}
