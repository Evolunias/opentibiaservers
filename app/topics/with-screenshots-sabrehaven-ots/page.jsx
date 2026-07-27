import WithScreenshotsSabrehavenOtsKeywordPage, { generateMetadata } from './with-screenshots-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSabrehavenOtsKeywordPage />;
}
