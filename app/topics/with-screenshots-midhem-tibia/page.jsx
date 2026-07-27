import WithScreenshotsMidhemTibiaKeywordPage, { generateMetadata } from './with-screenshots-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemTibiaKeywordPage />;
}
