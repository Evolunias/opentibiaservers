import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-online');
}

export default function WithReviewsTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-online" />;
}
