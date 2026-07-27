import WithScreenshotsReviewUkKeywordPage, { generateMetadata } from './with-screenshots-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsReviewUkKeywordPage />;
}
