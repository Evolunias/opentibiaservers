import WithScreenshotsClientUsaKeywordPage, { generateMetadata } from './with-screenshots-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsClientUsaKeywordPage />;
}
