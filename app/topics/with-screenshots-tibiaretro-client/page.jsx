import WithScreenshotsTibiaretroClientKeywordPage, { generateMetadata } from './with-screenshots-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaretroClientKeywordPage />;
}
