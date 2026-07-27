import WithScreenshotsLumineraPrivateServerKeywordPage, { generateMetadata } from './with-screenshots-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsLumineraPrivateServerKeywordPage />;
}
