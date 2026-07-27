import WithReviewsTibiameWebsiteKeywordPage, { generateMetadata } from './with-reviews-tibiame-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameWebsiteKeywordPage />;
}
