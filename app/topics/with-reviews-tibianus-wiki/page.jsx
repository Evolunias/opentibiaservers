import WithReviewsTibianusWikiKeywordPage, { generateMetadata } from './with-reviews-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusWikiKeywordPage />;
}
