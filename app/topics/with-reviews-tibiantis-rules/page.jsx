import WithReviewsTibiantisRulesKeywordPage, { generateMetadata } from './with-reviews-tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiantisRulesKeywordPage />;
}
