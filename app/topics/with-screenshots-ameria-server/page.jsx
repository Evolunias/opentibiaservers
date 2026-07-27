import WithScreenshotsAmeriaServerKeywordPage, { generateMetadata } from './with-screenshots-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsAmeriaServerKeywordPage />;
}
