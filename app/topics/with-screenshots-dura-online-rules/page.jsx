import WithScreenshotsDuraOnlineRulesKeywordPage, { generateMetadata } from './with-screenshots-dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsDuraOnlineRulesKeywordPage />;
}
