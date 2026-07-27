import WithScreenshotsMediviaPrivateServerKeywordPage, { generateMetadata } from './with-screenshots-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaPrivateServerKeywordPage />;
}
