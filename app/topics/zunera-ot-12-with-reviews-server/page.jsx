import ZuneraOt12WithReviewsServerKeywordPage, { generateMetadata } from './zunera-ot-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt12WithReviewsServerKeywordPage />;
}
