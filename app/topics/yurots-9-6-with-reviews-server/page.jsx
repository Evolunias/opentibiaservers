import Yurots96WithReviewsServerKeywordPage, { generateMetadata } from './yurots-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots96WithReviewsServerKeywordPage />;
}
