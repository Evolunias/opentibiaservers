import WithScreenshotsTibiantisRulesKeywordPage, { generateMetadata } from './with-screenshots-tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiantisRulesKeywordPage />;
}
