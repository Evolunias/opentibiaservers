import WithReviewsXanteriaClientKeywordPage, { generateMetadata } from './with-reviews-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsXanteriaClientKeywordPage />;
}
