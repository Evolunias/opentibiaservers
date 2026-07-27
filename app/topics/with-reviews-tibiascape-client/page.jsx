import WithReviewsTibiascapeClientKeywordPage, { generateMetadata } from './with-reviews-tibiascape-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeClientKeywordPage />;
}
