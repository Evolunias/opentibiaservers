import WithScreenshotsTibiameRulesKeywordPage, { generateMetadata } from './with-screenshots-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiameRulesKeywordPage />;
}
