import WithReviewsTibijkaWikiKeywordPage, { generateMetadata } from './with-reviews-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaWikiKeywordPage />;
}
