import WithReviewsTibiaraGuideKeywordPage, { generateMetadata } from './with-reviews-tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraGuideKeywordPage />;
}
