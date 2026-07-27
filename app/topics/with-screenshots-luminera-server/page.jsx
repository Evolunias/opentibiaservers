import WithScreenshotsLumineraServerKeywordPage, { generateMetadata } from './with-screenshots-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsLumineraServerKeywordPage />;
}
