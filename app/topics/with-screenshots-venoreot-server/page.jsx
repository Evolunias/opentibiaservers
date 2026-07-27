import WithScreenshotsVenoreotServerKeywordPage, { generateMetadata } from './with-screenshots-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsVenoreotServerKeywordPage />;
}
