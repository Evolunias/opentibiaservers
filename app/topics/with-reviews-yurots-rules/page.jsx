import WithReviewsYurotsRulesKeywordPage, { generateMetadata } from './with-reviews-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsYurotsRulesKeywordPage />;
}
