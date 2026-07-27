import Xanteria11WithReviewsServerKeywordPage, { generateMetadata } from './xanteria-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria11WithReviewsServerKeywordPage />;
}
