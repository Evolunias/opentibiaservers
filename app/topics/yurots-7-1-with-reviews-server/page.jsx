import Yurots71WithReviewsServerKeywordPage, { generateMetadata } from './yurots-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots71WithReviewsServerKeywordPage />;
}
