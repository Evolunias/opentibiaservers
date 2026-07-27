import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-trashformers-wiki');
}

export default function WithReviewsTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-trashformers-wiki" />;
}
