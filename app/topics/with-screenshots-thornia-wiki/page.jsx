import WithScreenshotsThorniaWikiKeywordPage, { generateMetadata } from './with-screenshots-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaWikiKeywordPage />;
}
