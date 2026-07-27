import WithReviewsWikiUkKeywordPage, { generateMetadata } from './with-reviews-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiUkKeywordPage />;
}
