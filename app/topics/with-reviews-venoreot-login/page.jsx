import WithReviewsVenoreotLoginKeywordPage, { generateMetadata } from './with-reviews-venoreot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotLoginKeywordPage />;
}
