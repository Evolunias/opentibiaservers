import WithScreenshotsRookgaardTalesWikiKeywordPage, { generateMetadata } from './with-screenshots-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRookgaardTalesWikiKeywordPage />;
}
