import WithReviewsUnlineOtsKeywordPage, { generateMetadata } from './with-reviews-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineOtsKeywordPage />;
}
