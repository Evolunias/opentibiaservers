import Yurots15WithReviewsServerKeywordPage, { generateMetadata } from './yurots-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots15WithReviewsServerKeywordPage />;
}
