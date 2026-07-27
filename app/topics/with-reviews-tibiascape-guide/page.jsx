import WithReviewsTibiascapeGuideKeywordPage, { generateMetadata } from './with-reviews-tibiascape-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeGuideKeywordPage />;
}
