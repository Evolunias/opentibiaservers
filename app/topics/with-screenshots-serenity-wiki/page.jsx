import WithScreenshotsSerenityWikiKeywordPage, { generateMetadata } from './with-screenshots-serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityWikiKeywordPage />;
}
