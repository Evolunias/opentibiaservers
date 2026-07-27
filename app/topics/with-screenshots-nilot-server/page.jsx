import WithScreenshotsNilotServerKeywordPage, { generateMetadata } from './with-screenshots-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNilotServerKeywordPage />;
}
