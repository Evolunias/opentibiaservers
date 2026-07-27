import WithReviewsUnlineOnlineKeywordPage, { generateMetadata } from './with-reviews-unline-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineOnlineKeywordPage />;
}
