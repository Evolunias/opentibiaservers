import WithScreenshotsTibiascapeOtKeywordPage, { generateMetadata } from './with-screenshots-tibiascape-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiascapeOtKeywordPage />;
}
