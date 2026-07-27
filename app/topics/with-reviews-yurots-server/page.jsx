import WithReviewsYurotsServerKeywordPage, { generateMetadata } from './with-reviews-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsYurotsServerKeywordPage />;
}
