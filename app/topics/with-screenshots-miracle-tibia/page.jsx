import WithScreenshotsMiracleTibiaKeywordPage, { generateMetadata } from './with-screenshots-miracle-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMiracleTibiaKeywordPage />;
}
