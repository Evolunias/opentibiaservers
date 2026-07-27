import WithScreenshotsBlazeraOpenTibiaKeywordPage, { generateMetadata } from './with-screenshots-blazera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraOpenTibiaKeywordPage />;
}
