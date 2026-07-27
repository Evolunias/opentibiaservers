import WithReviewsTibiantisOtServerKeywordPage, { generateMetadata } from './with-reviews-tibiantis-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiantisOtServerKeywordPage />;
}
