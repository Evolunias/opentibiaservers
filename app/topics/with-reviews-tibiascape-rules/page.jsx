import WithReviewsTibiascapeRulesKeywordPage, { generateMetadata } from './with-reviews-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeRulesKeywordPage />;
}
