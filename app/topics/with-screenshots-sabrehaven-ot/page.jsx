import WithScreenshotsSabrehavenOtKeywordPage, { generateMetadata } from './with-screenshots-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSabrehavenOtKeywordPage />;
}
