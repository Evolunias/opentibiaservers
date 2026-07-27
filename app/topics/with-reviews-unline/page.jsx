import WithReviewsUnlineKeywordPage, { generateMetadata } from './with-reviews-unline';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineKeywordPage />;
}
