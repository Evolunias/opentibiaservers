import WithScreenshotsMidhemPrivateServerKeywordPage, { generateMetadata } from './with-screenshots-midhem-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemPrivateServerKeywordPage />;
}
