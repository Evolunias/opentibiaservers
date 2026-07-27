import Xanteria13WithReviewsServerKeywordPage, { generateMetadata } from './xanteria-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria13WithReviewsServerKeywordPage />;
}
