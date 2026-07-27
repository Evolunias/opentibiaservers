import YurotsWithReviewsServerGermanyKeywordPage, { generateMetadata } from './yurots-with-reviews-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsWithReviewsServerGermanyKeywordPage />;
}
