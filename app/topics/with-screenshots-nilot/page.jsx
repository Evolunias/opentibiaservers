import WithScreenshotsNilotKeywordPage, { generateMetadata } from './with-screenshots-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNilotKeywordPage />;
}
