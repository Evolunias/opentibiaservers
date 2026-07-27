import WithScreenshotsShadowcoresRulesKeywordPage, { generateMetadata } from './with-screenshots-shadowcores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsShadowcoresRulesKeywordPage />;
}
