import WithReviewsTrashformersWikiKeywordPage, { generateMetadata } from './with-reviews-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTrashformersWikiKeywordPage />;
}
