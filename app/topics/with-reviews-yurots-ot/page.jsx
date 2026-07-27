import WithReviewsYurotsOtKeywordPage, { generateMetadata } from './with-reviews-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsYurotsOtKeywordPage />;
}
