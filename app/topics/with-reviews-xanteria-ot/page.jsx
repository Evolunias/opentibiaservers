import WithReviewsXanteriaOtKeywordPage, { generateMetadata } from './with-reviews-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsXanteriaOtKeywordPage />;
}
