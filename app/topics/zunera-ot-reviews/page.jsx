import ZuneraOtReviewsKeywordPage, { generateMetadata } from './zunera-ot-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtReviewsKeywordPage />;
}
