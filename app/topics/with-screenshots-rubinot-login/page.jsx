import WithScreenshotsRubinotLoginKeywordPage, { generateMetadata } from './with-screenshots-rubinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRubinotLoginKeywordPage />;
}
