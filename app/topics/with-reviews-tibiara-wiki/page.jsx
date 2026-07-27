import WithReviewsTibiaraWikiKeywordPage, { generateMetadata } from './with-reviews-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraWikiKeywordPage />;
}
