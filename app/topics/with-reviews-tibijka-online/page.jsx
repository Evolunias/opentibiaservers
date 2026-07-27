import WithReviewsTibijkaOnlineKeywordPage, { generateMetadata } from './with-reviews-tibijka-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaOnlineKeywordPage />;
}
