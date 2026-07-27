import WithScreenshotsTibiascapeServerKeywordPage, { generateMetadata } from './with-screenshots-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiascapeServerKeywordPage />;
}
