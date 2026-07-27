import WithReviewsTrashformersForumKeywordPage, { generateMetadata } from './with-reviews-trashformers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTrashformersForumKeywordPage />;
}
