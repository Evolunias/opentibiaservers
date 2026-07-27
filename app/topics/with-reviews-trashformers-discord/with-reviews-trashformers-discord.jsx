import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-discord');
}

export default function WithReviewsTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-discord" />;
}
