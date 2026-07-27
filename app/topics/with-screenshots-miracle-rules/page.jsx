import WithScreenshotsMiracleRulesKeywordPage, { generateMetadata } from './with-screenshots-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMiracleRulesKeywordPage />;
}
