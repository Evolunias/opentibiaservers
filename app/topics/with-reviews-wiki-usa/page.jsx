import WithReviewsWikiUsaKeywordPage, { generateMetadata } from './with-reviews-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiUsaKeywordPage />;
}
