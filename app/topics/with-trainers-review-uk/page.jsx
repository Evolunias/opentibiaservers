import WithTrainersReviewUkKeywordPage, { generateMetadata } from './with-trainers-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersReviewUkKeywordPage />;
}
