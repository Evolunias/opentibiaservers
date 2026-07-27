import ZuneraOt15WithReviewsServerKeywordPage, { generateMetadata } from './zunera-ot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt15WithReviewsServerKeywordPage />;
}
