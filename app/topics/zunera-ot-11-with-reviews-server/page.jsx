import ZuneraOt11WithReviewsServerKeywordPage, { generateMetadata } from './zunera-ot-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt11WithReviewsServerKeywordPage />;
}
