import WithReviewsTibianusWebsiteKeywordPage, { generateMetadata } from './with-reviews-tibianus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusWebsiteKeywordPage />;
}
