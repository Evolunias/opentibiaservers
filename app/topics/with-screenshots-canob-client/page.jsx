import WithScreenshotsCanobClientKeywordPage, { generateMetadata } from './with-screenshots-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCanobClientKeywordPage />;
}
