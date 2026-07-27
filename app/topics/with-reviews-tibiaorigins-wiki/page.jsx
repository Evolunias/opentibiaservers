import WithReviewsTibiaoriginsWikiKeywordPage, { generateMetadata } from './with-reviews-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaoriginsWikiKeywordPage />;
}
