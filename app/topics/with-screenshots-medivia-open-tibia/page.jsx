import WithScreenshotsMediviaOpenTibiaKeywordPage, { generateMetadata } from './with-screenshots-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaOpenTibiaKeywordPage />;
}
