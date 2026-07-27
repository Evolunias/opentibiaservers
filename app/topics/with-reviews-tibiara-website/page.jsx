import WithReviewsTibiaraWebsiteKeywordPage, { generateMetadata } from './with-reviews-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraWebsiteKeywordPage />;
}
