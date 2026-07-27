import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-forum');
}

export default function WithReviewsTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-forum" />;
}
