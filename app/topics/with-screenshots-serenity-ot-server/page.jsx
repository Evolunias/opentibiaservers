import WithScreenshotsSerenityOtServerKeywordPage, { generateMetadata } from './with-screenshots-serenity-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityOtServerKeywordPage />;
}
