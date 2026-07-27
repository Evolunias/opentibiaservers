import WithScreenshotsAlasteraKeywordPage, { generateMetadata } from './with-screenshots-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsAlasteraKeywordPage />;
}
