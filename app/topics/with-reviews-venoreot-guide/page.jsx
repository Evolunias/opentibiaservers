import WithReviewsVenoreotGuideKeywordPage, { generateMetadata } from './with-reviews-venoreot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotGuideKeywordPage />;
}
