import WithReviewsTibiascapeLoginKeywordPage, { generateMetadata } from './with-reviews-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeLoginKeywordPage />;
}
