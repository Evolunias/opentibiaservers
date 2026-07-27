import WithScreenshotsBlazeraServerKeywordPage, { generateMetadata } from './with-screenshots-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraServerKeywordPage />;
}
