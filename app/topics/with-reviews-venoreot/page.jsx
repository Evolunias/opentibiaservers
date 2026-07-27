import WithReviewsVenoreotKeywordPage, { generateMetadata } from './with-reviews-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotKeywordPage />;
}
