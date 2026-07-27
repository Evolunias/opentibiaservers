import WithReviewsYurotsOtServerKeywordPage, { generateMetadata } from './with-reviews-yurots-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsYurotsOtServerKeywordPage />;
}
