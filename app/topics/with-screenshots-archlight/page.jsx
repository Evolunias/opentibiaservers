import WithScreenshotsArchlightKeywordPage, { generateMetadata } from './with-screenshots-archlight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsArchlightKeywordPage />;
}
