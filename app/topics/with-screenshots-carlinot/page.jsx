import WithScreenshotsCarlinotKeywordPage, { generateMetadata } from './with-screenshots-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCarlinotKeywordPage />;
}
