import WithScreenshotsSabrehavenRulesKeywordPage, { generateMetadata } from './with-screenshots-sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSabrehavenRulesKeywordPage />;
}
