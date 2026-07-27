import XanteriaReviewKeywordPage, { generateMetadata } from './xanteria-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaReviewKeywordPage />;
}
