import WithScreenshotsCoxaotRulesKeywordPage, { generateMetadata } from './with-screenshots-coxaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCoxaotRulesKeywordPage />;
}
