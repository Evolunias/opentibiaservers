import WithReviewsXanteriaOnlineKeywordPage, { generateMetadata } from './with-reviews-xanteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsXanteriaOnlineKeywordPage />;
}
