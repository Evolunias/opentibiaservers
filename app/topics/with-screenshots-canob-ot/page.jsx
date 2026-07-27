import WithScreenshotsCanobOtKeywordPage, { generateMetadata } from './with-screenshots-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCanobOtKeywordPage />;
}
