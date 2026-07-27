import WithScreenshotsYurotsGuideKeywordPage, { generateMetadata } from './with-screenshots-yurots-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsYurotsGuideKeywordPage />;
}
