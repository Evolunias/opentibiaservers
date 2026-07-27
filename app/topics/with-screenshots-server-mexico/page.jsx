import WithScreenshotsServerMexicoKeywordPage, { generateMetadata } from './with-screenshots-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerMexicoKeywordPage />;
}
