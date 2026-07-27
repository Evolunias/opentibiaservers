import WithScreenshotsSerenityRulesKeywordPage, { generateMetadata } from './with-screenshots-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityRulesKeywordPage />;
}
