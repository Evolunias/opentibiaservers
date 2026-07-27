import WithScreenshotsServerBrazilKeywordPage, { generateMetadata } from './with-screenshots-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerBrazilKeywordPage />;
}
