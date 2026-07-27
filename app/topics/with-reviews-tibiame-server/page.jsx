import WithReviewsTibiameServerKeywordPage, { generateMetadata } from './with-reviews-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameServerKeywordPage />;
}
