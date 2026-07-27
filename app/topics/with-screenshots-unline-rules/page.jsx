import WithScreenshotsUnlineRulesKeywordPage, { generateMetadata } from './with-screenshots-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsUnlineRulesKeywordPage />;
}
