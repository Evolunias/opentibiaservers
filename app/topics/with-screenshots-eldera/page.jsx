import WithScreenshotsElderaKeywordPage, { generateMetadata } from './with-screenshots-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsElderaKeywordPage />;
}
