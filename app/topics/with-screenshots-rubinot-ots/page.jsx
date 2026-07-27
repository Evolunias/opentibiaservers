import WithScreenshotsRubinotOtsKeywordPage, { generateMetadata } from './with-screenshots-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRubinotOtsKeywordPage />;
}
