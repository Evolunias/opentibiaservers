import WithReviewsWikiGermanyKeywordPage, { generateMetadata } from './with-reviews-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiGermanyKeywordPage />;
}
