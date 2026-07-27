import YurotsReviewsKeywordPage, { generateMetadata } from './yurots-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsReviewsKeywordPage />;
}
