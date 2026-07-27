import WithReviewsWikiNorthAmericaKeywordPage, { generateMetadata } from './with-reviews-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiNorthAmericaKeywordPage />;
}
