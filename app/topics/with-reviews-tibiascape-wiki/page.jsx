import WithReviewsTibiascapeWikiKeywordPage, { generateMetadata } from './with-reviews-tibiascape-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeWikiKeywordPage />;
}
