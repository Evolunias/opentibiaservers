import WithScreenshotsXanteriaWikiKeywordPage, { generateMetadata } from './with-screenshots-xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsXanteriaWikiKeywordPage />;
}
