import WithScreenshotsCoxaotServerKeywordPage, { generateMetadata } from './with-screenshots-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCoxaotServerKeywordPage />;
}
