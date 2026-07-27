import WithReviewsXanteriaGuideKeywordPage, { generateMetadata } from './with-reviews-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsXanteriaGuideKeywordPage />;
}
