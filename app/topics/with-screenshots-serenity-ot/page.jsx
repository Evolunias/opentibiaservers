import WithScreenshotsSerenityOtKeywordPage, { generateMetadata } from './with-screenshots-serenity-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityOtKeywordPage />;
}
