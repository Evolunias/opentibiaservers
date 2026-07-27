import WithScreenshotsClassicusRulesKeywordPage, { generateMetadata } from './with-screenshots-classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsClassicusRulesKeywordPage />;
}
