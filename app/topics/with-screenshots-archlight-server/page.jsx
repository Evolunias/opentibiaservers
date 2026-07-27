import WithScreenshotsArchlightServerKeywordPage, { generateMetadata } from './with-screenshots-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsArchlightServerKeywordPage />;
}
