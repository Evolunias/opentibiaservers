import WithScreenshotsNostaltherWikiKeywordPage, { generateMetadata } from './with-screenshots-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNostaltherWikiKeywordPage />;
}
