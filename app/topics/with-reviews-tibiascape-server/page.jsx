import WithReviewsTibiascapeServerKeywordPage, { generateMetadata } from './with-reviews-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeServerKeywordPage />;
}
