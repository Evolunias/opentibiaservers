import WithReviewsTibiaraOnlineKeywordPage, { generateMetadata } from './with-reviews-tibiara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraOnlineKeywordPage />;
}
