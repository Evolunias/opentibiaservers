import WithScreenshotsTibijkaRulesKeywordPage, { generateMetadata } from './with-screenshots-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaRulesKeywordPage />;
}
