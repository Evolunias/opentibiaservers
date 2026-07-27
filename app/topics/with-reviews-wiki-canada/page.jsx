import WithReviewsWikiCanadaKeywordPage, { generateMetadata } from './with-reviews-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiCanadaKeywordPage />;
}
