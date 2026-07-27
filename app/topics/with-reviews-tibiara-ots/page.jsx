import WithReviewsTibiaraOtsKeywordPage, { generateMetadata } from './with-reviews-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraOtsKeywordPage />;
}
