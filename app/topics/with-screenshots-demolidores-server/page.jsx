import WithScreenshotsDemolidoresServerKeywordPage, { generateMetadata } from './with-screenshots-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsDemolidoresServerKeywordPage />;
}
