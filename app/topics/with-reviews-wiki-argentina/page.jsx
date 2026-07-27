import WithReviewsWikiArgentinaKeywordPage, { generateMetadata } from './with-reviews-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiArgentinaKeywordPage />;
}
