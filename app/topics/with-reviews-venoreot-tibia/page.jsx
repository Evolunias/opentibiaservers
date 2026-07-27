import WithReviewsVenoreotTibiaKeywordPage, { generateMetadata } from './with-reviews-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotTibiaKeywordPage />;
}
