import WithScreenshotsSabrehavenClientKeywordPage, { generateMetadata } from './with-screenshots-sabrehaven-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSabrehavenClientKeywordPage />;
}
