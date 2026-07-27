import WithScreenshotsTibiaraRulesKeywordPage, { generateMetadata } from './with-screenshots-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaraRulesKeywordPage />;
}
