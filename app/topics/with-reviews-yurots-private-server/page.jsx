import WithReviewsYurotsPrivateServerKeywordPage, { generateMetadata } from './with-reviews-yurots-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsYurotsPrivateServerKeywordPage />;
}
