import WithScreenshotsTibijkaOpenTibiaKeywordPage, { generateMetadata } from './with-screenshots-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaOpenTibiaKeywordPage />;
}
