import WithScreenshotsLumineraLoginKeywordPage, { generateMetadata } from './with-screenshots-luminera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsLumineraLoginKeywordPage />;
}
