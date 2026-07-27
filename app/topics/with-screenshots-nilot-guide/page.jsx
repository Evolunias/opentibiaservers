import WithScreenshotsNilotGuideKeywordPage, { generateMetadata } from './with-screenshots-nilot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNilotGuideKeywordPage />;
}
