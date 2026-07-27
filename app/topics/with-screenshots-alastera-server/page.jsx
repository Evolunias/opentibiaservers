import WithScreenshotsAlasteraServerKeywordPage, { generateMetadata } from './with-screenshots-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsAlasteraServerKeywordPage />;
}
