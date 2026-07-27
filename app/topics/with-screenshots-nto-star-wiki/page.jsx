import WithScreenshotsNtoStarWikiKeywordPage, { generateMetadata } from './with-screenshots-nto-star-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNtoStarWikiKeywordPage />;
}
