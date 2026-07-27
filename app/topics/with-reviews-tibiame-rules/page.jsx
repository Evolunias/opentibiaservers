import WithReviewsTibiameRulesKeywordPage, { generateMetadata } from './with-reviews-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameRulesKeywordPage />;
}
