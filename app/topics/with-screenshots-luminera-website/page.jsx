import WithScreenshotsLumineraWebsiteKeywordPage, { generateMetadata } from './with-screenshots-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsLumineraWebsiteKeywordPage />;
}
