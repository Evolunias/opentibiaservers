import WithReviewsTibianusOnlineKeywordPage, { generateMetadata } from './with-reviews-tibianus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusOnlineKeywordPage />;
}
