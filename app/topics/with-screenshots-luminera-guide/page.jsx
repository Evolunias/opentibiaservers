import WithScreenshotsLumineraGuideKeywordPage, { generateMetadata } from './with-screenshots-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsLumineraGuideKeywordPage />;
}
