import YurotsWithReviewsServerSwedenKeywordPage, { generateMetadata } from './yurots-with-reviews-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsWithReviewsServerSwedenKeywordPage />;
}
