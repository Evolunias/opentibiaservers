import WithScreenshotsShadowcoresWikiKeywordPage, { generateMetadata } from './with-screenshots-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsShadowcoresWikiKeywordPage />;
}
