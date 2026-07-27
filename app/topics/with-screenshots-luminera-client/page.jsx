import WithScreenshotsLumineraClientKeywordPage, { generateMetadata } from './with-screenshots-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsLumineraClientKeywordPage />;
}
