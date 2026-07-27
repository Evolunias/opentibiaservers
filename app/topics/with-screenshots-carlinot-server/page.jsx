import WithScreenshotsCarlinotServerKeywordPage, { generateMetadata } from './with-screenshots-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCarlinotServerKeywordPage />;
}
