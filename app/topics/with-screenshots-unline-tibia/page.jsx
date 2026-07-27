import WithScreenshotsUnlineTibiaKeywordPage, { generateMetadata } from './with-screenshots-unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsUnlineTibiaKeywordPage />;
}
