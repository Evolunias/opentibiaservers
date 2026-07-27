import WithScreenshotsAmeriaKeywordPage, { generateMetadata } from './with-screenshots-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsAmeriaKeywordPage />;
}
