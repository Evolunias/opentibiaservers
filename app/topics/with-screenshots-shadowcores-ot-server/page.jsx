import WithScreenshotsShadowcoresOtServerKeywordPage, { generateMetadata } from './with-screenshots-shadowcores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsShadowcoresOtServerKeywordPage />;
}
