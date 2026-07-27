import WithReviewsWikiSouthAmericaKeywordPage, { generateMetadata } from './with-reviews-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiSouthAmericaKeywordPage />;
}
