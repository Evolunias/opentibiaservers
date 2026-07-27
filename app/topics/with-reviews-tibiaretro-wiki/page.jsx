import WithReviewsTibiaretroWikiKeywordPage, { generateMetadata } from './with-reviews-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroWikiKeywordPage />;
}
