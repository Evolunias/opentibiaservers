import WithReviewsVenoreotOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-venoreot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotOpenTibiaKeywordPage />;
}
