import WithReviewsUnlineOtServerKeywordPage, { generateMetadata } from './with-reviews-unline-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineOtServerKeywordPage />;
}
