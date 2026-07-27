import WithReviewsUnlineRulesKeywordPage, { generateMetadata } from './with-reviews-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineRulesKeywordPage />;
}
