import WithScreenshotsShadowcoresServerKeywordPage, { generateMetadata } from './with-screenshots-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsShadowcoresServerKeywordPage />;
}
