import WithScreenshotsVenoreotKeywordPage, { generateMetadata } from './with-screenshots-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsVenoreotKeywordPage />;
}
