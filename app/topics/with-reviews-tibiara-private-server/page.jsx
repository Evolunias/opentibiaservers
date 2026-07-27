import WithReviewsTibiaraPrivateServerKeywordPage, { generateMetadata } from './with-reviews-tibiara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraPrivateServerKeywordPage />;
}
