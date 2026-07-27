import WithScreenshotsBlazeraOtKeywordPage, { generateMetadata } from './with-screenshots-blazera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraOtKeywordPage />;
}
