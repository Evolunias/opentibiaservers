import WithReviewsTrashformersClientKeywordPage, { generateMetadata } from './with-reviews-trashformers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTrashformersClientKeywordPage />;
}
