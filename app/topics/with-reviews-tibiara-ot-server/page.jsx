import WithReviewsTibiaraOtServerKeywordPage, { generateMetadata } from './with-reviews-tibiara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraOtServerKeywordPage />;
}
