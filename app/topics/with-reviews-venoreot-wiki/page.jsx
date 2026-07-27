import WithReviewsVenoreotWikiKeywordPage, { generateMetadata } from './with-reviews-venoreot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotWikiKeywordPage />;
}
