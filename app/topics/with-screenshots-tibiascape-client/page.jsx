import WithScreenshotsTibiascapeClientKeywordPage, { generateMetadata } from './with-screenshots-tibiascape-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiascapeClientKeywordPage />;
}
