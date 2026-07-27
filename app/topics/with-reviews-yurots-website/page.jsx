import WithReviewsYurotsWebsiteKeywordPage, { generateMetadata } from './with-reviews-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsYurotsWebsiteKeywordPage />;
}
