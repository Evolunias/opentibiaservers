import WithReviewsTibiascapeOtsKeywordPage, { generateMetadata } from './with-reviews-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeOtsKeywordPage />;
}
