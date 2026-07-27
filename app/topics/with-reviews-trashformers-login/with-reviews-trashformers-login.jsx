import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-login');
}

export default function WithReviewsTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-login" />;
}
