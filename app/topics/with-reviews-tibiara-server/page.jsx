import WithReviewsTibiaraServerKeywordPage, { generateMetadata } from './with-reviews-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraServerKeywordPage />;
}
