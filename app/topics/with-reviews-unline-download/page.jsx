import WithReviewsUnlineDownloadKeywordPage, { generateMetadata } from './with-reviews-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineDownloadKeywordPage />;
}
