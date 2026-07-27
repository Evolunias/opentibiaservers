import WithScreenshotsShadowcoresWebsiteKeywordPage, { generateMetadata } from './with-screenshots-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsShadowcoresWebsiteKeywordPage />;
}
