import WithScreenshotsRubinotOtKeywordPage, { generateMetadata } from './with-screenshots-rubinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRubinotOtKeywordPage />;
}
