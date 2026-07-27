import WithScreenshotsSerenityKeywordPage, { generateMetadata } from './with-screenshots-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityKeywordPage />;
}
