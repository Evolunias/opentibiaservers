import WithScreenshotsSerenityOtsKeywordPage, { generateMetadata } from './with-screenshots-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityOtsKeywordPage />;
}
