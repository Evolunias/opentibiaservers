import WithScreenshotsRealestaRulesKeywordPage, { generateMetadata } from './with-screenshots-realesta-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRealestaRulesKeywordPage />;
}
