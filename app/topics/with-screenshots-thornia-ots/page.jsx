import WithScreenshotsThorniaOtsKeywordPage, { generateMetadata } from './with-screenshots-thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaOtsKeywordPage />;
}
