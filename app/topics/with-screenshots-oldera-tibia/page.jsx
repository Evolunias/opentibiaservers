import WithScreenshotsOlderaTibiaKeywordPage, { generateMetadata } from './with-screenshots-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOlderaTibiaKeywordPage />;
}
