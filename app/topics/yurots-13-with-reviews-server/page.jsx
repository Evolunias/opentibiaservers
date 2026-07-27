import Yurots13WithReviewsServerKeywordPage, { generateMetadata } from './yurots-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots13WithReviewsServerKeywordPage />;
}
