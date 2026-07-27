import Xanteria14WithReviewsServerKeywordPage, { generateMetadata } from './xanteria-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria14WithReviewsServerKeywordPage />;
}
