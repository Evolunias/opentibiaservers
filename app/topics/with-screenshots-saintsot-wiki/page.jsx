import WithScreenshotsSaintsotWikiKeywordPage, { generateMetadata } from './with-screenshots-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSaintsotWikiKeywordPage />;
}
