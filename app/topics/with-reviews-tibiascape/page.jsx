import WithReviewsTibiascapeKeywordPage, { generateMetadata } from './with-reviews-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeKeywordPage />;
}
