import WithScreenshotsNepreniaTibiaKeywordPage, { generateMetadata } from './with-screenshots-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNepreniaTibiaKeywordPage />;
}
