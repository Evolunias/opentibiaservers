import WithScreenshotsRubinotTibiaKeywordPage, { generateMetadata } from './with-screenshots-rubinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRubinotTibiaKeywordPage />;
}
