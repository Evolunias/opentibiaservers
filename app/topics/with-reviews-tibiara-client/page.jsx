import WithReviewsTibiaraClientKeywordPage, { generateMetadata } from './with-reviews-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraClientKeywordPage />;
}
