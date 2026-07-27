import WithReviewsTibiascapeOnlineKeywordPage, { generateMetadata } from './with-reviews-tibiascape-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeOnlineKeywordPage />;
}
