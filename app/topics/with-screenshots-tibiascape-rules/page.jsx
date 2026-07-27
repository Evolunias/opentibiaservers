import WithScreenshotsTibiascapeRulesKeywordPage, { generateMetadata } from './with-screenshots-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiascapeRulesKeywordPage />;
}
