import WithReviewsVenoreotDownloadKeywordPage, { generateMetadata } from './with-reviews-venoreot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotDownloadKeywordPage />;
}
