import WithReviewsYurotsOnlineKeywordPage, { generateMetadata } from './with-reviews-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsYurotsOnlineKeywordPage />;
}
