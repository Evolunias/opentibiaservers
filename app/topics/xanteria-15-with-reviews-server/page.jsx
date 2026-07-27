import Xanteria15WithReviewsServerKeywordPage, { generateMetadata } from './xanteria-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria15WithReviewsServerKeywordPage />;
}
