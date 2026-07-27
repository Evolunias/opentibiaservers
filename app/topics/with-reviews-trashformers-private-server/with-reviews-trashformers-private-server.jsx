import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-private-server');
}

export default function WithReviewsTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-private-server" />;
}
