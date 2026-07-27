import WithScreenshotsCoxaotKeywordPage, { generateMetadata } from './with-screenshots-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCoxaotKeywordPage />;
}
