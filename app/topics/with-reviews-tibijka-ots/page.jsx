import WithReviewsTibijkaOtsKeywordPage, { generateMetadata } from './with-reviews-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaOtsKeywordPage />;
}
