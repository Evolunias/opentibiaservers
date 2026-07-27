import WithReviewsWikiLatinAmericaKeywordPage, { generateMetadata } from './with-reviews-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiLatinAmericaKeywordPage />;
}
