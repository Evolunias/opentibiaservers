import WithReviewsTibianusServerKeywordPage, { generateMetadata } from './with-reviews-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusServerKeywordPage />;
}
