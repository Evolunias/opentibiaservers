import Yurots14WithReviewsServerKeywordPage, { generateMetadata } from './yurots-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots14WithReviewsServerKeywordPage />;
}
