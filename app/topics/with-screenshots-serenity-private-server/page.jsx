import WithScreenshotsSerenityPrivateServerKeywordPage, { generateMetadata } from './with-screenshots-serenity-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityPrivateServerKeywordPage />;
}
