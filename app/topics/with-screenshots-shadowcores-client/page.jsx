import WithScreenshotsShadowcoresClientKeywordPage, { generateMetadata } from './with-screenshots-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsShadowcoresClientKeywordPage />;
}
