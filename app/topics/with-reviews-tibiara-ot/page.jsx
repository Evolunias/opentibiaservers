import WithReviewsTibiaraOtKeywordPage, { generateMetadata } from './with-reviews-tibiara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraOtKeywordPage />;
}
