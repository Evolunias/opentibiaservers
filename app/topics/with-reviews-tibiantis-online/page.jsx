import WithReviewsTibiantisOnlineKeywordPage, { generateMetadata } from './with-reviews-tibiantis-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiantisOnlineKeywordPage />;
}
