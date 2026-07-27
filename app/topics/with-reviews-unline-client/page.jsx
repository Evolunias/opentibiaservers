import WithReviewsUnlineClientKeywordPage, { generateMetadata } from './with-reviews-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineClientKeywordPage />;
}
