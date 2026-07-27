import WithReviewsUnlineOtKeywordPage, { generateMetadata } from './with-reviews-unline-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineOtKeywordPage />;
}
