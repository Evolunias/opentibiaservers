import WithScreenshotsGuideUsaKeywordPage, { generateMetadata } from './with-screenshots-guide-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsGuideUsaKeywordPage />;
}
