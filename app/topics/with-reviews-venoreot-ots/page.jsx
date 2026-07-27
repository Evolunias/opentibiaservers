import WithReviewsVenoreotOtsKeywordPage, { generateMetadata } from './with-reviews-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotOtsKeywordPage />;
}
