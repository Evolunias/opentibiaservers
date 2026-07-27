import WithReviewsUnlineServerKeywordPage, { generateMetadata } from './with-reviews-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineServerKeywordPage />;
}
