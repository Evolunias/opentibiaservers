import WithScreenshotsMidhemRulesKeywordPage, { generateMetadata } from './with-screenshots-midhem-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemRulesKeywordPage />;
}
