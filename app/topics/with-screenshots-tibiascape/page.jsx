import WithScreenshotsTibiascapeKeywordPage, { generateMetadata } from './with-screenshots-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiascapeKeywordPage />;
}
