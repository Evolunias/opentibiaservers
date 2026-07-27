import WithReviewsZezeniaOnlineKeywordPage, { generateMetadata } from './with-reviews-zezenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsZezeniaOnlineKeywordPage />;
}
