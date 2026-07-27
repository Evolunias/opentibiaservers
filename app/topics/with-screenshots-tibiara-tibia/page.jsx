import WithScreenshotsTibiaraTibiaKeywordPage, { generateMetadata } from './with-screenshots-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaraTibiaKeywordPage />;
}
