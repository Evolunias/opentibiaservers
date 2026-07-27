import WithReviewsYurotsWikiKeywordPage, { generateMetadata } from './with-reviews-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsYurotsWikiKeywordPage />;
}
