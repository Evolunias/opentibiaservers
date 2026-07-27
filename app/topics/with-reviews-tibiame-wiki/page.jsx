import WithReviewsTibiameWikiKeywordPage, { generateMetadata } from './with-reviews-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameWikiKeywordPage />;
}
