import WithReviewsTrashformersKeywordPage, { generateMetadata } from './with-reviews-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTrashformersKeywordPage />;
}
