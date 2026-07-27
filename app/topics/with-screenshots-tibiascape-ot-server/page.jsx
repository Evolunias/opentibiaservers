import WithScreenshotsTibiascapeOtServerKeywordPage, { generateMetadata } from './with-screenshots-tibiascape-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiascapeOtServerKeywordPage />;
}
