import WithScreenshotsYurotsServerKeywordPage, { generateMetadata } from './with-screenshots-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsYurotsServerKeywordPage />;
}
