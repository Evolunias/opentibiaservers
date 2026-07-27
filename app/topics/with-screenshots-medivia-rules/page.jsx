import WithScreenshotsMediviaRulesKeywordPage, { generateMetadata } from './with-screenshots-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaRulesKeywordPage />;
}
