import WithScreenshotsTibiaoriginsWikiKeywordPage, { generateMetadata } from './with-screenshots-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaoriginsWikiKeywordPage />;
}
