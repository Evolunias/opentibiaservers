import WithScreenshotsVenoreotTibiaKeywordPage, { generateMetadata } from './with-screenshots-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsVenoreotTibiaKeywordPage />;
}
