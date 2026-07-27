import WithReviewsYurotsOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-yurots-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsYurotsOpenTibiaKeywordPage />;
}
