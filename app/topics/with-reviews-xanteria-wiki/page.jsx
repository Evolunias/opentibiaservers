import WithReviewsXanteriaWikiKeywordPage, { generateMetadata } from './with-reviews-xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsXanteriaWikiKeywordPage />;
}
