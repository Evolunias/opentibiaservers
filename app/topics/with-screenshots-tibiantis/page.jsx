import WithScreenshotsTibiantisKeywordPage, { generateMetadata } from './with-screenshots-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiantisKeywordPage />;
}
