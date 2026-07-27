import WithScreenshotsServersUsaKeywordPage, { generateMetadata } from './with-screenshots-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServersUsaKeywordPage />;
}
