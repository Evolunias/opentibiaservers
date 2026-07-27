import WithScreenshotsServerEuropeKeywordPage, { generateMetadata } from './with-screenshots-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerEuropeKeywordPage />;
}
