import WithScreenshotsTibiaraOtKeywordPage, { generateMetadata } from './with-screenshots-tibiara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaraOtKeywordPage />;
}
