import WithScreenshotsThorniaOtServerKeywordPage, { generateMetadata } from './with-screenshots-thornia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaOtServerKeywordPage />;
}
