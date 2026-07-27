import YurotsReviewKeywordPage, { generateMetadata } from './yurots-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsReviewKeywordPage />;
}
