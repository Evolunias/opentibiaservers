import WithReviewsTibijkaDownloadKeywordPage, { generateMetadata } from './with-reviews-tibijka-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaDownloadKeywordPage />;
}
