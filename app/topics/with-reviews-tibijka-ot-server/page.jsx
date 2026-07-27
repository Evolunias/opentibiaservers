import WithReviewsTibijkaOtServerKeywordPage, { generateMetadata } from './with-reviews-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaOtServerKeywordPage />;
}
