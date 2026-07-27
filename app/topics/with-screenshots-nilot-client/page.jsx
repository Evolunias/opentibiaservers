import WithScreenshotsNilotClientKeywordPage, { generateMetadata } from './with-screenshots-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNilotClientKeywordPage />;
}
