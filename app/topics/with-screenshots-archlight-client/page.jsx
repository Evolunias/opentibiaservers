import WithScreenshotsArchlightClientKeywordPage, { generateMetadata } from './with-screenshots-archlight-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsArchlightClientKeywordPage />;
}
