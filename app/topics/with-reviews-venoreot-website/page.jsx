import WithReviewsVenoreotWebsiteKeywordPage, { generateMetadata } from './with-reviews-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotWebsiteKeywordPage />;
}
