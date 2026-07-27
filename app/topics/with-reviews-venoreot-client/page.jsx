import WithReviewsVenoreotClientKeywordPage, { generateMetadata } from './with-reviews-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotClientKeywordPage />;
}
