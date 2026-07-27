import WithReviewsTibianusOtsKeywordPage, { generateMetadata } from './with-reviews-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusOtsKeywordPage />;
}
