import WithScreenshotsElderaOtKeywordPage, { generateMetadata } from './with-screenshots-eldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsElderaOtKeywordPage />;
}
