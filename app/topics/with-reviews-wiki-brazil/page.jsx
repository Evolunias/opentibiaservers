import WithReviewsWikiBrazilKeywordPage, { generateMetadata } from './with-reviews-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiBrazilKeywordPage />;
}
