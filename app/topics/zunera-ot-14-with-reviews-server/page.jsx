import ZuneraOt14WithReviewsServerKeywordPage, { generateMetadata } from './zunera-ot-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt14WithReviewsServerKeywordPage />;
}
