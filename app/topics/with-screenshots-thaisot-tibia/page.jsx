import WithScreenshotsThaisotTibiaKeywordPage, { generateMetadata } from './with-screenshots-thaisot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThaisotTibiaKeywordPage />;
}
