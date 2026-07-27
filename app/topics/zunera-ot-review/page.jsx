import ZuneraOtReviewKeywordPage, { generateMetadata } from './zunera-ot-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtReviewKeywordPage />;
}
