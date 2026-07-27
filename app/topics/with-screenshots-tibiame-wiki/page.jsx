import WithScreenshotsTibiameWikiKeywordPage, { generateMetadata } from './with-screenshots-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiameWikiKeywordPage />;
}
