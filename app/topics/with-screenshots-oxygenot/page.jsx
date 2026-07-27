import WithScreenshotsOxygenotKeywordPage, { generateMetadata } from './with-screenshots-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOxygenotKeywordPage />;
}
