import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-register');
}

export default function WithReviewsTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-register" />;
}
