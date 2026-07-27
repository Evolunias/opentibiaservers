import WithScreenshotsLumineraWikiKeywordPage, { generateMetadata } from './with-screenshots-luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsLumineraWikiKeywordPage />;
}
