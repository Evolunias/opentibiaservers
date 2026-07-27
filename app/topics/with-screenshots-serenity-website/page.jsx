import WithScreenshotsSerenityWebsiteKeywordPage, { generateMetadata } from './with-screenshots-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityWebsiteKeywordPage />;
}
