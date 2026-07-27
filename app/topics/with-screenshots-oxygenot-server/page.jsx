import WithScreenshotsOxygenotServerKeywordPage, { generateMetadata } from './with-screenshots-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOxygenotServerKeywordPage />;
}
