import WithReviewsZuneraOtKeywordPage, { generateMetadata } from './with-reviews-zunera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsZuneraOtKeywordPage />;
}
