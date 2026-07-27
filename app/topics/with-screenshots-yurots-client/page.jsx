import WithScreenshotsYurotsClientKeywordPage, { generateMetadata } from './with-screenshots-yurots-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsYurotsClientKeywordPage />;
}
