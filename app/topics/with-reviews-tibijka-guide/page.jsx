import WithReviewsTibijkaGuideKeywordPage, { generateMetadata } from './with-reviews-tibijka-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaGuideKeywordPage />;
}
