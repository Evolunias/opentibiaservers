import WithReviewsTibiaraOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-tibiara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraOpenTibiaKeywordPage />;
}
