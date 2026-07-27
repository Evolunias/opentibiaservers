import WithScreenshotsOlderaRulesKeywordPage, { generateMetadata } from './with-screenshots-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOlderaRulesKeywordPage />;
}
