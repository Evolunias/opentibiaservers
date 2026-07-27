import WithScreenshotsRealestaTibiaKeywordPage, { generateMetadata } from './with-screenshots-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRealestaTibiaKeywordPage />;
}
