import XanteriaReviewsKeywordPage, { generateMetadata } from './xanteria-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaReviewsKeywordPage />;
}
