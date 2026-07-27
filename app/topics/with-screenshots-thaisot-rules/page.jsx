import WithScreenshotsThaisotRulesKeywordPage, { generateMetadata } from './with-screenshots-thaisot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThaisotRulesKeywordPage />;
}
