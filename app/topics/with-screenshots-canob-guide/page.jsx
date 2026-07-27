import WithScreenshotsCanobGuideKeywordPage, { generateMetadata } from './with-screenshots-canob-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCanobGuideKeywordPage />;
}
