import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-ot-server');
}

export default function WithReviewsTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-ot-server" />;
}
