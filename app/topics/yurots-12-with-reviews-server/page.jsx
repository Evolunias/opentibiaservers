import Yurots12WithReviewsServerKeywordPage, { generateMetadata } from './yurots-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots12WithReviewsServerKeywordPage />;
}
