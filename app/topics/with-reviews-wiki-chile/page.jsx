import WithReviewsWikiChileKeywordPage, { generateMetadata } from './with-reviews-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiChileKeywordPage />;
}
