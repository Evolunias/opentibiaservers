import WithScreenshotsTibianusRulesKeywordPage, { generateMetadata } from './with-screenshots-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibianusRulesKeywordPage />;
}
