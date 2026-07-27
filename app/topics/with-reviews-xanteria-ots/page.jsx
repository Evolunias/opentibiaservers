import WithReviewsXanteriaOtsKeywordPage, { generateMetadata } from './with-reviews-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsXanteriaOtsKeywordPage />;
}
