import WithReviewsTibiantisKeywordPage, { generateMetadata } from './with-reviews-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiantisKeywordPage />;
}
