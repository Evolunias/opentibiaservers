import WithScreenshotsKasteriaKeywordPage, { generateMetadata } from './with-screenshots-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsKasteriaKeywordPage />;
}
