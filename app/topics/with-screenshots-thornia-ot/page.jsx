import WithScreenshotsThorniaOtKeywordPage, { generateMetadata } from './with-screenshots-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaOtKeywordPage />;
}
