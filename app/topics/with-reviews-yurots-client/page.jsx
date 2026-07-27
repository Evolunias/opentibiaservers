import WithReviewsYurotsClientKeywordPage, { generateMetadata } from './with-reviews-yurots-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsYurotsClientKeywordPage />;
}
