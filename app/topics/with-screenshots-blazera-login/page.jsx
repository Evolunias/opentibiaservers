import WithScreenshotsBlazeraLoginKeywordPage, { generateMetadata } from './with-screenshots-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraLoginKeywordPage />;
}
