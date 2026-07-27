import WithScreenshotsElderaClientKeywordPage, { generateMetadata } from './with-screenshots-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsElderaClientKeywordPage />;
}
