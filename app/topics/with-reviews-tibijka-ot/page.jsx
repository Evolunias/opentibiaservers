import WithReviewsTibijkaOtKeywordPage, { generateMetadata } from './with-reviews-tibijka-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaOtKeywordPage />;
}
