import WithScreenshotsNilotTibiaKeywordPage, { generateMetadata } from './with-screenshots-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNilotTibiaKeywordPage />;
}
