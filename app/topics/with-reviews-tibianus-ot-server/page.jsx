import WithReviewsTibianusOtServerKeywordPage, { generateMetadata } from './with-reviews-tibianus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusOtServerKeywordPage />;
}
