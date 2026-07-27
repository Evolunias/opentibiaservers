import WithScreenshotsCyntaraRulesKeywordPage, { generateMetadata } from './with-screenshots-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraRulesKeywordPage />;
}
