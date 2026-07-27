import WithScreenshotsNtoStarTibiaKeywordPage, { generateMetadata } from './with-screenshots-nto-star-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNtoStarTibiaKeywordPage />;
}
