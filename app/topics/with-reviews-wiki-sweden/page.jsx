import WithReviewsWikiSwedenKeywordPage, { generateMetadata } from './with-reviews-wiki-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiSwedenKeywordPage />;
}
