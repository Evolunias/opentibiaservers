import WithScreenshotsServerUsaKeywordPage, { generateMetadata } from './with-screenshots-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerUsaKeywordPage />;
}
