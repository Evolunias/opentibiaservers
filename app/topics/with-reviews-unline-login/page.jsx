import WithReviewsUnlineLoginKeywordPage, { generateMetadata } from './with-reviews-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineLoginKeywordPage />;
}
