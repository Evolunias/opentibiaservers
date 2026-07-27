import WithScreenshotsSerenityServerKeywordPage, { generateMetadata } from './with-screenshots-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityServerKeywordPage />;
}
