import WithReviewsTrashformersRulesKeywordPage, { generateMetadata } from './with-reviews-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTrashformersRulesKeywordPage />;
}
