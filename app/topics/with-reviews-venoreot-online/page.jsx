import WithReviewsVenoreotOnlineKeywordPage, { generateMetadata } from './with-reviews-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotOnlineKeywordPage />;
}
