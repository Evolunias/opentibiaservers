import WithScreenshotsMistOfDeathKeywordPage, { generateMetadata } from './with-screenshots-mist-of-death';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMistOfDeathKeywordPage />;
}
