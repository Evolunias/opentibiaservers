import WithReviewsTibiascapeDownloadKeywordPage, { generateMetadata } from './with-reviews-tibiascape-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeDownloadKeywordPage />;
}
