import WithScreenshotsCanobLoginKeywordPage, { generateMetadata } from './with-screenshots-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCanobLoginKeywordPage />;
}
