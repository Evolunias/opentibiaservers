import WithReviewsWikiPolandKeywordPage, { generateMetadata } from './with-reviews-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiPolandKeywordPage />;
}
