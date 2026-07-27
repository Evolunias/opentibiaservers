import WithScreenshotsElderaLoginKeywordPage, { generateMetadata } from './with-screenshots-eldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsElderaLoginKeywordPage />;
}
