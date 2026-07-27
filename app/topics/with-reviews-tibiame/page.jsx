import WithReviewsTibiameKeywordPage, { generateMetadata } from './with-reviews-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameKeywordPage />;
}
