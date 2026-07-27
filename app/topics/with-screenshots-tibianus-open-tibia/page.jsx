import WithScreenshotsTibianusOpenTibiaKeywordPage, { generateMetadata } from './with-screenshots-tibianus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibianusOpenTibiaKeywordPage />;
}
