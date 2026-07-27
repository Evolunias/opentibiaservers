import WithReviewsVenoreotPrivateServerKeywordPage, { generateMetadata } from './with-reviews-venoreot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotPrivateServerKeywordPage />;
}
