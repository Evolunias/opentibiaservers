import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-client');
}

export default function WithReviewsTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-client" />;
}
