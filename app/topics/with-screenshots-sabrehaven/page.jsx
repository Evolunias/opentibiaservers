import WithScreenshotsSabrehavenKeywordPage, { generateMetadata } from './with-screenshots-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSabrehavenKeywordPage />;
}
