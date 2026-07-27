import WithScreenshotsSerenityTibiaKeywordPage, { generateMetadata } from './with-screenshots-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityTibiaKeywordPage />;
}
