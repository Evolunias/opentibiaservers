import WithReviewsTibianusOtKeywordPage, { generateMetadata } from './with-reviews-tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusOtKeywordPage />;
}
