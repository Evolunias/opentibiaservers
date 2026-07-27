import WithReviewsTibijkaWebsiteKeywordPage, { generateMetadata } from './with-reviews-tibijka-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaWebsiteKeywordPage />;
}
