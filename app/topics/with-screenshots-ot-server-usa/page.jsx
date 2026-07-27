import WithScreenshotsOtServerUsaKeywordPage, { generateMetadata } from './with-screenshots-ot-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOtServerUsaKeywordPage />;
}
