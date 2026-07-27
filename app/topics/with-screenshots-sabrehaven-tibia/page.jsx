import WithScreenshotsSabrehavenTibiaKeywordPage, { generateMetadata } from './with-screenshots-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSabrehavenTibiaKeywordPage />;
}
