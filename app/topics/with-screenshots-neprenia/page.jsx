import WithScreenshotsNepreniaKeywordPage, { generateMetadata } from './with-screenshots-neprenia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNepreniaKeywordPage />;
}
