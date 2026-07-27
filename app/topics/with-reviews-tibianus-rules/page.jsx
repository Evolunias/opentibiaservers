import WithReviewsTibianusRulesKeywordPage, { generateMetadata } from './with-reviews-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusRulesKeywordPage />;
}
