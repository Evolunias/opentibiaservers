import WithReviewsYurotsKeywordPage, { generateMetadata } from './with-reviews-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsYurotsKeywordPage />;
}
