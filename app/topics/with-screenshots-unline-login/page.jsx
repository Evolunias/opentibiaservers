import WithScreenshotsUnlineLoginKeywordPage, { generateMetadata } from './with-screenshots-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsUnlineLoginKeywordPage />;
}
