import WithScreenshotsShadowcoresKeywordPage, { generateMetadata } from './with-screenshots-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsShadowcoresKeywordPage />;
}
