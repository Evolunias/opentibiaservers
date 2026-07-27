import WithScreenshotsTibiantisServerKeywordPage, { generateMetadata } from './with-screenshots-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiantisServerKeywordPage />;
}
