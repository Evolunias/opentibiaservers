import Yurots81WithReviewsServerKeywordPage, { generateMetadata } from './yurots-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots81WithReviewsServerKeywordPage />;
}
