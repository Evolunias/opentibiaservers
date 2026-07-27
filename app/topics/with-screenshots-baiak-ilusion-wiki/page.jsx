import WithScreenshotsBaiakIlusionWikiKeywordPage, { generateMetadata } from './with-screenshots-baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBaiakIlusionWikiKeywordPage />;
}
