import WithReviewsTrashformersServerKeywordPage, { generateMetadata } from './with-reviews-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTrashformersServerKeywordPage />;
}
