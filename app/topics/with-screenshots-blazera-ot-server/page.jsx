import WithScreenshotsBlazeraOtServerKeywordPage, { generateMetadata } from './with-screenshots-blazera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraOtServerKeywordPage />;
}
