import WithScreenshotsOlderaLoginKeywordPage, { generateMetadata } from './with-screenshots-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOlderaLoginKeywordPage />;
}
