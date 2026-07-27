import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-server');
}

export default function WithReviewsTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-server" />;
}
