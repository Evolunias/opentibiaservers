import WithScreenshotsRubinotWebsiteKeywordPage, { generateMetadata } from './with-screenshots-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRubinotWebsiteKeywordPage />;
}
