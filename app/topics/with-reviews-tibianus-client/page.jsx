import WithReviewsTibianusClientKeywordPage, { generateMetadata } from './with-reviews-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusClientKeywordPage />;
}
