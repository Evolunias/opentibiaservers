import WithReviewsTibiantisOtKeywordPage, { generateMetadata } from './with-reviews-tibiantis-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiantisOtKeywordPage />;
}
