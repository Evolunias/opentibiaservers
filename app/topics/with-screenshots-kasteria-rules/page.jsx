import WithScreenshotsKasteriaRulesKeywordPage, { generateMetadata } from './with-screenshots-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsKasteriaRulesKeywordPage />;
}
