import WithScreenshotsMadnessaliveWikiKeywordPage, { generateMetadata } from './with-screenshots-madnessalive-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMadnessaliveWikiKeywordPage />;
}
