import WithScreenshotsTibiantisClientKeywordPage, { generateMetadata } from './with-screenshots-tibiantis-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiantisClientKeywordPage />;
}
