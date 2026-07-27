import WithReviewsTibiamePrivateServerKeywordPage, { generateMetadata } from './with-reviews-tibiame-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiamePrivateServerKeywordPage />;
}
