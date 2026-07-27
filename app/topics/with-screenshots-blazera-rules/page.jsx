import WithScreenshotsBlazeraRulesKeywordPage, { generateMetadata } from './with-screenshots-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraRulesKeywordPage />;
}
