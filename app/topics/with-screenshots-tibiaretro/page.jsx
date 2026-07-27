import WithScreenshotsTibiaretroKeywordPage, { generateMetadata } from './with-screenshots-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaretroKeywordPage />;
}
