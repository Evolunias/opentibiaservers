import WithReviewsTrashformersOtServerKeywordPage, { generateMetadata } from './with-reviews-trashformers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTrashformersOtServerKeywordPage />;
}
