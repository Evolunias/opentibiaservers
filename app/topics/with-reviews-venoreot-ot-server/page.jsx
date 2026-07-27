import WithReviewsVenoreotOtServerKeywordPage, { generateMetadata } from './with-reviews-venoreot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotOtServerKeywordPage />;
}
