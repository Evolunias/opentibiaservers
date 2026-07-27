import WithScreenshotsTibiascapeLoginKeywordPage, { generateMetadata } from './with-screenshots-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiascapeLoginKeywordPage />;
}
