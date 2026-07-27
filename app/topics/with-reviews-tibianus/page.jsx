import WithReviewsTibianusKeywordPage, { generateMetadata } from './with-reviews-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusKeywordPage />;
}
