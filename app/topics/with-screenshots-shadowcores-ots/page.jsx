import WithScreenshotsShadowcoresOtsKeywordPage, { generateMetadata } from './with-screenshots-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsShadowcoresOtsKeywordPage />;
}
