import WithScreenshotsWikiPolandKeywordPage, { generateMetadata } from './with-screenshots-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiPolandKeywordPage />;
}
