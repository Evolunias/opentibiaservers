import WithScreenshotsReviewUsaKeywordPage, { generateMetadata } from './with-screenshots-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsReviewUsaKeywordPage />;
}
