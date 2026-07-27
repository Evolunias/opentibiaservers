import WithScreenshotsVenoreotClientKeywordPage, { generateMetadata } from './with-screenshots-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsVenoreotClientKeywordPage />;
}
