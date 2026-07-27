import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-rules');
}

export default function WithReviewsTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-rules" />;
}
