import WithScreenshotsBlazeraKeywordPage, { generateMetadata } from './with-screenshots-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraKeywordPage />;
}
