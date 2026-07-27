import WithScreenshotsClassicusKeywordPage, { generateMetadata } from './with-screenshots-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsClassicusKeywordPage />;
}
