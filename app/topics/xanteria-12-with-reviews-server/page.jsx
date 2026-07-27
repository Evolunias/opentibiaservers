import Xanteria12WithReviewsServerKeywordPage, { generateMetadata } from './xanteria-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria12WithReviewsServerKeywordPage />;
}
