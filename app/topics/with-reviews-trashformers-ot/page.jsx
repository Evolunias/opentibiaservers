import WithReviewsTrashformersOtKeywordPage, { generateMetadata } from './with-reviews-trashformers-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTrashformersOtKeywordPage />;
}
