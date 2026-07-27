import WithReviewsTibijkaClientKeywordPage, { generateMetadata } from './with-reviews-tibijka-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaClientKeywordPage />;
}
