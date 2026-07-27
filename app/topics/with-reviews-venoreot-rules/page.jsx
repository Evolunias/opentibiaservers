import WithReviewsVenoreotRulesKeywordPage, { generateMetadata } from './with-reviews-venoreot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotRulesKeywordPage />;
}
