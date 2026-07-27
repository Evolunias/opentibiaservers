import Yurots11WithReviewsServerKeywordPage, { generateMetadata } from './yurots-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots11WithReviewsServerKeywordPage />;
}
