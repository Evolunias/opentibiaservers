import WithScreenshotsKasteriaTibiaKeywordPage, { generateMetadata } from './with-screenshots-kasteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsKasteriaTibiaKeywordPage />;
}
