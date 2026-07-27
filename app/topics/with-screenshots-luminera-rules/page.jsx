import WithScreenshotsLumineraRulesKeywordPage, { generateMetadata } from './with-screenshots-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsLumineraRulesKeywordPage />;
}
