import WithReviewsTibijkaRulesKeywordPage, { generateMetadata } from './with-reviews-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaRulesKeywordPage />;
}
