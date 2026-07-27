import WithReviewsXanteriaOtServerKeywordPage, { generateMetadata } from './with-reviews-xanteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsXanteriaOtServerKeywordPage />;
}
