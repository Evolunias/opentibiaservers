import ZnoteAacReviewsKeywordPage, { generateMetadata } from './znote-aac-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacReviewsKeywordPage />;
}
