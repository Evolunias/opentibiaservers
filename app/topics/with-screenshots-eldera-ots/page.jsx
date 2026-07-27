import WithScreenshotsElderaOtsKeywordPage, { generateMetadata } from './with-screenshots-eldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsElderaOtsKeywordPage />;
}
