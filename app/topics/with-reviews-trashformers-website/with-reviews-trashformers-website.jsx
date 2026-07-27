import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-website');
}

export default function WithReviewsTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-website" />;
}
