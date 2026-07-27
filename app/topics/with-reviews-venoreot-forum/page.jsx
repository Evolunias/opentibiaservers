import WithReviewsVenoreotForumKeywordPage, { generateMetadata } from './with-reviews-venoreot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotForumKeywordPage />;
}
