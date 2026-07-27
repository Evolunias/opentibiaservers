import WithReviewsTibiascapeOtKeywordPage, { generateMetadata } from './with-reviews-tibiascape-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeOtKeywordPage />;
}
