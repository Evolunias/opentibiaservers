import WithReviewsTibiantisClientKeywordPage, { generateMetadata } from './with-reviews-tibiantis-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiantisClientKeywordPage />;
}
