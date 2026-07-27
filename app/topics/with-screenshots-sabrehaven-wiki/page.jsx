import WithScreenshotsSabrehavenWikiKeywordPage, { generateMetadata } from './with-screenshots-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSabrehavenWikiKeywordPage />;
}
