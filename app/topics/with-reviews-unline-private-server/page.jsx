import WithReviewsUnlinePrivateServerKeywordPage, { generateMetadata } from './with-reviews-unline-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlinePrivateServerKeywordPage />;
}
